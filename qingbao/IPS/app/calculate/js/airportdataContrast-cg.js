/**
 * Created by lenovo on 2017/7/5.
 */
/**
 * Created by lenovo on 2017/7/3.
 */
BUI.use(['bui/toolbar','bui/data'],function(Toolbar,Data){
    var NumerPBar = Toolbar.NumberPagingBar,
        Store = Data.Store;
    var data = [{},{},{},{},{}];
    var store = new Store({
            data:data,
            autoLoad:true,
            pageSize : 1
        }),
        bar = new NumerPBar({
            render : '#bar',
            autoRender: true,
            elCls : 'pagination',
            store : store
        });
});

//下拉多选
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

    select.on('change', function(ev){
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

    grid.render();
});
