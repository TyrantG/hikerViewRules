const BASE_URL = "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/"

const baseParse = _ => {
    let res = {};
    let d = [];
    const script = fetch(MY_URL);
    const data_json = fetch('hiker://files/TyrantG/data/base.json');
    const data = JSON.parse(data_json)

    eval(script);

    data.forEach(rule => {
        d.push({
            title: rule.title,
            // url: rule.url,
            col_type: 'text_1_center'
        });

        rule.data.forEach(item => {
            d.push({
                title: item.title,
                // url: rule.url,
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