const baseParse = _ => {
  let d = [];
  try{
    const list = parseDomForArray(getResCode(), '.serywrapper&&.tagtext');
    for (let j in list) {
      d.push({
        title: parseDomForHtml(list[j], '.tagtext&&Text'),
        url: "https://ohentai.org/"+parseDomForHtml(list[j],'a&&href').replace(' ', '%20')+"&p=fypage"
      });
    }}catch(e){}

  setResult(d);
}

const secParse = _ => {
  let d = [];
  try{
    const list = parseDomForArray(getResCode(), '.videobrickwrap&&.videobrick');

    for (let j in list) {
      d.push({
        title: parseDomForHtml(list[j], '.videotitle&&Text'),
        pic_url: "https://ohentai.org/"+parseDomForHtml(list[j], 'img&&data-cfsrc').replace(' ', '%20'),
        url: $("https://ohentai.org/"+parseDomForHtml(list[j],'a&&href')).lazyRule(_ => {
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
  }catch(e){}

  setResult(d);
}