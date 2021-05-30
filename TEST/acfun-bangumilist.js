const baseParse = _ => {
  let d = []
  const category_html = getResCode()
  const categories = parseDomForArray(category_html, '.ac-menu&&.ac-menu-filter')
  let category_list = []

  putVar('tab-url', '')
  const true_url = getVar('tab-url') || MY_URL

  const filters = getUrlParams(true_url, MY_URL, 'filters') || ''

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

  d.push({
    desc: '132 && float',
    url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/TyrantG/public/category.html?filters='+filters,
    col_type:"x5_webview_single"
  })

  const list = parseDomForArray(fetch(true_url), '.ac-mod-ul&&.ac-mod-li')

  list.forEach(item => {
    d.push({
      title: parseDomForHtml(item, '.ac-mod-title&&title'),
      pic_url: parseDomForHtml(item, 'img&&src'),
      url: parseDomForHtml(item, '.ac-mod-link&&href'),
    })
  })

  setResult(d);
}

const getUrlParams = (url, baseUrl, name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式
  let r = url.replace(baseUrl, '').substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}