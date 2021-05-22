const baseParse = _ => {
  let res = {};
  let d = [];
  const html = getResCode();
  const list = parseDomForArray(html, "#post-list-posts&&li");

  list.forEach(element => {
    d.push({
      pic_url: parseDomForHtml(element, ".preview&&src"),
      url: "https://yande.re"+parseDomForHtml(element, "a&&href"),
      col_type: 'pic_3'
    })
  });

  res.data = d;
  setHomeResult(res);
}