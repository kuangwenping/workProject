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

    select19 = new Select.Select({
        render:'#s20',
        valueField:'#hide',
        items:items
    });

    select20 = new Select.Select({
        render:'#s21',
        valueField:'#hide',
        items:items
    });

    select21 = new Select.Select({
        render:'#s22',
        valueField:'#hide',
        items:items
    });
    select22 = new Select.Select({
        render:'#s23',
        valueField:'#hide',
        items:items
    });

    select23 = new Select.Select({
        render:'#s24',
        valueField:'#hide',
        items:items
    });
    select24 = new Select.Select({
        render:'#s25',
        valueField:'#hide',
        items:items
    });

    select25 = new Select.Select({
        render:'#s26',
        valueField:'#hide',
        items:items
    });
    select26 = new Select.Select({
        render:'#s27',
        valueField:'#hide',
        items:items
    });
    select27 = new Select.Select({
        render:'#s28',
        valueField:'#hide',
        items:items
    });

    select28 = new Select.Select({
        render:'#s29',
        valueField:'#hide',
        items:items
    });

    select29 = new Select.Select({
        render:'#s30',
        valueField:'#hide',
        items:items
    });

    select30 = new Select.Select({
        render:'#s31',
        valueField:'#hide',
        items:items
    });
    select31 = new Select.Select({
        render:'#s32',
        valueField:'#hide',
        items:items
    });
    select32 = new Select.Select({
        render:'#s33',
        valueField:'#hide',
        items:items
    });
    select33 = new Select.Select({
        render:'#s34',
        valueField:'#hide',
        items:items
    });
    select34 = new Select.Select({
        render:'#s35',
        valueField:'#hide',
        items:items
    });
    select35 = new Select.Select({
        render:'#s36',
        valueField:'#hide',
        items:items
    });
    select36 = new Select.Select({
        render:'#s37',
        valueField:'#hide',
        items:items
    });
    select37 = new Select.Select({
        render:'#s38',
        valueField:'#hide',
        items:items
    });
    select37= new Select.Select({
        render:'#s38',
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

    select19.render();
    select20.render();
    select21.render();
    select22.render();
    select23.render();
    select24.render();
    select25.render();
    select26.render();
    select27.render();
    select28.render();
    select29.render();
    select30.render();
    select31.render();
    select32.render();
    select33.render();
    select34.render();
    select35.render();
    select36.render();
    select37.render();

    select.on('change', function(ev){
    });
});

//日历
BUI.use('bui/calendar',function(Calendar){
    var datepicker = new Calendar.DatePicker({
        trigger:'.calendar',
        showTime:true,
        autoRender : true
    });
});

//table表格
BUI.use(['bui/grid','bui/data'],function(Grid,Data){
    var Store = Data.Store,
        columns = [
            {title: '类别', dataIndex: 'a', width: '9.5%'},
            {title: '项目名称', dataIndex: 'b', width: '19.5%'},
            {title: '项目编号', dataIndex: 'a', width: '7.2%'},
            {title: '单位重量', dataIndex: 'd', width: '7.2%'},
            {title: '数量', dataIndex: 'a', width: '7.2%'},
            {title: '总重量', dataIndex: 'a', width: '7.2%'},
            {title: '力臂', dataIndex: 'a', width: '7.2%'},
            {title: '力矩', dataIndex: 'a', width: '7.2%'},
            {title: '备注', dataIndex: 'a', width: '15%'},
            {
                id: '123', title: '操作', dataIndex: 'a', width: '12.8%',
                renderer: function (value, obj) {
                    return '<span class="grid-command btn1"> <i class="ui-icon ui-icon-insert-up"></i></span><span class="grid-command "> <i class="ui-icon ui-icon-insert-dw"></i></span> <span class="grid-command btn2"><i class="ui-icon ui-icon-del"></i></span>';
                }
            },
        ],
        data = [{a: '123', b: 'edd'}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2}];
    var store = new Store({
            data : data
        }),
        grid = new Grid.Grid({
            render: '#grid',
            width:'100%',//如果表格使用百分比，这个属性一定要设置
            columns : columns,
            idField : 'a',
            store : store
        });

    grid1 = new Grid.Grid({
        render: '#grid1',
        width:'100%',//如果表格使用百分比，这个属性一定要设置
        columns : columns,
        idField : 'a',
        store : store
    });

    grid.render();
    grid1.render();
});
