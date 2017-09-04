/**
 * Created by lenovo on 2017/7/6.
 */
/**
 * Created by lenovo on 2017/7/6.
 */
//下拉选择
BUI.use('bui/select',function(Select){
    var items = [
            {text:'选项1',value:'a'},
            {text:'选项2',value:'b'},
            {text:'选项3',value:'c'}
        ],
        select = new Select.Select({
            render:'#s1',
            valueField:'#hide',
            items:items
        });

    select1 = new Select.Select({
        render:'#s2',
        valueField:'#hide',
        items:items
    });
    select2 = new Select.Select({
        render:'#s3',
        valueField:'#hide',
        items:items
    });

    select3 = new Select.Select({
        render:'#s4',
        valueField:'#hide',
        items:items
    });
    select4 = new Select.Select({
        render:'#s5',
        valueField:'#hide',
        items:items
    });

    select5 = new Select.Select({
        render:'#s6',
        valueField:'#hide',
        items:items
    });
    select6 = new Select.Select({
        render:'#s7',
        valueField:'#hide',
        items:items
    });
    select7 = new Select.Select({
        render:'#s8',
        valueField:'#hide',
        items:items
    });

    select8 = new Select.Select({
        render:'#s9',
        valueField:'#hide',
        items:items
    });

    select9 = new Select.Select({
        render:'#s10',
        valueField:'#hide',
        items:items
    });

    select10 = new Select.Select({
        render:'#s11',
        valueField:'#hide',
        items:items
    });
    select11 = new Select.Select({
        render:'#s12',
        valueField:'#hide',
        items:items
    });
    select12 = new Select.Select({
        render:'#s13',
        valueField:'#hide',
        items:items
    });
    select13 = new Select.Select({
        render:'#s14',
        valueField:'#hide',
        items:items
    });
    select14 = new Select.Select({
        render:'#s15',
        valueField:'#hide',
        items:items
    });
    select15 = new Select.Select({
        render:'#s16',
        valueField:'#hide',
        items:items
    });
    select16 = new Select.Select({
        render:'#s17',
        valueField:'#hide',
        items:items
    });
    select17 = new Select.Select({
        render:'#s18',
        valueField:'#hide',
        items:items
    });
    select18= new Select.Select({
        render:'#s19',
        valueField:'#hide',
        items:items
    });

    select.render();
    select1.render();
    select2.render();
    select3.render();
    select4.render();
    select5.render();
    select6.render();
    select7.render();
    select8.render();
    select9.render();
    select10.render();
    select11.render();
    select12.render();
    select13.render();
    select14.render();
    select15.render();
    select16.render();
    select17.render();
    select18.render();

    select.on('change', function(ev){
    });
});
//日历
//日历
BUI.use('bui/calendar',function(Calendar){
    var datepicker = new Calendar.DatePicker({
        trigger:'.calendar',
        showTime:true,
        autoRender : true
    });
});
/**
 * Created by lenovo on 2017/7/6.
 */
