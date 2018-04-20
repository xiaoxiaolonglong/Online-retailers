$(document).ready(function(){

	myFocus.set({
			id:'boxID',//焦点图盒子ID
		    pattern:'mF_fancy',//风格应用的名称
		    time:3,//切换时间间隔(秒)
		    trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
		    width:1144,//设置图片区域宽度(像素)
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


			// 切换图片展示框显示的图片
			var btns = $('.commodity-details-pic-btn').find('button')//获取每一个按钮
			var imgBox = $('.commodity-details-pic-big')
			var img = imgBox.find('img')//获取到显示的图片

			var mag = img.attr("src") //接受放大框内应该装的图片背景的src

			btns.each(function(index){
				var now =$(this)
				now.on('click',function(){
					if(index==0){
						alert('大图')
					}else{
						var btnVal = now.attr('value')
						if(img.attr('src')!=btnVal){
							img.attr('src',btnVal)
							mag = btnVal
						}
					}


			})


			// 鼠标进过实现放大镜的效果
			imgBox.mousemove(function(e){
				// console.log($(this).offset().left,$(this).offset().top)
				// console.log(e.pageX,e.pageY)
				
				// 鼠标在图片上的位置,然后根据方框的尺寸计算出方框相对鼠标的位置，获取到方框的距离父元素的距离
				// if($(window).scrollTop()>235){
				// 	$(this).moveStopEvent()
				// }
				console.log(e.pageY)
				var x = e.pageX-$(this).offset().left
				var y = e.pageY-$(this).offset().top

				if(x<50){
					x=50
				}else if(x>450){
					x=450
				}else if(y<50){
					y=50
				}else if(y>450){
					y=450
				}


				$("#boarddiv").css({"display":"block","left":x-50,"top":y-50})
				var boarX = $("#boarddiv").offset().left-$(this).offset().left	//方框距离父元素的left的距离
				var boarY = $("#boarddiv").offset().top-$(this).offset().top	//方框距离父元素的TOP的距离


				// 通过对原始尺寸为1200*1200的图片进行偏移来实现放大的效果，因为background-size属性失效，浪费了一些时间。
				var magPic = "url("+mag+")"+" no-repeat"+" -"+(boarX*2.4)+"px"+" -"+(boarY*2.4)+"px" // 为放大镜的的框框设置背景
				//var magPic = "url("+mag+")"+" no-repeat"

				$("#magnifier").css({"display":"block","background":magPic})

			})

			imgBox.mouseout(function(){
				$("#boarddiv").css({"display":"none"})
				$("#magnifier").css({"display":"none"})
			})


			})









		})