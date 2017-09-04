//表格
BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
    var Store = Data.Store,
        columns = [
            {title : '航路代码',dataIndex :'a',width:'38.77%'},
            {title : '航路代码说明', dataIndex :'b',width:'8.57%'},
            {title : '录入人',dataIndex :'c',width:'14.48%'},
            {title : '录入时间',dataIndex :'d',width:'14.48%'},
            {title : '操作',dataIndex :'e', width:'28%',renderer : function (value,obj) {
                return '<span class="grid-command btn2"><i class="ui-icon ui-icon-del1"></i>删除</span>';
            }},
        ],
        data = [
            {a:'ATCGKK',b:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',c:'徐丹',d:'2017-12-15'},
            {a:'ATCGKK',b:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',c:'徐丹',d:'2017-12-15'},
            {a:'ATCGKK',b:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',c:'徐丹',d:'2017-12-15'},
            {a:'ATCGKK',b:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',c:'徐丹',d:'2017-12-15'},
        ];

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
            text:'发布',
            elCls : 'ui-btn ui-btn-full ui-btn-wide',
            handler : function(){
                //do some thing
                this.close();
            }
        }],
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
    $('#newAdd').on('click',function () {
        newaddInform.show();
    });

    $('#editorBtn').on('click',function () {
        editorInform.show();
    });
});