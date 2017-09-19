//表格
BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
    var Store = Data.Store,
        columns = [
            {title : '序号',dataIndex :'a',width:28},
            {title : '文件', dataIndex :'b'},
            {title : '导入人',dataIndex :'c'},
            {title : '数据差异处理',dataIndex :'d'},
            {title : '数据恢复',dataIndex :'d'},
            {title : '完成时间',dataIndex :'d'},
            {title : '周期生效日',dataIndex :'d'},
            {title : '数据切换',dataIndex :'d'},
            {title : '切换时间',dataIndex :'d'},
            {title : '操作人',dataIndex :'d'},
            {title : '恢复数据',dataIndex :'e', width:'28%',renderer : function (value,obj) {
                return '<span id="recover" class="grid-command btn2"><i class="ips-ui-icon ui-icon-recover"></i>恢复</span>';
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