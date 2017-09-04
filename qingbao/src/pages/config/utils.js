/**
 * Created by lenovo on 2017/6/8.
 */
//设置头部块
import headObj from '../../common/header/head.js'
//头部HTML
export const setHeader = (id) =>{
    let headEl = document.getElementById(id);
    let head = new headObj.Head();
    headEl.innerHTML = head.tpl;
}
//菜单切换
export const changMune = (el,obj) =>{
    let SwitchMenu =  new headObj.SwitchMenu(el,obj);
    SwitchMenu.init();
}

