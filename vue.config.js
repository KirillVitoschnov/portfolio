module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/portfolio/dist/'
        : './',
    css:{
        loaderOptions:{
            sass:{
                prependData:'@import"@/assets/styles.scss;"'
            }
        }
    }
}
