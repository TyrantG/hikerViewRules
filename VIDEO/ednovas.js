const baseParse = _ => {
  let d = [];
  let true_url = getVar("tyrantgenesis.ednovas.url", MY_URL)
  const page = MY_URL.match(/page\/(.*?)\.html/)[1]
  true_url = true_url.replace('.html', '/page/'+page+'.html')
  const html = fetch(true_url)
  const empty = "hiker://empty"

  const categories = parseDomForArray(html, '.mo-java-waps&&.mo-cols-rows&&dl');

  let init_cate = []

  for (let i = 0; i < 20; i ++) {
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
      let sub_categories = parseDomForArray(category, 'dl&&dd');
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

    /*const by_cate = parseDomForArray(parseDomForArray(html, '.mo-java-waps&&.mo-cols-lays')[1], 'h2&&a')
    by_cate.forEach((item, index) => {
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
    });*/
  }

  const video_list = parseDomForArray(parseDomForArray(parseDomForArray(html, '.mo-java-waps&&.mo-cols-lays')[1], '.mo-cols-lays&&.mo-cols-rows')[1], 'ul&&li')
  video_list.forEach(video => {
    d.push({
      title: parseDomForHtml(video, '.mo-situ-name&&Text'),
      desc: parseDomForHtml(video, 'span&&Text'),
      pic_url: parseDom(video, 'a&&data-original')+"@Referer=",
      url: parseDom(video, '.mo-situ-name&&href'),
      col_type: 'movie_3_marquee',
    })
  })

  setResult(d);
}

const secParse = _ => {
  let d = [];
  const html = getResCode()

  const video_info = parseDomForArray(html, '.mo-cols-lays')[0]

  d.push({
    title: parseDomForHtml(video_info, 'h1&&a&&Text'),
    desc: parseDomForHtml(html, '.mo-word-info&&Text'),
    pic_url: parseDomForHtml(video_info, 'img&&src'),
    url: parseDom(video_info, 'a&&href'),
    col_type: 'pic_1'
  })

  const select_title = parseDomForArray(html, '.mo-sort-head')[0]
  const select_item = parseDomForArray(html, '.mo-movs-item')

  parseDomForArray(select_title, 'h2&&a').forEach((title, index) => {
    let video_num = parseDomForArray(select_item[index], 'ul&&li')
    if (video_num.length > 0) {
      d.push({
        title: parseDomForHtml(title, 'a&&Text'),
        col_type: 'text_1'
      })
      video_num.forEach(item => {
        d.push({
          title: parseDomForHtml(item, 'a&&Text'),
          url: $(parseDom(item, 'a&&href')).lazyRule(_ => {
            eval(getCryptoJS())
            const html = fetch(input)
            const player = parseDomForArray(html, '[data-play]')[0]
            const base64 = parseDomForHtml(player, "div&&data-play")
            return base64Decode(base64.substring(3))
          }),
          col_type: 'text_4'
        })
      })
    }

  })


  setResult(d);
}

const searchParse = _ => {
  let d = [];
  const html = getResCode()

  const list = parseDomForArray(html, '.mo-cols-lays&&dl')
  list.forEach(item => {
    d.push({
      title: parseDomForHtml(item, '.mo-wrap-arow&&Text'),
      pic_url: parseDom(item, 'a&&data-original')+"@Referer=",
      url: parseDom(item, 'a&&href'),
    })
  })

  setResult(d);
}