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

    setError(data)
}