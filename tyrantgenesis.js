const BASE_URL = "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/"

const baseParse = _ => {
    let res = {};
    let d = [];
    const script = fetch(MY_URL);
    const data_json = fetch('hiker://files/TyrantG/data/base.json');
    const data = JSON.parse(data_json)

    eval(script);

    data.forEach(rule => {
        let fst_rule_list = []
        rule.data.forEach(item => {
            item.rules.forEach(each => {
                fst_rule_list.push(each.rule)
            })
        })

        d.push({
            title: rule.title,
            url: "rule://"+base64Encode(JSON.stringify(fst_rule_list)).replace(/\n/g, ''),
            col_type: 'text_center_1'
        });

        rule.data.forEach(item => {
            let fnd_rule_list = []
            item.rules.forEach(each => {
                fnd_rule_list.push(each.rule)
            })
            d.push({
                title: item.title,
                url: "rule://"+base64Encode(JSON.stringify(fnd_rule_list)).replace(/\n/g, ''),
                col_type: 'text_2'
            });
            item.rules.forEach(each => {
                d.push({
                    title: each.title,
                    url: "rule://"+base64Encode(each.rule).replace(/\n/g, ''),
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