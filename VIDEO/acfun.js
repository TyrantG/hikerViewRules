const baseParse = _ => {
  let res = {};
  let d = [];

  const time = (new Date()).getTime()
  const list_json = fetch(MY_URL+"?pagelets=home-feeds&reqID=1&ajaxpipe=1&pageNo=fypage&curSize=20&t="+time, {header: {referer: MY_URL}});
  // const list = JSON.parse(list_json)

  setError(list_json)

  res.data = d;
  setHomeResult(res);
}