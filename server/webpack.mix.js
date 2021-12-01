const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

// mix.browserSync('http://localhost:80')
//     .js('resources/js/app.js', 'public/js')
//     .vue()
//     .sass('resources/sass/app.scss', 'public/css')
//     .version();

// const mix = require("laravel-mix");
mix.browserSync('http://localhost:80')
    .ts("resources/js/app.ts", "public/js")
    .vue({ version: 3 })
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js')]
    })
    .version();
