const baseParse = _ => {
  let d = [];
  try{
    const list = parseDomForArray(getResCode(), 'body&&.mb');
    for (let j in list) {
      d.push({
        title: parseDomForHtml(list[j], '.mbtit&&Text'),
        desc: parseDomForHtml(list[j], '.mvhdico&&Text'),
        pic_url: parseDom(list[j], 'img&&src'),
        url: parseDom(list[j],'a&&href'),
      });
    }}catch(e){}

  setResult(d);
}

const secParse = _ => {
  let d = [];
  const html = fetch(MY_URL)
  const id = MY_URL.match(/\/video-.*\//)[0].replace(/\/video-/, '').replace(/\/.*/, '')

  const hash = html.match(/EP\.video\.player\.hash = \'(.*?)\';/)[1]

  const url = "https://www.eporner.com/xhr/video/"+id+"?hash="+hash_func(hash)+"&domain=www.eporner.com&fallback=false&embed=false&supportedFormats=dash,mp4&_="+(new Date()).getTime()

  const json = JSON.parse(fetch(url))
  const sources = json.sources.mp4

  for (let p in sources) {
    d.push({
      title: sources[p].labelShort,
      url: sources[p].src,
      col_type: 'text_2',
    })
  }

  setResult(d);
}

const hash_func = a => {
  return parseInt(a.substring(0, 8), 16).toString(36) + parseInt(a.substring(8, 16), 16).toString(36) + parseInt(a.substring(16, 24), 16).toString(36) + parseInt(a.substring(24, 32), 16).toString(36)
}