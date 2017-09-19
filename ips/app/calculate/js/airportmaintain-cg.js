/**
 * Created by lenovo on 2017/6/26.
 */
 //下拉多选
BUI.use('bui/select',function(Select){
    var items = [
            {text:'选项1',value:'a'},
            {text:'选项2',value:'b'},
            {text:'选项3',value:'c'},
            {text:'选项3',value:'c'},
            {text:'选项3',value:'c'},
            {text:'选项3',value:'c'},
            {text:'选项3',value:'c'},
            {text:'选项3',value:'c'},
            {text:'选项3',value:'c'},
            {text:'选项3',value:'c'},
            {text:'选项3',value:'c'},
            {text:'选项3',value:'c'},
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
    select.render();
    select1.render();
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
         data = [
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},
             {a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2}
         ];

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

//分页
BUI.use(['bui/toolbar','bui/data'],function(Toolbar,Data){
    var NumerPBar = Toolbar.NumberPagingBar,
        Store = Data.Store;
    var data = [{},{},{},{},{},{},{},];
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

BUI.use(['bui/form','bui/tooltip'],function(Form,Tooltip){

    new Form.Form({
        srcNode : '#J_Form1'
    }).render();

    new Form.Form({
        srcNode : '#J_Form',
        errorTpl : '<span class="x-icon x-icon-small x-icon-error" data-title="{error}">!</span>'
    }).render();

    //不使用模板的，左侧显示
    var tips = new Tooltip.Tips({
        tip : {
            trigger : '.x-icon-error', //出现此样式的元素显示tip
            alignType : 'top', //默认方向
            elCls : 'tips tips-warning tips-no-icon tip1',
            offset : 10 //距离左边的距离
        }
    });
    tips.render();
});

