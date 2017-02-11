const elixir = require('laravel-elixir');
// import the dependency
require('laravel-elixir-typescript');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
        .webpack('app.ts', 'public/js/app.js', "resources/assets/typescript")
        .version([
            'css/app.css',
            'js/app.js'
        ]);
});
