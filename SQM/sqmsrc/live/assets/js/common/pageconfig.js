
//tab切换
seajs.use(['bui/tab','bui/mask'],function(Tab){
    var tab = new Tab.TabPanel({
        render : '#tab',
        elCls : 'nav-tabs',
        forceFit : true,
        panelContainer : '#panel',//如果内部有容器，那么会跟标签项一一对应，如果没有会自动生成
        //selectedEvent : 'mouseenter',//默认为click,可以更改事件
        autoRender: true,
        children:[
            {title:'事件信息',value:'2',selected : true},
            {title:'运行数据',value:'1',contentId:'#tabData2'},
        ]
    });
    //tab.setSelected(tab.getItemAt(0));
    //更改选中的标题
    $('#J_Btn').on('click',function(){
        var txt = $('#J_Txt').val();
        if(txt){
            var item = tab.getSelected();
            item.set('title',txt);
        }
    })

    var reportTypeTab = new Tab.TabPanel({
        render : '#reportTypeTab',
        panelContainer : '#reportTypePanel',//如果内部有容器，那么会跟标签项一一对应，如果没有会自动生成
        //selectedEvent : 'mouseenter',//默认为click,可以更改事件
        autoRender: true,
        children:[
            {title:'飞行',value:'2',selected : true},
            {title:'地面'},
            {title:'安保'},
            {title:'IT'},
            {title:'运行'},
            {title:'服务'},
        ]
    });
});

//下拉选择
seajs.use('bui/select', function (Select) {
    var items = [
            {text: '选项1', value: 'a'},
            {text: '选项2', value: 'b'},
            {text: '选项3', value: 'c'}
        ],
        items1 = [
            '1','2','3','4'
        ];

    var select1 = new Select.Select({
            render: '#s1',
            valueField: 'hide',
            multipleSelect: true, //是否多选
            items: items,
            //disabled:true
        });

    //选中后呈现标签
    var selectCombox = new Select.Combox({
        render: '#stag',
        elCls : 'bui-tag-follow',
        valueField : '#hide1',//显示tag的Combox必须存在valueField
        autoRender: true,
        showTag:true,
        tagItemTpl:'<li>{text}<button>×</button></li>',
        items: items1
    });

        var select2 = new Select.Select({
            render: '#s2',
            valueField: 'hide',
            //multipleSelect: true, //是否多选
            items: items
        });
    select3 = new Select.Select({
        render: '#s3',
        valueField: 'hide',
        //multipleSelect: true, //是否多选
        items: items
    });
    select4 = new Select.Select({
        render: '#s4',
        valueField: 'hide',
        //multipleSelect: true, //是否多选
        items: items
    });
    select5 = new Select.Select({
        render: '#s5',
        valueField: 'hide',
        //multipleSelect: true, //是否多选
        items: items
    });
    select6 = new Select.Select({
        render: '#s6',
        valueField: 'hide',
        //multipleSelect: true, //是否多选
        items: items
    });
    select7 = new Select.Select({
        render: '#s7',
        valueField: 'hide',
        //multipleSelect: true, //是否多选
        items: items
    });
    select8 = new Select.Select({
        render: '#s8',
        valueField: 'hide',
        //multipleSelect: true, //是否多选
        items: items
    });

    select1.render();
    select2.render();
    select3.render();
    select4.render();
    select5.render();
    select6.render();
    select7.render();
    select8.render();
    select1.on('change', function (ev) {
        //ev.text,ev.value,ev.item
    });
});

//表格
BUI.use(['bui/grid', 'bui/data', 'bui/toolbar'], function (Grid, Data, Toolbar) {
    var Grid = Grid,
        Store = Data.Store,
        enumObj = {"1": "选项一", "2": "选项二", "3": "选项三"},
        columns = [
            {title: '工号', dataIndex: 'b', editor: {xtype: 'number'}},
            {
                title: '一级部门',
                dataIndex: 'c',
                editor: {xtype: 'date', datePicker: {showTime: true}, rules: {required: true}},
                renderer: Grid.Format.datetimeRenderer
            },
            {
                title: '岗位',
                dataIndex: 'd',
                editor: {xtype: 'select', items: enumObj},
                renderer: Grid.Format.enumRenderer(enumObj)
            },
            {
                title: '状态',
                dataIndex: 'd',
                editor: {xtype: 'select', items: enumObj},
                renderer: Grid.Format.enumRenderer(enumObj)
            },
            {
                title: '操作', dataIndex: 'e', width: '28%', renderer: function () {
                return '<span class="czy-btn czy-btn-text-success czy-btn-text btn-edit">编辑</span>' +
                    '<span class="czy-btn czy-btn-text-success czy-btn-text ">启用</span>' +
                    '<span class="czy-btn czy-btn-text-success czy-btn-text ">停用</span>' +
                    '<span class="czy-btn czy-btn-text-success  czy-btn-text">分配角色</span>'
            }
            }
        ],
        //disabled的字段无法被选中
        //数据字典
        dictionariesColumns = [{title: '工号', dataIndex: 'a', sortable: false},
            {title: '姓名', dataIndex: 'b'},
            {title: '一级部门', dataIndex: 'c'},
            {title: '一级部门', dataIndex: 'c',width:'30%'},
            /*{
                title: '操作', dataIndex: 'c',elCls : 'addBtn', renderer: function () {
                return '<span class="czy-btn czy-btn-text-success czy-btn-text btn-edit">编辑</span>' +
                    '<span class="czy-btn czy-btn-text-success btn-edit czy-btn-text" id="delCurrRow">删除</span>'
            }
            }*/
        ],
        //检查单
        checkedListColumns = [
            {title: '检查审核/检测类型', dataIndex: 'a', sortable: false},
            {title: '检查审核/检测项目', dataIndex: 'b',sortable: false},
            {title: '适用部门', dataIndex: 'c',sortable: false},
            {title: '检查审核/测试要点', dataIndex: 'c',sortable: false},
            {title: '检查审核/测试依据', dataIndex: 'c',sortable: false},
            {
                title: '操作', dataIndex: 'c',sortable:false, elCls:'tableAddBtn',renderer: function () {
                return '<span class="czy-btn czy-btn-text-success czy-btn-text check-btn-edit">编辑</span>' +
                    '<span class="czy-btn czy-btn-text-success czy-btn-text btn-edit">删除</span>'
            }
            }
        ],
        //纠正预防-风险管理
        riskColumns = [
            {title: '责任部门', dataIndex: 'b',sortable: false},
            {title: '危险源编号', dataIndex: 'c',sortable: false},
            {title: '危险描述', dataIndex: 'c',sortable: false},
            {title: '风险等级', dataIndex: 'c',sortable: false},
            {title: '风险属性', dataIndex: 'c',sortable: false},
            {title: '根源因', dataIndex: 'c',sortable: false},
            {title: '控制措施', dataIndex: 'c',sortable: false},
            {title: '风险评估', dataIndex: 'c',sortable: false},
            {title: '评估结果', dataIndex: 'c',sortable: false},
        ],
        //纠正预防措施
        correctColumns = [
            {title: '辨识部门', dataIndex: 'a', sortable: false,},
            {title: '责任人', dataIndex: 'b',sortable: false},
            {title: '措施类型', dataIndex: 'c',sortable: false},
            {title: '纠正预防措施', dataIndex: 'c',sortable: false},
            {title: '计划完成时间', dataIndex: 'c',sortable: false},
            {title: '验证日期', dataIndex: 'c',sortable: false},
            {title: '跟踪验证状态', dataIndex: 'c',sortable: false},
        ],

        data = [
            {a: '123',id:3,selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
        ],
        data2 = [{a:'123',records:[{a:'123'},{b:'2334'}]},{a:'cdd',b:'edd',records:[{a:'123'},{b:'2334'}]},{a:'1333',c:'eee',d:2,records:[{a:'123'},{b:'2334'}]}];
    //数据实例化
    var store = new Store({
            data: data,
            autoLoad: true,
            pageSize: 2	// 配置分页数目
        }),
        store1 = new Store({
            //url:'http://10.131.10.206:81/data/grid?start=0&limit=10&pageIndex=0&_=1501555739065',
            //root:'rows',
            data: data2,
            autoLoad: true,
        }),

    //行内编辑功能实例化
    editing = new Grid.Plugins.RowEditing({
        triggerCls: 'btn-edit',
        triggerSelected: false,
    }),

        //弹框编辑
        checkListediting = new Grid.Plugins.DialogEditing({
            contentId : 'chiclListAddPop', //设置隐藏的Dialog内容
            triggerCls : 'btn-edit', //触发显示Dialog的样式
            editor : {
                title : '验证单新增',
                width : 950,
                buttons:[
                    {
                        text:'保存',
                        elCls : 'czy-btn czy-btn-success',
                        handler : function(){
                            //do some thing
                            this.close();
                        }
                    }
                ],
            }
        }),

        // 实例化 Grid.Plugins.Cascade 插件(折叠子表格)
        cascade = new Grid.Plugins.Cascade({
            renderer : function(record){
                return '<div id="correctTable"></div>';//生成子表格容器
            }
        });

    //子表格的配置信息
    var GridConfig = {
        columns: correctColumns,  //列配置
        loadMask: true, //加载数据时显示屏蔽层
        autoRender: true,
        tbar:{
            tpl:'<h3 class="thunk-title mar-b0 float-l">一个标题</h3>',
            elCls:'clear mar-b10',
            items: [{
                btnCls: 'czy-btn czy-btn-empty czy-btn-x float-r mar-r5',
                text: '增加',
                listeners: {
                    //'click':
                }
            }
                ,{
                    btnCls: 'czy-btn czy-btn-empty czy-btn-x float-r mar-r5',
                    text: '选择',
                    listeners: {
                        //'click': addFunction
                    }
                }]
        }
        //plugins: [editing, Grid.Plugins.CheckSelection]	// 插件形式引入多选表格 , 编辑表格
    };

    //纠正预防-风险管理
    new Grid.Grid({
        render: '#foldChildable',
        columns: riskColumns,  //列配置
        store: store1,
        forceFit: true,  //配置自适应宽度
        loadMask: true, //加载数据时显示屏蔽层
        autoRender: true,
        plugins: [cascade] // 插件形式引入多选
    });


    cascade.on('expand',function(ev){
        var data = ev.record,
            row = ev.row,
            sgrid = $(row).data('sub-grid');
        if(!sgrid){
            var container =$(row).find('#correctTable'),
                gridConfig = BUI.cloneObject(GridConfig);
            gridConfig.render = container;
            sgrid = new Grid.Grid(gridConfig);
            sgrid.showData(data.records); //显示数据,当不使用store时，可以单独显示数据
            $(row).data('sub-grid',sgrid);
        }
    });

    //表格实例化+配置
    var Grid1 =new Grid.Grid({
        render: '#grid',  //控件包裹层
        columns: columns,  //列配置
        width: '100%',
        //forceFit : true,
        itemStatusFields: { //设置数据跟状态的对应关系
            selected: 'selected',
            disabled: 'disabled'
        },
        autoRender: true,    //调用显示控件
        store: store,      //表格控件,表格控件类图，一般情况下配合BUI.Data.Store 一起使用
        plugins: [editing, Grid.Plugins.CheckSelection]	// 插件形式引入多选表格 , 编辑表格
        //multiSelect: true  // 控制表格是否可以多选，但是这种方式没有前面的复选框 默认为false
    });

    Grid1.on('itemclick',function(e){
        console.log(e);
        console.log(Grid1.getltem());
    })


    // 数据字典（序号）
    new Grid.Grid({
        render: '#dictionariesEl',
        columns: dictionariesColumns,
        store: store,
        //forceFit: true,  //配置自适应宽度
        width:'100%',
        loadMask: true, //加载数据时显示屏蔽层
        autoRender: true,
        //disabled: true,  //禁用表单
        plugins: [Grid.Plugins.RowNumber] // 插件形式引入序号
        //multiSelect: true  // 控制表格是否可以多选，但是这种方式没有前面的复选框 默认为false
    });

    // 检查单维护(操作按钮)
    new Grid.Grid({
        render: '#checkedListEl',
        columns: checkedListColumns,  //列配置
        store: store,
        forceFit: true,  //配置自适应宽度
        loadMask: true, //加载数据时显示屏蔽层
        autoRender: true,
        //顶部工具栏
        tbar: { //添加、删除
            elCls:'clear mar-b10',
            items: [{
                btnCls: 'czy-btn czy-btn-empty float-l mar-r5',
                text: '导入',
                listeners: {
                    //'click':
                }
            }
                ,{
                    btnCls: 'czy-btn czy-btn-empty float-l mar-r5',
                    text: '导出',
                    listeners: {
                        //'click': addFunction
                    }
                },
                {
                    btnCls:'czy-btn czy-btn-text-success float-l',
                    text:'检查单模板下载'
                },
                {
                    btnCls: 'czy-btn czy-btn-success float-r',
                    text:'新增',
                    listeners: {
                        'click': addFunction
                    }
                },
                {
                    btnCls: 'czy-btn czy-btn-empty float-r mar-r5',
                    text: '批量删除',
                    listeners: {
                        'click': delFunction
                    }
                }],
        },
        plugins: [checkListediting,Grid.Plugins.CheckSelection] // 插件形式引入多选
    });

    //行内编辑
    editing.on('editorshow', function (ev) {
        var editor = editing.get('curEditor');
        editor.set('errorAlign', {
            points: ['tr', 'br'],
            offset: [0, 0]  //错误提示的定位
        });
    });

    $('#delCurrRow').on('click', function () {
        var record = store.getResult()[0];
        if (record) {
            store.remove(record);
        }
    });

    //添加
    function addFunction() {
        var newData = {b : 0};
        checkListediting.add(newData,'a'); //添加记录后，直接编辑
    }

    //删除
    function delFunction() {
        var selections = grid.getSelection();
        store.remove(selections);
    }
});

//结构树
seajs.use('bui/tree', function (Tree) {

    //树节点数据，
    //text : 文本，
    //id : 节点的id,
    //leaf ：标示是否叶子节点，可以不提供，根据childern,是否为空判断
    //expanded ： 是否默认展开
    //checked : 节点是否默认选中
    var data = [
        {text: '1', id: '1', checked: true, children: [{text: '11', id: '11'}]},
        {
            text: '2', id: '2', expanded: true, children: [
            {text: '21', id: '21', children: [{text: '211', id: '211'}, {text: '212', id: '212'}]},
            {text: '22', id: '22'}
        ]
        },
        {text: '3', id: '3'},
        {text: '4', id: '4'}
    ];
    //由于这个树，不显示根节点，所以可以不指定根节点
    var tree = new Tree.TreeList({
        render: '#t1',
        nodes: data,
        checkType: 'all', //checkType:勾选模式，提供了4中，all,onlyLeaf,none,custom
        showLine: true, //显示连接线
        multipleCheck : false,
        cancelSelected:false,
    });
    tree.render();

    tree.on('checkedchange', function (ev) {
        var checkedNodes = tree.getCheckedNodes();
        var str = '';
        BUI.each(checkedNodes, function (node) {
            str += node.id + ',';
        });
        $('.log').text(str);
    });
});

//弹框
seajs.use('bui/overlay', function (Overlay) {
    //新增角色
    var formPop = new Overlay.Dialog({
        title: '新增',
        width: 700,
        height: 500,
        buttons: [{
            text: '确定',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }, {
            text: '关闭',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }],
        contentId: 'addRole',
        success: function () {
            alert('确认');
            this.close();
        }
    });
    $('#addRoleBtn').on('click', function () {
        formPop.show();
    });

    //新增字典
    var dictionariesAdd = new Overlay.Dialog({
        title: '新增',
        width: 700,
        height: 500,
        buttons: [{
            text: '确定',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }, {
            text: '关闭',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }],
        contentId: 'dictionariesAdd',
        success: function () {
            alert('确认');
            this.close();
        }
    });
    $('#dictionariesAddBtn').on('click', function () {
        dictionariesAdd.show();
    });

    //新增报告
    var infooreportAdd = new Overlay.Dialog({
        title: '新增',
        width: 700,
        height: 500,
        buttons: [{
            text: '确定',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }, {
            text: '关闭',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }],
        contentId: 'infooreportAdd',
        success: function () {
            alert('确认');
            this.close();
        }
    });
    $('#infooreportAddBtn').on('click', function () {
        infooreportAdd.show();
    });

    //新增检查单
    var checkListAdd = new Overlay.Dialog({
        title: '新增检查单',
        width: 700,
        height: 500,
        buttons: [{
            text: '确定',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }],
        contentId: 'chiclListAddPop',
        success: function () {
            alert('确认');
            this.close();
        }
    });
    $('#chiclListAddBtn').on('click', function () {
        checkListAdd.show();
    });

    //提示框_____错误
    var popError = new Overlay.Dialog({
        title: '提示框',
        width: 400,
        height: 200,
        elCls:'pop-wrap error-pop',
        buttons: [{
            text: '确定',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }],
        contentId: 'errorPopContent',
        success: function () {
            alert('确认');
            this.close();
        }
    });
    $('#popError').on('click', function () {
        popError.show();
    });

    //提示框_____警告
    var popWarning = new Overlay.Dialog({
        title: '提示框',
        width: 400,
        height: 200,
        elCls:'pop-wrap warning-pop',
        buttons: [{
            text: '确定',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }],
        contentId: 'warningPopContent',
        success: function () {
            alert('确认');
            this.close();
        }
    });
    $('#popWarning').on('click', function () {
        popWarning.show();
    });

    //提示框_____成功
    var popSuccess = new Overlay.Dialog({
        title: '提示框',
        width: 400,
        height: 200,
        buttons: [{
            text: '确定',
            elCls: 'czy-btn czy-btn-success',
            handler: function () {
                //do some thing
                this.close();
            }
        }],
        contentId: 'successPopContent',
        success: function () {
            alert('确认');
            this.close();
        }
    });
    $('#popSuccess').on('click', function () {
        popSuccess.show();
    });

});

//alert消息提示
// BUI.use('bui/overlay',function(overlay){
//         BUI.Message.Alert('这只是简单的成功信息','success',{elCls:'error-pop'});
//         BUI.Message.Alert('这只是简单的警告信息','warning');
//         BUI.Message.Alert('这只是简单的错误信息','error');
//         BUI.Message.Alert('这只是简单的询问信息','question');
//
//         //回调函数
//         BUI.Message.Alert('点击触发回调函数',function() {
//                  alert('执行回调');
//                },'error');
//
//         //复杂的提示信息
//         var msg = '&lt;h2&gt;上传失败，请上传10M以内的文件&lt;/h2&gt;'+
//                '&lt;p class="auxiliary-text"&gt;如连续上传失败，请及时联系客服热线：0511-23883767834&lt;/p&gt;'+
//                '&lt;p&gt;&lt;a href="#"&gt;返回list页面&lt;/a&gt; &lt;a href="#"&gt;查看详情&lt;/a&gt;&lt;/p&gt;';
//          BUI.Message.Alert(msg,'error');
//         //确认信息
//         BUI.Message.Confirm('确认要更改么？',function(){
//                alert('确认');
//              },'warning'); //info,error,success,question,warning
// });

//页面挂件收缩
seajs.use('czy/shrink', function (Shrink) {
    var s = new Shrink.display({
        btn: "#J-labelBtn",
        moveEl: "#J-moveThunk",
        way:1,
        bound:-1,
    });
});

//收缩展开
seajs.use('czy/slideThunk', function (slideThunk){
    new slideThunk.display({
        btn: ".fold-btn",
        moveEl: ".content-thunk",
        cb:function(obj){
            var iconEl = obj.$currBtnEl.find('.fold-arrows');
            if(obj.flg){
                iconEl.removeClass('fold-arrows-down');
            }else{
                iconEl.addClass('fold-arrows-down');
            }
        }
    });
});

//树选框
/*BUI.use(['bui/extensions/treepicker', 'bui/tree', 'bui/data'], function (TreePicker, Tree, Data) {
    //树节点数据，
    //text : 文本，
    //id : 节点的id,
    //leaf ：标示是否叶子节点，可以不提供，根据childern,是否为空判断
    //expanded ： 是否默认展开
    var data = [
            {text: '1', id: '1', children: [{text: '11', id: '11'}]},
            {
                text: '2', id: '2', expanded: true, children: [
                {text: '21', id: '21', children: [{text: '211', id: '211'}, {text: '212', id: '212'}]},
                {text: '22', id: '22'}
            ]
            },
            {text: '3', id: '3'},
            {text: '4', id: '4'}
        ];

    var store = new Data.TreeStore({
        root : {
            id : '0',
            text : '0',
            checked : false
        },
        pidField : 'pid',
        url : 'data/nodes.php'
         /!*autoLoad : true*!/
    });

        //由于这个树，不显示根节点，所以可以不指定根节点
      var tree = new Tree.TreeList({
            nodes:data,
            checkType: 'all',
            //store : store,
            //dirSelectable : false,//阻止树节点选中
            showLine: true ,//显示连接线
            multipleCheck:false,
            //showRoot : true
        });

    var picker = new TreePicker({
        trigger: '#show',
        valueField: '#hide', //如果需要列表返回的value，放在隐藏域，那么指定隐藏域
        width: 163,  //指定宽度
        selectStatus: 'checked',//设置勾选作为状态改变的事件
        filter: function (node) { //过滤非叶子节点
            return node.leaf;
        },
        children: [tree] //配置picker内的列表
    });
    picker.render();

    tree.on('itemclick',function(e){
        var item = e.item;
        console.log(tree.findNode(item.id).checked);
        console.log(item);
        console.log(item.checked);
        if(!item.checked){
            tree.setNodeChecked(item,true);
        }else{
            tree.setNodeChecked(item,false);
        }
    })
});*/

//日期选择
BUI.use('bui/calendar',function(Calendar){
    var datepicker = new Calendar.DatePicker({
        trigger:'.calendar',
        autoRender : true,
    });
});
//时间选择
BUI.use('bui/calendar',function(Calendar){
    var datepicker = new Calendar.DatePicker({
        trigger:'.calendar-time',
        showTime:true,
        autoRender : true
    });
});

//check多选，反选
seajs.use('czy/check',function(check){
    $(function(){
        var items=[{
            text:'童佳琳', //必选
            id:2,//id
            value:'name2',//设置value值
            checked:true, //设置默认
            childTpl:'<i class="czy-icon-seleced"></i>', //添加图标 （不需要改动）
        },{
            text:'童佳琳',
            id:3,
            value:'name3',
            childTpl:'<i class="czy-icon-seleced"></i>',
            disabled:true,
        },{
            text:'童佳琳',
            id:4,
            childTpl:'<i class="czy-icon-seleced"></i>',
        },{
            text:'童佳琳',
            id:5,
            childTpl:'<i class="czy-icon-seleced"></i>',
        },{
            text:'童佳琳',
            id:6,
            childTpl:'<i class="czy-icon-seleced"></i>',
        },]

        var che = new check.Select({
            pattern:'radio',    //单选radio   多选check
            rendEl : '#checkSelect',    //包裹层 (必选)
            items : items,  //选项配置 (必选)
            elCls : 'clear select-list-thunk', //选项父元素 （可不管）
            autoRender: true,   //自动绘制 （根据需求）
            tbar : [
                {   text:'全选',
                    id:"allSelect",
                    listeners : {
                    'click' : allFun
                }},

                {text:'反选',id:"InvertSelection",listeners : {
                    'click' : reverseFunction
                }}
            ],  //操作栏 （根据需求）
            callBack :function($currEl){
                console.log($currEl);
            }
        });

        function allFun(){
            che.allCheck() //全选方法
        }

        function reverseFunction(){
            che.reverseCheck();//反选方法
        }
    })
});

//check单选
seajs.use('czy/check',function(check){
    $(function(){
        var items=[{
            text:'主动报告', //必选
            id:'t1',//id （根据需求）
            value:'name2',//设置value值 （根据需求）
            elCls:'select-item', //(不需要改动)
            checked:true,   //默认值 （根据需求）
        },{
            text:'主动报告',
            id:2,//id
            value:'name2',//设置value值
        }]

        new check.Select({
            pattern:'radio',    //单选   多选
            rendEl : '#radioSelect',    //包裹层
            items : items,  //选项配置
            elCls : 'czy-select-gulp-thunk clear', //选项父元素 (不需要改动)
            name:'cc', //name值 （根据需求）
            elName:'li',    //元素名称 （可不改动）
            autoRender: true,   //自动绘制 （根据需求）
        });
    })
});

//check单选——风险类型
seajs.use(['czy/check'],function(check){
    $(function(){
        var items=[{
            text:'主动报告', //必选
            id:'t1',//id （根据需求）
            value:'name2',//设置value值 （根据需求）
            elCls:'select-item', //(不需要改动)
            checked:true,   //默认值 （根据需求）
            tooltip:'什么什么1', //配置提示信息
        },{
            text:'安全报告/危险建议',
            id:2,//id
            value:'name2',//设置value值
            tooltip:'什么什么2',
        },{
            text:'安全投诉',
            id:2,//id
            value:'name2',//设置value值
            tooltip:'什么什么3',
        }];

        new check.Select({
            pattern:'radio',    //单选   多选
            rendEl : '#reportType',    //包裹层
            items : items,  //选项配置
            elCls : 'czy-select-gulp-thunk clear', //选项父元素 (不需要改动)
            name:'cc', //name值 （根据需求）
            elName:'li',    //元素名称 （可不改动）
            autoRender: true,   //自动绘制 （根据需求）
        });
    })
});

//风险管理多选
seajs.use('czy/check',function(check){
    $(function(){
        var items=[{
            text:'很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述'
            +'很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述',  //必选
            id:2,//id
            value:'name2',//设置value值
            elCls:'select-item',
            checked:true, //默认值

        },{
            text:'规则二',
            id:1,//id
            value:'name2',//设置value值

        },{
            text:'规则三',
            id:4,//id
            value:'name2',//设置value值

        }]

        new check.Select({
            pattern:'check',    //单选radio   多选check 必选
            rendEl : '#riskManagement-1',    //包裹层 必选
            items : items,  //选项配置  必选
            elCls : 'section-condition-list', //选项父元素
            name:'cc', //name值
            elName:'li',    //元素名称
            autoRender: true,   //自动绘制
        });
    })
});


seajs.use('czy/check',function(check){
    $(function(){
        var items=[{
            text:'很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述'
            +'很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述很多的描述',  //必选
            id:2,//id
            value:'name2',//设置value值
            elCls:'select-item',
            checked:true, //默认值
            beforeTpl:'<i class="czy-checkbox"></i>' //之前
        },{
            text:'规则二',
            id:1,//id
            value:'name2',//设置value值
            beforeTpl:'<i class="czy-checkbox"></i>' //之前
        },{
            text:'规则三',
            id:4,//id
            value:'name2',//设置value值
            beforeTpl:'<i class="czy-checkbox"></i>' //之前
        }]

        new check.Select({
            pattern:'check',    //单选radio   多选check 必选
            rendEl : '#riskManagement-2',    //包裹层 必选
            items : items,  //选项配置  必选
            elCls : 'section-condition-list section-check', //选项父元素
            name:'cc', //name值
            elName:'li',    //元素名称
            autoRender: true,   //自动绘制
        });
    })
});



//check多选-风险管理
seajs.use('czy/check',function(check){
    $(function(){
        var items=[{
            text:'时间', //必选
            //id:2,//id
            //value:'name2',//设置value值
            checked:true, //设置默认
            childTpl:'<i class="czy-icon-seleced"></i>', //添加图标 （不需要改动）
        },{
            text:'地点',
            id:2,//id
            value:'name2',//设置value值
            checked:true,
            childTpl:'<i class="czy-icon-seleced"></i>', //添加图标 （不需要改动）
        }
        ,{
            text:'任务',
            id:2,//id
            value:'name2',//设置value值
            childTpl:'<i class="czy-icon-seleced"></i>', //添加图标 （不需要改动）
        }]

        new check.Select({
            pattern:'check',    //单选   多选
            rendEl : '#riskJudgement',    //包裹层
            items : items,  //选项配置
            elCls : 'clear select-list-thunk', //选项父元素
            name:'cc', //name值
            elName:'li',    //元素名称
            autoRender: true,   //自动绘制
        });
    })
});

//菜单滑动切换
seajs.use('czy/menuSlide',function(menuSlide){
    var items = [
        {
            text:"全部",
            id:'all',
            elCls:'tab-all',
            active:true,
        },
        {
            text:"典型安全信系",
            id:'1',
            href:'#1'
        },
        {
            text:"同行安全信息同行安全信息同行安全信息同行安全信息同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息",
            id:'2',
            href:'#2'
        },{
            text:"同行安全信息同行安全信息同行安全信息同行安全信息",
            id:'2',
            href:'#2'
        }
    ];

    new menuSlide.Slide({
        rendEl:'#menuTab',
        items:items,
        elCls:'',
        autoRender:true,
        tabChangerCb:function(currEl){
            var $contents = $('.menu-content-thunk').children('ul');
            $($contents).each(function(i,item){
                $(item).hide();
            })
            $($contents[currEl.index()]).show();
        },
    });
});

//表格
//简单表格
function Table1(obj){
    this.obj = obj;
    this.init();
}
Table1.prototype = {
    init:function(){
        var obj = this.obj;
        if(!obj.el){console.log("需要表格Id");  return}
        this.executeBUI(obj);
    },
    executeBUI:function(obj){
        BUI.use(['bui/grid', 'bui/data'], function (Grid, Data) {
            var Grid = Grid,
                Store = Data.Store;

            //数据实例化
            var store = new Store({
                data: obj.data,
                autoLoad: true
            });

            //表格实例化+配置
            new Grid.Grid({
                render:obj.el,  //控件包裹层
                columns: obj.columns,  //列配置
                width: '100%',
                forceFit : true,
                autoRender: true,    //调用显示控件
                store: store,      //表格控件,表格控件类图，一般情况下配合BUI.Data.Store 一起使用

            });
        });
    }
};

new Table1({
    //数据配置
    data:[
        {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
    ],
    columns:[
        {title: '报告编号', dataIndex: 'a'},
        {
            title: '报告来源',
            dataIndex: 'c',
        },
        {
            title: '责任部门',
            dataIndex: 'd',
        },
        {
            title: '涉及范围',
            dataIndex: 'd',
        },
    ],
    el:"#correct",
});
new Table1({
    el:"#flight",
    data:[
        {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
    ],
    columns:[
        {title: '报告编号', dataIndex: 'a'},
        {
            title: '报告来源',
            dataIndex: 'c',
        },
        {
            title: '责任部门',
            dataIndex: 'd',
        },
        {
            title: '涉及范围',
            dataIndex: 'd',
        },
    ],
});

new Table1({
    el:"#riskCritical",
    data:[
        {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
    ],
    columns:[
        {title: '关键风险源', dataIndex: 'a',render:{
            content:'<i>1111</i>'
        },renderer:function(value,obj,index){


                return value +"bianji"
        }},
        {
            title: '危险源',
            dataIndex: 'c',
        },
    ],
});

//表格
BUI.use(['bui/grid', 'bui/data'], function (Grid, Data) {
    var Grid = Grid,
        Store = Data.Store,
        checkedListColumns = [
            {title: '检查审核/检测类型', dataIndex: 'a', sortable: false},
            {title: '检查审核/检测项目', dataIndex: 'b',sortable: false},
            {title: '适用部门', dataIndex: 'c',sortable: false},
            {title: '检查审核/测试要点', dataIndex: 'c',sortable: false},
            {title: '检查审核/测试依据', dataIndex: 'c',sortable: false},
            {
                title: '操作', dataIndex: 'c',sortable:false, elCls:'tableAddBtn',renderer: function () {
                return '<span class="czy-btn czy-btn-text-success czy-btn-text check-btn-edit">编辑</span>' +
                    '<span class="czy-btn czy-btn-text-success czy-btn-text btn-edit">删除</span>'
            }
            }
        ],
        data = [
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
            {a: '123', selected: true}, {a: 'cdd', b: 'edd', disabled: true}, {a: '1333', c: 'eee', d: 2},
        ];

    var store = new Store({
            data: data,
            autoLoad: true,
        }),
        //弹框编辑
        checkListediting = new Grid.Plugins.DialogEditing({
            contentId : 'chiclListAddPop', //设置隐藏的Dialog内容
            triggerCls : 'btn-edit', //触发显示Dialog的样式
            editor : {
                title : '验证单新增',
                width : 950,
                buttons:[
                    {
                        text:'保存',
                        elCls : 'czy-btn czy-btn-success',
                        handler : function(){
                            //do some thing
                            this.close();
                        }
                    }
                ],
            }
        });

    new Grid.Grid({
        render: '#possibilityList',
        columns: checkedListColumns,  //列配置
        store: store,
        forceFit: true,  //配置自适应宽度
        loadMask: true, //加载数据时显示屏蔽层
        autoRender: true,
        plugins: [Grid.Plugins.RowNumber,checkListediting] // 插件形式引入多选
    });
});

//设置表格滚动
$('.bui-grid-body').mCustomScrollbar({
    axis:'y',
    theme:'dark',
});

//危险评估滚动
$('.staff-content-list').mCustomScrollbar({
    axis:'y',
    theme:'dark',
});

//文件上传
BUI.use('bui/uploader',function (Uploader) {
    /**
     * 返回数据的格式
     *
     *  默认是 {url : 'url'},否则认为上传失败
     *  可以通过isSuccess 更改判定成功失败的结构
     */
    var uploader = new Uploader.Uploader({
        render: '#J_Uploader',
        url: '../../../test/upload/upload.php',
        text:'上传附件'
    }).render();

    var uploader = new Uploader.Uploader({
        render: '#J_IconUploader',
        url: '../../../test/upload/upload.php',
        text:'+',
    }).render();
});

//动态搜索选择
seajs.use('czy/searchSelect',function(select){
    var items = [{
      text:'推荐类型1',
      id:1,
      elCls:'type1',
      disabled:true,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型3',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },{
        text:'推荐类型4',
        id:1,
    },];

    var datas = [
        {text:'推荐类型4',
         id:1,
        },
        {text:'15236',
            id:2,
        },
        {text:'asdgas',
            id:3,
        },
        {text:'AbnjA',
            id:4,
        },
        {text:'世界',
            id:5,
        },
        {text:'世界1',
            id:6,
        },
        {text:'....=-=',
            id:7,
        },
        {text:'@@))**<<',
            id:8,
        },
    ];

    new select.SearchSelect({
        rendEl:'#searchSelect',
        items:items,    //推荐
        datas:datas,    //搜索数据
        autoRender: true,   //自动绘制 （根据需求）
        check:true, //多选
        height:300,
        //disabled:true,    //禁用输入
        searchCb:function (str) { //动态接口
            var result = [];
            $(this.datas).each(function(i,item){
                if(item.text.indexOf(str)!==-1){
                    result.push(item);
                }
            });
            return result;
        }
    })
})

//动态下拉
seajs.use('czy/searchSelect',function(select){
    var items = [{
        text:'推荐类型1',
        id:1,
        elCls:'type1',
        //disabled:true,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },];

    var datas = [
        {text:'推荐类型4',
            id:1,
        },
        {text:'15236',
            id:2,
        },
        {text:'asdgas',
            id:3,
        },
        {text:'AbnjA',
            id:4,
        },
        {text:'世界',
            id:5,
        },
        {text:'世界1',
            id:6,
        },
        {text:'....=-=',
            id:7,
        },
        {text:'@@))**<<',
            id:8,
        },
    ];

    var sss = new select.SearchSelect({
        rendEl:'#searchSelect2',
        items:[],    //推荐
        datas:datas,    //搜索数据
        autoRender: true,   //自动绘制 （根据需求）
        check:true, //多选
        //height:30,
        inputMode : true, //input框模式    common:true 普通类型
        //disabled:true,    //禁用输入
        searchCb:function (str) { //动态接口  str输入的内容
            var result = [];
            $(this.datas).each(function(i,item){
                if(item.text.indexOf(str)!==-1){
                    result.push(item);
                }
            });
            return result;   //返回结果集
        },

        //获取选中数据
        getSelectedData:function(data){
            console.log( '动态搜索选中的数据', data)
        },
    });
});

//数据下拉重设
seajs.use('czy/searchSelect',function(select){
    var items = [{
        text:'推荐类型1',
        id:1,
        elCls:'type1',
        //disabled:true,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },{
        text:'推荐类型2',
        id:1,
    },];

    var datas = [
        {text:'推荐类型4',
            id:1,
        },
        {text:'123564',
            id:8,
        },
        {text:'19875',
            id:9,
        },
        {text:'15236',
            id:2,
        },
        {text:'asdgas',
            id:3,
        },
        {text:'AbnjA',
            id:4,
        },
        {text:'世界',
            id:5,
        },
        {text:'世界1',
            id:6,
        },
        {text:'....=-=',
            id:7,
        },
        {text:'@@))**<<',
            id:8,
        },
    ];

    var sss = new select.SearchSelect({
        rendEl:'#SelectAll',
        items:[],    //推荐
        datas:datas,    //搜索数据
        autoRender: true,   //自动绘制 （根据需求）
        check:true, //多选
        //height:30,
        inputMode : true, //input框模式    common:true 普通类型
        //disabled:true,    //禁用输入
        searchCb:function (str) { //动态接口  str输入的内容
            var result = [];
            $(this.datas).each(function(i,item){
                if(item.text.indexOf(str)!==-1){
                    result.push(item);
                }
            });
            return result;   //返回结果集
        },

        //获取选中数据
        getSelectedData:function(data){
            console.log( '动态搜索选中的数据', data)
        },
    });
    sss.set('items',items);
    sss.updata();
});

//单行编辑表格
BUI.use(['bui/grid','bui/data','bui/picker','bui/tree'],function(Grid,Data,Picker,Tree){
    //树节点数据，
    //text : 文本，
    //id : 节点的id,
    //leaf ：标示是否叶子节点，可以不提供，根据childern,是否为空判断
    //expanded ： 是否默认展开
    var nodes = [
            {text : '1',id : '1',children: [{text : '11',id : '11'}]},
            {text : '2',id : '2',expanded : true,children : [
                {text : '21',id : '21',children : [{text : '211',id : '211'},{text : '212',id : '212'}]},
                {text : '22',id : '22'}
            ]},
            {text : '3',id : '3'},
            {text : '4',id : '4'}
        ],
        //由于这个树，不显示根节点，所以可以不指定根节点
        tree = new Tree.TreeList({
            nodes : nodes,
            dirSelectable : false,//阻止树节点选中
            showLine : true //显示连接线
        });

    var  picker = new Picker.ListPicker({
        width:150,  //指定宽度
        children : [tree] //配置picker内的列表
    });
    var Grid = Grid,
        Store = Data.Store,
        enumObj = {"1" : "选项一","2" : "选项二","3" : "选项三"},
        columns = [
            {title : '文本',dataIndex :'a',editor : {xtype : 'text'}}, //editor中的定义等用于 BUI.Form.Field.Text的定义
            {title : '数字', dataIndex :'b',editor : {xtype : 'number',rules : {required : true}}},
            {title : '树单选',dataIndex : 'd', editor : {xtype :'select',select : {picker : picker}}},
            {title : '多选',dataIndex : 'e', editor : {xtype :'select',select:{multipleSelect : true},items : enumObj},renderer : Grid.Format.multipleItemsRenderer(enumObj)},
            {title : '操作',dataIndex : 'e', renderer: function () {
                return '<span class="czy-btn czy-btn-text-success czy-btn-text btn-edit" id="editor">编辑</span>' +
                    '<span class="czy-btn czy-btn-text-success czy-btn-text ">删除</span>'
            }}
        ],
        data = [{a:'123',e:'2,3'},{a:'cdd',c:1363924044176},{a:'1333',b:2222,d:2}];
    var editing = new Grid.Plugins.CellEditing(),
        store = new Store({
            data : data,
            autoLoad:true
        });
    var Grid2 = new Grid.Grid({
        render: '#rowEditorEl',  //控件包裹层
        columns: columns,  //列配置
        width: '100%',
        //forceFit : true,
        itemStatusFields: { //设置数据跟状态的对应关系
            selected: 'selected',
            disabled: 'disabled'
        },
        autoRender: true,    //调用显示控件
        store: store,      //表格控件,表格控件类图，一般情况下配合BUI.Data.Store 一起使用
        plugins: [Grid.Plugins.CheckSelection]	// 插件形式引入多选表格 , 编辑表格
        //multiSelect: true  // 控制表格是否可以多选，但是这种方式没有前面的复选框 默认为false
    });

    //添加记录
    function addFunction(){
        var newData = {b : 0};
        store.addAt(newData,0);
        editing.edit(newData,'a'); //添加记录后，直接编辑
    }
    //删除选中的记录
    function delFunction(){
        var selections = grid.getSelection();
        store.remove(selections);
    }
});

//风险评估 check单选
seajs.use('czy/check',function(check){
    $(function(){
        var items=[{
            text:'是', //必选
            id:'t1',//id （根据需求）
            value:'name2',//设置value值 （根据需求）
            elCls:'select-item', //(不需要改动)
            checked:true,   //默认值 （根据需求）
        },{
            text:'否',
            id:2,//id
            value:'name2',//设置value值
        }]

        new check.Select({
            pattern:'radio',    //单选   多选
            rendEl : '#selectRadio',    //包裹层
            items : items,  //选项配置
            elCls : 'czy-select-gulp-thunk clear', //选项父元素 (不需要改动)
            name:'cc', //name值 （根据需求）
            elName:'li',    //元素名称 （可不改动）
            autoRender: true,   //自动绘制 （根据需求）
        });

        new check.Select({
            pattern:'radio',    //单选   多选
            rendEl : '#selectRadio1',    //包裹层
            items : items,  //选项配置
            elCls : 'czy-select-gulp-thunk clear', //选项父元素 (不需要改动)
            name:'cc', //name值 （根据需求）
            elName:'li',    //元素名称 （可不改动）
            autoRender: true,   //自动绘制 （根据需求）
        });


    })
});

//表格内提示
BUI.use(['bui/grid','bui/data','bui/tooltip'],function(Grid,Data,Tooltip){
    var Grid = Grid,
        Store = Data.Store,
        columns = [
            {title : '关键风险',dataIndex :'a',renderer:function(value){
                return '<div> '+value +'<i id="t7" class="mar-l10 czy-icon czy-icon-tooltip"></i> </div>'
            }},
            {title : '危险源', dataIndex :'b',},
            {title : '操作',dataIndex : 'e',width:'10%', renderer: function () {
                return '<span class="czy-btn czy-btn-text-success czy-btn-text btn-edit">编辑</span>' +
                    '<span class="czy-btn czy-btn-text-success czy-btn-text ">删除</span>'
            }}
        ],
        data = [{a:'123',e:'2,3'},{a:'cdd',c:1363924044176},{a:'1333',b:2222,d:2}];
    var
        store = new Store({
            data : data,
            autoLoad:true
        });

    new Grid.Grid({
        render: '#riskCritical1',  //控件包裹层
        columns: columns,  //列配置
        width: '100%',
        //forceFit : true,
        autoRender: true,    //调用显示控件
        store: store,      //表格控件,表格控件类图，一般情况下配合BUI.Data.Store 一起使用

        //multiSelect: true  // 控制表格是否可以多选，但是这种方式没有前面的复选框 默认为false
    });

    new Tooltip.Tip({
        trigger : '#t7',
        alignType : 'bottom-left',
        offset : 10,
        width:100,
        title : 'wimaewoawmasifwaofaoewfmasdfjawoeifjawofijasidjfoasdjfaoiwjfaisdfasdfiaoe', //自定义大段文本
        elCls : 'custom',
        titleTpl : '<p>{title}</p>',
        autoRender: true,    //调用显示控件
    });
});

//结构树-选中展示
seajs.use('bui/tree', function (Tree) {

    //树节点数据，
    //text : 文本，
    //id : 节点的id,
    //leaf ：标示是否叶子节点，可以不提供，根据childern,是否为空判断
    //expanded ： 是否默认展开
    //checked : 节点是否默认选中
    var data = [
        {text: '1', id: '1', checked: true, children: [{text: '11', id: '11'}]},
        {
            text: '2', id: '2', expanded: true, children: [
            {text: '21', id: '21', children: [{text: '211', id: '211'}, {text: '212', id: '212'}]},
            {text: '22', id: '22'}
        ]
        },
        {text: '3', id: '3'},
        {text: '4', id: '4'}
    ];

    var tree = new Tree.TreeList({
        render: '#selectedDisplay',
        nodes: data,
        checkType: 'all', //checkType:勾选模式，提供了4中，all,onlyLeaf,none,custom
        showLine: true, //显示连接线
        cancelSelected:false,
    });
    tree.render();
    //选中渲染
    selectedRender();

    var $delBtns = null;
    var $selectedItems = null;

    tree.on('itemclick', function (ev) {
        selectedRender();
    });

    //选中渲染
    function selectedRender(){
        var checkedNodes = tree.getCheckedNodes();
        if($('.tree-selected-list').children('.tree-selected-item')){
            $('.tree-selected-list').empty();
        }
        var tpl = '';
        BUI.each(checkedNodes, function (node) {
            tpl += '<li class="tree-selected-item clear" data-id="'+node.id+'">'+node.text+' <i id="J_delSelceted" class="czy-close-selected float-r">×</i></li>';
        });
        var list = $('.tree-selected-list').append(tpl);

        $selectedItems = list.children();
        $delBtns = $selectedItems.children('#J_delSelceted');

        $delBtns.on('click',function(){
            var $curritem = $(this).parent();
            var node = tree.findNode($curritem.attr('data-id'));
            tree.setNodeChecked(node,false); //取消勾选
            selectedRender();
        })
    }
});

//分页
BUI.use(['bui/toolbar','bui/data'],function(Toolbar,Data){
    var PBar = Toolbar.PagingBar;
    var NumerPBar = Toolbar.NumberPagingBar;
    var Store = Data.Store;
    var data = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},];
    var store = new Store({data:data,pageSize:1,autoLoad:true});

        new PBar({ //未应用任何样式
            render : '#barPages',
            autoRender: true,
            elCls:'count-thunk',
            items : ['totalCount'],
            totalCountTpl:'查询到{totalCount}条',
            store : store
        });

        new NumerPBar({
            render : '#barPages',
            autoRender: true,
            elCls : 'pagination',
            store : store,
            maxLimitCount:0, //起始位置的最少按钮数
            showRangeCount:0, //当前页，2边的按钮数目，默认为1
            prevText : '上一页',
            nextText : '下一页',
        });

        new PBar({ //未应用任何样式
            render : '#barPages',
            elCls:'curPage-thunk',
            autoRender: true,
            items : ['curPage','skip'],
            curPageTpl:'<input type="text">/{totalPage}',
            skipText:'跳转',
            store : store
        });
});

//流转日志
seajs.use(['bui/tab','bui/mask'],function(Tab){
    var reportTypeTab = new Tab.TabPanel({
        render : '#flowTab',
        panelContainer : '#reportTypePanel',//如果内部有容器，那么会跟标签项一一对应，如果没有会自动生成
        autoRender: true,
        children:[
            {title:'流程图',selected : true},
            {title:'流转日志'},
            {title:'抄送记录'},
        ]
    });
});

//级联下拉
// 自定义类型
BUI.use('bui/form',function(Form){
    var data = [{"id" : "1","text":"山东","children":[
        {"id":"11","text":"济南","leaf":false},
        {"id":"12","text":"淄博","leaf":false,"children":[
            {"id":"121","text":"淄川区","leaf":true}
        ]}
    ]}];

    BUI.Form.Group.Select.addType('type2',{
        data : data
    });

    // 静态数据源
    var data = [{"id" : "1","text":"山东","children":[
        {"id":"11","text":"济南","leaf":false},
        {"id":"12","text":"淄博","leaf":false,"children":[
            {"id":"121","text":"淄川区","leaf":true}
        ]}
    ]}];

    BUI.Form.Group.Select.addType('type2',{
        data : data
    });

    var form = new Form.Form({
        srcNode : '#J_Form'
    }).render();
 });

//关联
seajs.use('czy/searchSelect',function(select){
    var datas = [
        {text:'推荐类型4',
            id:1,
            children:[
                {
                    text:'二级1',
                    id:11
                },
                {
                    text:'二级2',
                    id:12,
                    children:[
                        {
                            text:'三级1',
                            id:121,
                        },
                        {
                            text:'三级2',
                            id:122,
                            children:[
                                {
                                    text:'四级1',
                                    id:1221,
                                },
                                {
                                    text:'四级2',
                                    id:1222,
                                },
                            ]
                        }
                    ]
                },
            ]
        },
        {text:'123564',
            id:8,
        },
        {text:'19875',
            id:9,
        },
        {text:'15236',
            id:2,
        },
        {text:'asdgas',
            id:3,
        },
        {text:'AbnjA',
            id:4,
        },
        {text:'世界',
            id:5,
        },
        {text:'世界1',
            id:6,
        },
        {text:'....=-=',
            id:7,
        },
        {text:'@@))**<<',
            id:8,
        },
    ];

    var sss = new select.SearchSelect({
        rendEl:'#SelectRelation',
        items:[],    //推荐
        datas:datas,    //搜索数据
        autoRender: true,   //自动绘制 （根据需求）
        check:true, //多选
        inputMode : true, //input框模式    common:true 普通类型
        relation:true,
        //disabled:true,    //禁用输入
        // searchCb:function (str) { //动态接口  str输入的内容
        //     var result = [];
        //     $(this.datas).each(function(i,item){
        //         if(item.text.indexOf(str)!==-1){
        //             result.push(item);
        //         }
        //     });
        //     return result;   //返回结果集
        // },

        //获取选中数据
        getSelectedData:function(data){
            console.log( '动态搜索选中的数据', data)
        },
    });
});