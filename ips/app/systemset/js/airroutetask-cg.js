//表格
BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
    var Store = Data.Store,
        columns = [
            {title : '任务详情',dataIndex :'a',width:'38.77%'},
            {title : '双校核',width:'20.57%',renderer : function(value,obj){
                return '<form class="ui-form">'+
                ' <div class="ui-val">'+
                ' <label for="defaultVal" class="radio-wrp ui-radio">'+
                ' <input type="radio" id="defaultVal">'+
                ' </label>是'+
                ' </div>'+
                '<div class="ui-val">'+
                '<label for="historyVal" class="radio-wrp select ui-radio">'+
                '<input type="radio" id="historyVal">'+
                '</label>否'+
                '</div>'+
                '</form>'
            }},
            {title : '发布时间',dataIndex :'c',width:'14.48%'},
            {title : '操作',dataIndex :'d', width:'25%',renderer : function (value,obj) {
                return '<span class="grid-command btn1" id="editorBtn"> <i class="ips-ui-icon ui-icon-editor"></i>编辑</span><span class="grid-command btn2"><i class="ips-ui-icon ui-icon-del1"></i>删除</span>';
            }},
        ],
        data = [
            {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
            {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
        ];
    var editing = new Grid.Plugins.CellEditing({
            triggerSelected : false //触发编辑的时候不选中行
        }),
        store = new Store({
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
            plugins : [editing,Grid.Plugins.CheckSelection],
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