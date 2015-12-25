<result-table>
<div class="row">
    <div class="columns">
        <table class="ui-full-width" if={ show }>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Calories</th>
                    <th>Total Fat</th>
                    <th>Serving Unit</th>
                    <th>Serving Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr each={ list }>
                    <td>{ item_name }</td>
                    <td>{ brand_name }</td>
                    <td>{ nf_calories }</td>
                    <td>{ nf_total_fat }</td>
                    <td>{ nf_serving_size_unit }</td>
                    <td>{ nf_serving_size_qty }</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
<script>
    var me = this;
    me.show = false;
    this.opts.bus.on("data-available",function(data){
        me.list = data;
        me.show = true;
        me.update();
    });
</script>
</result-table>