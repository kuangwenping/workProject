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
            /*{
                id: '123', width: '12.8%',dataIndex: 'add',
                renderer: function (value, obj) {
                    if(value){
                        return '<div class="icon_add">+</div>';
                    }else{
                        return '<div class="icon_minus">—</div>';
                    }
                }
            },*/
            {title: '序号', dataIndex: 'a', width: '9.5%',},
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
        /*data = [
                {a: '123', b: 'edd'}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2},
                {a: '123', b: 'edd'}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2},
                {a: '123', b: 'edd'}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2}
            ];*/
    data = [
        {a:'123',records:[{a:'123'},{b:'2334'}]},
        {a:'cdd',b:'edd',records:[{a:'123'},{b:'2334'}]},
        {a:'1333',c:'eee',d:2,records:[{a:'123'},{b:'2334'}]}
        ]
    var store = new Store({
            data : data
        }),

    cascade = new Grid.Plugins.Cascade({
        renderer : function(record){
            console.log(record);
            return '<div class="inner-grid"></div>';
        }
    }),

        grid = new Grid.Grid({
            render: '#grid',
            width:'100%',//如果表格使用百分比，这个属性一定要设置
            columns : columns,
            idField : 'a',
            store : store,
            elCls:"olde",
            plugins : [cascade],
        });
    grid.render();

    cascade.on('expand',function(ev){

        var data = ev.record,
            row = ev.row,
            sgrid = $(row).data('sub-grid'),
            cascade = new Grid.Plugins.Cascade({
                renderer : function(record){
                    console.log(record);
                    return '<div class="inner-grid"></div>';
                }
            });
        if(!sgrid){
          var columns = [
              { dataIndex: 'a', width: '9.5%',},
              { dataIndex: 'b', width: '19.5%'},
              { dataIndex: 'a', width: '7.2%'},
              { dataIndex: 'd', width: '7.2%'},
              { dataIndex: 'a', width: '7.2%'},
              { dataIndex: 'a', width: '7.2%'},
              { dataIndex: 'a', width: '7.2%'},
              { dataIndex: 'a', width: '7.2%'},
              { dataIndex: 'a', width: '15%'},
              { dataIndex: 'a', width: '15%'},
          ];
            var container = $(row).find('.inner-grid');
            var store = new Store({
                    data : data.records
                }),
            grid1 = new Grid.Grid({
                render: container,
                width:'100%',//如果表格使用百分比，这个属性一定要设置
                columns : columns,
                //idField : 'a',
                store : store,
                plugins : [cascade],
              //  elCls:"olde",
            });
            grid1.render();
                /*gridConfig = BUI.cloneObject(simpleGridConfig);
            gridConfig.render = container;

            sgrid = new Grid.SimpleGrid(gridConfig);
            sgrid.showData(data.records);
            $(row).data('sub-grid',sgrid);*/
        }
    });
});
/*
BUI.use(['bui/grid','bui/data'],function(Grid,Data){
    var Grid = Grid,
        Store = Data.Store,
        columns = [{
            title : '表头1',
            dataIndex :'a',
            width:100
        },{
            title : '表头2',
            dataIndex :'b',
            width:200
        },{
            title : '表头3',
            dataIndex : 'c',
            width:200
        }],

        data = [{a:'123',detail:'Samsung/三星Chromebook 11.6寸双核笔记本 美国代购Samsung/三星Chromebook 11.6寸双核笔记本 美国代购Samsung/三星Chromebook 11.6寸双核笔记本 美国代购'},
            {a:'cdd',b:'edd',detail:'详情、详情'},
            {a:'cdd',b:'edd',detail:'详情、详情'},
            {a:'cdd',b:'edd',detail:'详情、详情'},
            {a:'cdd',b:'edd',detail:'详情、详情'},
            {a:'cdd',b:'edd',detail:'详情、详情'},
            {a:'1333',c:'eee',d:2,detail:'jix'}];

    // 实例化 Grid.Plugins.Cascade 插件
    var cascade = new Grid.Plugins.Cascade({
        renderer : function(record){
            return '<div style="padding: 10px 20px;"><h2>详情信息</h2><p>' + record.detail + '</p></div>';
        }
    });
    var store = new Store({
            data : data,
            autoLoad:true
        }),
        grid = new Grid.Grid({
            render:'#grid',
            columns : columns,
            idField : 'a',
            store: store,
            plugins: [cascade]	// Grid.Plugins.Cascade 插件
        });

    grid.render();
});*/
