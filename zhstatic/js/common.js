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
        });

        $('#timeStart').datetimepicker({
            lang: 'ch',
            step: '30',
            format: 'Y-m-d H:i',
            formatDate: 'Y-m-d H:i',
            minDate: '-1970-01-01',
            scrollInput: false,
            validateOnBlur: false,
            onShow: function (ct) {
                this.setOptions({
                    maxDate: $('#timeEnd').val() ? $('#timeEnd').val() : false
                })
            }
            //maxDate:'+1970-01-01' // and tommorow is maximum date calendar
            //yearStart: 2016,     //设置最小年份
            //yearEnd: 2050,        //设置最大年份
        });
        $('#timeEnd').datetimepicker({
            lang: 'ch',
            step: '30',
            format: 'Y-m-d H:i',
            formatDate: 'Y-m-d H:i',
            minDate: '-1970-01-01',
            yearStart: 2016,     //设置最小年份
            yearEnd: 2050,        //设置最大年份
            scrollInput: false,
            validateOnBlur: false,
            onShow: function (ct) {
                this.setOptions({
                    minDate: $('#timeStart').val() ? $('#timeStart').val() : false
                })
            }
        });
    }
};
common.init();