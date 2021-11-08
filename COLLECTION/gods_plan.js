// const LOCAL_FILE = 'hiker://files/rules/TyrantG/gods_plan.js'
// const LOCAL_ASSETS = 'hiker://files/rules/TyrantG/assets.js'
// const FETCH_FILE = 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gods_plan.js'
const FETCH_ASSETS = 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/assets.js'
const ASSET_PATH = 'hiker://files/rules/TyrantG/assets/'
const VERSION_FILE = 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/data/version'

const VERSION = '1.0.0-beta'

const sync = _ => {
    writeFile(LOCAL_FILE, request(FETCH_FILE))
    eval(request(FETCH_ASSETS))
}

const baseParse = _ => {
    let d = [], syncTitle = "God's Plan 当前版本："+VERSION

    if (VERSION !== request(FETCH_FILE)) {
        syncTitle = "God's Plan可更新.当前版本"+VERSION+'.最新版本: '+request(VERSION_FILE)
    }

    d.push({
        title: syncTitle,
        image_url: request(ASSET_PATH+'images/avatar.jpg'),
        url: $().lazyRule(_ => {
            const LOCAL_FILE = 'hiker://files/rules/TyrantG/gods_plan.js'
            eval(LOCAL_FILE)
            sync()
        }),
        col_type: 'avatar'
    })

    setResult(d);
}