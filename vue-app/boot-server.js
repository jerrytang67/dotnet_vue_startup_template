let prerenderer = require('aspnet-prerendering')

module.exports = prerenderer.createServerRenderer(
    (parames) => {
    return new Promise((resolve, reject) => {
        console.log(parames);

        let something = 2 * 2
        resolve({
            html: `<h1>Hello world ${something}</h1>`
        })
    })
})