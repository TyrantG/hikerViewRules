const baseParse = _ => {
  let d = [];
  try{
    const list = parseDomForArray(getResCode(), 'body&&.mb');
    for (let j in list) {
      d.push({
        title: parseDomForHtml(list[j], '.mbtit&&Text'),
        desc: parseDomForHtml(list[j], '.mvhdico&&Text'),
        pic_url: parseDom(list[j], 'img&&src'),
        url: $(parseDom(list[j],'a&&href')).lazyRule(_ => {
          const hash_func = function (a) {
            return parseInt(a.substring(0, 8), 16).toString(36) + parseInt(a.substring(8, 16), 16).toString(36) + parseInt(a.substring(16, 24), 16).toString(36) + parseInt(a.substring(24, 32), 16).toString(36)
          }
          const html = fetch(input)
          const id = input.match(/\/video-.*\//)[0].replace(/\/video-/, '').replace(/\/.*/, '')

          const hash = html.match(/EP\.video\.player\.hash = \'.*\';/)[0].replace(/EP\.video\.player\.hash = \'/, '').replace(/\';/, '')

          const url = "https://www.eporner.com/xhr/video/"+id+"?hash="+hash_func(hash)+"&domain=www.eporner.com&fallback=false&embed=false&supportedFormats=dash,mp4&_="+(new Date()).getTime()

          const sources = JSON.parse(fetch(url)).sources.mp4

          let video_list = []

          for (let p in sources) {
            video_list.push(sources[p].src)
          }

          return video_list.shift()
          //return parseDomForHtml(list[list.length-1], 'a&&href');
        })
      });
    }}catch(e){}

  setResult(d);
}