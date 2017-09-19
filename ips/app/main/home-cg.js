/**
 * Created by lenovo on 2017/7/11.
 */
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

$('.content-thunk').mCustomScrollbar({
    axis:'y',
    theme:'dark',
});