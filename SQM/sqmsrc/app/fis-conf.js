fis
    .set('live', '../live')
    .set('release', '../release')
fis
    .hook('relative')
    .match('**.styl', {
        rExt: '.css',
        useHash: false,
        optimizer: fis.plugin('clean-css'),
        preprocessor: fis.plugin('autoprefixer', {
            "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 7", "firefox >= 15"],
            "cascade": true
        }),
        parser: fis.plugin('stylus', {
            sourcemap: false
        })
    })
    .match('**', { relative: true })
    .match('**', {
        deploy: [
            fis.plugin('local-deliver', {
                to: fis.get('live')
            })
        ]
    });
/**
 * APP发布
 */
fis.media('pro')
    .match('**', {
        deploy: [
            fis.plugin('local-deliver', {
                to: fis.get('release')
            })
        ]
    });
