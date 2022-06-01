const theStream = {
    d: [],
    empty: 'hiker://empty',
    streamNameList: [
        {title: '斗鱼', key: 'douyu',},
        {title: '虎牙', key: 'huya',},
    ],
    streamKey: getItem('TyrantGenesis.theStream.streamKey', 'douyu'),
    baseParse: () => {
        addListener('onClose', $.toString(() => {
            clearItem('TyrantGenesis.theStream.streamKey')
            clearItem('TyrantGenesis.theStream.FirstCate')
            clearItem('TyrantGenesis.theStream.SecondCate')
        }))
        const page = MY_URL.split('##')[1]
        if (page === '1') {
            theStream.d.push({
                title: 'Search',
                col_type: 'icon_1_search',
            })
            theStream.d.push({
                title: '⚙',
                col_type: 'scroll_button',
            })
            theStream.streamNameList.forEach((stream, index) => {
                theStream.d.push({
                    title: theStream.streamKey === stream.key ? '‘‘’’<b><span style="color: #FF0000">'+stream.title+'</span></b>' : stream.title,
                    url: $(theStream.empty).lazyRule((key) => {
                        setItem('TyrantGenesis.theStream.streamKey', key)
                        refreshPage(true)
                        return 'hiker://empty'
                    }, stream.key),
                    col_type: 'scroll_button',
                })
            })
            theStream.d.push({
                col_type: 'blank_block',
            })
            theStream.categoryLoad()
        }
        theStream.baseParseLoad(page)
        setResult(theStream.d);
    },
    categoryLoad: () => {
        switch (theStream.streamKey) {
            case 'douyu':
            {
                $.require('hiker://page/douyu').categoryLoad(theStream.d)
            }
        }
    },
    baseParseLoad: (page) => {
        switch (theStream.streamKey) {
            case 'douyu':
            {
                $.require('hiker://page/douyu').baseParseLoad(theStream.d, page)
            }
        }
    },
}

$.exports = theStream
