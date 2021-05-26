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
  const list = parseDomForArray(getResCode(), '.videobrickwrap&&.videobrick');

  setError(parseDomForHtml(list[0], 'img&&data-cfsrc'))
  /*for (let j in list) {
    d.push({
      title: parseDomForHtml(list[j], '.videotitle&&Text'),
      pic_url: "https://ohentai.org/"+parseDomForHtml(list[j], 'img&&src').replace(/\s/g, '%20'),
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
  }*/

  setResult(d);
}