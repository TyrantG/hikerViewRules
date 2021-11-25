const baseParse = _ => {
  let d = [];
  let true_url = getVar("tyrantgenesis.ednovas.url", MY_URL)
  const page = MY_URL.match(/page\/(.*?)\.html/)[1]
  true_url = true_url.replace('.html', '/page/'+page+'.html')
  const html = fetch(true_url)
  const empty = "hiker://empty"

  const categories = parseDomForArray(html, '.box&&.library-box');

  let init_cate = []

  for (let i = 0; i < 10; i ++) {
    init_cate.push("0")
  }

  // 取缓存
  const fold = getVar("tyrantgenesis.ednovas.fold", "0")
  const cate_temp_json = getVar("tyrantgenesis.ednovas.category", JSON.stringify(init_cate))
  const cate_temp = JSON.parse(cate_temp_json)


  if (parseInt(page) === 1) {
    d.push({
      title: fold === '1' ?  '““””<b><span style="color: #FF0000">∨</span></b>': '““””<b><span style="color: #1aad19">∧</span></b>',
      url: $(empty).lazyRule((fold) => {
        putVar("tyrantgenesis.ednovas.fold", fold === '1' ? '0' : '1');
        refreshPage(false);
        return "hiker://empty"
      }, fold),
      col_type: 'scroll_button',
    })


    categories.forEach((category, index) => {
      let sub_categories = parseDomForArray(category, '.library-box&&a');
      if (index === 0) {
        sub_categories.forEach((item, key) => {
          let title = parseDomForHtml(item, 'a&&Text')
          if (title !== 'GHS' || GHS === 1) {
            d.push({
              title: key.toString()===cate_temp[index]? "““"+title+"””":title,
              url: $(parseDom(item, 'a&&href')).lazyRule((params) => {
                let new_cate = []
                params.cate_temp.forEach((cate, index) => {
                  new_cate.push(index === 0 ? params.key.toString() : "0")
                })
                putVar("tyrantgenesis.ednovas.category", JSON.stringify(new_cate))
                putVar("tyrantgenesis.ednovas.url", input)
                refreshPage(true)
                return "hiker://empty"
              }, {
                cate_temp: cate_temp,
                key: key,
                page: page,
              }),
              col_type: 'scroll_button',
            })
          }
        })
        d.push({
          col_type:"blank_block"
        });
      } else if (fold === '1') {
        sub_categories.forEach((item, key) => {
          let title = parseDomForHtml(item, 'a&&Text')
          d.push({
            title: key.toString()===cate_temp[index]? "““"+title+"””":title,
            url: $(parseDom(item, 'a&&href')).lazyRule((params) => {
              params.cate_temp[params.index] = params.key.toString()

              putVar("tyrantgenesis.ednovas.category", JSON.stringify(params.cate_temp))
              putVar("tyrantgenesis.ednovas.url", input)
              refreshPage(true)
              return "hiker://empty"
            }, {
              cate_temp: cate_temp,
              index: index,
              key: key,
              page: page,
            }),
            col_type: 'scroll_button',
          })
        })
        d.push({
          col_type:"blank_block"
        });
      }
    })
  }

  const video_list = parseDomForArray(html, '.module-items&&.module-item')
  video_list.forEach(video => {
    d.push({
      title: parseDomForHtml(video, '.module-item-title&&Text'),
      desc: parseDomForHtml(video, '.module-item-caption&&Text'),
      pic_url: parseDomForHtml(video, 'img&&data-src')+"@Referer=https://ednovas.video/",
      url: parseDom(video, 'a&&href')+'#immersiveTheme#',
      col_type: 'movie_3_marquee',
    })
  })

  setResult(d);
}

const secParse = _ => {
  let d = [];
  const html = getResCode()

  const video_info = parseDomForHtml(html, '#main&&.view-heading')
  log(parseDomForHtml(video_info, '.video-cover'))
  d.push({
    title: parseDomForHtml(video_info, '.page-title&&Text'),
    desc: parseDomForHtml(video_info, '.sqjj_a&&Text'),
    // pic_url: parseDomForHtml(video_info, '.module-item-pic&&img&&data-src')+"@Referer=https://ednovas.video/",
    url: MY_URL,
    col_type: 'movie_1_vertical_pic_blur'
  })

  setResult(d);
}

const searchParse = _ => {
  let d = [];
  const html = getResCode()

  const list = parseDomForArray(html, '.module-items&&.module-item')
  list.forEach(item => {
    d.push({
      title: parseDomForHtml(item, 'a&&Text'),
      desc: parseDomForHtml(item, '.video-info-aux&&Text'),
      pic_url: parseDomForHtml(item, 'img&&data-src')+"@Referer=https://ednovas.video/",
      url: parseDom(item, 'a&&href')+'#immersiveTheme#',
    })
  })

  setResult(d);
}