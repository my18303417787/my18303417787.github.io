$(function() {

	//顶部的固定导航
	// 元素距离文档顶部的距离+自身的高度
	var navTop = $('.header_nav').offset().top;

	function onScroll(el) {
		// 滚动条滚动的距离 

		var sTop = $(document).scrollTop();
		if(sTop > navTop) {
			el.addClass('fixed')
				//    		  console.log(22)
		} else {
			el.removeClass('fixed')
		}
		//  每一个内容距离页面顶部的距离
		$('.skip').each(function(i, v) {
			var num = $('.skip').index(v);
			var top = $(v).offset().top
			if($(document).scrollTop() > top - 151) {
				$(".header_nav #nav li a").removeClass("active");
				$('.header_nav #nav li:eq(' + num + ') a').addClass("active");

			}
		})
	}
	$(window).on('scroll', function() {
			onScroll($('#header'))
		})
		//	打字效果
	var j = 1;
	var str1 = '作为一名前端工程师的我，熟练使用div+css布局，熟练js代码的编写，熟练html5+css3，jquery，angular，ajax，响应式';
	var str2 = '布局，移动端开发等前端技术的使用。我是一个有梦想，有追求的年轻人。我很热爱前端这个岗位，我期望能在这个广阔的天地'
	var str3 = '里展示自己的才能，不断实现自我的人生价值和追求的目标，对我来说，前端不只是一份工作，更是一种生活，它让我从生活中感'
	var str4 = '受到了乐趣和品质,让我拥有了迎接挑战的自信，我需要一个团队，去迎接挑战，我喜欢将后背托给队友的那种畅快淋漓的感觉。'
	var arr = [str1, str2, str3, str4]

	var $content = $('.content-bg p:nth-child(' + j + ')');

	function star(str, $content) {
		//    str    字符串的内容
		//    $content  放置字符串的容器
		if(j > 4) {
			return
		}
		var index = 0;
		var len = str.length;

		$content.text('');
		t = setInterval(function() {
			i = index++
				$content.append(str.charAt(i))
			var a;
			if(i === len && 0 < j < 4) {
				clearInterval(t)
				a = j++
					b = a + 1

				$content = $('.content-bg p:nth-child(' + b + ')')
				star(arr[a], $content);
			};
		}, 50)

	}

	star(arr[j - 1], $content);

	if($(window).width() < 1000) {
		imgDh($('#quotes'));
		imgDh($('#recent-work-mid .img-box li img'));
		kills($('.skills .content .inner'));
		lianxi($('#contact'))
			// $('body').css({ marginLeft: "110px" })
	} else {
		imgDh($('#quotes'));
		imgDh($('#recent-work-mid .img-box li img'));
		kills($('.skills .content .inner'));
		lianxi($('#contact'))
	}
	//	作品展的动效
	//  滚轮事件

	function imgDh(els) {

		els.each(function(i, v) {
			if($(window).width() < 1000) {
				if($(els[i]).find('li')) {
					$(els[i]).find('li').addClass('zhengchang')
				}
				$(els[i]).addClass('zhengchang')

			} else {
				var top = $(els[i]).offset().top - $(window).height() * 0.8;

				$(window).on('scroll', function() {
					var sTop = $(window).scrollTop();
					if(sTop > top) {
						if($(els[i]).find('li')) {
							$(els[i]).find('li').addClass('zhengchang')
						}
						$(els[i]).addClass('zhengchang')
					}
				})
			}
		})
	}
	//技能展示 

	function kills(els) {
		els.each(function(i, v) {
			if($(window).width() < 1000) {
				if($(els[i]).find('li')) {
					$(els[i]).find('li').addClass('zhengchang')
				}
				$(els[i]).addClass('zhengchang')
					// 	    	$(els[i]).addClass('zhengchang')

			} else {
				var top = $(els[i]).offset().top - $(window).height() * 0.8;

				$(window).on('scroll', function() {
					var sTop = $(window).scrollTop();
					if(sTop > top) {
						if($(els[i]).find('li')) {
							$(els[i]).find('li').addClass('zhengchang')
						}
						$(els[i]).addClass('zhengchang')
					}
				})
			}
		})
	}
	//杯子动画      

	//联系人页面动画

	function lianxi(els) {

		// 	 els.each(function(i,v){
		if($(window).width() < 1000) {
			$(els).addClass('zhengchang')
		} else {
			var top = $(els).offset().top - $(window).height() * 0.5;

			$(window).on('scroll', function() {
				var sTop = $(window).scrollTop();
				if(sTop > top) {
					$(els).addClass('zhengchang')
				}
			})
		}
	}

	//  秒链接的动画
	$('#rec').on('click', function(e) {
		e.preventDefault();
		miao($("#testimonials"));
	})

	$(".work").on('click', function(e) {
		e.preventDefault();
		miao($("#recent-work-top"));
	})

	$(".skill").on('click', function(e) {
		e.preventDefault();
		miao($("#skills"));
	})

	$(".lianxi").on('click', function(e) {
		e.preventDefault();
		miao($("#contact"));
	})

	$("#bac").on('click', function(e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0
		}, 300);
	})

	function miao(els) {
		var el_top = els.offset().top - 150;

		$("html,body").animate({
			scrollTop: el_top
		}, 600);
	}
	//  百度地图
	var map = new BMap.Map("map");
	var point = new BMap.Point(117.141851,39.18565);
	var marker = new BMap.Marker(point); // 创建标注
	map.addOverlay(marker); // 将标注添加到地图中
	map.enableScrollWheelZoom(true); //是否使用滚轮
	map.centerAndZoom(point, 15);
	map.setDefaultCursor("url('bird.cur')"); //设置地图默认的鼠标指针样式
	//      信息窗口的配置项
	var opts = {
		width: 150, // 信息窗口宽度
		height: 50, // 信息窗口高度
		title: "联系方式:18303417787", // 信息窗口标
	}
	var infoWindow = new BMap.InfoWindow("我的位置:天津市红桥区光荣道128号翠溪园", opts); // 创建信息窗口对象
	map.openInfoWindow(infoWindow, point); //开启信息窗口
	
	
	//  地图的点击事件
	var myGeo = new BMap.Geocoder();
	var mapArr = [];
	map.addEventListener("click", function(e) {
		var pt = e.point;
		map.addOverlay(new BMap.Marker(pt));
		//  通过point 返回具体的位置信息
		myGeo.getLocation(pt, function(rs) {
			var addComp = rs.addressComponents;
			var address = '';
			address += addComp.province;
			address += addComp.city;
			address += addComp.district;
			address += addComp.street;
			address += addComp.streetNumber;
			mapArr.push({
				ress: address,
				point: pt
			})
		});
		//  信息框的配置项
		var opts = {
			width: 150, // 信息窗口宽度
			height: 50, // 信息窗口高度
			title: "", // 信息窗口标
		}

		var t = setInterval(function() {
			var infoWindow = new BMap.InfoWindow('地址：' + mapArr[0].ress, opts); // 创建信息窗口对象
			map.openInfoWindow(infoWindow, mapArr[0].point); //开启信息窗口	
		
			if (mapArr.length>0){
				mapArr = [];
				clearInterval(t)
			}
		}, 100)
	});
	
	//  设置地图的背景颜色
	map.disable3DBuilding();
	 var styleJson = [
		 {
		   "featureType": "all",
		   "elementType": "geometry",
		   "stylers": {
					 "hue": "#007fff",
					 "saturation": 89
		   }
		 },
		 {
		   "featureType": "water",
		   "elementType": "all",
		   "stylers": {
					 "color": "#ffffff"
		   }
		 }
	 ]
	map.setMapStyle({styleJson:styleJson});
})