/**
 * Created by lenovo on 2017/7/3.
 */
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
                    return '<span class="grid-command btn1"> <i class="ips-ui-icon ui-icon-insert-up"></i></span><span class="grid-command "> <i class="ips-ui-icon ui-icon-insert-dw"></i></span> <span class="grid-command btn2"><i class="ips-ui-icon ui-icon-del"></i></span>';
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
            store : store,
            elCls:"olde"
        });

    grid.render();
});

//tab切换
new Tabs({
    tabWap:$('#J-tabWap'),
},function(val){
    $('#J-content').children('[data-val]').each(function(i,v){
        if($(v).attr('data-val') === val){
            $(v).addClass('active').siblings('.active').removeClass('active');
        }
    });
});

//打开左侧搜索表单
new changSearch({
    targetEl : $('#J-searchForm'),
    brotherEl : $('#J-resultWrp'),
    taggelBtn : $('#J-tagglebtn'),
    searchBtn : $('.j-search')
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