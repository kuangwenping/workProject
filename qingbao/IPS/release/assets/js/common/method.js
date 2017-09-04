/**
 * Created by lenovo on 2017/7/1.
 */
    //Tab切换方法
    function Tabs(obj,callBack){
        this.tabPanel = obj.tabWap;

        if(callBack && typeof callBack === "function"){
            this.callBack = callBack;
        }

        this.init ();
    }
    Tabs.prototype = {
        init: function () {
            this.event();
        },
        //事件函数
        event : function(){
            var _this = this;
            var tabBtn = _this.tabPanel.children();
            console.log(_this.tabPanel);
            tabBtn.on('click',function (e) {
                console.log(this);
                e.stopPropagation();
                var val = $(this).attr('data-link');
                _this.chang($(this),'active');
                _this.callBack && _this.callBack(val);
            })
        },

        //切换方法
        chang :function (taget,type){
            taget.addClass(type).siblings('.'+type).removeClass(type);
        },
    }

    //打开关闭搜索
    function changSearch(obj){
        this.target = obj.targetEl;
        this.brother = obj.brotherEl;
        this.taggelBtn = obj.taggelBtn;
        this.searchBtn = obj.searchBtn;

        this.moveH = null;
        this.closeBtn = null;
        this.openBtn = null;
        this.init();
    }
    changSearch.prototype ={
        init: function(){
            var _this = this;
            _this.closeBtn = _this.taggelBtn.find('.j-close');
            _this.openBtn =_this.taggelBtn.find('.j-open');
            _this.moveH = _this.target.innerHeight()+35;
            console.log(_this.moveH);
            _this.event();
        },
        event : function(){
            var _this = this;
            _this.closeBtn.on('click',function(e){
                e.preventDefault();
                $(this).css('display','none');
                _this.openBtn.css('display','block');
                _this.target.slideUp(50,function(){
                    _this.brother.css('top','35px');
                });
            });
            //查询按钮
            _this.searchBtn.on('click',function(e){
                e.preventDefault();
                _this.closeBtn.css('display','none');
                _this.openBtn.css('display','block');
                _this.target.slideUp(50,function(){
                    _this.brother.css('top','35px');
                });
            });

            _this.openBtn.on('click',function(e){
                e.preventDefault();
                $(this).css('display','none');
                _this.closeBtn.css('display','block');
                _this.target.slideDown(50,function(){
                    _this.brother.css('top',_this.moveH+'px');
                });
            });
        },
    }

    //check选择
    function formcheck(obj,callBack){
      this.checkEl = obj.checkEl;
      if(callBack && typeof callBack === "function"){
          this.callBack = callBack;
      }
      this.init();
    }
    formcheck.prototype = {
      init : function(){
        this.event();
      },
      event : function(){
          var _this = this;
          console.log(_this.checkEl);
          _this.checkEl.on('click',function(e){
            e.preventDefault();
            _this.checkSelect($(this));
          });
      },
      select : function(curr){
        var type = curr.children('input').attr('type');
        if(type === 'checkbox'){
            this.checkSelect(curr);
        }
      },
      checkSelect : function(current){
        console.log(current)
        current.hasClass('check')?current.removeClass('check') : current.addClass('check') ;
        this.callBack && this.callBack(current);
      }
    }
