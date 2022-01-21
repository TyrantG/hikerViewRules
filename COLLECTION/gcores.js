const gcores = {
    name: '机核GCORES',
    empty: 'hiker://empty',
    headers: {
        'User-Agent': PC_UA,
        'referer': "https://www.gcores.com",
    },
    dom: [],
    page: MY_URL.split('##')[1],
    currentUrl: getItem('currentUrl', 'https://www.gcores.com'),
    imageUrl: 'https://image.gcores.com/',
    category: [
        {title: '首页', url: 'https://www.gcores.com'},
        {title: '关注用户', url: 'hiker://empty'},
        {title: '资讯', url: 'https://www.gcores.com/gapi/v1/originals?page[limit]=$limit&page[offset]=$offset&sort=-published-at&include=category,user&filter[is-news]=1&filter[list-all]=0&fields[articles]=title,desc,is-published,thumb,app-cover,cover,comments-count,likes-count,bookmarks-count,is-verified,published-at,option-is-official,option-is-focus-showcase,duration,category,user&fields[videos]=title,desc,is-published,thumb,app-cover,cover,comments-count,likes-count,bookmarks-count,is-verified,published-at,option-is-official,option-is-focus-showcase,duration,category,user&fields[radios]=title,desc,is-published,thumb,app-cover,cover,comments-count,likes-count,bookmarks-count,is-verified,published-at,option-is-official,option-is-focus-showcase,duration,is-free,category,user'},
        {title: '视频', url: 'https://www.gcores.com/gapi/v1/videos?page[limit]=$limit&page[offset]=$offset&sort=-published-at&include=category,user,djs&filter[list-all]=0&fields[videos]=title,desc,is-published,thumb,app-cover,cover,comments-count,likes-count,bookmarks-count,is-verified,published-at,option-is-official,option-is-focus-showcase,duration,category,user,djs'},
        {title: '电台', url: 'https://www.gcores.com/gapi/v1/radios?page[limit]=$limit&page[offset]=$offset&sort=-published-at&include=category,user,djs&filter[list-all]=0&fields[radios]=title,desc,is-published,thumb,app-cover,cover,comments-count,likes-count,bookmarks-count,is-verified,published-at,option-is-official,option-is-focus-showcase,duration,is-free,category,user,djs'},
        {title: '文章', url: 'https://www.gcores.com/gapi/v1/articles?page[limit]=$limit&page[offset]=$offset&sort=-published-at&include=category,user&filter[is-news]=0&filter[list-all]=0&fields[articles]=title,desc,is-published,thumb,app-cover,cover,comments-count,likes-count,bookmarks-count,is-verified,published-at,option-is-official,option-is-focus-showcase,duration,category,user'},
        {title: '播单', url: 'https://www.gcores.com/gapi/v1/albums?page[limit]=$limit&page[offset]=$offset&sort=-updated-at&filter[is-on-sale]=0'},
        {title: '专题', url: 'https://www.gcores.com/gapi/v1/collections?page[limit]=$limit&page[offset]=$offset&sort=-updated-at'},
        {title: '游戏', url: 'https://www.gcores.com/gapi/v1//games/search?page[limit]=$limit&page[offset]=$offset&sort=-onsale-start&include=game-stores&filter[revised]=true&filter[onsale]=true'},
    ],
    cateSelected: getItem('cateSelected', '0'),
    baseParse: () => {
        if (parseInt(gcores.page) === 1) {
            gcores.category.forEach((category, index) => {
                category.index = index.toString()
                gcores.dom.push({
                    title: index.toString() === gcores.cateSelected ? '‘‘’’<strong><font color="red">'+category.title+'</font></strong>' : category.title,
                    url: $(gcores.empty).lazyRule(category => {
                        setItem("cateSelected", category.index)
                        setItem("currentUrl", category.url)
                        refreshPage(false)
                        return "hiker://empty"
                    }, category),
                    col_type: 'scroll_button',
                })
            })
            gcores.dom.push({col_type: 'blank_block'})
        }

        gcores.baseAdapter(parseInt(gcores.cateSelected))

        setResult(gcores.dom);
    },
    baseAdapter: selected => {
        switch (selected) {
            case 1:
            case 2:
                gcores.newsParse()
                break
            case 3:
                gcores.videosParse()
                break
            case 4:
                gcores.radiosParse()
                break
            case 5:
                gcores.articlesParse()
                break
            case 6:
                gcores.albumsParse()
                break
            case 7:
                gcores.collectionsParse()
                break
            case 8:
                gcores.gamesParse()
                break
            default:
                gcores.homeParse()
        }
    },
    homeParse: () => {
        const pageData = fetch(gcores.currentUrl, {headers: gcores.headers})
        const jsonString = pageData.match(/__PRELOADED_STATE__ = (.*?)<\/script>/)[1]
        const data = JSON.parse(jsonString.trim())

    },
    newsParse: () => {
        const url = gcores.urlParamsBuild(gcores.currentUrl, {limit: 12, offset: 12 * (gcores.page-1)})
        const apiData = fetch(url, {headers: gcores.headers})
        const data = JSON.parse(apiData).data

        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.desc || item.attributes.description,
                pic_url: gcores.imageUrl+item.attributes.thumb+'@Referer='+gcores.headers.referer,
                url: "https://www.gcores.com/articles/"+item.id,
                col_type: 'pic_1'
            })
        })
    },
    videosParse: () => {
        const url = gcores.urlParamsBuild(gcores.currentUrl, {limit: 12, offset: 12 * (gcores.page-1)})
        const apiData = fetch(url, {headers: gcores.headers})
        const data = JSON.parse(apiData).data

        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.desc || item.attributes.description,
                pic_url: gcores.imageUrl+item.attributes.thumb+'@Referer='+gcores.headers.referer,
                url: "https://www.gcores.com/videos/"+item.id,
                col_type: 'movie_2'
            })
        })
    },
    radiosParse: () => {
        const url = gcores.urlParamsBuild(gcores.currentUrl, {limit: 12, offset: 12 * (gcores.page-1)})
        const apiData = fetch(url, {headers: gcores.headers})
        const data = JSON.parse(apiData).data

        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.desc || item.attributes.description,
                pic_url: gcores.imageUrl+item.attributes.thumb+'@Referer='+gcores.headers.referer,
                url: "https://www.gcores.com/radios/"+item.id,
                col_type: 'movie_2'
            })
        })
    },
    articlesParse: () => {
        const url = gcores.urlParamsBuild(gcores.currentUrl, {limit: 12, offset: 12 * (gcores.page-1)})
        const apiData = fetch(url, {headers: gcores.headers})
        const data = JSON.parse(apiData).data

        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.desc || item.attributes.description,
                pic_url: gcores.imageUrl+item.attributes.thumb+'@Referer='+gcores.headers.referer,
                url: "https://www.gcores.com/articles/"+item.id,
                col_type: 'pic_1'
            })
        })
    },
    albumsParse: () => {
        const url = gcores.urlParamsBuild(gcores.currentUrl, {limit: 12, offset: 12 * (gcores.page-1)})
        const apiData = fetch(url, {headers: gcores.headers})
        const data = JSON.parse(apiData).data

        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.description,
                pic_url: gcores.imageUrl+item.attributes.cover+'@Referer='+gcores.headers.referer,
                url: "https://www.gcores.com/albums/"+item.id,
                col_type: 'movie_1_vertical_pic_blur'
            })
        })
    },
    collectionsParse: () => {
        const url = gcores.urlParamsBuild(gcores.currentUrl, {limit: 12, offset: 12 * (gcores.page-1)})
        const apiData = fetch(url, {headers: gcores.headers})
        const data = JSON.parse(apiData).data

        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.description,
                pic_url: gcores.imageUrl+item.attributes.cover+'@Referer='+gcores.headers.referer,
                url: "https://www.gcores.com/collections/"+item.id,
                col_type: 'movie_2'
            })
        })
    },
    gamesParse: () => {
        const url = gcores.urlParamsBuild(gcores.currentUrl, {limit: 12, offset: 12 * (gcores.page-1)})
        const apiData = fetch(url, {headers: gcores.headers})
        const data = JSON.parse(apiData).data

        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.description,
                pic_url: gcores.imageUrl+item.attributes.cover+'@Referer='+gcores.headers.referer,
                // url: "https://www.gcores.com/collections/"+item.id,
                col_type: 'movie_2'
            })
        })
    },
    urlParamsBuild: (url, params) => {
        for (let i in params) {
            url = url.replace('$'+i, params[i])
        }
        return url
    },
}

$.exports = gcores
