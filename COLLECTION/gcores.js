const gcores = {
    name: '机核GCORES',
    empty: 'hiker://empty',
    headers: {
        'User-Agent': PC_UA,
        'referer': "https://www.gcores.com",
    },
    dom: [],
    playlist: [],
    page: MY_URL.split('$$')[1],
    currentUrl: getItem('currentUrl', 'https://www.gcores.com'),
    searchValue: getItem('searchValue', ''),
    searchTab: getItem('searchTab', 'articles'),
    searchOrderBy: getItem('searchOrderBy', 'score'),
    imageUrl: 'https://image.gcores.com/',
    audioUrl: 'https://alioss.gcores.com/uploads/audio/',
    category: [
        // {title: '专题', url: 'https://www.gcores.com/gapi/v1/collections?page[limit]=$limit&page[offset]=$offset&sort=-updated-at'},
        // {title: '游戏', url: 'https://www.gcores.com/gapi/v1//games/search?page[limit]=$limit&page[offset]=$offset&sort=-onsale-start&include=game-stores&filter[revised]=true&filter[onsale]=true'},
    ],
    cateSelected: getItem('cateSelected', '0'),
    baseParse: () => {
        /*if (parseInt(gcores.page) === 1) {
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
        }*/

        gcores.dom.push({
            url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/TyrantG/public/gcores_banners.html',
            col_type:"x5_webview_single",
            extra: {ua: MOBILE_UA}
        })

        gcores.dom.push({
            url: $(gcores.empty+"#fullTheme##noHistory#$$fypage").rule(() => {
                eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                gcores.searchParse()
            }),
            title: '请输入关键词',
            col_type: "icon_1_search",
            extra: {
                newWindow: true,
                windowId: "机核GCORES·搜索"
            }
        })

        const grid = [
            {
                title: '资讯',
                url: $('https://www.gcores.com/gapi/v1/originals?page[limit]=$limit&page[offset]=$offset&sort=-published-at&filter[is-news]=1&filter[list-all]=0&fields[articles]=title,desc,thumb#noHistory#$$fypage').rule(() => {
                    eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                    gcores.baseAdapter(0)
                }),
                pic_url: 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/资讯.svg',
                col_type: 'icon_round_small_4',
            },
            {
                title: '视频',
                url: $('https://www.gcores.com/gapi/v1/videos?page[limit]=$limit&page[offset]=$offset&sort=-published-at&filter[list-all]=0&fields[videos]=title,desc,thumb#noHistory#$$fypage').rule(() => {
                    eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                    gcores.baseAdapter(1)
                }),
                pic_url: 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/视频.svg',
                col_type: 'icon_round_small_4',
            },
            {
                title: '电台',
                url: $('https://www.gcores.com/gapi/v1/radios?page[limit]=$limit&page[offset]=$offset&sort=-published-at&filter[list-all]=0&fields[radios]=title,desc,thumb#noHistory#$$fypage').rule(() => {
                    eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                    gcores.baseAdapter(2)
                }),
                pic_url: 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/电台.svg',
                col_type: 'icon_round_small_4',
            },
            {
                title: '文章',
                url: $('https://www.gcores.com/gapi/v1/articles?page[limit]=$limit&page[offset]=$offset&sort=-published-at&filter[is-news]=0&filter[list-all]=0&fields[articles]=title,desc,thumb#noHistory#$$fypage').rule(() => {
                    eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                    gcores.baseAdapter(3)
                }),
                pic_url: 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/文章.svg',
                col_type: 'icon_round_small_4',
            },
            {
                title: '播单',
                url: $('https://www.gcores.com/gapi/v1/albums?page[limit]=$limit&page[offset]=$offset&sort=-updated-at&filter[is-on-sale]=0#noHistory#$$fypage').rule(() => {
                    eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                    gcores.baseAdapter(4)
                }),
                pic_url: 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/播单.svg',
                col_type: 'icon_round_small_4',
            },
            {
                title: '关注',
                pic_url: 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/关注.svg',
                col_type: 'icon_round_small_4',
            },
            {
                title: '收藏',
                pic_url: 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/收藏.svg',
                col_type: 'icon_round_small_4',
            },
            {
                title: '设置',
                pic_url: 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/设置.svg',
                col_type: 'icon_round_small_4',
            }
        ]

        grid.forEach(item => gcores.dom.push(item))

        setResult(gcores.dom);
    },
    subUrlBuild: (id, cate) => {
        switch (cate) {
            case 'articles':
                return $("https://www.gcores.com/articles/"+id+"#immersiveTheme##noHistory#").rule(params => {
                    eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                    gcores.articlesDescParse(params.id, MY_URL)
                }, {
                    id: id
                })
            case 'videos':
                return $("https://www.gcores.com/videos/"+id+"#immersiveTheme##noHistory#").rule(params => {
                    eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                    gcores.videosDescParse(params.id, MY_URL)
                }, {
                    id: id
                })
            case 'radios':
                return $("https://www.gcores.com/radios/"+id+"#immersiveTheme##noHistory#").rule(params => {
                    eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                    gcores.audiosDescParse(params.id, MY_URL)
                }, {
                    id: id
                })
            case 'albums':
                return $("https://www.gcores.com/albums/"+id+"#immersiveTheme##noHistory#$$fypage").rule(params => {
                    eval(fetch('https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/COLLECTION/gcores.js'))
                    gcores.albumsDescParse(params.id, MY_URL)
                }, {
                    id: id
                })
        }
    },
    x5SubUrlBuild: bannerItem => {
        switch (bannerItem.type) {
            case 'articles':
                return gcores.articlesDescParse(bannerItem.id, bannerItem.url)
            case 'videos':
                return gcores.videosDescParse(bannerItem.id, bannerItem.url)
            case 'radios':
                return gcores.audiosDescParse(bannerItem.id, bannerItem.url)
            case 'albums':
                return gcores.albumsDescParse(bannerItem.id, bannerItem.url)
        }
    },
    baseAdapter: selected => {
        const url = gcores.urlParamsBuild(MY_URL, {limit: 12, offset: 12 * (gcores.page-1)})
        const apiData = fetch(url, {headers: gcores.headers})
        let data

        switch (selected) {
            case 0:
            case 3:
                data = JSON.parse(apiData).data
                gcores.articlesParse(data)
                break
            case 1:
                data = JSON.parse(apiData).data
                gcores.videosParse(data)
                break
            case 2:
                data = JSON.parse(apiData).data
                gcores.radiosParse(data)
                break
            case 4:
                data = JSON.parse(apiData).data
                gcores.albumsParse(data)
                break
            /*case 7:
                data = JSON.parse(apiData).data
                gcores.collectionsParse(data)
                break
            case 8:
                data = JSON.parse(apiData).data
                gcores.gamesParse(data)
                break*/
            default:
        }
        setResult(gcores.dom);
    },
    videosParse: data => {
        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.desc,
                pic_url: gcores.imageUrl+item.attributes.thumb+'@Referer='+gcores.headers.referer,
                url: gcores.subUrlBuild(item.id, 'videos'),
                col_type: 'movie_2'
            })
        })
    },
    radiosParse: data => {
        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.desc,
                pic_url: gcores.imageUrl+item.attributes.thumb+'@Referer='+gcores.headers.referer,
                url: gcores.subUrlBuild(item.id, 'radios'),
                col_type: 'movie_2'
            })
        })
    },
    articlesParse: data => {
       data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.desc,
                pic_url: gcores.imageUrl+item.attributes.thumb+'@Referer='+gcores.headers.referer,
                url: gcores.subUrlBuild(item.id, 'articles'),
                col_type: 'pic_1'
            })
        })
    },
    albumsParse: data => {
        data.forEach(item => {
            gcores.dom.push({
                title: item.attributes.title,
                desc: item.attributes.description,
                pic_url: gcores.imageUrl+item.attributes.cover+'@Referer='+gcores.headers.referer,
                url: gcores.subUrlBuild(item.id, 'albums'),
                col_type: 'movie_3_marquee'
            })
        })
    },
    collectionsParse: data => {
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
    gamesParse: data => {
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
    searchParse: () => {
        addListener('onClose', $.toString(() => {
            clearItem('searchValue')
            clearItem('searchTab')
            clearItem('searchOrderBy')
        }))

        const page = MY_URL.split('$$')[1]

        if (parseInt(page) === 1) {
            gcores.dom.push({
                title: '搜索',
                url: $.toString(() => {
                    setItem('searchValue', input)
                    refreshPage(true)
                    return "hiker://empty"
                }),
                desc: '请输入关键词',
                col_type: 'input',
                extra: {
                    defaultValue: gcores.searchValue,
                    onChange: $.toString(() => {
                        if (getItem('searchValue', '') && ! input) {
                            clearItem('searchValue')
                            clearItem('searchTab')
                            clearItem('searchOrderBy')
                            refreshPage(true)
                            return "hiker://empty"
                        }
                    })
                }
            })

            if (! gcores.searchValue) {
                const hot_json = fetch("https://www.gcores.com/gapi/v1/search/recent-hot", {headers: gcores.headers})
                const hot_data = JSON.parse(hot_json)
                gcores.dom.push({
                    title: '热门搜索：',
                    url: gcores.empty,
                    col_type: 'text_1',
                    extra: {
                        lineVisible: false
                    },
                })
                hot_data.data.forEach(hot => {
                    gcores.dom.push({
                        title: hot,
                        url: $(gcores.empty).lazyRule(hot => {
                            setItem('searchValue', hot)
                            refreshPage(true)
                            return "hiker://empty"
                        }, hot),
                        col_type: 'flex_button'
                    })
                })
            } else {
                const tabs = [
                    {title: '文章', type: 'articles'},
                    {title: '游戏', type: 'games'},
                    {title: '电台', type: 'radios'},
                    {title: '视频', type: 'videos'},
                ]
                const orders = [
                    {title: '相关度', type: 'score'},
                    {title: '时间', type: 'date'},
                ]

                tabs.forEach(tab => {
                    gcores.dom.push({
                        title: gcores.searchTab === tab.type ? '‘‘’’<strong><font color="red">'+tab.title+'</font></strong>' : tab.title,
                        url: $(gcores.empty).lazyRule(params => {
                            setItem("searchTab", params.type)
                            refreshPage(true)
                            return "hiker://empty"
                        }, {
                            type: tab.type
                        }),
                        col_type: 'scroll_button',
                    })
                })
                gcores.dom.push({
                    col_type: 'blank_block',
                })
                orders.forEach(order => {
                    gcores.dom.push({
                        title: gcores.searchOrderBy === order.type ? '‘‘’’<strong><font color="red">'+order.title+'</font></strong>' : order.title,
                        url: $(gcores.empty).lazyRule(params => {
                            setItem("searchOrderBy", params.type)
                            refreshPage(true)
                            return "hiker://empty"
                        }, {
                            type: order.type
                        }),
                        col_type: 'scroll_button',
                    })
                })
                gcores.dom.push({
                    col_type: 'blank_block',
                })
            }
        }

        if (gcores.searchValue) {
            const url = "https://www.gcores.com/gapi/v1/search?page[limit]=12&page[offset]="+(page-1)*12+"&type="+gcores.searchTab+"&query="+encodeURIComponent(gcores.searchValue)+"&order-by="+gcores.searchOrderBy
            const json = fetch(url, {headers: gcores.headers})
            const result = JSON.parse(json)

            result.data.forEach(item => {
                gcores.dom.push({
                    title: item.attributes.title,
                    desc: item.attributes.desc || item.attributes.description,
                    pic_url: gcores.imageUrl+(item.attributes.thumb || item.attributes.cover)+'@Referer='+gcores.headers.referer,
                    url: gcores.subUrlBuild(item.id, gcores.searchTab),
                    col_type: 'pic_1'
                })
            })
        }

        setResult(gcores.dom);
    },
    urlParamsBuild: (url, params) => {
        for (let i in params) {
            url = url.replace('$'+i, params[i])
        }
        return url
    },
    htmlTagParse: (block, entityMap) => {
        switch (block.type) {
            case 'blockquote':
            default:
                return '<p>'+block.text+'</p><br />'
            case 'header-one':
                return '<h1>'+block.text+'</h1>'
            case 'header-two':
                return '<h2>'+block.text+'</h2>'
            case 'header-three':
                return '<h3>'+block.text+'</h3>'
            case 'header-four':
                return '<h4>'+block.text+'</h4>'
            case 'header-five':
                return '<h5>'+block.text+'</h5>'
            case 'header-six':
                return '<h6>'+block.text+'</h6>'
            case 'unordered-list-item':
                return '<li>'+block.text+'</li>'
            case 'atomic':
                let images = ''
                block.entityRanges.forEach(item => {
                    images += gcores.atomicParse(entityMap, item.key)
                })
                return images
        }
    },
    atomicParse: (entityMap, key) => {
        let images = ''
        const media = entityMap[key]
        if (media.type === 'IMAGE')
            images += '<img src="'+gcores.imageUrl+media.data.path+'" alt="'+key+'" />'
        else if (media.type === 'EMBED') {
            if (media.data.content.includes('bilibili')) media.data.content = "https:"+decodeURIComponent(media.data.content).replace(/\\"/g, '"').match(/src="(.*?)"/)[1]
            gcores.playlist.push({
                title: '媒体'+(gcores.playlist.length+1),
                url: "web://"+media.data.content
            })
        } else if (media.type === 'GALLERY') {
            media.data.images.forEach(image => {
                images += '<img src="'+gcores.imageUrl+image.path+'" alt="'+image.id+'" />'
            })
        }

        return images
    },
    articlesDescParse: (id, url) => {
        const api_url = "https://www.gcores.com/gapi/v1/articles/"+id+"?include=category,user,user.role,tags,entities,entries,similarities.user,similarities.djs,similarities.category,collections,operational-events.giveaways.winners,operational-events.public-candidates&preview=1"
        const apiData = fetch(api_url, {headers: gcores.headers})
        const data = JSON.parse(apiData)
        let contentAndMedia = {blocks: [], entityMap: []}

        eval('contentAndMedia = '+data.data.attributes.content)
        // dom结构被转义报错
        // const contentAndMedia = JSON.parse(data.data.attributes.content.replace(/\\"/g, '"'))

        const content = contentAndMedia.blocks
        const media = contentAndMedia.entityMap

        let text = ''

        content.forEach(block => {
            text += gcores.htmlTagParse(block, media)
        })

        setPageTitle(data.data.attributes.title)
        gcores.dom.push(
            {
                title: data.data.attributes.title,
                url: url,
                pic_url: gcores.imageUrl+data.data.attributes.thumb,
                desc: data.data.attributes.desc,
                col_type: 'movie_1_vertical_pic_blur'
            },
            {
                col_type: 'line_blank'
            }
        )

        if (gcores.playlist.length > 0) {
            gcores.dom.push({
                title: '媒体资源',
                url: gcores.empty,
                col_type: 'text_1',
                extra: {
                    lineVisible: false
                },
            })
            gcores.playlist.forEach(item => {
                gcores.dom.push({
                    title: item.title,
                    url: item.url,
                    col_type: 'text_2',
                    // extra: {blockRules: ['.png','.jpg','.svg']}
                })
            })
            gcores.dom.push({
                col_type: 'line_blank'
            })
        }
        gcores.dom.push({
            title: text,
            col_type: 'rich_text'
        })

        setResult(gcores.dom);
    },
    videosDescParse: (id, url) => {
        const api_url = "https://www.gcores.com/gapi/v1/videos/"+id+"?include=category,user,media,djs,user.role,tags,entities,entries,similarities.user,similarities.djs,similarities.category,collections,operational-events.giveaways.winners,operational-events.public-candidates"
        const apiData = fetch(api_url, {headers: gcores.headers})
        const data = JSON.parse(apiData)
        let contentAndMedia = {blocks: [], entityMap: []}

        eval('contentAndMedia = '+data.data.attributes.content)
        // dom结构被转义报错
        // const contentAndMedia = JSON.parse(data.data.attributes.content.replace(/\\"/g, '"'))

        const content = contentAndMedia.blocks
        const media = contentAndMedia.entityMap

        let text = ''

        content.forEach(block => {
            text += gcores.htmlTagParse(block, media)
        })

        setPageTitle(data.data.attributes.title)
        gcores.dom.push(
            {
                title: data.data.attributes.title,
                url: url,
                pic_url: gcores.imageUrl+data.data.attributes.thumb,
                desc: data.data.attributes.desc,
                col_type: 'movie_1_vertical_pic_blur'
            },
            {
                col_type: 'line_blank'
            }
        )

        data.included.forEach(item => {
            if (item.type === 'medias') {
                gcores.dom.push({
                    title: '正片观看：',
                    url: gcores.empty,
                    col_type: 'text_1',
                    extra: {
                        lineVisible: false
                    },
                })
                gcores.dom.push({
                    title: item.attributes.title,
                    url: $(item.attributes.playlist).lazyRule(() => {
                        return JSON.parse(fetch(input)).m3u8
                    }),
                    col_type: 'text_2'
                })
            }
        })

        gcores.dom.push({
            col_type: 'line_blank'
        })

        if (gcores.playlist.length > 0) {
            gcores.dom.push({
                title: '媒体资源',
                url: gcores.empty,
                col_type: 'text_1',
                extra: {
                    lineVisible: false
                },
            })
            gcores.playlist.forEach(item => {
                gcores.dom.push({
                    title: item.title,
                    url: item.url,
                    col_type: 'text_2',
                    // extra: {blockRules: ['.png','.jpg','.svg']}
                })
            })
            gcores.dom.push({
                col_type: 'line_blank'
            })
        }
        gcores.dom.push({
            title: text,
            col_type: 'rich_text'
        })

        setResult(gcores.dom);
    },
    audiosDescParse: (id, url) => {
        const api_url = "https://www.gcores.com/gapi/v1/radios/"+id+"?include=category,user,media,djs,albums.album-bundles,user.role,tags,entities,entries,similarities.user,similarities.djs,similarities.category,collections,operational-events.giveaways.winners,operational-events.public-candidates"
        const apiData = fetch(api_url, {headers: gcores.headers})
        const data = JSON.parse(apiData)
        let contentAndMedia = {blocks: [], entityMap: []}

        eval('contentAndMedia = '+data.data.attributes.content)
        // dom结构被转义报错
        // const contentAndMedia = JSON.parse(data.data.attributes.content.replace(/\\"/g, '"'))

        const content = contentAndMedia.blocks
        const media = contentAndMedia.entityMap

        let text = ''

        content.forEach(block => {
            text += gcores.htmlTagParse(block, media)
        })

        setPageTitle(data.data.attributes.title)
        gcores.dom.push(
            {
                title: data.data.attributes.title,
                url: url,
                pic_url: gcores.imageUrl+data.data.attributes.thumb,
                desc: data.data.attributes.desc,
                col_type: 'movie_1_vertical_pic_blur'
            },
            {
                col_type: 'line_blank'
            }
        )

        data.included.forEach(item => {
            if (item.type === 'medias') {
                gcores.dom.push({
                    title: '电台播放：',
                    url: gcores.empty,
                    col_type: 'text_1',
                    extra: {
                        lineVisible: false
                    },
                })
                gcores.dom.push({
                    title: item.attributes.title,
                    url: item.attributes.audio.includes('http') ? item.attributes.audio : gcores.audioUrl+item.attributes.audio,
                    col_type: 'text_2'
                })
            }
        })

        gcores.dom.push({
            col_type: 'line_blank'
        })

        if (gcores.playlist.length > 0) {
            gcores.dom.push({
                title: '媒体资源',
                url: gcores.empty,
                col_type: 'text_1',
                extra: {
                    lineVisible: false
                },
            })
            gcores.playlist.forEach(item => {
                gcores.dom.push({
                    title: item.title,
                    url: item.url,
                    col_type: 'text_2',
                    // extra: {blockRules: ['.png','.jpg','.svg']}
                })
            })
            gcores.dom.push({
                col_type: 'line_blank'
            })
        }
        gcores.dom.push({
            title: text,
            col_type: 'rich_text'
        })

        setResult(gcores.dom);
    },
    albumsDescParse: (id, url) => {
        const page = url.split('$$')[1]
        if (parseInt(page) === 1) {
            const api_url = "https://www.gcores.com/gapi/v1/albums/"+id+"?include=sale-options,shop-item,album-bundles.sale-options,wallpapers"
            const apiData = fetch(api_url, {headers: gcores.headers})
            const data = JSON.parse(apiData)

            setPageTitle(data.data.attributes.title)
            gcores.dom.push(
                {
                    title: data.data.attributes.title,
                    url: url,
                    pic_url: gcores.imageUrl+data.data.attributes.cover,
                    desc: data.data.attributes.description,
                    col_type: 'movie_1_vertical_pic_blur'
                },
                {
                    col_type: 'line_blank'
                }
            )
        }

        const published_radios_url = "https://www.gcores.com/gapi/v1/albums/"+id+"/published-radios?page[limit]=16&page[offset]="+(page-1)*16+"&include=media,category,albums"
        const published_radios_api_data = fetch(published_radios_url, {headers: gcores.headers})
        const published_radios_data = JSON.parse(published_radios_api_data)

        published_radios_data.data.forEach(item => {
            if (item.type === 'radios') {
                published_radios_data.included.forEach(ra => {
                    if (item.relationships.media.data.id === ra.id) {
                        gcores.dom.push({
                            title: item.attributes.title,
                            pic_url: gcores.imageUrl+item.attributes.thumb,
                            url: item.attributes['is-free'] ? (ra.attributes.audio.includes('http') ? ra.attributes.audio : gcores.audioUrl+ra.attributes.audio) : 'toast://该资源为付费资源',
                            desc: item.attributes.desc,
                            col_type: 'movie_1_left_pic'
                        })
                    }
                })
            }
        })

        setResult(gcores.dom);
    },
}