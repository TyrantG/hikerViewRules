// const LOCAL_ASSETS = 'hiker://files/rules/TyrantG/assets.js'
const FETCH_FILE = 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gods_plan.js'
const VERSION_FILE = 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/data/version'
const ASSET_PATH = 'hiker://files/rules/TyrantG/assets/'

const VERSION = '1.0.0-beta'

const baseParse = _ => {
    let d = [], syncTitle = "God's Plan 当前版本："+VERSION
    log(fetch(ASSET_PATH+'images/avatar.jpg'))

    if (VERSION !== request(VERSION_FILE)) {
        syncTitle = "God's Plan可更新.当前版本"+VERSION+'.最新版本: '+request(VERSION_FILE)
    }

    d.push({
        title: syncTitle,
        image_url: ASSET_PATH+'images/avatar.jpg',
        url: $().lazyRule(_ => {
            const LOCAL_FILE = 'hiker://files/rules/TyrantG/gods_plan.js'
            const FETCH_FILE = 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gods_plan.js'
            const FETCH_ASSETS = 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/assets.js'
            writeFile(LOCAL_FILE, request(FETCH_FILE))
            eval(request(FETCH_ASSETS))
            refreshPage(false)
            return "hiker://empty"
        }),
        col_type: 'avatar'
    })

    setResult(d);
}