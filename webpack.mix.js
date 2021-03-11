const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');


// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);
mix.js('resources/js/main.js', 'public/js');
mix.sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls : false,
        postCss : [tailwindcss('./tailwind.config.js')],
    });
