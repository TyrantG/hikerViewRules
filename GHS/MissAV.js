const miss = {
  empty: 'hiker://empty',
  url: 'https://missav888.com/cn/',
  cdn: 'https://cdn.missav888.com/',
  d: [],
  data: {
    category: getMyVar('MissAV.category', '0'),
    subCate: getMyVar('MissAV.subCate', '0'),
  },
  baseParse: () => {
    const page = parseInt(MY_URL.split('##')[1])
    const categoryList = [
      {
        title: '今日热门',
        path: 'today-hot',
        type: 'video',
        sub: []
      },
      {
        title: '本週热门',
        path: 'weekly-hot',
        type: 'video',
        sub: []
      },
      {
        title: '本月热门',
        path: 'monthly-hot',
        type: 'video',
        sub: []
      },
      {
        title: '最近更新',
        path: 'new',
        type: 'video',
        sub: []
      },
      {
        title: '新作上市',
        path: 'release',
        type: 'video',
        sub: []
      },
      {
        title: '中文字幕',
        path: 'chinese-subtitle',
        type: 'video',
        sub: []
      },
      {
        title: '素人',
        path: '',
        type: 'video',
        sub: [
          {title: '素人SIRO', path: 'siro'},
          {title: '素人LUXU', path: 'luxu'},
          {title: '素人GANA', path: 'gana'},
          {title: '素人PRESTIGE PREMIUM', path: 'maan'},
          {title: '素人S-CUTE', path: 'scute'},
          {title: '素人ARA', path: 'ara'},
        ]
      },
      {
        title: '无码',
        path: '',
        type: 'video',
        sub: [
          {title: '无码流出', path: 'uncensored-leak'},
          {title: '无码FC2', path: 'fc2'},
          {title: '无码HEYZO ', path: 'heyzo'},
          {title: '无码东京热', path: 'tokyohot'},
          {title: '无码Caribbeancom', path: 'caribbeancom'},
          {title: '无码Caribbeancompr', path: 'caribbeancompr'},
          {title: '无码10musume', path: '10musume'},
          {title: '无码pacopacomama', path: 'pacopacomama'},
          {title: '无码Gachinco', path: 'gachinco'},
          {title: '无码XXX-AV', path: 'xxxav'},
          {title: '无码人妻斩', path: 'marriedslash'},
          {title: '无码顽皮 4610', path: 'naughty4610'},
          {title: '无码顽皮 0930', path: 'naughty0930'},
        ]
      },
      {
        title: '国产 AV',
        path: '',
        type: 'video',
        sub: [
          {title: '麻豆传媒', path: 'madou'},
          {title: 'TWAV', path: 'twav'},
        ]
      },
      {
        title: 'VR',
        path: 'VR',
        type: 'video',
        sub: []
      },
      {
        title: 'AV 影评',
        path: 'articles',
        type: 'articles',
        sub: []
      },
      {
        title: '女优一览',
        path: 'actresses',
        type: 'avatar',
        sub: []
      },
      {
        title: '女优排行',
        path: 'actresses/ranking',
        type: 'avatar',
        sub: []
      },
      {
        title: '类型',
        path: 'genres',
        type: 'tags',
        sub: []
      },
      {
        title: '发行商',
        path: 'makers',
        type: 'tags',
        sub: []
      },
    ]
    const currentCate = categoryList[miss.data.category]
    let url

    const type = currentCate.type
    const path = currentCate.path

    if (currentCate.sub.length > 0) {
      url = miss.url + currentCate.sub[miss.data.subCate].path
    } else {
      url = miss.url + currentCate.path
    }
    url += '?page='+page

    if (page === 1) {
      categoryList.forEach((cate, index) => {
        miss.d.push({
          title: parseInt(miss.data.category) === index ? '‘‘’’<strong><font color="#ff1493">'+cate.title+'</font></strong>' : cate.title,
          url: $(miss.empty).lazyRule((index) => {
            putMyVar("MissAV.category", index.toString())
            putMyVar("MissAV.subCate", '0')
            refreshPage(true)
            return "hiker://empty"
          }, index),
          col_type: 'scroll_button',
        })
      })

      if (currentCate.sub.length > 0) {
        miss.d.push({
          col_type: 'blank_block',
        })
        currentCate.sub.forEach((cate, index) => {
          miss.d.push({
            title: parseInt(miss.data.subCate) === index ? '‘‘’’<strong><font color="#ff1493">'+cate.title+'</font></strong>' : cate.title,
            url: $(miss.empty).lazyRule((index) => {
              putMyVar("MissAV.subCate", index.toString())
              refreshPage(true)
              return "hiker://empty"
            }, index),
            col_type: 'scroll_button',
          })
        })
      }
    }

    const html = fetch(url, {headers:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0)'}})

    switch (type) {
      case 'video':
        miss.videoType(html)
        break
      case 'articles':
        miss.articlesType(html)
        break
      case 'avatar':
        if ((path === 'actresses/ranking' && page === 1) || path !== 'actresses/ranking') {
          miss.avatarType(html)
        }
        break
      case 'tags':
        miss.tagsType(html)
        break
      default: miss.videoType(html)
    }

    setResult(miss.d)
  },
  videoParse: (url) => {
    const html = fetch(url, {headers:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0)'}})
    const title = pdfh(html, 'h1&&Text')
    setPageTitle(title)

    miss.d.push({
      title: title,
      desc: pdfh(html, '.text-secondary.break-all.line-clamp-2&&Text'),
      pic_url: pdfh(html, 'meta[property=og:image]&&content')+'@Referer='+miss.url,
      url: $(miss.empty+'#noHistory#').lazyRule((html, url) => {
        eval(html.match(/eval.*?\n/)[0])
        return source + ';{Referer@' + url + '}'
      }, html, miss.url),
      col_type: 'pic_1',
    })

    miss.d.push({
      title: '演员',
      url: miss.empty,
      col_type: 'text_center_1',
      extra: {lineVisible: false},
    })

    const text_secondary_list = pdfa(html, 'body&&.text-secondary')
    const actresses = pdfh(text_secondary_list[4], 'a&&Text')

    miss.d.push({
      title: actresses,
      // pic_url: miss.cdn+'actress/'+html.match(/actresses\/(\d*?)\/tweets/)[0]+'.jpg?class=actress'+'@Referer='+miss.url,
      url: $(pdfh(text_secondary_list[4], 'a&&href')+'?page=fypage#noHistory#').rule((actresses) => {
        const miss = $.require('hiker://page/miss')
        setPageTitle(actresses)
        miss.avatarParse(MY_URL)
        setResult(miss.d)
      }, actresses),
      col_type: 'avatar',
    })
    miss.d.push({
      col_type: 'line_blank'
    })

    const tagsList = pdfa(text_secondary_list[5], 'div&&a')

    miss.d.push({
      title: '标签',
      url: miss.empty,
      col_type: 'text_center_1',
      extra: {lineVisible: false},
    })
    tagsList.forEach(tag => {
      let tag_title = pdfh(tag, 'a&&Text')
      miss.d.push({
        title: tag_title,
        url: $(pdfh(tag, 'a&&href')+'?page=fypage#noHistory#').rule((tag_title) => {
          const miss = $.require('hiker://page/miss')
          setPageTitle(tag_title)
          miss.tagsParse(MY_URL)
          setResult(miss.d)
        }, tag_title),
        col_type: 'flex_button'
      })
    })

    miss.d.push({
      col_type: 'line_blank'
    })

    const videoList = pdfa(html, '.grid&&.relative')

    miss.d.push({
      title: '推荐视频',
      url: miss.empty,
      col_type: 'text_center_1',
      extra: {lineVisible: false},
    })
    videoList.forEach(item => {
      miss.d.push({
        title: pdfh(item, '.lozad&&alt'),
        url: $(pdfh(item, 'a&&href')+'#noHistory#').rule(() => {
          const miss = $.require('hiker://page/miss')
          miss.videoParse(MY_URL)
          setResult(miss.d)
        }),
        pic_url: pdfh(item, '.lozad&&data-src')+'@Referer='+miss.url,
        desc: pdfh(item, '.absolute&&Text'),
        col_type: 'movie_2'
      })
    })
  },
  avatarParse: (url) => {
    const html = fetch(url, {headers:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0)'}})
    miss.videoType(html)
  },
  tagsParse: (url) => {
    const html = fetch(url, {headers:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0)'}})
    miss.videoType(html)
  },
  videoType: (html) => {
    const list = pdfa(html, '.grid&&.relative')
    list.forEach(item => {
      miss.d.push({
        title: pdfh(item, '.lozad&&alt'),
        url: $(pdfh(item, 'a&&href')+'#noHistory#').rule(() => {
          const miss = $.require('hiker://page/miss')
          miss.videoParse(MY_URL)
          setResult(miss.d)
        }),
        pic_url: pdfh(item, '.lozad&&data-src')+'@Referer='+miss.url,
        desc: pdfh(item, '.absolute&&Text'),
        col_type: 'movie_2'
      })
    })
  },
  articlesType: (html) => {
    const list = pdfa(html, '.grid&&.rounded-lg')
    list.forEach(item => {
      miss.d.push({
        title: pdfh(item, 'img&&alt'),
        url: $(pdfh(item, 'a&&href')+'#noHistory#').rule(() => {
          const miss = $.require('hiker://page/miss')
          const html = fetch(MY_URL, {headers:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0)'}})

          miss.d.push({
            title: pdfh(html, 'article&&Html'),
            col_type: 'rich_text'
          })

          setResult(miss.d)
        }),
        pic_url: pdfh(item, 'img&&data-src')+'@Referer='+miss.url,
        col_type: 'movie_2'
      })
    })
  },
  avatarType: (html) => {
    log(html)
    const list = pdfa(html, 'ul&&li')
    list.forEach(item => {
      miss.d.push({
        title: pdfh(item, 'h4&&Text'),
        url: $(pdfh(item, 'a&&href')+'?page=fypage#noHistory#').rule(() => {
          const miss = $.require('hiker://page/miss')
          miss.avatarParse(MY_URL)
          setResult(miss.d)
        }),
        pic_url: pdfh(item, 'img&&src')+'@Referer='+miss.url,
        col_type: 'icon_round_4'
      })
    })
  },
  tagsType: (html) => {
    const list = pdfa(html, '.gap-4&&div')
    list.forEach(item => {
      miss.d.push({
        title: pdfh(item, 'a&&Text'),
        url: $(pdfh(item, 'a&&href')+'?page=fypage#noHistory#').rule(() => {
          const miss = $.require('hiker://page/miss')
          miss.tagsParse(MY_URL)
          setResult(miss.d)
        }),
        col_type: 'text_4'
      })
    })
  },
}

$.exports = miss
