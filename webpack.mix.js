const mix = require('laravel-mix')
const fs = require('fs')

const rootPath = process.env.NODE_ENV === 'development' ? './' : '/public/static/admin/vue/'

const deleteFile = path => {
    let files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            let curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) {
                deleteFile(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

if (process.env.NODE_ENV !== 'development') deleteFile('public/js')

mix.js('src/app.js', 'public/js')
/*mix.styles([
    'node_modules/quill/dist/quill.core.css',
    'node_modules/quill/dist/quill.snow.css',
    'node_modules/quill/dist/quill.bubble.css',
], 'public/css/app.css')*/
mix.setPublicPath('public')
mix.webpackConfig({
    output: {
        publicPath: rootPath,
        chunkFilename: /*process.env.NODE_ENV === 'development' ? 'js/[name].js' : */'js/[name].[chunkhash].js',
    }
})
mix.setResourceRoot(rootPath)
// .extract(['vue', 'axios', 'element-ui', 'vue-quill-editor', 'vuedraggable', 'quill', 'dayjs'])
mix.sourceMaps()
