"use strict";
var $ = $ || {};

var NutritionApi = (function($){
    return {
        findNutritionData : function(term){
            var url = "http://localhost:5000/search/" + term;
            return $.getJSON(url);
        }
    }
})($);