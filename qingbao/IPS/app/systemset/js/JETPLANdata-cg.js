

/**
 * Created by lenovo on 2017/7/5.
 */

//tab切换
BUI.use('bui/tab',function(Tab){
    var tab = new Tab.Tab({
        render : '#tab',
        elCls : 'nav-tabs',
        autoRender: true,
        children:[
            {text:'公司航线',value:'1'},
            {text:'备降场',value:'2'},
            {text:'飞机数据',value:'3'}
        ]
    });
    tab.on('selectedchange',function (ev) {
        var item = ev.item;
        console.log(item)
        $('#log').html("<div class='table-thunk margin-b table-thunk-check' id='grid'></div><p>"+item.get('text')+"</p><div class='float-r pages-thunk' id='bar'></div>");
    });

    tab.setSelected(tab.getItemAt(0));
});

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
            {a:'ADTG',b:'34',c:'34',d:'34',e:'34',f:'34',g:'34'}
        ];
    var editing = new Grid.Plugins.RowEditing(),
        store = new Store({
            data : data,
            autoLoad:true,
            pageSize:5,
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





//弹框
BUI.use('bui/overlay',function(Overlay){
    var newaddInform = new Overlay.Dialog({
        title:'新增通知',
        width:746,
        height:570,
        buttons:[{
            text:'确定',
            elCls : 'ui-btn ui-btn-full ui-btn-narrow',
            handler : function(){
                //do some thing
                this.close();
            }},
            {
                text:'取消',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    //do some thing
                    this.close();
                }}
        ],
        bodyContent:'<p>将恢复上期数据，确定恢复吗？</p>',
        success:function () {
            alert('确认');
            this.close();
        }
    });


    var editorInform = new Overlay.Dialog({
        title:'编辑通知',
        width:746,
        height:570,
        bodyContent:'<div class="editor-wrap">' +
        '<form class="ui-form"><label >标题</label><input class="ui-input" placeholder="航线名：APPN-BMMK" type="text"></form>' +
        '<form class="ui-form"><label >副标题</label><input class="ui-input" type="text"></form>' +
        '<form class="ui-form "><label >发布人</label><input class="ui-input" type="text"></form>' +
        '<form class="ui-form take-time ">'+
        '<label class="ui-f12" class="calendar">生效时间</label>'+
        '<input  class="ui-f14 ui-input calendar"  type="text" placeholder=""/>'+
        '<i class="ui-icon ui-icon-calendar"></i>'+
        '</form>'+
        '<form class="ui-form"><label >接收人</label><input class="ui-input" type="text"></form>' +
        '<form class="ui-form"><label >通知内容</label><textarea name="" id="" cols="30" rows="10"></textarea></form>' +
        '</div>',
        buttons:['发布'],
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#recover').on('click',function () {
        newaddInform.show();
    });

    $('#editorBtn').on('click',function () {
        editorInform.show();
    });
});/**
 * Created by lenovo on 2017/6/29.
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
    select.render();
    select.on('change', function(ev){
    });
});