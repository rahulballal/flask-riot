riot.tag2('result-table', '<div class="row"> <div class="columns"> <table class="ui-full-width" if="{show}"> <thead> <tr> <th>Name</th> <th>Brand</th> <th>Calories</th> <th>Total Fat</th> <th>Serving Unit</th> <th>Serving Quantity</th> </tr> </thead> <tbody> <tr each="{list}"> <td>{item_name}</td> <td>{brand_name}</td> <td>{nf_calories}</td> <td>{nf_total_fat}</td> <td>{nf_serving_size_unit}</td> <td>{nf_serving_size_qty}</td> </tr> </tbody> </table> </div> </div>', '', '', function(opts) {
    var me = this;
    me.show = false;
    this.opts.bus.on("data-available",function(data){
        me.list = data;
        me.show = true;
        me.update();
    });
}, '{ }');
riot.tag2('search-bar', '<div id="search" class="row"> <div class="eight columns"> <input id="tb-search" type="text" placeholder="What you want to eat ?" class="u-full-width" onkeyup="{valueEntered}"> </div> <div class="four columns"> <button id="btn-search" onclick="{loadData}">Find Nutrition Info</button> </div> </div>', '', '', function(opts) {
    this.searchTerm = "";

    this.loadData = function(){
        opts.api
        .findNutritionData(this.searchTerm)
        .done(function(payload){
            opts.bus.trigger("data-available",payload);
        });
    }
    this.valueEntered = function(e){
        this.searchTerm = e.target.value;
        console.log(this.searchTerm);
    }
}, '{ }');