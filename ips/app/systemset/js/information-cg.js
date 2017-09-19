/**
 * Created by lenovo on 2017/6/29.
 *///表格
BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
    var Store = Data.Store,
        columns = [
            {title : '序号',dataIndex :'a',width:'10%'},
            {title : '标题', dataIndex :'b',width:'60%'},
            {title : '发布时间',dataIndex :'c',width:'20%'},
            {title : '状态',dataIndex :'e',width:'10%'},
        ],
        data = [
            {a:'1',b:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',c:'徐丹',d:'2017-12-15',e:'已读'},
            {a:'1',b:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',c:'徐丹',d:'2017-12-15',e:'已读'},
            {a:'1',b:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',c:'徐丹',d:'2017-12-15',e:'已读'},
            {a:'1',b:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',c:'徐丹',d:'2017-12-15',e:'已读'},
        ];
    var store = new Store({
            data : data,
            autoLoad:true,
            pageSize:1,
        }),
        grid = new Grid.Grid({
            render:'#grid',
            width:'100%',//如果表格使用百分比，这个属性一定要设置
            columns : columns,
            store : store,
            forceFit : false,
        });

    var bar = new Toolbar.NumberPagingBar({
        render : '#bar',
        elCls : 'pagination pull-right',
        store : store
    });
    bar.render();
    grid.render();
});

//配置下拉滚动条
$('.bui-list-picker').mCustomScrollbar({
    axis:'y',
    theme:'dark',
    setHeight:200
});

//设置表格滚动
$('.bui-grid-body').mCustomScrollbar({
    axis:'y',
    theme:'dark',
});