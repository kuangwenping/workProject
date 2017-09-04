/**
 * Created by lenovo on 2017/6/23.
 */
//业载bui配置

//表格
    BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
        var Store = Data.Store,
            columns = [
                {title : '机场四字码',dataIndex :'a',editor : {xtype : 'text'},width:'13.2%',sortable:false}, //editor中的定义等用于 BUI.Form.Field.Text的定义
                {title : '成人重量', dataIndex :'b',editor : {xtype : 'number'},width:'13.2%'},
                {title : '成人重量',dataIndex :'c', editor : {xtype : 'number'},width:'13.2%'},
                {title : '婴儿重量',dataIndex :'d', editor : {xtype : 'number'},width:'13.2%'},
                {title : '行李重量（默认）',dataIndex :'e', editor : {xtype : 'number'},width:'13.2%'},
                {title : '行李重量（国内）',dataIndex :'f', editor : {xtype : 'number'},width:'13.2%'},
                {title : '行李重量（国际）',dataIndex :'g', editor : {xtype : 'number'},width:'13.2%'}
            ],
            data = [
                {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'},
                {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'},
                {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'},
                {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'},
                {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'},
                {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'},
                {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'}
            ];
        var editing = new Grid.Plugins.RowEditing(),
            store = new Store({
                data : data,
                autoLoad:true,
                pageSize:2,
            }),
            grid = new Grid.Grid({
                render:'#grid',
                width:'100%',//如果表格使用百分比，这个属性一定要设置
                columns : columns,
                idField : 'a',
                store : store,
                forceFit : false,
                stripeRows: false,
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

