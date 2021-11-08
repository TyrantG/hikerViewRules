const BASE_URL = "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/"
const LOCAL_URL = 'hiker://files/rules/TyrantG/assets/'

const godSaveFile = (asset_path) => {
    log(LOCAL_URL+asset_path)
    writeFile(LOCAL_URL+asset_path, request(BASE_URL+asset_path))
}

godSaveFile('images/avatar.jpg')