/**
 * Created by lenovo on 2017/6/17.
 */
define(function(require, exports, module) {
    function Main(config){
        this.config = config;
        this.$navEl = config.option.navEl;
        this.$tabEl = config.option.tabEl;
        this.$contEl = config.option.contEl;
        this.$lBtnEl = config.option.lBtn;
        this.$rBtnEl = config.option.rBtn;

        this.contModules = [],
            this.tabEls = null,
            this.iframeEls = null,
            this.homePage = null,
            this.oldIndex = null;
        this._init();
    }

    Main.prototype={
        _init : function(){
            this._initDom();
            this._initEvent();
        },

        _initDom : function(){
            this._initNav();
            this._initTab();
        },

        //初始化导航
        _initNav : function(){
            var _this = this;
            var navEl = "";
            var menu = [];
            var muenWap = null;
            var items = [];
            var itemWap = null;
            //一级菜单
            $(_this.config.navConfig).each(function(index,v){
                _this.homePage = v.homePage;
                v.href = v.href || 'javascript:;';
                navEl='<li class="hint-dot" id="J'+v.id+'Nav" data-nav-i = "'+index+'"  data-id="'+v.id+'">' +
                    '<i class="ui-icon ui-icon-'+index+'"></i>' +
                    '<a class="muen-leaf" href="'+v.href+'">'+v.text+'</a></li>'
                if(v.menu && v.menu.length > 0){
                    navEl='<li id="J'+v.id+'Nav" data-nav-i = "'+index+'">' +
                        '<i class="ui-icon ui-icon-'+index+'"></i>' +
                        '<a href="'+v.href+'">'+v.text+'</a>' +
                        '<div class="muen-wrap">' +
                        '<ul id="J-muenWap" class="secondary-muen"></ul>' +
                        '</div>'+
                        '</li>';
                    menu.push(v.menu);
                }else{
                    menu.push(false);
                }

                //将元素注入
                _this.$navEl.append(navEl);
            });
            //二级菜单
            $(menu).each(function(index,I){
                if(I){
                    var menuEl = "";
                    //二级菜单包裹层
                    muenWap =  $(_this.$navEl.children()[index]).find('#J-muenWap');
                    $(I).each(function(index,m){
                        menuEl ='<li id="J'+m.id+'Muen" data-id="'+m.id+'" data-menu-i = "'+index+'">' +
                            '<a class="muen-leaf" href="'+m.href+'">'+m.text+'</a>' +
                            '</li>'
                        if(m.items && m.items.length > 0){
                            menuEl = '<li id="J'+m.id+'Muen" class="pull-down-wrp" data-menu-i = "'+index+'">'+
                                '<a class="down-menu-btn" href="javascript:;">'+m.text+'<i class="ui-icon ui-icon-down"></i></a>' +
                                    '<ul class="pull-down-menu" id="J-itemsWap">' +
                                        /*'<li id="J'+m.id+'Muen" class="pull-down-wrp" data-menu-i = "'+index+'">'+
                                            '<a class="down-menu-btn" href="javascript:;">'+m.text+'<i class="ui-icon ui-icon-down"></i></a>' +
                                        '</li>'+*/
                                    '</ul>'+
                                '</li>'
                            items.push(m.items);
                        }else{
                            items.push(false);
                        }
                        muenWap.append(menuEl);
                    });
                }
            });
            //三级菜单
            itemWap = _this.$navEl.find("[data-menu-i]");
            $(items).each(function(index,v){
                if(v){
                    var itemEl = "";
                    $(v).each(function(i,t){
                        itemEl = '<li id="J'+t.id+'Nav" data-id="'+t.id+'">' +
                            '<a class="muen-leaf" href="'+t.href+'">'+t.text+'</a></li>'
                        $(itemWap[index]).children('#J-itemsWap').append(itemEl);
                    });
                }
            })
        },

        //初始化tab
        _initTab: function(){
            var _this = this;
            var modules = _this.contModules;

            //设置默认tab
            /*$(_this.config.navConfig).each(function(i,item){
             if(item.homePage){
             _this.homePage = item.homePage;
             _this.contModules.push(item);
             _this._initIframe(item);
             return false;
             }
             });*/

            if(!modules.length){
                return
            }
            _this._drawTab(modules);
        },

        //如果已经存在，直接切换，否则去创建
        _isModules : function (module) {
            var _this = this;
            var modules = _this.contModules;
            var isexist = false;
            if(!module.id){
                return
            }

            if(modules.length){
                $(modules).each(function(index,item){
                    if(item.id === module.id){
                        //跳转到相关页面
                        _this._changTab(module.id);
                        _this._initIframe(module.id);
                        isexist = true;
                    }
                })
            }

            //创建模块
            if(isexist === false){
                modules.push(module);
                _this._drawTab(module.id);
                _this._changTab(module.id);
                _this._initIframe(module.id);
            }
        },

        //绘制tab
        _drawTab : function(id){
            var _this = this;
            var tabEl = "";
            var modules = _this.contModules;
            var tabWrp = null;

            //绘制tab
            _this.$tabEl.empty();

            $(modules).each(function(i,v){
                tabEl = '<li class="label-item" data-tab-id="'+v.id+'"><span>'+v.text+'</span><i id="J-tabClose" class="ui-icon ui-icon-close"></i></li>'
                tabWrp =_this.$tabEl.append(tabEl);
                _this.contModules[i].tabEl = tabWrp.children()[i];
            });

            if(!tabWrp){
                return
            }
            _this.tabEls = tabWrp.children();

            //监听tab点击事件
            _this.tabEls.on('click','span',function(){
                var id = $(this).parent().attr('data-tab-id');
                _this._changTab(id);
                _this._initIframe(id);
            });

            //监听关闭事件
            _this.tabEls.children('#J-tabClose').on('click',function(){
                var id = $(this).parent().attr('data-tab-id');
                _this._closeTab(id);
            });
        },

        //删除Tab
        _closeTab : function(id){
            var _this = this;
            var modules = _this.contModules;
            var module = null;

            $(modules).each(function(index,item){
                if(item.id === id){
                    modules.splice(index,1);
                    if(modules[index]){
                        module = modules[index];
                    }else if(modules[index-1]){
                        module = modules[index-1];
                    }else{
                        module = {}
                    }
                    _this._delIfram(id,module.id);
                    _this._drawTab(id);
                    _this._changTab(module.id);
                }
            });
        },

        //切换Tab
        _changTab : function (id){
            var _this = this;

            if(!_this.tabEls){
                return
            }
            _this.tabEls.each(function(i,item){
                if($(item).attr('data-tab-id') === id){
                    _this._selectNavStyle(item,'active');
                    //滑动位置
                    if(_this.oldIndex!==null ){
                      if(_this.oldIndex>i){
                        _this.slide(1,i);
                      }else{
                        _this.slide(-1,i);
                      }
                    }
                    _this.oldIndex = i;
                    return false
                }
            });
        },

        //删除Iframe
        _delIfram:function(id,nextid){
            var _this = this;
            if(!_this.iframeEls){
                return
            }
            $(_this.iframeEls).each(function(index,item){
                if($(item).attr('id') === id){
                    _this.iframeEls[index].remove();
                    _this.iframeEls = _this.$contEl.children();
                    _this._initIframe(nextid);
                }
            });
        },

        //绘制Iframe
        _initIframe : function(id){
            if(!id){
                return
            }
            var _this = this;
            var modules = _this.contModules;
            var iH = $(document).height()-98;
            var href = '';
            var i = 0;
            var isexist = false;

            //创建了就直接跳转
            if(_this.iframeEls){
                $(_this.iframeEls).each(function(index,item){
                    if($(item).attr('id') === id){
                        isexist = true;
                        _this._selectNavStyle(_this.iframeEls[index],'active');
                        return false
                    }
                });
            }

            //取出相应链接
            $(modules).each(function(index,item){
                if(item.id === id){
                    i = index;
                    href = item.href;
                }
            });

            //绘制
            if(!isexist){
                var iframeEl = '<iframe style="height:'+iH+'px" id="'+id+'" src="'+href+'"  width="100%"></iframe>'
                var wrap = _this.$contEl.append(iframeEl);
                _this.iframeEls = wrap.children('iframe');
                _this._selectNavStyle(_this.iframeEls[i],'active');
            }
        },

        //事件初始化
        _initEvent : function(){
            var _this = this ;
            var menuBtn = $('.down-menu-btn');  //三级菜单下拉按钮
            var threeMenuWrap = $('.pull-down-menu');  //三级菜单包裹
            var menuWrp = $('.muen-wrap');  //二级菜单

            var setBtn = $('#headSetBtn');  //设置按钮
            var setMenu = $('#headSetWap');   //设置菜单

            var buf = true; //点击开关
            var setbuf = true; //点击开关

            var menuEls = $("[data-id]");

            //设置开关
            setBtn.on('click',function(e){
                e.stopPropagation();
                var target = $(this);
                if(setbuf){
                    setMenu.css('display','block');
                    setbuf = false;

                    //设置菜单点击
                    setMenu.children('p').on('click',function(){
                        if(!setbuf){
                            setMenu.css('display','none');
                            setbuf = true;
                        }
                    });

                    //点击空白处消失
                    $(document).on('click',function(){
                        if(!$(this).closest(target).length && !$(this).closest(setMenu).length && !setbuf){
                            setMenu.css('display','none');
                            setbuf = true;
                        }
                    });
                }else{
                    setMenu.css('display','none');
                    setbuf = true;
                }
            });

            //导航切换
            _this.$navEl.on('mouseover','li',function(){
                var _thit = this;
                _this._selectNavStyle(this,'active');

                menuWrp.on('mouseleave',function(e){
                    $(_thit).removeClass('active');
                });
            });

            //收缩导航栏
            _this.$navEl.on('mouseleave',function(){
                $(this).children('li').removeClass('active');
            });

            //三级菜单
            menuBtn.on('click',function(){
                var parent = $(this).parent(".pull-down-wrp");

                if(!parent.attr('class') || !parent.attr('class').indexOf('hover')>0){
                    buf = false
                }

                if(buf){
                    _this._selectNavStyle(parent,'hover');
                    buf = false;
                    threeMenuWrap.on('mouseleave',function(e){
                        parent.removeClass('hover');
                        buf = true;
                    });
                }else{
                    parent.removeClass('hover');
                    buf = true;
                }
            });

            //菜单点击
            menuEls.on('click',function(e){
                e.preventDefault();
                e.stopPropagation();
                var id = $(this).attr('data-id');
                var href = $(this).find('.muen-leaf').attr('href');
                var text = $(this).find('.muen-leaf').text();
                _this._isModules({id:id,href:href,text:text,el:this});
                _this.$navEl.children().removeClass('active');
            });


            //tab栏左右切换
            _this.$lBtnEl.on('click',function(e){
                e.preventDefault();
                if( !_this.contModules ){ return }
                _this.slide(1);
            });

            _this.$rBtnEl.on('click',function(e){
                e.preventDefault();
                if( !_this.contModules ){ return }
                _this.slide(-1);
            })
        },
        //滑动 price  1=左 -1=右
        slide: function(price,index){

            var fixW =this.$tabEl.parent().width(),
                outerW = this.$tabEl.width(),
                moverLength = 0;

                //if(fixW>outerW){return};
                //moverLength += fixW/2*price;


                var leftEl = this.contModules.slice(0,index);
                console.log(leftEl);

                $(leftEl).each(function(k,v){
                  moverLength += $(v.tabEl).outerWidth(true)*price;
                
                  console.log(moverLength);
                })

                console.log(moverLength);
                this.movereSlide(moverLength);
        },
        //移动方法
        movereSlide : function(length){
            this.$tabEl.css({
              'transform':'translate('+length+'px)',
              'transition':'all 1s'
            })
        },
        //导航选择处理
        _selectNavStyle : function(tag,str){
            $(tag).addClass(str).siblings("."+str).removeClass(str);
        }
    }

    module.exports = Main;
});
