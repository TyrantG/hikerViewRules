const BASE_URL = "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/"
const LOCAL_URL = 'hiker://files/rules/TyrantG/assets/'

const godSaveFile = (asset_path) => {
  writeFile(local_file+asset_path, request(fetch_file+asset_path))
}