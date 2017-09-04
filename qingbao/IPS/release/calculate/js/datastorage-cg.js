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
    select.render();
    select1.render();
    select2.render();
    select.on('change', function(ev){
    });
});

//table表格
BUI.use(['bui/grid','bui/data'],function(Grid,Data){
    var Store = Data.Store,
        columns = [
            {
                id: '123', width: '12.8%',dataIndex: 'add',
                renderer: function (value, obj) {
                    console.log(value);
                    if(value){
                        return '<div class="icon_add">+</div>';
                    }else{
                        return '<div class="icon_minus">—</div>';
                    }
                }
            },
            {title: '序号', dataIndex: 'a', width: '9.5%'},
            {title: '文件', dataIndex: 'b', width: '19.5%'},
            {title: '导入人', dataIndex: 'a', width: '7.2%'},
            {title: '数据对比处理', dataIndex: 'd', width: '7.2%'},
            {title: '数据校核', dataIndex: 'a', width: '7.2%'},
            {title: '完成时间', dataIndex: 'a', width: '7.2%'},
            {title: '走起生效日', dataIndex: 'a', width: '7.2%'},
            {title: '数据切换', dataIndex: 'a', width: '7.2%'},
            {title: '切换时间', dataIndex: 'a', width: '15%'},
            {title: '操作人', dataIndex: 'a', width: '15%'},
        ],
        data = [{a: '123', b: 'edd',add:true}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2}];
    var store = new Store({
            data : data
        }),
        grid = new Grid.Grid({
            render: '#grid',
            width:'100%',//如果表格使用百分比，这个属性一定要设置
            columns : columns,
            idField : 'a',
            store : store,
            elCls:"olde"
        });

    grid.render();
});