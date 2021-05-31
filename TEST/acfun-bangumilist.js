const baseParse = _ => {
  let d = []
  const category_html = getResCode()
  const categories = parseDomForArray(category_html, '.ac-menu&&.ac-menu-filter')
  let category_list = []

  const base_url = MY_URL.split('?')[0]

  const pageNum = getUrlParams(MY_URL, base_url, 'pageNum')

  const true_url = addUrlPara(getVar('tab-url') || MY_URL, 'pageNum', pageNum)

  const filters = getUrlParams(true_url, base_url, 'filters') || ''

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

  const list = parseDomForArray(fetch(true_url, {headers:{"User-Agent":PC_UA}}), '.ac-mod-ul&&.ac-mod-li')

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

const addUrlPara = (url, name, value) => {
  let currentUrl = url.split('#')[0];
  if (/\?/g.test(currentUrl)) {
    if (/name=[-\w]{4,25}/g.test(currentUrl)) {
      currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + "=" + value);
    } else {
      currentUrl += "&" + name + "=" + value;
    }
  } else {
    currentUrl += "?" + name + "=" + value;
  }
  return currentUrl
}