const elixir = require('laravel-elixir');
// import the dependency
var elixirTypscript = require('elixir-typescript');

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
        .typescript('app.ts')
        .version([
            'css/app.css',
            'js/app.js'
        ]);
});
