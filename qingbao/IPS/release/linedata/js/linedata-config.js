/**
 * Created by lenovo on 2017/6/21.
 */
//tab切换
BUI.use('bui/tab',function(Tab){
    var tab = new Tab.Tab({
        render : '#tab',
        elCls : 'nav-tabs',
        autoRender: true,
        children:[
            {text:'FPL',value:'1'},
            {text:'JETPlan',value:'2'},
            {text:'NDB',value:'3'}
        ]
    });
    tab.on('selectedchange',function (ev) {
        var item = ev.item;
        $('#log').text(item.get('text') + ' ' + item.get('value'));
    });
    tab.setSelected(tab.getItemAt(0));
});

//日历
BUI.use('bui/calendar',function(Calendar){
    var datepicker = new Calendar.DatePicker({
        trigger:'.calendar',
        showTime:true,
        autoRender : true
    });
});

//弹框
BUI.use('bui/overlay',function(Overlay){
        var dialog = new Overlay.Dialog({
            title:'备降机场选择',
            width:518,
            height:300,
            buttons:[
                {text:"提交"}
            ],
            bodyContent:'<div class="standby-wrap"><h3>航线名称：<span>ZABB-ZDDD</span></h3><p>请输入备降机场四字代码：</p><textarea name="" id="" cols="30" rows="10"></textarea></div>'
        });
    $('#standbyAirport').on('click',function () {
        dialog.show();
    });
});

//查询结果tab切换
new Tabs({
    tabWap:$('#J-tabWap'), //ul查询列表
},function(val){
    $('#J-content').children('[data-val]').each(function(i,v){
        if($(v).attr('data-val') === val){
            $(v).addClass('active').siblings('.active').removeClass('active');
        }
    });
});

//打开左侧搜索表单
new changSearch({
    targetEl : $('#J-searchForm'),//表单集外层
    brotherEl : $('#J-resultWrp'),//结果集外层
    taggelBtn : $('#J-tagglebtn'),//切换按钮外层
    searchBtn : $('.j-search')//查询提交按钮
});
