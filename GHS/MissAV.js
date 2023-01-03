const miss = {
  empty: 'hiker://empty',
  url: 'https://missav888.com/cn/',
  d: [],
  taskList: [],
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
        title: '中文字幕',
        path: 'chinese-subtitle',
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
  searchParse: () => {
    miss.videoType(getResCode())
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

    const text_secondary_list = pdfa(html, 'body&&.text-secondary')
    let num, actressesList, tagsList, series, makers, directors, labelsList

    text_secondary_list.forEach(item => {
      let current_title = pdfh(item, 'span&&Text')

      if (current_title === '番号:') {
        num = pdfh(item, '.font-medium&&Text')
      } else if (current_title === '女优:') {
        actressesList = pdfa(item, '.text-secondary&&a')
      } else if (current_title === '类型:') {
        tagsList = pdfa(item, '.text-secondary&&a')
      } else if (current_title === '系列:') {
        series = pdfa(item, '.text-secondary&&a')[0]
      } else if (current_title === '发行商:') {
        makers = pdfa(item, '.text-secondary&&a')[0]
      } else if (current_title === '导演:') {
        directors = pdfa(item, '.text-secondary&&a')[0]
      } else if (current_title === '标籤:') {
        labelsList = pdfa(item, '.text-secondary&&a')
      }
    })

    if (num) {
      miss.d.push({
        title: '番号',
        url: miss.empty,
        col_type: 'text_center_1',
        extra: {lineVisible: false},
      })
      miss.d.push({
        title: num,
        url: 'copy://'+num,
        col_type: 'text_1',
        extra: {lineVisible: false},
      })
      miss.d.push({
        col_type: 'line_blank'
      })
    }

    if (actressesList) {
      let avatarTaskList = []
      miss.d.push({
        title: '演员',
        url: miss.empty,
        col_type: 'text_center_1',
        extra: {lineVisible: false},
      })
      actressesList.forEach((actresses, index) => {
        let title = pdfh(actresses, 'a&&Text')
        let url = pdfh(actresses, 'a&&href')
        miss.taskList.push({
          func: miss.updateAvatar,
          param: {
            url: url,
            index: 'avatar_'+index
          },
          id: 'avatar_'+index,
        })

        miss.d.push({
          title: title,
          pic_url: miss.empty,
          url: $(url+'?page=fypage#noHistory#').rule((title) => {
            const miss = $.require('hiker://page/miss')
            setPageTitle(title)
            miss.avatarParse(MY_URL)
            setResult(miss.d)
          }, title),
          col_type: 'avatar',
          extra: {
            id: 'avatar_'+index,
          }
        })
      })
      miss.d.push({
        col_type: 'line_blank'
      })
    }

    if (tagsList) {
      miss.d.push({
        title: '类型',
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
    }

    if (series) {
      miss.d.push({
        title: '系列',
        url: miss.empty,
        col_type: 'text_center_1',
        extra: {lineVisible: false},
      })
      let series_title = pdfh(series, 'a&&Text')
      miss.d.push({
        title: series_title,
        url: $(pdfh(series, 'a&&href')+'?page=fypage#noHistory#').rule((series_title) => {
          const miss = $.require('hiker://page/miss')
          setPageTitle(series_title)
          miss.tagsParse(MY_URL)
          setResult(miss.d)
        }, series_title),
        col_type: 'flex_button'
      })
      miss.d.push({
        col_type: 'line_blank'
      })
    }

    if (makers) {
      miss.d.push({
        title: '发行商',
        url: miss.empty,
        col_type: 'text_center_1',
        extra: {lineVisible: false},
      })
      let makers_title = pdfh(makers, 'a&&Text')
      miss.d.push({
        title: makers_title,
        url: $(pdfh(makers, 'a&&href')+'?page=fypage#noHistory#').rule((makers_title) => {
          const miss = $.require('hiker://page/miss')
          setPageTitle(makers_title)
          miss.tagsParse(MY_URL)
          setResult(miss.d)
        }, makers_title),
        col_type: 'flex_button'
      })
      miss.d.push({
        col_type: 'line_blank'
      })
    }

    if (directors) {
      miss.d.push({
        title: '导演',
        url: miss.empty,
        col_type: 'text_center_1',
        extra: {lineVisible: false},
      })
      let directors_title = pdfh(directors, 'a&&Text')
      miss.d.push({
        title: directors_title,
        url: $(pdfh(directors, 'a&&href')+'?page=fypage#noHistory#').rule((directors_title) => {
          const miss = $.require('hiker://page/miss')
          setPageTitle(directors_title)
          miss.tagsParse(MY_URL)
          setResult(miss.d)
        }, directors_title),
        col_type: 'flex_button'
      })
      miss.d.push({
        col_type: 'line_blank'
      })
    }

    if (labelsList) {
      miss.d.push({
        title: '类型',
        url: miss.empty,
        col_type: 'text_center_1',
        extra: {lineVisible: false},
      })
      labelsList.forEach(label => {
        let label_title = pdfh(label, 'a&&Text')
        miss.d.push({
          title: label_title,
          url: $(pdfh(label, 'a&&href')+'?page=fypage#noHistory#').rule((label_title) => {
            const miss = $.require('hiker://page/miss')
            setPageTitle(label_title)
            miss.tagsParse(MY_URL)
            setResult(miss.d)
          }, label_title),
          col_type: 'flex_button'
        })
      })

      miss.d.push({
        col_type: 'line_blank'
      })
    }

    const videoList = pdfa(html, '.grid.grid-cols-2.gap-5,0&&.thumbnail').concat(pdfa(html, '.grid.grid-cols-2.gap-5,1&&.thumbnail'))

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
          if (miss.taskList.length > 0) {
            be(miss.taskList)
          }
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
          if (miss.taskList.length > 0) {
            be(miss.taskList)
          }
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
  updateAvatar: (param) => {
    const actressesHtml = fetch(param.url, {headers:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0)'}})
    log(pdfh(actressesHtml, '.object-cover.object-top.w-full.h-full&&src'))
    log(param)
    updateItem({
      pic_url: pdfh(actressesHtml, '.object-cover.object-top.w-full.h-full&&src'),
      col_type: 'avatar',
      extra: {
        id: param.index
      }
    })
  },
}

$.exports = miss
