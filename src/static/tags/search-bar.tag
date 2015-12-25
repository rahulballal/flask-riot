<search-bar>
<div id="search" class="row">
    <div class="eight columns">
        <input id="tb-search" type="text" placeholder="What you want to eat ?" class="u-full-width" onkeyup={ valueEntered }>
    </div>
    <div class="four columns">
        <button id="btn-search" onclick={ loadData }>Find Nutrition Info</button>
    </div>
</div>
<script>
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
</script>
</search-bar>