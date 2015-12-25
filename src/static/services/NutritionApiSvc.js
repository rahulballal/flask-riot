"use strict";
var $ = $ || {};

var NutritionApi = (function($){
    return {
        findNutritionData : function(term){
            var url = "search/" + term;
            return $.getJSON(url);
        }
    }
})($);