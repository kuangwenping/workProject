/**
 * Created by lenovo on 2017/6/20.
 */

//table表格
BUI.use(['bui/grid','bui/data'],function(Grid,Data){
    var Store = Data.Store,
        columns = [
            {title: '类别', dataIndex: 'a', width: '9.5%'},
            {title: '项目名称', dataIndex: 'b', width: '19.5%'},
            {title: '项目编号', dataIndex: 'a', width: '7.2%'},
            {title: '单位重量', dataIndex: 'd', width: '7.2%'},
            {title: '数量', dataIndex: 'a', width: '7.2%'},
            {title: '总重量', dataIndex: 'a', width: '7.2%'},
            {title: '力臂', dataIndex: 'a', width: '7.2%'},
            {title: '力矩', dataIndex: 'a', width: '7.2%'},
            {title: '备注', dataIndex: 'a', width: '15%'},
            {
                id: '123', title: '操作', dataIndex: 'a', width: '12.8%',
                renderer: function (value, obj) {
                    return '<span class="grid-command btn1"> <i class="ips-ui-icon ui-icon-insert-up"></i></span><span class="grid-command "> <i class="ips-ui-icon ui-icon-insert-dw"></i></span> <span class="grid-command btn2"><i class="ips-ui-icon ui-icon-del"></i></span>';
                }
            },
        ],
        //data = [{a: '123', b: 'edd'}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2}];
        data = [];
    var store = new Store({
            data : data
        }),
        grid = new Grid.Grid({
            render: '#grid',
            width:'100%',//如果表格使用百分比，这个属性一定要设置
            columns : columns,
            idField : 'a',
            store : store,
            disabled:true,
        });

    grid.render();
});

//弹框
var Overlay = BUI.Overlay

var dialog = new Overlay.Dialog({
    title:'提示',
    width:340,
    height:210,
    mask:true,
    bodyContent:'<p class="ui-hint-text">这是一个模态窗口,默认带有确认取消按钮</p>',
    buttons:[],
});

var schedule = new Overlay.Dialog({
    title:'计算任务',
    width:740,
    height:210,
    mask:true,
    bodyContent:'<div class="schedule-wrap">' +
    '<p class="ui-valkey float-l">' +
    '<span>机场：</span><i>ZNBB(100/15)</i>' +
    '</p>' +
    '<div>'+
        '<p class="ui-strip-wrap"><span style="width:60%" class="ui-strip ui-succeed-strip"></span></p>' +
        '<span class="schedule-text">60%</span>' +
        '<span class="break-text">中断</span>' +
    '</div>'+
    ' <span class="float-r ips-ui-icon ui-icon-cancel"></span>' +
    ' <span class="float-r ui-icon-refresh"></span>' +
    '</div>',
    buttons:[],
});


$('#btnExport').on('click',function () {
    dialog.show();
});


$('#btnCount').on('click',function () {
    schedule.show();
});
