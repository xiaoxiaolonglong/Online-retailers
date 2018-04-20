$(document).ready(function(){

	myFocus.set({
			id:'boxID',//焦点图盒子ID
		    pattern:'mF_fancy',//风格应用的名称
		    time:3,//切换时间间隔(秒)
		    trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
		    width:1200,//设置图片区域宽度(像素)
		    height:480,//设置图片区域高度(像素)
		    txtHeight:'default',//文字层高度设置(像素),'default'为默认高度，0为隐藏
		    loadIMGTimeout:"1",//图片加载的时间
		});


			var pics =$(".show-pic")
			pics.each(function(){
				var pic = $(this)
				pic.on('mouseover',function(){
					pic.stop().animate({
						margin:'-5px 0 0 -10px',
						width:'105%',
						height:'105%'
					},200)
				})
				pic.on('mouseout',function(){
					pic.stop().animate({
						margin:0,
						width:'100%',
						height:'100%'
					},200)
				})
			})

			var btns = $('.commodity-details-pic-btn').find('button')//获取每一个按钮
			var img = $('.commodity-details-pic-big').find('img')//获取到要显示的图片
			btns.each(function(index){
				var now =$(this)
				now.on('click',function(){
					if(index==1){
						alert('大图')
					}else{

					}


			})
				


			})









		})