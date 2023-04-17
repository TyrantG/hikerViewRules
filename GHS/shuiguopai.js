js:
let d = [];
const list_json = fetch(MY_URL);
const list = JSON.parse(list_json).data.data
const cdn = JSON.parse(list_json).cdn

if (! MY_URL.includes('library')) {
  list.forEach(item => {
    d.push({
      title: item.title,
      desc: item.subtitle,
      pic_url: cdn.image+item.img_url,
      url: $("https://www.shuiguopai.com/play-details/1/"+item.id+"/").lazyRule(_ => {
        const html = fetch(input)
        return (html.match(/url:"(.*?)index.m3u8"/)[1]).replace(/\\u002F/g, '/')+"index.m3u8"
      }),
      col_type: 'movie_2'
    })
  })
} else {
  list.forEach(item => {
    item.cdn = cdn
    d.push({
      title: item.name,
      desc: item.library_count+'部作品',
      pic_url: cdn.image+item.img,
      url: $("hiker://empty##fypage").rule(item => {
        let d = [];
        const params = {
          "anchors_id": item.id,
          "hm": "008-api",
          "length": 12,
          "page": MY_URL.split('##')[1],
        }
        const headers = {
          'Content-Type': 'application/json',
          'Referer': 'https://www.shuiguopai.com/',
          'User-Agent': MOBILE_UA
        }
        const data_json = fetch("https://api.cbbee0.com/v1_2/anchorsDetail", {headers: headers, method:'POST', body: JSON.stringify(params)})
        log(data_json)
        const list = JSON.parse(data_json).data.list
        const cdn = item.cdn
        list.forEach(res => {
          d.push({
            title: res.title,
            desc: res.subtitle,
            pic_url: res.img_url,
            url: $("https://www.shuiguopai.com/play-details/1/"+res.library_id+"/").lazyRule(_ => {
              const html = fetch(input)
              return (html.match(/url:"(.*?)index.m3u8"/)[1]).replace(/\\u002F/g, '/')+"index.m3u8"
            }),
            col_type: 'movie_2'
          })
        })
        setResult(d);
      }, item),
      col_type: 'icon_round_4'
    })
  })
}

setResult(d);