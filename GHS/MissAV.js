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

    // 不能分享，加密处理
    /*let categoryList = [
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
    ]*/
    evalPrivateJS('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')
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

      // 不能分享，加密处理
      let actressName = '女优'
      evalPrivateJS('Y4FQHeH7R/bBJkyYPhawFEQS4LgKSes2yWCehUiVbT4=')

      if (current_title === '番号:') {
        num = pdfh(item, '.font-medium&&Text')
      } else if (current_title === actressName+':') {
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

    /*const videoList = pdfa(html, '.grid.grid-cols-2.gap-5&&.relative')

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
    })*/
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
