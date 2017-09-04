/**
 * Created by lenovo on 2017/6/8.
 */
//import '../../style/common.scss'
import '../../style/common.scss'
import './head.scss'

import headHtml from './head.html'

//html模板
const Head = function (){
    return {
        name:'head',
        tpl:headHtml,
    }
}

//切换方法
class SwitchMenu{
    constructor ($el,option) {
        this.el = $el;
        this._defaults ={
            firstNav:"system_management",

            option:option
        }
        this._defaults = $.extend({},this._defaults,option);
    }

    init(){
        this._event();
    }

    _moveMuen($el){

    }

    _event(){
        let _thisEl = this;
        this.el.on('click','li',function(){
            let $this = $(this);
            let secondaryMuens = _thisEl.children('li').children(".muen-wrap");
            secondaryMuens.slideUp(50);
            $this.addClass('active').siblings('.active').removeClass('active');
            $this.children(".muen-wrap").slideDown(500);
        });
    }
}

export default {
    Head,
    SwitchMenu
}

