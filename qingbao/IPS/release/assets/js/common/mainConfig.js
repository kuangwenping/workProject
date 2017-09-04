//配置
seajs.config({
	//基础路基
	base : ctx + '/static/front/assets/js/',
	// 设置别名，方便调用
	alias : {
		'jquery' : ctx + '/static/front/assets/js/jquery-1.8.1.min.js'
	}
});

//激活

seajs.use([ ctx + '/static/front/assets/js/common/main-1.js', 'jquery' ], function(Main) {

	var config = {
			option : {
				navEl : $('#J-navWap'),//导航包裹层
				tabEl : $('#J-tabWap'), //tab包裹
				contEl : $('#J-contWap')
				//内容展示
			}	
	};

	var navConfig = [];
	config.navConfig = navConfig;

	var node;
	var nodeSecond;
	var nodeThird;
	var nodeFlag = false;
	$.each(firstMenuList, function(i, first){
		node = {
			id : first.resId,
			text : first.resName,
			resCode : first.resCode,
			cls : "main-cls" + i
		};
		node.menu = [];
		
		if(menuMap && menuMap[first.resId] && menuMap[first.resId].length > 0){//有二级菜单
			$.each(menuMap[first.resId], function(j, second){
				nodeSecond = {
					id : second.resId,
					text : second.resName,
					resCode : second.resCode,
					cls : "main-cls" + i + "-" + j
				}
				nodeSecond.items = [];
				
				if(menuMap[second.resId] && menuMap[second.resId].length > 0){//三级菜单
					$.each(menuMap[second.resId], function(k, third){
						if(third.resType != '2'){
							nodeThird = {
								id : third.resId,
								text : third.resName,
								resCode : third.resCode,
								cls : "main-cls" + i + "-" + j + "-" + k,
								href : third.resUrl
							}
							nodeFlag = true;
							nodeSecond.items.push(nodeThird);
						}
					});
					if(!nodeFlag){
						nodeSecond.herf = second.resUrl; 
					}
				}else{//没有三级菜单
					nodeSecond.herf = second.resUrl; 
				}
				
				node.menu.push(nodeSecond);
			});
		}else{//没有二级菜单
			node.herf =first.resUrl; 
		}

		navConfig.push(node);
	});
	
	new Main(config);
});