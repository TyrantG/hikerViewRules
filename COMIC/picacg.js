const Url = "https://picaapi.picacomic.com/"
const ApiKey = "C69BAF41DA5ABD1FFEDC6D2FEA56B"
const AppChannel = "3"
const Version = "2.2.1.3.3.4"
const BuildVersion = "45"
const Accept = "application/vnd.picacomic.com.v1+json"

const baseParse = _ => {
    let d = [];
    const list = parseDomForArray(getResCode(), '.fed-list-info&&li');
    for (let j in list) {
        d.push({
            title: parseDomForHtml(list[j], 'a,1&&Text'),
            desc: parseDomForHtml(list[j], 'span,1&&Text'),
            pic_url: parseDomForHtml(list[j], 'a&&data-original')+"@Referer=https://www.cocomanhua.com/@User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.134 Safari/537.36@Cookie=UM_distinctid=17b5d3391a63ab-00490b6eb30ed4-1343363-1fa400-17b5d3391a77d4; __cf_bm=04737274175fbd6efa700c2b7e0d687687e603b0-1629358334-1800-AWTg2ZOUlBgdhNN9azwmfqX1SI92nkk+QAOz0k+lBvZ250OBMvAsmQz+QsvOnnq3V8bxRP52G5qdWQcu70z1ul7s9D0JpkBZZYkx7N4/XnCIF2YCQHcluo20aEC4KUu/ng==",
            url: parseDomForHtml(list[j],'a&&href'),
        })
    }

    setResult(d);
}