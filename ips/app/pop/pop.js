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

    //
    var differenceData = new Overlay.Dialog({
        title:'差异数据',
        width:450,
        height:280,
        buttons:[{
            text:'提交',
            elCls : 'ui-btn ui-btn-full ui-btn-narrow',
            handler : function(){
                //do some thing
                this.close();
            }
        }],
        contentId:'differenceData',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#differenceDataBtn').on('click',function () {
        differenceData.show();
    });

    //错误提示
    var errorHint = new Overlay.Dialog({
        title:'提示',
        width:338,
        height:210,
        buttons:[],
        elCls:'popErorHint pop-hint',
        bodyContent:'<p>无法继续执行的，错误提示类型</p>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#errorHint').on('click',function () {
        errorHint.show();
    });

    //成功提示
    var succeedHint = new Overlay.Dialog({
        title:'提示',
        width:338,
        height:210,
        buttons:[],
        elCls:'popSuccessHint pop-hint',
        bodyContent:'<p>成功执行的提示类型</p>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#succeedHint').on('click',function () {
        succeedHint.show();
    });

    //警告提示
    var warningHint = new Overlay.Dialog({
        title:'提示',
        width:338,
        height:210,
        buttons:[],
        elCls:'popwarningHint pop-hint',
        bodyContent:'<p>成功执行的提示类型</p>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#warningHint').on('click',function () {
        warningHint.show();
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
        elCls:'pop-hint',
        bodyContent:'<p >带按钮需要人工点击的提示</p>',
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
        bodyContent:'<ul class="ui-pop pop-amend-list">' +
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
                        return '<span class="grid-command btn2"><i class="ips-ui-icon ui-icon-del1"></i>删除</span>';
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
        bodyContent:'<div class="ui-pop pop-enter-leave ">' +
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
                        return '<span class="grid-command btn2"><i class="ips-ui-icon ui-icon-del1"></i>删除</span>';
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
        bodyContent:'<form class="ui-pop pop-CAT-select" id="s1"><input type="hidden"></form>',
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
        bodyContent:'<div class="ui-pop pop-personSelect-wrap clear">' +
        '<div class="table-thunk float-l table-thunk-check" id="person"></div>' +

        '<div class="selece-yet float-r"><h3>已选中人员</h3>' +
        '<ul class="selece-list"><li class="clear">小旋风 <i class="ips-ui-icon ui-icon-clones  float-r"></i></li>' +
        '<li class="clear margin-b">小旋风 <i class="ips-ui-icon ui-icon-clones  float-r"></i></li>' +
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
        bodyContent:'<div class="ui-pop pop-editor-wrap">'+
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
    var fileLoad = new Overlay.Dialog({
        title:'编辑通知',
        width:338,
        height:210,
        buttons:[
        ],
        bodyContent:'<div class="ui-pop pop-file-load">'+
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

    //任务编辑
    var taskEditor = new Overlay.Dialog({
        title:'任务编辑',
        width:500,
        height:300,
        buttons:[
            {
                text:'确定',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    //do some thing
                    this.close();
                }
            },
            {
                text:'取消',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    //do some thing
                    this.close();
                }
            }
        ],
        bodyContent:'<div class="ui-pop pop-form-task">'+
        '<div class="ui-form form-group margin-b clear">'+
        '<div class="float-l">'+
        '<label class="ui-key-start">航线名</label>'+
        '<input class="ui-input" type="text">'+
        '</div>'+
        '<div class="float-r">'+
        '<label >起飞机场</label>'+
        '<input class="ui-input" type="text">'+
        '</div>'+
        '</div>'+
        '<div class="ui-form form-group margin-b clear">'+
        '<div class="float-l " id="s2">'+
        '<label class="ui-key-start">任务操作</label>'+
       ' <input class="ui-input" type="hidden">'+
        '</div>'+
        '<div class="float-r">'+
        '<label >目的机场</label>'+
        '<input class="ui-input" type="text">'+
        '</div>'+
        '</div>'+
        '<div class="radio-thunk margin-b clear">'+
        '<span class="ui-key-start float-l">双校核</span>'+
        '<div class="float-l form-item-item">'+
        '<input type="radio" name="status" id="checkYes">'+
        '<label for="checkYes" class="radio-wrp ui-radio"></label>'+
        '<span class="ui-text-form">是</span>'+
        '</div>'+

        '<div class="float-l form-item">'+
        '<input type="radio" name="status" id="checkNo">'+
        '<label for="checkNo" class="radio-wrp ui-radio"></label>'+
        '<span class="ui-text-form">否</span>'+
        '</div>'+
        '</div>'+

        '<div class="textarea-thunk">'+
        '<span class="ui-key-start">任务说明</span>'+
        '<textarea class="ui-textarea"></textarea>'+
        '</div>'+
        '</div>',
        success:function () {
            alert('确认');
            this.close();
        }
    });
    $('#taskEditor').on('click',function () {
        taskEditor.show();
        //下拉多选
        BUI.use('bui/select',function(Select){
            var items = [
                    {text:'选项1',value:'a'},
                    {text:'选项2',value:'b'},
                    {text:'选项3',value:'c'}
                ],
                select1 = new Select.Select({
                    render:'#s2',
                    valueField:'#hide',
                    items:items
                });
            select1.render();
            select1.on('change', function(ev){

            });
        });
        //滚动条
        $('.ui-textarea').mCustomScrollbar({
            axis:'y',
            theme:'dark',

        });
    });

    //查询条件
    var query = new Overlay.Dialog({
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
        bodyContent:'<div class="ui-pop pop-prepare-airport">'+
        '<div class="query-import margin-b">' +
            '<input type="text" class="ui-input"/>' +
            '<button class="ui-btn ui-btn-search ui-btn-wide"> <i class="ips-ui-icon ui-icon-search"></i>查询</button>' +
        '</div>' +
        '<h3 class="title-text ui-f14 margin-b">ZSPD</h3>' +
        '<div class="table-thunk margin-b" id="prepareAirport"></div>' +
        '<div class="pages-thunk ui-pages-center clear"  id="bar"></div>'+
        '</div>',

        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#query').on('click',function () {
        query.show();
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
                        return '<span class="grid-command btn2"><i class="ips-ui-icon ui-icon-del1"></i>删除</span>';
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
                    pageSize:2,
                }),

                grid = new Grid.Grid({
                    render:'#prepareAirport',
                    width:'100%',//如果表格使用百分比，这个属性一定要设置
                    columns : columns,
                    store : store,
                    forceFit : false,
                    //plugins : [editing,Grid.Plugins.CheckSelection],
                });
            var bar = new Toolbar.NumberPagingBar({
                render : '#bar',
                elCls : 'pagination pull-right',
                store : store
            });
            bar.render();
            grid.render();
        });

        //分页

        $('.bui-grid-body').mCustomScrollbar({
            axis:'y',
            theme:'dark',
        });
    });

    //计算任务
    var countTask = new Overlay.Dialog({
        title:'计算任务',
        width:740,
        height:570,
        buttons:[{
            text:'清空列表',
            elCls : 'ui-btn ui-btn-full ui-btn-wide',
            handler : function(){
                //do some thing
                this.close();
            }
        }],
        bodyContent:'<div class="pop-count-task">'+
        '<div class="tab-thunk clear margin-b">'+
        '<div id="countTab" class="tab-child"></div>'+
        '</div>'+
            '<div id="countContent">'+
        '<ul class="schedule-list" >'+
        '<li class="schedule-item clear">'+
        '<p class="ui-text-schedule float-l">机场：<span>ZABB (<i>100/150</i>)</span></p>'+
    '<div class="schedule-thunk">'+
        '<div class="schedule-strip">'+
        '<p style="width:60%"></p>'+
        '</div>'+
        '<span class="ui-percent">66%</span>'+
        '<span class="hint-text">中断！</span>'+
    '</div>'+
    '<div class="handle-btn-group float-r">'+
        '<i class="ips-ui-icon ui-icon-anew"></i>'+
        '<i class="ips-ui-icon ui-icon-cancel"></i>'+
        '</div>'+
        '</li>'+

        '<li class="schedule-item clear schedule-error">'+
        '<p class="ui-text-schedule float-l">机场：<span>ZABB (<i>100/150</i>)</span></p>'+
    '<div class="schedule-thunk">'+
        '<div class="schedule-strip">'+
        '<p style="width:66%"></p>'+
        '</div>'+
        '<span class="ui-percent">66%</span>'+
        '<span class="hint-text">中断！</span>'+
    '</div>'+
    '<div class="handle-btn-group float-r">'+
        '<i class="ips-ui-icon ui-icon-anew"></i>'+
        '<i class="ips-ui-icon ui-icon-cancel"></i>'+
        '</div>'+
        '</li>'+

        '<li class="schedule-item clear schedule-error">'+
        '<p class="ui-text-schedule float-l">机场：<span>ZABB (<i>100/150</i>)</span></p>'+
        '<div class="schedule-thunk">'+
            '<p>计算完成共150条数据</p>'+
        '</div>'+
        '<div class="handle-btn-group float-r">'+
            '<i class="ips-ui-icon ui-icon-examine"></i>'+
            '<i class="ips-ui-icon ui-icon-cancel"></i>'+
        '</div>'+
        '</li>'+

        '</ul>'+
        '</div>'+
        '</div>',

        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#countTask').on('click',function () {
        countTask.show();
        //tab切换
        BUI.use('bui/tab',function(Tab){
            var tab = new Tab.Tab({
                render : '#countTab',
                elCls : 'nav-tabs',
                autoRender: true,
                children:[
                    {text:'已完成',value:'1'},
                    {text:'计算中',value:'2'},
                ]
            });
            tab.on('countTab',function (ev) {
                var item = ev.item;
                $('#countContent').html('<div class="table-thunk" id="tableEnterLeave"></div>');
            });
            tab.setSelected(tab.getItemAt(0));
        });

        //分页
        $('.schedule-list').mCustomScrollbar({
            axis:'y',
            theme:'dark',
        });
    });

    //机场性能数据维护——新增
    var newAdd = new Overlay.Dialog({
        title:'新增',
        width:740,
        height:570,
        buttons:[],
        contentId:'newAddContent',
        elCls:'pop-new-add',
        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#newAdd').on('click',function () {
        newAdd.show();

        //下拉多选
        BUI.use('bui/select',function(Select){
            var items = [
                    {text:'选项1',value:'a'},
                    {text:'选项2',value:'b'},
                    {text:'选项3',value:'c'}
                ],

            select1 = new Select.Select({
                render:'#s2',
                valueField:'#hide',
                items:items
            });

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

        $('.bui-stdmod-body').mCustomScrollbar({
            axis:'y',
            theme:'dark',
        });
    });

    //线上数据
    var changeName = new Overlay.Dialog({
        title:'更名',
        width:338,
        height:210,
        buttons:[
            {
                text:'确定',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    this.close();
                }
            }
        ],
        contentId:'changeNameContent',
        elCls:'pop-change-name ui-pop',
        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#changeName').on('click',function () {
        changeName.show();
    });

    var airditSelect = new Overlay.Dialog({
        title:'航线重名航路点选择',
        width:338,
        height:210,
        buttons:[
            {
                text:'确定',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    this.close();
                }
            }
        ],
        contentId:'airditSelectContent',
        elCls:'pop-airdit-select ui-pop',
        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#airditSelect').on('click',function () {
        airditSelect.show();
    });

    var alternate = new Overlay.Dialog({
        title:'备降机场',
        width:500,
        height:350,
        buttons:[
            {
                text:'确定',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    this.close();
                }
            },
            {
                text:'返回',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    this.close();
                }
            }
        ],
        contentId:'alternateContent',
        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#alternate').on('click',function () {
        alternate.show();
    });

    //数据入库
    var chechAirDifference = new Overlay.Dialog({
        title:'验证码',
        width:338,
        height:210,
        buttons:[
            {
                text:'确定',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    this.close();
                }
            },
            {
                text:'返回',
                elCls : 'ui-btn ui-btn-full ui-btn-narrow',
                handler : function(){
                    this.close();
                }
            }
        ],
        contentId:'DifferenceDataCt',
        elCls:'',
        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#chechAirDifference').on('click',function () {
        chechAirDifference.show();
    });

    //航路点数据对比——上期数据
    var searchUp = new Overlay.Dialog({
        title:'上期数据',
        width:1120,
        height:540,
        buttons:[
            {
                text:'导入客户化数据',
                elCls : 'ui-btn ui-btn-full ui-btn-wide',
                handler : function(){
                    this.close();
                }
            },
        ],
        contentId:'searchUpContent',
        elCls:'pop-data-compare',
        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#searchUp').on('click',function () {
        searchUp.show();
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
            select2 = new Select.Select({
                render:'#s3',
                valueField:'#hide',
                items:items
            });

            select3 = new Select.Select({
                render:'#s4',
                valueField:'#hide',
                items:items
            });
            select4 = new Select.Select({
                render:'#s5',
                valueField:'#hide',
                items:items
            });

            select5 = new Select.Select({
                render:'#s6',
                valueField:'#hide',
                items:items
            });
            select6 = new Select.Select({
                render:'#s7',
                valueField:'#hide',
                items:items
            });
            select7 = new Select.Select({
                render:'#s8',
                valueField:'#hide',
                items:items
            });

            select8 = new Select.Select({
                render:'#s9',
                valueField:'#hide',
                items:items
            });

            select9 = new Select.Select({
                render:'#s10',
                valueField:'#hide',
                items:items
            });

            select10 = new Select.Select({
                render:'#s11',
                valueField:'#hide',
                items:items
            });
            select11 = new Select.Select({
                render:'#s12',
                valueField:'#hide',
                items:items
            });
            select12 = new Select.Select({
                render:'#s13',
                valueField:'#hide',
                items:items
            });

            select13 = new Select.Select({
                render:'#s14',
                valueField:'#hide',
                items:items
            });

            select14 = new Select.Select({
                render:'#s15',
                valueField:'#hide',
                items:items
            });

            select15 = new Select.Select({
                render:'#s16',
                valueField:'#hide',
                items:items,
            });

            select15.render();
            select.render();
            select1.render();
            select2.render();
            select3.render();
            select4.render();
            select5.render();
            select6.render();
            select7.render();
            select8.render();
            select9.render();
            select10.render();
            select11.render();
            select12.render();
            select13.render();
            select14.render();

            select.on('change', function(ev){
            });
        });
    });

    //航路数据对比——上期数据
    var airrouteSearchUp = new Overlay.Dialog({
        title:'上期数据',
        width:1120,
        height:540,
        buttons:[
            {
                text:'导入客户化数据',
                elCls : 'ui-btn ui-btn-full ui-btn-wide',
                handler : function(){
                    this.close();
                }
            },
        ],
        contentId:'airrouteSearchUpContent',
        elCls:'pop-data-compare',
        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#airrouteSearchUp').on('click',function () {
        airrouteSearchUp.show();
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
                data = [{a: '123', b: 'edd'}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2}];
            var store = new Store({
                    data : data
                }),
                grid = new Grid.Grid({
                    render: '#grid',
                    width:'100%',//如果表格使用百分比，这个属性一定要设置
                    columns : columns,
                    idField : 'a',
                    store : store,
                    elCls:"olde"
                });

            grid.render();
        });
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
    });

    //航场数据对比——上期数据
    var airprotSearchUp = new Overlay.Dialog({
        title:'上期数据',
        width:1120,
        height:540,
        buttons:[
            {
                text:'导入客户化数据',
                elCls : 'ui-btn ui-btn-full ui-btn-wide',
                handler : function(){
                    this.close();
                }
            },
        ],
        contentId:'airprotSearchUpContent',
        elCls:'pop-data-compare',
        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#airprotSearchUp').on('click',function () {
        airprotSearchUp.show();

        BUI.use(['bui/toolbar','bui/data'],function(Toolbar,Data){
            var NumerPBar = Toolbar.NumberPagingBar,
                Store = Data.Store;
            var data = [{},{},{},{},{}];
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
            select2 = new Select.Select({
                render:'#s3',
                valueField:'#hide',
                items:items
            });

            select3 = new Select.Select({
                render:'#s4',
                valueField:'#hide',
                items:items
            });
            select4 = new Select.Select({
                render:'#s5',
                valueField:'#hide',
                items:items
            });

            select5 = new Select.Select({
                render:'#s6',
                valueField:'#hide',
                items:items
            });
            select6 = new Select.Select({
                render:'#s7',
                valueField:'#hide',
                items:items
            });
            select7 = new Select.Select({
                render:'#s8',
                valueField:'#hide',
                items:items
            });

            select8 = new Select.Select({
                render:'#s9',
                valueField:'#hide',
                items:items
            });

            select9 = new Select.Select({
                render:'#s10',
                valueField:'#hide',
                items:items
            });

            select10 = new Select.Select({
                render:'#s11',
                valueField:'#hide',
                items:items
            });
            select11 = new Select.Select({
                render:'#s12',
                valueField:'#hide',
                items:items
            });
            select12 = new Select.Select({
                render:'#s13',
                valueField:'#hide',
                items:items
            });
            select13 = new Select.Select({
                render:'#s14',
                valueField:'#hide',
                items:items
            });
            select14 = new Select.Select({
                render:'#s15',
                valueField:'#hide',
                items:items
            });
            select15 = new Select.Select({
                render:'#s16',
                valueField:'#hide',
                items:items
            });
            select16 = new Select.Select({
                render:'#s17',
                valueField:'#hide',
                items:items
            });
            select17 = new Select.Select({
                render:'#s18',
                valueField:'#hide',
                items:items
            });
            select18= new Select.Select({
                render:'#s19',
                valueField:'#hide',
                items:items
            });

            select19 = new Select.Select({
                render:'#s20',
                valueField:'#hide',
                items:items
            });

            select20 = new Select.Select({
                render:'#s21',
                valueField:'#hide',
                items:items
            });

            select21 = new Select.Select({
                render:'#s22',
                valueField:'#hide',
                items:items
            });
            select22 = new Select.Select({
                render:'#s23',
                valueField:'#hide',
                items:items
            });

            select23 = new Select.Select({
                render:'#s24',
                valueField:'#hide',
                items:items
            });
            select24 = new Select.Select({
                render:'#s25',
                valueField:'#hide',
                items:items
            });

            select25 = new Select.Select({
                render:'#s26',
                valueField:'#hide',
                items:items
            });
            select26 = new Select.Select({
                render:'#s27',
                valueField:'#hide',
                items:items
            });
            select27 = new Select.Select({
                render:'#s28',
                valueField:'#hide',
                items:items
            });

            select28 = new Select.Select({
                render:'#s29',
                valueField:'#hide',
                items:items
            });

            select29 = new Select.Select({
                render:'#s30',
                valueField:'#hide',
                items:items
            });

            select30 = new Select.Select({
                render:'#s31',
                valueField:'#hide',
                items:items
            });
            select31 = new Select.Select({
                render:'#s32',
                valueField:'#hide',
                items:items
            });
            select32 = new Select.Select({
                render:'#s33',
                valueField:'#hide',
                items:items
            });
            select33 = new Select.Select({
                render:'#s34',
                valueField:'#hide',
                items:items
            });
            select34 = new Select.Select({
                render:'#s35',
                valueField:'#hide',
                items:items
            });
            select35 = new Select.Select({
                render:'#s36',
                valueField:'#hide',
                items:items
            });
            select36 = new Select.Select({
                render:'#s37',
                valueField:'#hide',
                items:items
            });
            select37 = new Select.Select({
                render:'#s38',
                valueField:'#hide',
                items:items
            });
            select37= new Select.Select({
                render:'#s38',
                valueField:'#hide',
                items:items
            });

            select.render();
            select1.render();
            select2.render();
            select3.render();
            select4.render();
            select5.render();
            select6.render();
            select7.render();
            select8.render();
            select9.render();
            select10.render();
            select11.render();
            select12.render();
            select13.render();
            select14.render();
            select15.render();
            select16.render();
            select17.render();
            select18.render();

            select19.render();
            select20.render();
            select21.render();
            select22.render();
            select23.render();
            select24.render();
            select25.render();
            select26.render();
            select27.render();
            select28.render();
            select29.render();
            select30.render();
            select31.render();
            select32.render();
            select33.render();
            select34.render();
            select35.render();
            select36.render();
            select37.render();

            select.on('change', function(ev){
            });
        });

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
                data = [{a: '123', b: 'edd'}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2}];
            var store = new Store({
                    data : data
                }),
                grid = new Grid.Grid({
                    render: '#grid',
                    width:'100%',//如果表格使用百分比，这个属性一定要设置
                    columns : columns,
                    idField : 'a',
                    store : store
                });

            grid.render();
        });

        $('.content-wrap').mCustomScrollbar({
            axis:'y',
            theme:'dark',
            setHeight:430
        });
    });

    //航场数据对比——上期数据
    var airlineSet = new Overlay.Dialog({
        title:'航线设置',
        width:740,
        height:540,
        buttons:[
            {
                text:'确定',
                elCls : 'ui-btn ui-btn-full ui-btn-wide',
                handler : function(){
                    this.close();
                }
            },
            {
                text:'返回',
                elCls : 'ui-btn ui-btn-full ui-btn-wide',
                handler : function(){
                    this.close();
                }
            }
        ],
        contentId:'airlineSetContent',
        elCls:'',
        success:function (){
            alert('确认');
            this.close();
        }
    });
    $('#airlineSet').on('click',function () {
        airlineSet.show();

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
            select2 = new Select.Select({
                render:'#s3',
                valueField:'#hide',
                items:items
            });

            select3 = new Select.Select({
                render:'#s4',
                valueField:'#hide',
                items:items
            });
            select4 = new Select.Select({
                render:'#s5',
                valueField:'#hide',
                items:items
            });

            select5 = new Select.Select({
                render:'#s6',
                valueField:'#hide',
                items:items
            });
            select6 = new Select.Select({
                render:'#s7',
                valueField:'#hide',
                items:items
            });
            select7 = new Select.Select({
                render:'#s8',
                valueField:'#hide',
                items:items
            });

            select8 = new Select.Select({
                render:'#s9',
                valueField:'#hide',
                items:items
            });

            select9 = new Select.Select({
                render:'#s10',
                valueField:'#hide',
                items:items
            });

            select10 = new Select.Select({
                render:'#s11',
                valueField:'#hide',
                items:items
            });
            select11 = new Select.Select({
                render:'#s12',
                valueField:'#hide',
                items:items
            });
            select12 = new Select.Select({
                render:'#s13',
                valueField:'#hide',
                items:items
            });
            select13 = new Select.Select({
                render:'#s14',
                valueField:'#hide',
                items:items
            });
            select14 = new Select.Select({
                render:'#s15',
                valueField:'#hide',
                items:items
            });
            select15 = new Select.Select({
                render:'#s16',
                valueField:'#hide',
                items:items
            });
            select16 = new Select.Select({
                render:'#s17',
                valueField:'#hide',
                items:items
            });
            select17 = new Select.Select({
                render:'#s18',
                valueField:'#hide',
                items:items
            });
            select18= new Select.Select({
                render:'#s19',
                valueField:'#hide',
                items:items
            });

            select19 = new Select.Select({
                render:'#s20',
                valueField:'#hide',
                items:items
            });

            select20 = new Select.Select({
                render:'#s21',
                valueField:'#hide',
                items:items
            });

            select21 = new Select.Select({
                render:'#s22',
                valueField:'#hide',
                items:items
            });
            select22 = new Select.Select({
                render:'#s23',
                valueField:'#hide',
                items:items
            });

            select23 = new Select.Select({
                render:'#s24',
                valueField:'#hide',
                items:items
            });
            select24 = new Select.Select({
                render:'#s25',
                valueField:'#hide',
                items:items
            });

            select25 = new Select.Select({
                render:'#s26',
                valueField:'#hide',
                items:items
            });
            select26 = new Select.Select({
                render:'#s27',
                valueField:'#hide',
                items:items
            });
            select27 = new Select.Select({
                render:'#s28',
                valueField:'#hide',
                items:items
            });

            select28 = new Select.Select({
                render:'#s29',
                valueField:'#hide',
                items:items
            });

            select29 = new Select.Select({
                render:'#s30',
                valueField:'#hide',
                items:items
            });

            select30 = new Select.Select({
                render:'#s31',
                valueField:'#hide',
                items:items
            });
            select31 = new Select.Select({
                render:'#s32',
                valueField:'#hide',
                items:items
            });
            select32 = new Select.Select({
                render:'#s33',
                valueField:'#hide',
                items:items
            });
            select33 = new Select.Select({
                render:'#s34',
                valueField:'#hide',
                items:items
            });
            select34 = new Select.Select({
                render:'#s35',
                valueField:'#hide',
                items:items
            });
            select35 = new Select.Select({
                render:'#s36',
                valueField:'#hide',
                items:items
            });
            select36 = new Select.Select({
                render:'#s37',
                valueField:'#hide',
                items:items
            });
            select37 = new Select.Select({
                render:'#s38',
                valueField:'#hide',
                items:items
            });
            select37= new Select.Select({
                render:'#s38',
                valueField:'#hide',
                items:items
            });

            select.render();
            select1.render();
            select2.render();
            select3.render();
            select4.render();
            select5.render();
            select6.render();
            select7.render();
            select8.render();
            select9.render();
            select10.render();
            select11.render();
            select12.render();
            select13.render();
            select14.render();
            select15.render();
            select16.render();
            select17.render();
            select18.render();

            select19.render();
            select20.render();
            select21.render();
            select22.render();
            select23.render();
            select24.render();
            select25.render();
            select26.render();
            select27.render();
            select28.render();
            select29.render();
            select30.render();
            select31.render();
            select32.render();
            select33.render();
            select34.render();
            select35.render();
            select36.render();
            select37.render();

            select.on('change', function(ev){
            });
        });

        $('.content-wrap').mCustomScrollbar({
            axis:'y',
            theme:'dark',
            setHeight:430
        });
    });
});

//var recommend=UE.getEditor('container');

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
//时间
BUI.use('bui/calendar',function(Calendar){
    var datepicker = new Calendar.DatePicker({
        trigger:'.calendar',
        autoRender : true
    });
});


$('#optab').on('click',function(){
    parent.czyOpenTab({id:'JpopNav',href:'pop/pop.html',text:'打开tab'});
})

parent.ipsMain.closeReload('home',function(){    
    console.log("关闭llll");
});

//刷新指定页面
parent.ipsMain.pageReload('payload');
