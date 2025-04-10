const { purgeCSSPlugin } = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        purgeCSSPlugin({
            content: ['./**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
        })
    ]
}