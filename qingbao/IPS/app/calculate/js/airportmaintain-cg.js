/**
 * Created by lenovo on 2017/6/26.
 */
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
