const secParse = _ => {
  let res = {};
  let d = [];
  const html = getResCode();

  const des_title = parseDomForHtml(html, '.inlineFree&&Text');
  const des_pic = parseDom(html, '#videoPlayerPlaceholder&&img&&src');
  // const des_desc = parseDomForHtml(html, '.inlineFree&&Text');
  const meta = parseDomForHtml(html, '[name=adsbytrafficjunkycontext]&&data-context-category');

  d.push({
    title: des_title,
    desc: meta,
    pic_url: des_pic,
    url: des_pic,
    col_type: 'pic_1'
  });

// 这个变量定义在下面执行 script 的上方，没有被读取执行，需要手动声明避免报错
  let playerObjList = {}
// 获取视频播放地址的变量并执行
  const js = parseDomForHtml(html,"[id=mobileContainer]&&script&&Html").replace(/var qualityItems_.*?=/,'var qualityItems =');
  eval(js);
  const list = JSON.parse(qualityItems)

  list.forEach(item => {
    // 1080p 的 url 为空
    if (item.url) {
      d.push({
        title: item.text,
        url: item.url,
        col_type: 'text_2'
      });
    }
  })

  res.data = d;
  setHomeResult(res);
}