/* Base Function */

/**
* @param fetch_file String 远程文件web地址
* @param local_file String 本地文件路径
* */
const godWriteFile = (fetch_file, local_file) => {
  let local = request(local_file);
  let fetch = request(fetch_file);
  if (!local || local !== fetch) writeFile(local_file, fetch)
}

const time = (new Date()).getTime()

/* Base Function */

/* Customize Function */

const tyrantgenesis = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/data/base.json?t="+time, 'hiker://files/TyrantG/data/base.json')
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/tyrantgenesis.js?t="+time, 'hiker://files/TyrantG/tyrantgenesis.js')
}

const douyu_live = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/LIVE/douyu.js?t="+time, 'hiker://files/TyrantG/LIVE/douyu.js')
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/douyu-tab.html?t="+time, 'hiker://files/TyrantG/public/douyu-tab.html')
}

const yande_re = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/GHS/yande.re.js?t="+time, 'hiker://files/TyrantG/GHS/yande.re.js')
}

const pornhub = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/GHS/pornhub.js?t="+time, 'hiker://files/TyrantG/GHS/pornhub.js')
}

const spankbang = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/GHS/spankbang.js?t="+time, 'hiker://files/TyrantG/GHS/spankbang.js')
}

const eroticmovies_xyz = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/GHS/eroticmovies.xyz.js?t="+time, 'hiker://files/TyrantG/GHS/eroticmovies.xyz.js')
}

const eporner = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/GHS/eporner.js?t="+time, 'hiker://files/TyrantG/GHS/eporner.js')
}

const ohentai = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/GHS/ohentai.js?t="+time, 'hiker://files/TyrantG/GHS/ohentai.js')
}

const aktool = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/TOOL/aktools.js?t="+time, 'hiker://files/TyrantG/TOOL/aktool.js')
}

const prts = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/TOOL/prts.js?t="+time, 'hiker://files/TyrantG/TOOL/prts.js')
}

const ys_map = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/TOOL/ys_map.js?t="+time, 'hiker://files/TyrantG/TOOL/ys_map.js')
}

/* Customize Function */