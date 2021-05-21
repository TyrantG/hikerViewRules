const BASE_URL = "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/"
const GROUP_RULES = [
    {
        title: 'GHS',
        url: BASE_URL+'GHS/data.json',
    }
]

const baseParse = _ => {
    let res = {};
    let d = [];
    let script = fetch(MY_URL);

    eval(script);

    /*d.push({
        pic_url: "https://camo.githubusercontent.com/988a6c144525f4242fa90067a7e8649ba302c93fe31a4a57be1d2da7543c044a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d547972616e74472673686f775f69636f6e733d74727565267468656d653d746f6b796f6e69676874",
        url: "web://https://github.com/TyrantG",
        col_type: 'pic_1_full',
    });*/
    d.push({
        desc: '240',
        url: BASE_URL+"https://github-readme-stats.vercel.app/api?username=TyrantG&show_icons=true&theme=tokyonight",
        col_type:"x5_webview_single",
    })

    GROUP_RULES.forEach(rule => {
        d.push({
            title: rule.title,
            url: rule.url,
            col_type: 'text_2'
        });
    })

    res.data = d;
    setHomeResult(res);
}

const secParse = _ => {
    let res = {};
    let d = [];
    let data = fetch(MY_URL);

    data = JSON.parse(data)

    data.forEach((item, index) => {
        d.push({
            title: item.title,
            col_type: 'long_text'
        })

        item.rules.forEach((rule, key) => {
            let temp_name = 'hiker://files/TyrantG/temp/' + index + '/' + key + '/tmp.json'
            writeFile(temp_name, JSON.stringify(rule.rule));
            d.push({
                title: rule.title,
                url: "rule://"+base64Encode("海阔视界，首页频道合集￥home_rule_url￥"+temp_name).replace(/\n/g, ''),
                col_type: 'text_2'
            })
        })

        d.push({
            col_type: 'line_blank'
        })
    })

    res.data = d;
    setHomeResult(res);
}