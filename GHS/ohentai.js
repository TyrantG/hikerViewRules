const baseParse = _ => {
  let d = [];
  try{
    const list = parseDomForArray(getResCode(), '.serywrapper&&.tagtext');
    for (let j in list) {
      d.push({
        title: parseDomForHtml(list[j], '.tagtext&&Text'),
        url: "https://ohentai.org/"+parseDomForHtml(list[j],'a&&href').replace(/\s/g, '%20')+"&p=fypage"
      });
    }}catch(e){}

  setResult(d);
}

const secParse = _ => {
  let d = [];
  const list = parseDomForArray(getResCode(), '.videobrickwrap&&.videobrick||.videobrick&&.interlink');

  for (let j in list) {
    let a
    try {
      a = "https://ohentai.org/"+parseDomForHtml(list[0], 'img&&data-cfsrc').replace(/\s/g, '%20')
    }catch(e) {
      a = "https://ohentai.org/img/video_placeholder.png"
    }
    d.push({
      title: parseDomForHtml(list[j], '.videotitle&&Text'),
      pic_url: a,
      url: $("https://ohentai.org/"+parseDomForHtml(list[j],'a&&href').replace(/\s/g, '%20')).lazyRule(_ => {
        const data = fetch(input).match(/sources: \[\{\"file\"\:\".*\"\}\],/)

        if (data) {
          return data[0].replace(/sources: \[\{\"file\"\:\"/, '').replace(/\"\}\],/, '')
        } else {
          return "取值失败"
        }
      }),
      col_type: "movie_2"
    });
  }

  setResult(d);
}