/**
 * Created by DAY on 16/10/5.
 */
var common = {
    init: function(){
        this.initDatePicker();
    },
    initDatePicker: function() {
        $('#dateStart').datetimepicker({
            lang: 'ch',
            timepicker: false,
            format: 'Y-m-d',
            formatDate: 'Y-m-d',
            scrollInput: false,
            validateOnBlur: false,
            onShow: function (ct) {
                this.setOptions({
                    maxDate: $('#dateEnd').val() ? $('#dateEnd').val() : '+1970-01-01'
                })
            },
            // minDate:'-1970-01-01',

            //yearStart: 2016,     //设置最小年份
            //yearEnd: 2050,        //设置最大年份
        });
        $('#dateEnd').datetimepicker({
            lang: 'ch',
            timepicker: false,
            format: 'Y-m-d',
            formatDate: 'Y-m-d',
            scrollInput: false,
            validateOnBlur: false,
            maxDate: '+1970-01-01',
            onShow: function (ct) {
                this.setOptions({
                    minDate: $('#dateStart').val() ? $('#dateStart').val() : '+1970-01-01'
                })
            }
        })
    }
};
common.init();