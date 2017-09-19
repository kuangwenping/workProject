/**
 * Created by lenovo on 2017/6/29.
 */
//下拉多选
BUI.use('bui/select',function(Select){
    var items = [
            {text:'选项1',value:'a',},
            {text:'选项2',value:'b'},
            {text:'选项3',value:'c'}
        ],
        select = new Select.Select({
            render:'#s1',
            valueField:'#hide',
            items:items,
            disabled:true,
        });
    select.render();
    select.on('change', function(ev){
    });
});

//table表格
BUI.use(['bui/grid','bui/data'],function(Grid,Data){
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
            render:'#detailsData',
            width:'100%',//如果表格使用百分比，这个属性一定要设置
            columns : columns,
            idField : 'a',
            store : store
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
},function(){
    alert();
});

//配置下拉滚动条
$('.bui-select-list').mCustomScrollbar({
    axis:'y',
    theme:'dark',
    setHeight:200
});

//设置表格滚动
$('.bui-grid-body').mCustomScrollbar({
    axis:'y',
    theme:'dark',
});