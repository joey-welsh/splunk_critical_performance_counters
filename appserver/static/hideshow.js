require([
    "jquery",
    "splunkjs/ready!"
], function($) {
    // This is a comment

    $("div[id*='_value_']").hide();

    $("#more_cpu").click(function(){
        var is_visible = $("div[id^='cpu_value_']:visible").length > 0;
        if (is_visible){
            $(this).text("Show Metrics");
            $("div[id^='cpu_value_']").hide();
        } else {
            $(this).text("Hide Metrics");
            $("div[id^='cpu_value_']").show();
        }
    });
    $("#more_physical_disk").click(function(){
        var is_visible = $("div[id^='physical_disk_value_']:visible").length > 0;
        if (is_visible){
            $(this).text("Show Metrics");
            $("div[id^='physical_disk_value_']").hide();
        } else {
            $(this).text("Hide Metrics");
            $("div[id^='physical_disk_value_']").show();
        }
    });
    $("#more_memory").click(function(){
        var is_visible = $("div[id^='memory_value_']:visible").length > 0;
        if (is_visible){
            $(this).text("Show Metrics");
            $("div[id^='memory_value_']").hide();
        } else {
            $(this).text("Hide Metrics");
            $("div[id^='memory_value_']").show();
        }
    });
    $("#more_networking").click(function(){
        var is_visible = $("div[id^='networking_value_']:visible").length > 0;
        if (is_visible){
            $(this).text("Show Metrics");
            $("div[id^='networking_value_']").hide();
        } else {
            $(this).text("Hide Metrics");
            $("div[id^='networking_value_']").show();
        }
    });
    $("#more_paging_file").click(function(){
        var is_visible = $("div[id^='paging_file_value_']:visible").length > 0;
        if (is_visible){
            $(this).text("Show Metrics");
            $("div[id^='paging_file_value_']").hide();
        } else {
            $(this).text("Hide Metrics");
            $("div[id^='paging_file_value_']").show();
        }
    });
});
