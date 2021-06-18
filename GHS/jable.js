const baseParse = _ => {
  let d = [];
  const list = parseDomForArray(getResCode(), '.site-content&&.video-img-box');
  for (let j in list) {
    d.push({
      title: parseDomForHtml(list[j], 'h6&&a&&Text'),
      desc: parseDomForHtml(list[j], '.label&&Text'),
      pic_url: parseDom(list[j], 'img&&data-src'),
      url: parseDom(list[j],'a&&href')
    })
  }

  setResult(d);
}

const secParse = _ => {
  let d = [];
  const html = getResCode()

  d.push({
    title: parseDomForHtml(html, '.header-left&&h4&&Text'),
    desc: parseDomForHtml(html, '.video-info&&.text-center&&.tags&&Text'),
    pic_url: parseDom(html, 'video&&poster'),
    url: html.match(/hlsUrl = '(.*?)'/)[1]
  })

  setResult(d);
}