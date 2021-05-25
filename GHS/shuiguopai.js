const baseParse = _ => {
  let d = [];
  const list_json = fetch(MY_URL);
  const list = JSON.parse(list_json).data.data
  const cdn = JSON.parse(list_json).cdn

  list.forEach(item => {
    d.push({
      title: item.title,
      desc: item.subtitle,
      pic_url: cdn.image+item.img_url,
      url: $("https://api.f03d9.info/movie/info/"+(item.id+109)).lazyRule(_ => {
        const data_json = fetch(input)
        const data = JSON.parse(data_json)
        return data.cdn.movie + data.data.url
      })
    })
  })

  setResult(d);
}