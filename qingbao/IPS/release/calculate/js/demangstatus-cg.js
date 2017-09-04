
//table表格
BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
    var Store = Data.Store,
        columns = [
            {title : '表头1',dataIndex :'a'},
            {id: '123',title : '表头2',dataIndex :'b' },
            {title : '表头3',dataIndex : 'c'}
        ],
        data = [{a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2}];

    var store = new Store({
            data : data
        }),
        grid = new Grid.Grid({
            render:'#remangResult',
            width:'100%',//如果表格使用百分比，这个属性一定要设置
            columns : columns,
            idField : 'a',
            store : store
        });
    //分页
    var bar = new Toolbar.NumberPagingBar({
        render : '#bar',
        elCls : 'pagination pull-right',
        store : store
    });
    bar.render();


    grid.render();
});

//分页