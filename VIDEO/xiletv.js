const baseParse = _ => {
    let d = [];
    const cate = MY_URL.split('####')[1]

    const temp1 = _ => {
        let list = parseDomForArray(getResCode(), '#archive-content&&.item')
        list.forEach(item => {
            d.push({
                title: parseDomForHtml(item, 'h3&&Text'),
                pic_url: parseDomForHtml(item, 'img&&src'),
                url: parseDomForHtml(item, 'a&&href')+'#immersiveTheme#',
                desc: parseDomForHtml(item, '.rating&&Text'),
            })
        })
    }

    const temp2 = _ => {
        let list = parseDomForArray(getResCode(), '.items&&.item')
        list.forEach(item => {
            d.push({
                title: parseDomForHtml(item, 'h3&&Text'),
                pic_url: parseDomForHtml(item, 'img&&src'),
                url: parseDomForHtml(item, 'a&&href')+'#immersiveTheme#',
                desc: parseDomForHtml(item, '.rating&&Text'),
            })
        })
    }

    switch (cate) {
        case 'movies':
            temp1()
            break
        default:
            temp2()
    }

    setResult(d);
}