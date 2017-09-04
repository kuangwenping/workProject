/**
 * Created by lenovo on 2017/7/7.
 */
//弹出框
BUI.use('bui/overlay',function(Overlay){

    //不带按钮提示
    var dialog1 = new Overlay.Dialog({
        title:'提示',
        width:338,
        height:210,
        buttons:[],
        bodyContent:'<p>这是一个模态窗口,默认带有确认取消按钮</p>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#Hint').on('click',function () {
        dialog1.show();
    });

    //带按钮提示
    var dialog = new Overlay.Dialog({
        title:'提示',
        width:338,
        height:210,
        buttons:[
            {
                text:'删除',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    //do some thing
                    this.close();
                }
            },{
                text:'返回',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    this.close();
                }
            }
        ],
        bodyContent:'<p>这是一个模态窗口,默认带有确认取消按钮</p>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#delHint').on('click',function () {
        dialog.show();
    });

    //带按钮提示
    var amendMore = new Overlay.Dialog({
        title:'修改记录',
        width:740,
        height:570,
        buttons:[],
        bodyContent:'<ul class="pop-amend-list">' +
        '<li class="amend-item">1.修改第一条修改第一条修改第一条修改第一条修改第一条修改第一条修改第一条修改第一条修改第一条修改第一条修改第一条修改第一条</li>' +
        '<li class="amend-item">1.修改第一条</li>' +
        '<li class="amend-item">1.修改第一条</li>' +
        '<li class="amend-item">1.修改第一条</li>' +
        '<li class="amend-item">1.修改第一条</li>' +
        '<li class="amend-item">1.修改第一条</li>' +
        '<li class="amend-item">1.修改第一条</li>' +
        '<li class="amend-item">1.修改第一条</li>' +
        '<li class="amend-item">1.修改第一条</li>' +
        '<li class="amend-item">1.修改第一条</li>' +
        '<li class="amend-item">2.修改第一条</li></ul>',

        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#amendMore').on('click',function () {
        amendMore.show();
        //滚动条
        $('.bui-stdmod-body').mCustomScrollbar({
            axis:'y',
            theme:'dark',

        });
    });

    //备降机场维护
    var prepareAirportMaintain = new Overlay.Dialog({
        title:'备降机场维护',
        width:740,
        height:570,
        buttons:[{
            text:'提交',
            elCls : 'ui-btn ui-btn-full ui-btn-narrow',
            handler : function(){
                //do some thing
                this.close();
            }
        }],
        bodyContent:'<div class="pop-prepare-airport">' +
            '<h3 class="title-text ui-f14 margin-b">ZSPD</h3>' +
            '<div class="table-thunk" id="prepareAirport"></div>' +
        '</div>',

        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#prepareAirportMaintain').on('click',function () {
        prepareAirportMaintain.show();
        //表格
        BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
            var Store = Data.Store,
                columns = [
                    {title : '机场代码',dataIndex :'a',width:'10%'},
                    {title : '中文名',dataIndex :'a',width:'10%'},
                    {title : '距离',dataIndex :'a',width:'10%'},
                    {title : '起飞备降场',width:'20%',renderer : function(value,obj){
                        return '<div class="ui-form-radio"><form class="ui-form">'+
                            ' <div class="ui-val ui-f12">'+
                            ' <input type="radio" name="take" id="takeTrue">'+
                            ' <label for="takeTrue" class="radio-wrp ui-radio"> </label>是'+
                            ' </div>'+
                            '<div class="ui-val">'+
                            '<input type="radio" name="take" id="takeFalse">'+
                            '<label for="takeFalse" class="radio-wrp  ui-radio"></label>否'+
                            '</div>'+
                            '</form></div>'
                    }},
                    {title : '目的备降场',width:'20%',renderer : function(value,obj){
                        return '<div class="ui-form-radio"><form class="ui-form">'+
                            ' <div class="ui-val ui-f12">'+
                            ' <input type="radio" name="goal" id="goalTrue">'+
                            ' <label for="goalTrue" class="radio-wrp ui-radio"> </label>是'+
                            ' </div>'+
                            '<div class="ui-val">'+
                            '<input type="radio" name="goal" id="goalFalse">'+
                            '<label for="goalFalse" class="radio-wrp  ui-radio"></label>否'+
                            '</div>'+
                            '</form></div>'
                    }},
                    {title : '默认备降场',width:'20%',renderer : function(value,obj){
                        return '<div class="ui-form-radio"><form class="ui-form">'+
                            ' <div class="ui-val ui-f12">'+
                            ' <input type="radio" name="default" id="defaultTrue">'+
                            ' <label for="defaultTrue" class="radio-wrp ui-radio"> </label>是'+
                            ' </div>'+
                            '<div class="ui-val">'+
                            '<input type="radio" name="default" id="defaultFalse">'+
                            '<label for="defaultFalse" class="radio-wrp  ui-radio"></label>否'+
                            '</div>'+
                            '</form></div>'
                    }},
                    {title : '操作',dataIndex :'d', width:'10%',renderer : function (value,obj) {
                        return '<span class="grid-command btn2"><i class="ui-icon ui-icon-del1"></i>删除</span>';
                    }},
                ],
                data = [
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                ];
            var store = new Store({
                    data : data,
                    autoLoad:true,
                }),
                grid = new Grid.Grid({
                    render:'#prepareAirport',
                    width:'99%',//如果表格使用百分比，这个属性一定要设置
                    columns : columns,
                    store : store,
                    forceFit : false,
                    //plugins : [editing,Grid.Plugins.CheckSelection],
                });
            grid.render();
        });
        $('.bui-grid-body').mCustomScrollbar({
            axis:'y',
            theme:'dark',
            setHeight:435
        });
    });

    //进离场维护
    var enterLeaveMaintain = new Overlay.Dialog({
        title:'进离场维护',
        width:740,
        height:570,
        buttons:[{
            text:'提交',
            elCls : 'ui-btn ui-btn-full ui-btn-narrow',
            handler : function(){
                //do some thing
                this.close();
            }
        }],
        bodyContent:'<div class="pop-enter-leave ">' +
        '<div class="tab-thunk clear margin-b">' +
        '<div id="tabenterLeave" class="tab-child"></div></div>'+
        '<div id="enterLeave" class="tab-content"></div>' +
        '</div>',

        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#enterLeaveMaintain').on('click',function () {
        enterLeaveMaintain.show();

        //tab切换
        BUI.use('bui/tab',function(Tab){
        var tab = new Tab.Tab({
            render : '#tabenterLeave',
            elCls : 'nav-tabs',
            autoRender: true,
            children:[
                {text:'进场',value:'1'},
                {text:'离场',value:'2'},
            ]
        });

        tab.on('selectedchange',function (ev) {
            var item = ev.item;
            $('#enterLeave').html('<div class="table-thunk" id="tableEnterLeave"></div>');
        });
        tab.setSelected(tab.getItemAt(0));

    });

        //表格
        BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
            var Store = Data.Store,
                columns = [
                    {title : '航路点',dataIndex :'a',width:'20%'},
                    {title : '程序名',dataIndex :'a',width:'20%'},
                    {title : '附加距离',dataIndex :'a',width:'20%'},
                    {title : '总距离',dataIndex :'a',width:'20%'},
                    {title : '操作',dataIndex :'d', width:'20%',renderer : function (value,obj) {
                        return '<span class="grid-command btn2"><i class="ui-icon ui-icon-del1"></i>删除</span>';
                    }},
                ],
                data = [
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                    {a:'1.航线名：ZBAA-ZSSS   起飞机场：ZBAA  降落机场：ZSSS ',b:'徐丹',c:'2017-12-15'},
                ];
            var store = new Store({
                    data : data,
                    autoLoad:true,
                }),
                grid = new Grid.Grid({
                    render:'#tableEnterLeave',
                    width:'99%',//如果表格使用百分比，这个属性一定要设置
                    columns : columns,
                    store : store,
                    forceFit : false,
                    //plugins : [editing,Grid.Plugins.CheckSelection],
                });
            grid.render();
        });

        //滚动条
        $('.bui-grid-body').mCustomScrollbar({
            axis:'y',
            theme:'dark',
            setHeight:435
        });
    });

    //请选择CAT类型
    var CATType = new Overlay.Dialog({
        title:'请选择CAT类型',
        width:338,
        height:210,
        buttons:[
            {
                text:'确定',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    //do some thing
                    this.close();
                }
            }
        ],
        bodyContent:'<form class="pop-CAT-select" id="s1"><input type="hidden"></form>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#CATType').on('click',function () {
        CATType.show();
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
        $('.bui-select-list').mCustomScrollbar({
            axis:'y',
            theme:'dark',
            setHeight:120
        });
    });

    //选择人员
    var personSelect = new Overlay.Dialog({
        title:'人员选择',
        width:740,
        height:570,
        buttons:[
            {
                text:'确定',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    this.close();
                }
            }
        ],
        bodyContent:'<div class="pop-personSelect-wrap clear">' +
        '<div class="table-thunk float-l table-thunk-check" id="person"></div>' +

        '<div class="selece-yet float-r"><h3>已选中人员</h3>' +
        '<ul class="selece-list"><li class="clear">小旋风 <i class="ui-icon ui-icon-clones  float-r"></i></li>' +
        '<li class="clear margin-b">小旋风 <i class="ui-icon ui-icon-clones  float-r"></i></li>' +
        '</ul></div>' +
        '<div class="pages-thunk" id="bar"></div>' +
        '</div>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#personSelect').on('click',function () {
        personSelect.show();
        BUI.use(['bui/grid','bui/data','bui/toolbar'],function(Grid,Data,Toolbar){
            var Store = Data.Store,
                columns = [
                    {title : '机场四字码',elCls:'addss',dataIndex :'a',editor : {xtype : 'text'},width:'13.2%',sortable:false}, //editor中的定义等用于 BUI.Form.Field.Text的定义
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
                    render:'#person',
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
        $('.bui-grid-body').mCustomScrollbar({
            axis:'y',
            theme:'dark',
        });
        $('.selece-list').mCustomScrollbar({
            axis:'y',
            theme:'dark',
        });
    });

    //编辑通知
    var editor = new Overlay.Dialog({
        title:'编辑通知',
        width:740,
        height:570,
        buttons:[
            {
                text:'发布',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    this.close();
                }
            }
        ],
        bodyContent:'<div class="pop-editor-wrap">'+
       ' <form class="ui-form">'+
       ' <div class="margin-b">'+
        '<span class="ui-key-start">标题</span>'+
        ' <input type="text" class="ui-input input-l"/>'+
        ' </div>'+
       ' <div class="margin-b">'+
            '<span class="ui-key-start">副标题</span>'+
            ' <input type="text" class="ui-input input-l"/>'+
        '</div>'+
        '<div class="margin-b clear">'+
       ' <div class="float-l">'+
       ' <span class="ui-key-start">发布人</span>'+
       ' <input type="text" class="ui-input input-m"/>'+
       ' </div>'+
       ' <div class="float-r">'+
        '<span >发布时间</span>'+
       ' <input type="text" class="ui-input input-m"/>'+
       ' </div>'+
       ' </div>'+
        '<div class="margin-b">'+
       ' <span class="ui-key-start">接收人</span>'+
       ' <input type="text" class="ui-input input-l"/>'+
       ' </div>'+
       ' </form>'+
        '<span>重要通知</span>'+
       '<script id="container" name="content" class="editor-thunk" type="text/plain"></script>'+
        '</div>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#editor').on('click',function () {
        editor.show();

        //编辑器
        var recommend=UE.getEditor('container',{
            toolbars: [['fontsize',
                'bold','italic','underline','forecolor','backcolor','justifyleft','justifycenter','justifyright',
                'link','insertorderedlist','insertunorderedlist'
            ]],
            initialFrameHeight:210,
        });


        $('.editor-thunk.edui-default body').mCustomScrollbar({
            axis:'y',
            theme:'dark',
        });
    });

    //文件上传
    //编辑通知
    var fileLoad = new Overlay.Dialog({
        title:'编辑通知',
        width:338,
        height:210,
        buttons:[
        ],
        bodyContent:'<div class="pop-file-load">'+
        '<p class="pop-text margin-b ellipsis"><span>文件名</span><span>时间</span><span>作者</span></p>'+
        '<label class="ui-file-btn" for="file"></label>'+
       ' <input id="file"  type="file">'+
       ' </div>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#fileLoad').on('click',function () {
        fileLoad.show();
    });
});

//var recommend=UE.getEditor('container');

