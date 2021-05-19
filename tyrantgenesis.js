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

    fy_bridge_app.showPic("https://github-readme-stats.vercel.app/api?username=TyrantG&show_icons=true&theme=tokyonight")

    d.push({
        pic_url: "https://github-readme-stats.vercel.app/api?username=TyrantG&show_icons=true&theme=tokyonight",
        url: "web://https://github.com/TyrantG",
        col_type: 'pic_1',
    });

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