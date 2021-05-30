const baseParse = _ => {
  let d = []
  const category_html = getResCode()
  const categories = parseDomForArray(category_html, '.ac-menu&&.ac-menu-filter')
  let category_list = []

  const true_url = getVar('tab-url') || MY_URL

  setError(true_url)

  const params = parseQuery(true_url)
  const filters = params.filters || ''
  categories.forEach(category => {
    let sub_list = []
    let category_sub = parseDomForArray(category, '.ac-menu-filter-content&&.ac-menu-filter-item')
    category_sub.forEach(sub => {
      sub_list.push({
        id: parseDomForHtml(sub, '.ac-menu-filter-item&&data-id'),
        name: parseDomForHtml(sub, '.ac-menu-filter-item&&Text'),
      })
    })
    category_list.push({
      name: parseDomForHtml(category, '.ac-menu-filter-title&&Text').slice(0,-1),
      list: sub_list
    })
  })

  putVar('tab-panel', JSON.stringify(category_list))
  putVar('tab-filters', filters)
  putVar('tab-base_url', MY_URL)

  d.push({
    desc: '132 && float',
    url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/TyrantG/public/category.html',
    col_type:"x5_webview_single"
  })

  const list = parseDomForArray(category_html, '.ac-mod-ul&&.ac-mod-li')

  list.forEach(item => {
    d.push({
      title: parseDomForHtml(item, '.ac-mod-title&&title'),
      pic_url: parseDomForHtml(item, 'img&&src'),
      url: parseDomForHtml(item, '.ac-mod-link&&href'),
    })
  })

  setResult(d);
}

const parseQuery = url => {
  let queryObj = {};
  let reg = /[?&]([^=&#]+)=([^&#]*)/g;
  let querys = url.match(reg);
  if (querys) {
    for(let i in querys){
      let query=querys[i].split('=');
      let key=query[0].substr(1),
          value=query[1];
      queryObj[key] ? queryObj[key] = [].concat(queryObj[key], value) : queryObj[key] = value;
    }
  }
  return queryObj;
}