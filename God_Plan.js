/* Base Function */

/**
* @param fetch_file String 远程文件web地址
* @param local_file String 本地文件路径
* */
function godWriteFile(fetch_file, local_file) {
  let local = fetch(local_file);
  let fetch = fetch(fetch_file);
  if (!local || local != fetch) writeFile(local_file, fetch)
}

/* Base Function */

/* Customize Function */

function tyrantgenesis() {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/data/base.json", 'hiker://files/TyrantG/data/base.json')
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/tyrantgenesis.js", 'hiker://files/TyrantG/tyrantgenesis.js')
}

function douyu_live() {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/LIVE/douyu.js", 'hiker://files/TyrantG/LIVE/douyu.js')
}

/* Customize Function */