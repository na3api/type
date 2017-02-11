/*
window._ = require('lodash');

window.$ = window.jQuery = require('jquery');

require('bootstrap-sass');


*/

import {RealtimeInterface} from "./Interfaces/RealtimeInterface";
import './Imports/Import';



$("button.continue").html( "Next Step..." );

$("button.continue").on('click', function(){
     $('#myModal').modal('show');
});