const LOCAL_FILE = 'hiker://files/rules/TyrantG/gods_plan.js'
const FETCH_FILE = 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gods_plan.js'
const VERSION_FILE = 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/data/version'

const VERSION = '1.0.0-beta'

const baseParse = _ => {
    let d = [];

    d.push({
        title: "God's Plan 当前版本："+VERSION,
        url: "",
        col_type: 'avatar'
    })

    setResult(d);
}
