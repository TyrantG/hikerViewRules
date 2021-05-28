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

const godSaveFile = (fetch_file, local_file) => {
  let local = request(local_file);
  let fetch = request(fetch_file);
  if (!local) writeFile(local_file, fetch)
}

const time = (new Date()).getTime()

/* Base Function */

/* Customize Function */

const tyrantgenesis = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/data/base.json?t="+time, 'hiker://files/TyrantG/data/base.json')
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/tyrantgenesis.js?t="+time, 'hiker://files/TyrantG/tyrantgenesis.js')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/css/element-ui.css", 'hiker://files/TyrantG/public/css/element-ui.css')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/js/vue.min.js", 'hiker://files/TyrantG/public/js/vue.min.js')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/js/element-ui.js", 'hiker://files/TyrantG/public/js/element-ui.js')
}

const douyu_live = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/LIVE/douyu.js?t="+time, 'hiker://files/TyrantG/LIVE/douyu.js')
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/douyu-tabs.html?t="+time, 'hiker://files/TyrantG/public/douyu-tabs.html')
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/douyu-player.html?t="+time, 'hiker://files/TyrantG/public/douyu-player.html')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/css/element-ui.css", 'hiker://files/TyrantG/public/css/element-ui.css')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/css/aliplayer-min.css", 'hiker://files/TyrantG/public/css/aliplayer-min.css')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/js/vue.min.js", 'hiker://files/TyrantG/public/js/vue.min.js')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/js/aliplayer-min.js", 'hiker://files/TyrantG/public/js/aliplayer-min.js')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/js/element-ui.js", 'hiker://files/TyrantG/public/js/element-ui.js')
}

const huya_live = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/LIVE/huya.js?t="+time, 'hiker://files/TyrantG/LIVE/huya.js')
  // godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/douyu-tabs.html?t="+time, 'hiker://files/TyrantG/public/douyu-tabs.html')
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/huya-player.html?t="+time, 'hiker://files/TyrantG/public/huya-player.html')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/utils/huya_lib.js", 'hiker://files/TyrantG/public/utils/huya_lib.js')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/css/element-ui.css", 'hiker://files/TyrantG/public/css/element-ui.css')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/css/aliplayer-min.css", 'hiker://files/TyrantG/public/css/aliplayer-min.css')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/js/vue.min.js", 'hiker://files/TyrantG/public/js/vue.min.js')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/js/aliplayer-min.js", 'hiker://files/TyrantG/public/js/aliplayer-min.js')
  godSaveFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/public/js/element-ui.js", 'hiker://files/TyrantG/public/js/element-ui.js')
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

const _7719 = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/GHS/7719.js?t="+time, 'hiker://files/TyrantG/GHS/7719.js')
}

const shuiguopai = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/GHS/shuiguopai.js?t="+time, 'hiker://files/TyrantG/GHS/shuiguopai.js')
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

const zczc = _ => {
  godWriteFile("https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/TOOL/zczc.js?t="+time, 'hiker://files/TyrantG/TOOL/zczc.js')
}

/* Customize Function */