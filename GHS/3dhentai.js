const ht = {
  empty: 'hiker://empty',
  url: 'https://3dhentai.co',
  d: [],
  lazyRule: true,
  taskList: [],
  data: {
    category: getMyVar('3dhentai.category', '0'),
  },
  baseParse: () => {
    const page = parseInt(MY_URL.split('##')[1])

    let categoryList = [{type: 'Home', path: ''}, {type: 'Tags', path: '/tag'}, {type: 'Artists', path: '/artist'}, {type: 'Characters', path: '/characters'}]
    const currentCate = categoryList[ht.data.category]

    const type = currentCate.type
    const path = currentCate.path
    let url = ht.url + path

    if (type !== 'Artists') {
      url += '/page/'+page
    }

    if (page === 1) {
      categoryList.forEach((cate, index) => {
        ht.d.push({
          title: parseInt(ht.data.category) === index ? '‘‘’’<strong><font color="#ff1493">'+cate.type+'</font></strong>' : cate.type,
          url: $(ht.empty).lazyRule((index) => {
            putMyVar("3dhentai.category", index.toString())
            refreshPage(true)
            return "hiker://empty"
          }, index),
          col_type: 'scroll_button',
        })
      })
    }

    const html = fetch(url)

    ht.videoType(html, type)

    setResult(ht.d)
  },
  searchParse: () => {
    ht.videoType(getResCode(), 'Home')
    setResult(ht.d)
  },
  videoParse: (url) => {
    const html = fetch(url)
    const title = pdfh(html, 'h1&&Text')
    setPageTitle(title)

    const videoFrameUrl = pdfh(html, 'iframe&&src');
    const videoName = videoFrameUrl.split('&video=')[1]

    ht.d.push({
      title: title,
      desc: pdfh(html, '.video-views&&Text'),
      pic_url: pdfh(html, 'meta[property=og:image]&&content')+'@Referer='+ht.url,
      url: 'https://3dhq1.org/video/3d/' + videoName,
      col_type: 'pic_1',
    })

    const tagsDom1 = pdfa(html, '#video-about&&#video-actors')
    const tagsDom2 = pdfa(html, '#video-about&&#video-cats')
    const tagsDom3 = pdfa(html, '#video-about&&#video-tags')

    tagsDom1.concat(tagsDom2).concat(tagsDom3).forEach((item, index) => {
      const tags = pdfa(item, '.video-content-row&&a')

      ht.d.push({
        title: pdfh(item, '.video-content-row&&Text').split(':')[0],
        url: ht.empty,
        col_type: 'text_center_1',
        extra: {lineVisible: false},
      })

      tags.forEach(tag => {
        const title = pdfh(tag, 'a&&title')
        ht.d.push({
          title: title,
          url: $(pdfh(item, 'a&&href')+(index === 1 ? ('#noHistory#'+'#fypage') : '#noHistory#')).rule((tag, index) => {
            setPageTitle(tag)
            const ht = $.require('hiker://page/ht')
            const page = MY_PAGE
            if (index === 0) {
              ht.videoType(fetch(ht.url + '/actor/' + tag + '/page/' + page), 'Home')
              setResult(ht.d)
            } else if (index === 1) {
              ht.videoType(fetch(ht.url + '/artist/' + tag + '/page/' + page), 'Home')
              setResult(ht.d)
            } else {
              ht.videoType(fetch(ht.url + '/tag/' + tag + '/page/' + page), 'Home')
              setResult(ht.d)
            }
          }, title, index),
          col_type: 'flex_button',
        })
      })

      ht.d.push({
        col_type: 'line_blank'
      })
    })

    ht.d.push({
      title: 'Related Videos',
      url: ht.empty,
      col_type: 'text_center_1',
    })

    ht.videoType(html, 'Related')
  },
  videoType: (html, type) => {
    const list = type === 'Related' ? pdfa(html, '.related-videos&&.video-block') : pdfa(html, '.video-loop&&.video-block')

    const makeUrl = (item) => type === 'Home' && ht.lazyRule ? $(pdfh(item, 'a&&href')).lazyRule((url) => {
      log(url)
      const html = fetch(url)
      const videoFrameUrl = pdfh(html, 'iframe&&src');
      const videoName = videoFrameUrl.split('&video=')[1]
      log(videoName)

      return 'https://3dhq1.org/video/3d/' + videoName
    }, pdfh(item, 'a&&href')) : $(pdfh(item, 'a&&href')+'#noHistory#').rule((type) => {
      const ht = $.require('hiker://page/ht')
      if (type === 'Home' || type === 'Related') {
        ht.videoParse(MY_URL)
        setResult(ht.d)
      } else {
        const html = fetch(MY_URL)
        ht.videoType(html, 'Home')
        setResult(ht.d)
      }
    }, type)

    list.forEach(item => {
      ht.d.push({
        title: pdfh(item, '.title&&Text'),
        url: makeUrl(item),
        pic_url: pdfh(item, '.video-img&&data-src')+'@Referer='+ht.url,
        desc: pdfh(item, '.duration&&Text'),
        col_type: 'movie_2'
      })
    })
  },
}

$.exports = ht
