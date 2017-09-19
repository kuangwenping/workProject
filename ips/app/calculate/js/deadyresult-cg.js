/**
 * Created by lenovo on 2017/6/26.
 */
BUI.use(['bui/grid','bui/data'],function(Grid,Data){
    var Store = Data.Store,
        columns = [
            {title : '机型',dataIndex :'a',width:'14%'},
            {title : '月份', dataIndex :'b',width:'7%'},
            {title : '温度',dataIndex :'c', width:'7%'},
            {title : '起飞限量',dataIndex :'d', width:'9%'},
            {title : '平均载量',dataIndex :'e', width:'9%'},
            {title : '航程时间',dataIndex :'f', width:'9%'},
            {title : '航程总油',dataIndex :'g', width:'9%'},
            {title : '空中耗油',dataIndex :'g', width:'9%'},
            {title : '航线载量',dataIndex :'g', width:'9%'},
            {title : '可载人数',dataIndex :'g', width:'9%'},
            {title : '可载货量',dataIndex :'g', width:'9%'}
        ],

        columns2 = [
            {title : '机场',dataIndex :'a',width:'17%'},
            {title : '公布运行时间', dataIndex :'b',width:'17%'},
            {title : 'ILS',dataIndex :'c', width:'17%'},
            {title : '备注',dataIndex :'d', width:'50%'},
        ],

        data = [
            {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'},
            {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'},
            {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'}
        ];

    var store = new Store({
            data : data,
            autoLoad:true,
            pageSize:5,
        }),

        grid = new Grid.Grid({
            render:'#detailsTable',
            width:'100%',//如果表格使用百分比，这个属性一定要设置
            columns : columns,
            idField : 'a',
            store : store,
            forceFit : false,
            stripeRows: false,
        });

        grid1 = new Grid.Grid({
            render:'#briefTable',
            width:'100%',//如果表格使用百分比，这个属性一定要设置
            columns : columns2,
            idField : 'a',
            store : store,
            forceFit : false,
            stripeRows: false,
        });

    grid.render();
    grid1.render();
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