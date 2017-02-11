/*
window._ = require('lodash');

window.$ = window.jQuery = require('jquery');

require('bootstrap-sass');


*/
"use strict";
require("./Imports/Import");
$("button.continue").html("Next Step...");
$("button.continue").on('click', function () {
    $('#myModal').modal('show');
});
