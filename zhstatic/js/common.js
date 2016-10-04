requirejs.config({
    //baseUrl: './',
    //urlArgs: "version=" + new Date().getTime(),
    paths: {
        jquery: 'lib/jquery.min',
        wangEditor: 'lib/wangEditor/js/wangEditor'
        //pagination: 'vendor/jquery.page',
        //remodal: 'vendor/remodal',
        //tab: 'vendor/jquery.tab',
        //echarts: 'vendor/echarts.min',
        //datepicker: 'vendor/jquery.datetimepicker',
        //carousel: 'vendor/jquery.carousel',
        //footer: 'vendor/locateFooter',
        //Validform: 'vendor/Validform',
    },
    shim: {
        //'editor': {
        //    deps: ['jquery'],
        //    exports: 'wangEditor'
        //},
    }
});

define(["jquery"], function () {

});