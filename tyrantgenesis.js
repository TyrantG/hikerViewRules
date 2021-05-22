const BASE_URL = "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/"
const collection_password = "海阔视界，首页频道合集￥home_rule_url￥"
const rule_password = "海阔视界规则分享，当前分享的是：小程序￥home_rule_v2￥"

const baseParse = _ => {
    let res = {};
    let d = [];
    const script = fetch(MY_URL);
    const data_json = fetch('hiker://files/TyrantG/data/base.json');
    const data = JSON.parse(data_json)
    let fst_rule_list = []
    let snd_rule_list = []

    eval(script);

    d.push({
        pic_url: 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/images/github.svg',
        url: "https://github.com/TyrantG",
        col_type: 'pic_1_full'
    });

    data.forEach(rule => {
        fst_rule_list = []
        rule.data.forEach(item => {
            item.rules.forEach(each => {
                fst_rule_list.push(each.rule)
            })
        })
        writeFile("hiker://files/TyrantG/Temporary/"+rule.title+".json", JSON.stringify(fst_rule_list));

        d.push({
            title: rule.title,
            url: "rule://"+base64Encode(collection_password+"hiker://files/TyrantG/Temporary/"+rule.title+".json").replace(/\n/g, ''),
            col_type: 'text_center_1'
        });

        rule.data.forEach(item => {
            snd_rule_list = []
            item.rules.forEach(each => {
                snd_rule_list.push(each.rule)
            })
            writeFile("hiker://files/TyrantG/Temporary/"+rule.title+"/"+item.title+".json", JSON.stringify(snd_rule_list));
            d.push({
                title: item.title,
                url: "rule://"+base64Encode(collection_password+"hiker://files/TyrantG/Temporary/"+rule.title+"/"+item.title+".json").replace(/\n/g, ''),
                col_type: 'text_2'
            });
            item.rules.forEach(each => {
                d.push({
                    title: each.title,
                    url: "rule://"+base64Encode(rule_password+JSON.stringify(each.rule)).replace(/\n/g, ''),
                    col_type: 'flex_button'
                })
            })
            d.push({
                col_type: 'line'
            });
        })

        d.push({
            col_type: 'line_blank'
        });
    })

    res.data = d;
    setHomeResult(res);
}