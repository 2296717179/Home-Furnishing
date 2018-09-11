$(function(){
	var flag=1;
	// 菜单栏的显示隐藏 
	$('.wrap>.header>.nav>.center>.right>ul>li').eq(5).on('click',function(){
		if(flag){
			$(this).children('div.bot').show();
			flag=0;
		}else{
			$(this).children('div.bot').hide();
			flag=1;
		}
	})
	$('.wrap>.header>.nav>.menu').on('click',function(){
		if(flag){
			$(this).css('background','#333');
			$(this).next().show();
			flag=0;
		}else{
			$(this).css('background','#93BA0F');
			$(this).next().hide();
			flag=1;
		}
	})
	// 头部轮播图
	var timer;
	timer=setInterval(run,3000)
	var i=0;
	$('.wrap>.banner>.arrow').hide();
	function run(){
		if(i<2){
			i++;
		}else{
			i=0;
		}
			$('.wrap>.banner>.img').find('img').eq(i).show().siblings().hide();
	}
	$('.wrap>.banner').hover(function(){
		clearInterval(timer);
		$('.wrap>.banner>.arrow').show();
	},function(){
		timer=setInterval(run,3000);
		$('.wrap>.banner>.arrow').hide();
	});
	// 绑定点击事件
	$('.wrap>.banner>.arrow>.left').click(function(){
		clearInterval(timer);
		run();
	})
	$('.wrap>.banner>.arrow>.right>.rightle').click(function(){
		if(flag){
			$(this).find('span').css('background','url(img/camera_skins.png) no-repeat -120px 0');
			flag=0;
		}else{
			$(this).find('span').css('background','url(img/camera_skins.png) no-repeat -80px 0');
			flag=1;
		}
	})
	$('.wrap>.banner>.arrow>.right>.rightri').click(function(){
		clearInterval(timer);
		console.log(i)
		if(i>0){
			i-=1;
		}else{
			i=2;
		}
		$('.wrap>.banner>.img').find('img').eq(i).show().siblings().hide();

	})
	// 主体轮播图
	$('.wrap>.main>.bot>.box>ul').hover(function(){
		$(this).css('animation-play-state','paused');
	},function(){
		$(this).css('animation-play-state','running');
	})
})