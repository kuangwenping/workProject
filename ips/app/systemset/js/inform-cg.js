//表格
BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
    var Store = Data.Store,
        columns = [
            {title : '标题',dataIndex :'a',width:'38.77%'},
            {title : '发布人', dataIndex :'b',width:'8.57%'},
            {title : '发布时间',dataIndex :'c',width:'14.48%'},
                {title : '操作',dataIndex :'d', width:'28%',renderer : function (value,obj) {
            return '<span class="grid-command btn1" id="editorBtn"> <i class="ips-ui-icon ui-icon-editor"></i>编辑</span><span class="grid-command btn2"><i class="ips-ui-icon ui-icon-stick"></i>置顶</span> <span class="grid-command btn2"><i class="ips-ui-icon ui-icon-del1"></i>删除</span>';
    }},
        ],
        data = [
            {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
            {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
            {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
            {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
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
        '<i class="ips-ui-icon ui-icon-calendar"></i>'+
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
        '<i class="ips-ui-icon ui-icon-calendar"></i>'+
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