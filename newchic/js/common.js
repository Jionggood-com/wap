
$(document).on("focus",".inputchang",function(){
	if($(this).prev().hasClass("pwdtip")){
		$(this).prev().hide();
		$(this).css("color","#000000");
	}
	if($(this).val()==$(this).attr("dvalue")){
		$(this).css("color","#000000").val("");
	}
});
$(document).on("blur",".inputchang",function(){
	if($(this).prev(".pwdtip").length>0){
		if($(this).val()=='')
		{
			$(this).prev().show();
		}
		else{
			$(this).prev().hide();
		}
	}
	if($(this).val()==''){
		$(this).css("color","#cccccc").val($(this).attr("dvalue"));
	}
});
$(document).on("click",".pwdtip",function(){
	$(this).hide().next().focus();
});

function msgTipsbox(i,j,k,l){
	modal_bg();
	$('.modal_container').append("<div class='modal_msgbox' style='display:none'><div class='modal_msgbox_msg'>"+j+"</div><div class='modal_msgbox_button'></div></div>");
	if(i==0)$('.modal_container .modal_msgbox_button').append("<span class='button_ok' onclick='modal_remove();'><i>OK</i></span>");
	if(i==1)
	{
		$('.modal_container .modal_msgbox_button').append("<span class='button_no' onclick='modal_remove();'><i>Cancel</i></span><span class='button_yes'><i>Yes</i></span>");
		$(document).on("off",".button_yes").on("click",".button_yes",function(l){if( i ) k(l);});
	}
	modal_add();
	$(".modal_msgbox").slideDown();
};
function msgbox(obj,msg){
	$('html').addClass('sift_move');
	$('body').append("<div class='msgbox'><div class='msg_tips'><span>"+msg+"</span></div></div>");	
	setTimeout(function(){
		$(".msgbox").remove();
		$('html').removeClass('sift_move');
	},3000);
};

function tabs(tabTit,type){
	 $(document).on(type,tabTit,function(){
		$(this).addClass("active").siblings().removeClass("active").parent().next().children().eq($(this).index()).show().siblings().hide();
	});
}

function size_chart_tabs(tabTit,type){
	 $(document).on(type,tabTit,function(){
		$(this).addClass("active").siblings().removeClass("active").parent().parent().next().children().eq($(this).index()).show().siblings().hide();
	});
}
	
var zValidate = {};
zValidate.email = function(email){
	var myreg = /^[\w-']+([\.\+][\w-']+)*@([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
	return myreg.test(email.replace(/(^\s*)|(\s*$)/g, ""));
};
zValidate.password = function(password){
	var myreg = /^(.*){6,}$/;
	return myreg.test(password);
};
	
function inputNotice(obj){
	if(obj.prev().hasClass("pwdtip") && obj.val()==''){
		obj.prev().addClass("login_animated login_shake");
	}
	else{
		obj.addClass("login_animated login_shake");
	}
	
	setTimeout(function(){
		obj.prev().removeClass("login_animated login_shake");
		obj.removeClass("login_animated login_shake");
	},1500);
}

$(".totop_button").click(function(){
	$("html,body").animate({ scrollTop:0});
});
var no_index_data = false;
if($(".index_goodlist_item").length>0)
{		
	$(window).scroll(function(){	
		if($(".index_goodlist_item").find(".loading").length>0){return false;}
		var srollHeight = $(this).scrollTop();   
		var docHeight = $(document).height();  
		var firstLi = ''+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/06/SKU085685-(6).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">Trendy Leopard Print Elastic Waist Casual Shorts For Women</a></span>'+
				'<span class="price">US $2.31</span>'+
			'</li>'+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/03/SKU126880-(5).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">Casual Batwing Lapel Long Sleeve Chiffon Womens Blouse</a></span>'+
				'<span class="price">US $10.99</span>'+
			'</li>'+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/04/SKU219283%20(4).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">Plus Size Sexy Hollow Out Shirts Chiffon Short Sleeve Women Blouses</a></span>'+
				'<span class="price">US $8.96</span>'+
			'</li>'+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/04/SKU195659-(1).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">Hollow Out Back 3/4 Sleeve O-Neck Womens Loose-Fitting T-Shirt </a></span>'+
				'<span class="price">US $8.20</span>'+
			'</li>'+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/04/SKU212175%20(7).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">Loose Chiffon Blouses Short Sleeve O-Neck Shirt For Women</a></span>'+
				'<span class="price">US $6.47</span>'+
			'</li>'
			
			var secondLi = ''+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/03/SKU150822-(5).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">Stylish Striped Cap Sleeve O-Neck Slim Work Cocktail Pencil Dress</a></span>'+
				'<span class="price">US $125.20</span>'+
			'</li>'+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/05/SKU151327-1%20(11).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">V-Neck Chiffon Long Sleeve New Loose A-line Dress</a></span>'+
				'<span class="price">US $9.03</span>'+
			'</li>'+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/05/SKU149029%20-(9).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">Bud Silk Cultivate Ones Morality Posed Beach Flood-Long Stripe Dress</a></span>'+
				'<span class="price">US $12.30</span>'+
			'</li>'+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/03/SKU193713--(7).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">Sexy Lace Insert Spliced Side Split O-Neck Sleeveless Dress For Women</a></span>'+
				'<span class="price">US $16.19</span>'+
			'</li>'+
			'<li>'+
				'<span class="img">'+
					'<a href="detail.html"><img src="http://img.newchic.com/thumb/gallery/upload/2015/06/SKU203474%20(9).jpg" /></a>'+
					'<b class="addwish"><i></i></b>'+
				'</span>'+
				'<span class="title"><a href="detail.html">Sleeveless Low Collar Sexy Gallus Hollow Out Lace Loose Dress</a></span>'+
				'<span class="price">US $10.67</span>'+
			'</li>'
		
		if (docHeight - srollHeight - $(this).height()<20 && !no_index_data)
		{
			
			var appendDiv = '<div class="loading"><div class="animate-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
			$(".index_goodlist_item").append(appendDiv);	
			//$("body").addClass("noscroll");	
			//$("html").addClass("sift_move");	
			//getwindowHeight();
			$("html,body").animate({ scrollTop:200000},10);
			
			
			setTimeout(function(){
			//	$("body").removeClass("noscroll");	
			//	$("html").removeClass("sift_move");	
				$(".index_goodlist_item").find(".loading").remove();
				$(".index_goodlist_item ul:first-child").append(firstLi);
				$(".index_goodlist_item ul:last-child").append(secondLi);
				
			},1500);
			
			
	
			/*$.ajax({
				url:homeUrl+'index.php',
				timeout : 5000,
				type : 'get',
				data :'com=ajax=',
				dataType:'html',
				success:function(html){
					if(!html)
					{
						no_index_data = true;
					}
					else
					{
						$('.brand_other_item ul').find(".append").remove();
						$('.brand_other_item ul').append(html);
					}
				}
			});*/
		}
	});
}
function getwindowHeight(){
	var windowHeight = $(window).height();
	var addnewwishHeight = $(".addnewwish").outerHeight();
	var addimagehHeight = $(".addimage").outerHeight();
	var createwishboxHeight = $(".createwishbox").outerHeight();
	$(".module").css("height",windowHeight);
	//$(".modal_mask,.modal_scroller").css({"top":sequenceitemHeight+headertopHeight});
	$(".menu").css("height",windowHeight);
	$(".wish").css("height",windowHeight);
	//$(".container").css("height",windowHeight);
	$(".image_show").css("height",windowHeight);
	$(".addnewwish").css("top",windowHeight-addnewwishHeight);
	$(".addimage").css("top",windowHeight-addimagehHeight);
	//alert(createwishboxHeight)
	$(".createwishbox").css("top",(windowHeight-createwishboxHeight)/2);
	if($(".selectcountry_item").length>0){
		var letterHeight = $(".letter").outerHeight();
		$(".country_list").css("padding-top",letterHeight);
	}
	
}
function getsequenceHeight(){
	var sequenceitemHeight = $(".sequence_item").outerHeight();
	var headertopHeight = $(".header_top").outerHeight();
	$('.module,.modal_mask,.modal_scroller').css("top",sequenceitemHeight+headertopHeight);
}
function getfilterHeight(){
	var windowHeight = $(window).height();	
	var windowHeight = $(window).height();
	var headertopHeight = $(".header_top").outerHeight();
	var fixedbottommenuHeight = $(".fixed_bottom_menu").outerHeight();
	$(".filter_item ul").css("height",windowHeight-fixedbottommenuHeight-headertopHeight-40);
	$(".filter_item").css("height",windowHeight-fixedbottommenuHeight-headertopHeight);
	$(".module").css({"top":windowHeight-fixedbottommenuHeight-headertopHeight+30,"height":windowHeight});
	$(".modal_mask,.modal_scroller").css("top",windowHeight-fixedbottommenuHeight-headertopHeight+30);
	$(".filter_item_arrow").css("top",windowHeight-fixedbottommenuHeight-headertopHeight+30);
}
function modal_remove(){
	$('.module').remove();
	$(".container").removeClass("containerL").removeClass("containerR");
	$(".fixed_bottom_menu").show();
	$('html').removeClass('sift_move');
	$(".sequence_item").hide();
	$(".filter_item").hide();
	$(".filter_item_arrow").remove();
}
	
$(window).resize(function() {
	getwindowHeight();
	if($(".filter_item_arrow").length>0)
	{
		getfilterHeight();
	}
});
function module_index_remove(){
	$(".container").removeClass("containerL");
	$(".container").removeClass("containerR");
	$('.container').removeClass('containerImage');
	//$(".module").remove();
	$(".fixed_bottom_menu").show();
	$(".fixed_bottom_addtobag").show();
}
function modal_item_operate(){
	$(".sequence_item").hide();
	$(".filter_item").hide();
}
(function($){
	$.newchic_item = {
		menu_bar: function(o){
			if($(".nonetwork").length>0){return false;}
			if($('.container').hasClass("containerL")){
				$(".container").removeClass("containerL");
				modal_remove();
				getwindowHeight();
				$('html').removeClass('sift_move');
				$(".fixed_bottom_menu").show();
			}else{
				$(".container").addClass("containerL");
				modal_bg();				
				modal_add();
				getwindowHeight();
				$('html').addClass('sift_move');
				$(".fixed_bottom_menu").hide();
				$(".module .modal_mask,.module .modal_scroller").css({"left":$(".menu").outerWidth(),"top":$(".index_header_top").outerHeight()});
			}
		},
		
		wish_icon: function(o){
			if($(".nonetwork").length>0){return false;}
			if($('.container').hasClass("containerR")){
				$(".container").removeClass("containerR");
				//$(".main").append('<div class="module" />');
				getwindowHeight();
				$("body").removeAttr("style");
				$(".wish .index_wishlist").removeAttr("style");
				$('html').removeClass('sift_move');
				$(".fixed_bottom_menu").show();
				modal_remove();
			}else{
				$(".container").addClass("containerR");
				modal_bg();				
				modal_add();
				getwindowHeight();
				$(".fixed_bottom_menu").hide();
				$('html').addClass('sift_move');
				$("body").css("height",$(window).height());
				$(".wish .index_wishlist").css("height",$(window).height());
				$(".module .modal_mask,.module .modal_scroller").css({"right":$(".wish").outerWidth(),"top":$(".index_header_top").outerHeight()});
			}
		},
		
		/*close_module: function(o){
			if(o.find(".createwishbox").length>0 || o.find(".module_share_item").length>0){return false;}
			modal_remove();
		},*/
		
		
		addwish: function(o){
			if(o.hasClass("active")){return false;}
			o.addClass("active");
		},
		
		sequence: function(o){
			$('html').removeClass('sift_move');
			$(".module").remove();
			$(".filter_item_arrow").remove();
			$(".filter_item").hide();
			if(o.parent().next().is(":hidden"))
			{
				o.parent().next().show();
				
				modal_bg();
				modal_add();
				//$(".main").append('<div class="module" />');
				getwindowHeight();
				getsequenceHeight();
			//	$(".module,.modal_mask,.modal_container").css("top")
				$(".fixed_bottom_menu").hide();
				$('html').addClass('sift_move');
			}
			else
			{
				o.parent().next().hide();
				$(".module").remove();
				$(".fixed_bottom_menu").show();
				$('html').removeClass('sift_move');
			}
		},
		
		sequence_click: function(o){
			o.addClass("active").append("<i />").siblings().removeClass("active").find("i").remove();
		},
		
		filter: function(o){
			$("html,body").animate({ scrollTop:0});
			modal_bg();
			modal_add();
			$(".filter_item").show();
			var filterHeight = $(".filter_item").outerHeight();
			$("body").append('<div class="filter_item_arrow"><span class="arrow_a"><i></i></span></div>');
			//$("body").append('<div class="module" />');
			getwindowHeight();
			getfilterHeight();
		},
		
		create_wish: function(o){
			modal_remove();
			modal_bg();
			var createwishbox = ''+
				'<div class="createwishbox">'+
					'<div class="createitem">'+
						'<h2>Create a Wishlist</h2>'+
						'<input type="text" class="keyword" msg="Same name.">'+
					'</div>'+
					'<div class="btn">'+
						'<span onclick="modal_remove();">Cancel</span>'+
						'<span class="wishlistCreate">Create</span>'+
					'</div>'+
				'</div>'
			$('.modal_container').append(createwishbox);
			modal_add();
			getwindowHeight();
			
		},
		
		wishlistCreate: function(o){
			if(o.parents(".createwishbox").find(".keyword").hasClass("login_animated")){return false;}
			var wishlist_status = false;
			var keyword = o.parents(".createwishbox").find(".keyword");
			var val = keyword.val();
			var msg = keyword.attr("msg");
			var val_length = val.split(/\s+/);
			
			if(!val)
			{
				keyword.addClass("login_animated login_shake");
				setTimeout(function(){
					keyword.removeClass("login_animated login_shake");
				},1500);
				return false;
			}
			else
			{
				if(o.hasClass("rename")){
					$(".index_wishlist li:not('.active')").each(function(){
						var name = $(this).attr("id");
						if(val.toLowerCase() == name.toLowerCase())
						{
							keyword.addClass("login_animated login_shake").val(msg);
							wishlist_status = true;
							setTimeout(function(){
								keyword.removeClass("login_animated login_shake").val(val);
							},1500);
						}
						
					});
				}
				else
				{
					$(".index_wishlist li").each(function(){
						var name = $(this).attr("id");
						if(val.toLowerCase() == name.toLowerCase())
						{
							keyword.addClass("login_animated login_shake").val(msg);
							wishlist_status = true;
							setTimeout(function(){
								keyword.removeClass("login_animated login_shake").val(val);
							},1500);
						}
					});
				}
				
				if(!wishlist_status) 
				{
					o.parents(".createwishbox").append('<div class="wish_loading" />');
					if(o.hasClass("rename")){
						setTimeout(function(){
							$(".wish_loading").append('<span>Edit Success.</span>');
							$(".index_wishlist").find(".active").attr("id",val);
							$(".header_top h2").text(val);
							
						},2000);
					}
					else{
						setTimeout(function(){
							$(".wish_loading").append('<span>Create Success.</span>');
							$(".index_wishlist").prepend('<li id="'+val+'"><a href="#"><img src="images/nowishpic.jpg"><i>'+val+'(0)</i></a></li>');
						},2000);
					}
					
					setTimeout(function(){
						modal_remove();
					},3000);
				}
			}
		},
		
		checkwishlist: function(o){
			if(o.hasClass("active"))
			{
				o.removeClass("active");
			}
			else
			{
				o.addClass("active");
			}
			if($(".checkwishlist .active").length>0)
			{
				$(".fixed_bottom_checkwish .move,.fixed_bottom_checkwish .remove").removeClass("gray");
				$(".fixed_bottom_checkwish .rename,.fixed_bottom_checkwish .del").addClass("gray");
			}
			else
			{
				$(".fixed_bottom_checkwish .move,.fixed_bottom_checkwish .remove").addClass("gray");
				$(".fixed_bottom_checkwish .rename,.fixed_bottom_checkwish .del").removeClass("gray");
			}
		},
		
		editwishlist: function(o){
			$("html").removeClass("sift_move");
			$(".container").removeClass("containerR");
			var edit = o.attr("dmsg");
			var msg = o.attr("msg");
			if(o.hasClass(msg))
			{
				o.removeClass(msg).text(edit);
				$(".checkwishlist").hide();
				$(".fixed_bottom_checkwish").hide();
			}
			else
			{
				o.addClass(msg).text(msg);
				$(".checkwishlist").show();
				$(".fixed_bottom_checkwish").show();
			}
		},
		
		tool_share: function(o){
			$(".fixed_bottom_addtobag").hide();
			modal_bg();
			var share_html = ''+
				'<div class="module_detail_item">'+
					'<h4 class="title">Share this item:</h4>'+
					'<ul class="share">'+
						'<li><i class="f"></i><span>Facebook</span></li>'+
						'<li><i class="g"></i><span>Google+</span></li>'+
						'<li><i class="w"></i><span>Whatsapp</span></li>'+
					'</ul>'+
					'<div class="sharecancel"><span onclick="modal_remove();">Cancel</span></div>'+
				'</div>'
			$('.modal_container').append(share_html);
			getwindowHeight();
			modal_add();
		},
		
		select_poa: function(o){
			addProduct();
			//return;
			//var html = '<div class="module_detail_item">'+$(".module_detail_item").html()+'</div>';
			//msgTipsbox(1,html,function(m){
							 
			//if(m){ssssss(o);}
		//});
			//getwindowHeight();
		},
		
		select_goods_poa: function(o){
			o.addClass("active").append('<i />').siblings().removeClass("active").find("i").remove();
		},
		
		quantity_next: function(o){
			if(o.hasClass("gray")){return false;}
			var input = o.siblings(":text");
			var num = parseInt(input.val());
			if(!(/(^[0-9]\d*$)/.test(num)) || !num  || num == 0){
				num = 1;
			}
			num += 1;
			if(num > 1)
			{
				o.parent().find(".prev").removeClass('gray');
			}
			input.val(num);
			setTimeout(
				function(){
						var qty = parseInt(input.val());
						var oldqty = parseInt(input.attr('oldqty'));					
						if(qty != oldqty){
							input.attr('oldqty', qty);
						}
				},500);
		},
		
		quantity_prev: function(o){
			if(o.hasClass("gray")){return false;}
			var input = o.siblings(":text");
			var num = parseInt(input.val());
			if(!(/(^[0-9]\d*$)/.test(num)) || !num  || num == 0){
				num = 1;
			}
			if(num == 1)
			{
				o.addClass('gray');
			}
			num -= 1;
			if(num == 0)num=1;
			input.val(num);
			setTimeout(
				function(){
						var qty = parseInt(input.val());
						var oldqty = parseInt(input.attr('oldqty'));					
						if(qty != oldqty){
							input.attr('oldqty', qty);
						}
				},500);
		},
		
		addimage_note: function(o){
			o.parent().find(".note_tips").hide();
			o.parent().find("textarea").focus();
		},
		
		writereviews_note: function(o){
			o.parent().find(".note_tips").hide();
			o.parent().find("textarea").focus();
		},
		
		check_reviews_score: function(o){
			o.removeClass("active").nextAll().addClass("active");
			o.prevAll().removeClass("active");
			var scoreCount = o.parent().find(".active").length;
			o.parent().attr("score",5-scoreCount);
			var pricescore = $(".write_reviews_score li.price").attr("score");
			var qualityscore = $(".write_reviews_score li.quality").attr("score");
			var appearancescore = $(".write_reviews_score li.appearance").attr("score");
			var totalscore = ((pricescore/5) + (qualityscore/5) + (appearancescore/5))/3*100;
			$(".write_reviews_score li.total i i").css("width",totalscore+'%');
		},
		
		categories_filter_select: function(o){
			o.addClass("arrow_b").removeClass("arrow_a");
			o.parents("li").find(".categories_filter_box").slideDown();
		},
		
		categories_filter_select_close: function(o){
			o.parents("li").find(".categories_filter_box").slideUp();
			o.addClass("arrow_a").removeClass("arrow_b");
		},
		
		categories_filter_list: function(o){
			var text = o.text();
			if(o.parents("li").find(".selected").length>0){
				o.parents("li").find("s").hide();
				o.parents("li").find(".selected").text(text);
			}
			else
			{
				o.parents(".categories_filter_box").before('<b class="selected">'+text+'</b>');
			}
			o.addClass("active").parent().siblings().find("a").removeClass("active");
			o.parents("li").find("s").hide();
		},
		
		categories_filter_reset: function(o){
			o.parent().siblings().find("s").show();
			o.parent().siblings().find(".selected").remove();
		},
		
		currency_select: function(o){
			o.addClass("active").append('<i />').siblings().removeClass("active").find("i").remove();
		},
		
		language_select: function(o){
			o.addClass("active").append('<i />').siblings().removeClass("active").find("i").remove();
		},
		
		_switch: function(o){
			if(o.hasClass('switch_off')){
				o.removeClass('switch_off');
				o.addClass('switch_on');
				o.attr("code",1);
			}else{
				o.removeClass('switch_on');
				o.addClass('switch_off');
				o.attr("code",0);
			}
		},
		
		all_search: function(o){
			modal_remove();
			var html = ''+
				'<div class="search_item">'+
					'<div class="search">'+
						'<form>'+
							'<input type="text" value="Search" dvalue="Search" name="keyword" class="keyword inputchang">'+
							'<input type="submit" value="search" class="btn">'+
							'<i class="close">×</i>'+
						'</form>'+
						'<span class="cancel" onclick="modal_remove();">Cancel</span>'+
					'</div>'+
					'<div class="search_list">'+
						'<ul>'+
							'<li>Dress</li>'+
							'<li>Casual shoe</li>'+
							'<li>Snow boot</li>'+
							'<li>Dress</li>'+
							'<li>Casual shoe</li>'+
							'<li>Snow boot</li>'+
						'</ul>'+
						 '<span class="clearhistory">Clear search history</span>'+
					'</div>'+
				'</div>'
			modal_bg();
			$('.modal_container').append(html);
			getwindowHeight();
			modal_add();
		},
		
		search_keyword_close: function(o){
			var val = o.siblings('.keyword').attr("dvalue");
			o.siblings('.keyword').val(val).removeAttr("style");
			o.hide();
		},
		
		search_keyword_blur: function(o){
			var val = o.val();
			if(val)
			{
				o.siblings('.close').show();
				
			}
		},
		
		clearhistory: function(o){
			o.prev().find("li").remove();
			o.hide();
		},
		
		purchased_select: function(o){
			o.addClass("active").parent().siblings().find(".select").removeClass("active");
		},
		
		shipping_methed: function(o){
			var id = o.parents(".warehouse_list").attr("id");
			var html = '<div class="shipping_methed">'+o.next().html()+'</div>';
			msgTipsbox(1,html,'');
			getwindowHeight();
		},
		
		shipping_list: function(o){
			o.addClass("active").append('<s />').siblings().removeClass("active").find("s").remove();
		},
		
		shipping_methed_check: function(o){
			var html = o.siblings('.active').html();
			var id = o.parents(".shipping_methed").attr("id");
			$(".warehouse_list").each(function(){
				var _id = $(this).attr("id");
				if(id==_id){
					$(this).find(".shipping_total .shipping_box strong b").html(html);
					modal_remove();
				}
			});
		},
		
		bag_poa_check: function(o){
			var html = ''+
				'<div class="module_detail_item bag_item">'+
				  '<div class="goods_info"><img src="http://img.newchic.com/thumb/other_items//upload/2015/05/SKU212498-1 (2).jpg"><span class="title">SCULPT Premium Bandage Skater Dress</span><span class="price">$189.50</span></div>'+
				  '<div class="goods_poa_item">'+
					'<div option_id="52" class="goods_item_attr"><span class="title">Color:</span>'+
					  '<ul class="color">'+
						'<li class="active" value_id="1011"><img title="black" src="http://img.newchic.com/thumb/other_items//upload/2015/03/SKU152831-(3).jpg"><i></i></li>'+
						'<li value_id="1012"><img title="black" src="http://img.newchic.com/thumb/other_items//upload/2015/03/SKU152831-(4).jpg"></li>'+
						'<li value_id="1013"><img title="black" src="http://img.newchic.com/thumb/other_items//upload/2015/03/SKU152831-(1).jpg"></li>'+
					  '</ul>'+
					'</div>'+
					'<div option_id="52" class="goods_item_attr"><span class="title">Size:</span>'+
					  '<ul class="size">'+
						'<li class="none" value_id="1011">S<s></s></li>'+
						'<li class="active" value_id="1012">M<i></i></li>'+
						'<li value_id="1013">L</li>'+
						'<li value_id="1013">XL</li>'+
						'<li value_id="1013">XXL</li>'+
					  '</ul>'+
					'</div>'+
					'<div class="goods_item_attr goods_item_quantity"><span class="title">Quanity:</span>'+
					  '<div class="quantity_box"><span class="prev gray">-</span>'+
						'<input type="text" value="1" oldqty="1" name="qty" maximum="" autocomplete="off" clearstock="0" maxlength="5" id="qty">'+
						'<span class="next">+</span></div>'+
					'</div>'+
				 '</div>'+
				'</div>'
			
			msgTipsbox(1,html,'');
			getwindowHeight();
			
		},
		
		bag_goods_remove_alert: function(o){
			/*o.parents(".goods_list_item").remove();*/
			var html = ''+
				'<div class="bag_goods_remove">'+
				 	'<h4>Are you sure you wish to delete the selected items?</h4>'+
				'</div>'
			msgTipsbox(1,html,'');
			getwindowHeight();
			//modal_add();
		},
		
		bag_goods_remove_yes: function(o){
			var id = o.parents(".bag_goods_remove").attr("id");
			$(".warehouse_list").each(function(){
				var _id = $(this).find(".goods_list_item").attr("id");
				if(id==_id){
					$(this).find('#'+_id+'').remove();
					modal_remove();
				}
			});
		},
		
		select_country: function(o){
			var val = o.text();
			o.addClass("active").siblings().removeClass("active");
			o.parent().next().find("li").hide().each(function(){
				if($(this).text().toLowerCase().indexOf(val.toLowerCase())==0)
				{
					$(this).show();
				}
			});
		},
		
		image_show: function(o){
			modal_bg();
			modal_add();
			$(".fixed_bottom_addtobag").hide();
			$(".module .modal_mask,.module .modal_scroller").css("right",$(".image_show").width());
			o.parents(".container").addClass("containerImage");
			$('html').addClass('sift_move');
			setTimeout(function(){
				$("html,body").animate({ scrollTop:0});
			},500);
			getwindowHeight();
		},
		
		clear_containerImage: function(o){
			$('html').removeClass('sift_move');
			$('.container').removeClass('containerImage');
			$(".fixed_bottom_addtobag").show();
		},
		
		move_wish: function(o){
			$('html').addClass('sift_move');
			$(".container").addClass('containerR');
			setTimeout(function(){
				$("html,body").animate({ scrollTop:0});
			},500);
			getwindowHeight();
		},
		
		orders_nav_select: function(o){
			o.find("ul").show();
			$(document).click(function(event){
				if(!$(event.target).parents(".account_orders").find(".orders_nav").length > 0)
				{
					$(".account_orders .orders_nav ul").hide();
				}
				else
				{
					//$(".account_orders .orders_nav ul").hide();
					
				}
			});
		},
		
		orders_nav_li: function(o){
			o.addClass("active").append('<i />').siblings().removeClass("active").find("i").remove();
			o.parent().hide();
			if($(event.target).parents("ul").length > 0)
			{
				alert("s")
				$(".account_orders .orders_nav ul").hide();
			}
		},
		
		newaddress_country: function (o){
			var html = ''+
				'<div class="selectcountry_item_box">'+
					'<div class="selectcountry_item">'+
						'<div class="letter">'+
							'<span>A</span>'+
							'<span>B</span>'+
							'<span>C</span>'+
							'<span>D</span>'+
							'<span>E</span>'+
							'<span>F</span>'+
							'<span>G</span>'+
							'<span>H</span>'+
							'<span>I</span>'+
							'<span>J</span>'+
							'<span>K</span>'+
							'<span>L</span>'+
							'<span>M</span>'+
							'<span>N</span>'+
							'<span>O</span>'+
							'<span>P</span>'+
							'<span>Q</span>'+
							'<span>R</span>'+
							'<span>S</span>'+
							'<span>T</span>'+
							'<span>U</span>'+
							'<span>V</span>'+
							'<span>W</span>'+
							'<span>X</span>'+
							'<span>Y</span>'+
							'<span>Z</span>'+
						'</div>'+
						'<ul class="country_list">'+
							'<li><img src="images/US.png">United States</li>'+
							'<li><img src="images/US.png">United Kingdom</li>'+
							'<li><img src="images/US.png">Canada</li>'+
							'<li><img src="images/US.png">Spain</li>'+
							'<li><img src="images/US.png">Australia</li>'+
							'<li><img src="images/US.png">Russian Federation</li>'+
							'<li><img src="images/US.png">France</li>'+
							'<li><img src="images/US.png">United States</li>'+
							'<li><img src="images/US.png">United Kingdom</li>'+
							'<li><img src="images/US.png">Canada</li>'+
							'<li><img src="images/US.png">Spain</li>'+
							'<li><img src="images/US.png">Australia</li>'+
							'<li><img src="images/US.png">Russian Federation</li>'+
							'<li><img src="images/US.png">France</li>'+
							'<li><img src="images/US.png">United States</li>'+
							'<li><img src="images/US.png">United Kingdom</li>'+
							'<li><img src="images/US.png">Canada</li>'+
							'<li><img src="images/US.png">Spain</li>'+
							'<li><img src="images/US.png">Australia</li>'+
							'<li><img src="images/US.png">Russian Federation</li>'+
							'<li><img src="images/US.png">France</li>'+
						'</ul>'+
					'</div>'+
				'</div>'
			modal_bg();
			$('.modal_container').append(html);
			getwindowHeight();
			modal_add();
			
		},
		
		country_list_check: function(o){
			var html = ''+
			    '<li>1</li>'+
				'<li>2</li>'+
				'<li>3</li>'+
				'<li>4</li>'+
				'<li>5</li>'+
				'<li>6</li>'
			$(".newaddress_list .country u").text(o.text());
			$(".newaddress_list .country img").attr("src",o.find("img").eq(0).attr("src"));	
			$(".newaddress_list li .zone_list").empty();
			modal_remove();
			$(".newaddress_list li .zone_list").append(html);
		},
		
		province_list_check: function(o){
			var html = o.next().html();
			modal_bg();
			$('.modal_container').append('<ul class="zone_list">'+html+'</ul>');
			getwindowHeight();
			modal_add();
		},
		
		zone_list: function(o){
			var text = o.text();
			$(".newaddress_list .province input").val(text).css("color","#000000");
			modal_remove();
		},
		
		wish_remane: function(o){
			var name = o.attr("data");
			modal_remove();
			modal_bg();
			var createwishbox = ''+
				'<div class="createwishbox">'+
					'<div class="createitem">'+
						'<h2>New wishlist name</h2>'+
						'<input type="text" class="keyword" msg="Same name." value="'+name+'">'+
					'</div>'+
					'<div class="btn">'+
						'<span onclick="modal_remove();">Cancel</span>'+
						'<span class="wishlistCreate rename">OK</span>'+
					'</div>'+
				'</div>'
			$('.modal_container').append(createwishbox);
			modal_add();
			getwindowHeight();
			$(".fixed_bottom_menu").hide();
		},
		
		more_question_check: function(o){
			if(o.hasClass("arrow_a")){
				o.removeClass("arrow_a");
				o.addClass("arrow_b");
				o.parent().prev().show();
			}
			else{
				o.addClass("arrow_a");
				o.removeClass("arrow_b");
				o.parent().prev().hide();
			}
		},
		
		check_larger_image: function(o){
			var carouse_swipe_html = $(".carouse_swipe").html();
			var html = ''+
				'<div class="good_larger_image">'+
					'<h4><b>1</b>/</h4>'+
					'<div class="carouse_swipe">'+carouse_swipe_html+'</div>'+
				'</div>'
			msgTipsbox(0,html);
			$(".good_larger_image .carouse_swipe").Swipe({auto:0,resizeAuto:true,continuous:true,disableScroll:false,startSlide:0,callback: function(pos){check_image_num();}});
			$(".good_larger_image .carouse_swipe strong.arrow_a").remove();
			var num = $(".good_larger_image .carouse_swipe .carouse_swipe_box ul li").length;
			$(".good_larger_image h4").append(num);
			getwindowHeight();
		}
		
	}
})(jQuery);

$(document)
.on("click",".goodlist .addwish",function(){
	$.newchic_item.addwish($(this));		
})
.on("click",".module",function(){
	$.newchic_item.close_module($(this));		
})
.on("click",".menu_bar",function(){
	$.newchic_item.menu_bar($(this));		
})
.on("click",".wish_icon",function(){
	$.newchic_item.wish_icon($(this));		
})
.on("click",".header_top .sequence",function(){
	$.newchic_item.sequence($(this));		
})
.on("click",".sequence_item li",function(){
	$.newchic_item.sequence_click($(this));		
})
.on("click",".fixed_bottom_menu .filter",function(){
	$.newchic_item.filter($(this));		
})
.on("click",".addnewwish a",function(){
	$.newchic_item.create_wish($(this));		
})
.on("click",".wishlistCreate",function(){
	$.newchic_item.wishlistCreate($(this));		
})
.on("click",".checkwishlist i",function(){
	$.newchic_item.checkwishlist($(this));		
})
.on("click",".editwishlist",function(){
	$.newchic_item.editwishlist($(this));		
})
.on("click",".goods_top_tool .share",function(){
	$.newchic_item.tool_share($(this));		
})
.on("click",".fixed_bottom_addtobag .addbag",function(){
	$.newchic_item.select_poa($(this));		
})
.on("click",".goods_poa_item li:not('.none,.size_chart')",function(){
	$.newchic_item.select_goods_poa($(this));		
})
.on("click",".goods_item_quantity .next",function(){
	$.newchic_item.quantity_next($(this));		
})
.on("click",".goods_item_quantity .prev",function(){
	$.newchic_item.quantity_prev($(this));		
})
.on("click",".addimage_item .note_tips",function(){
	$.newchic_item.addimage_note($(this));		
})
.on("click",".write_reviews_item .note_tips",function(){
	$.newchic_item.writereviews_note($(this));		
})
.on("focus",".addimage_item textarea",function(){if($(this).val()==''){$(this).next().hide();}})
.on("blur",".addimage_item textarea",function(){if($(this).val()==''){$(this).next().show();}})
.on("focus",".write_reviews_item textarea",function(){if($(this).val()==''){$(this).next().hide();}})
.on("blur",".write_reviews_item textarea",function(){if($(this).val()==''){$(this).next().show();}})
.on("click",".write_reviews_score li.price i,.write_reviews_score li.appearance i,.write_reviews_score li.quality i",function(){
	$.newchic_item.check_reviews_score($(this));		
})
.on("click",".categories_filter .arrow_a",function(){
	$.newchic_item.categories_filter_select($(this));		
})
.on("click",".categories_filter .arrow_b",function(){
	$.newchic_item.categories_filter_select_close($(this));		
})
.on("click",".categories_filter_box a",function(){
	$.newchic_item.categories_filter_list($(this));		
})
.on("click",".categories_filter .reset",function(){
	$.newchic_item.categories_filter_reset($(this));		
})
.on("click",".currency_item li",function(){
	$.newchic_item.currency_select($(this));		
})
.on("click",".language_item li",function(){
	$.newchic_item.language_select($(this));		
})
.on("click",".switch",function(){
	$.newchic_item._switch($(this));		
})
.on("click",".fixed_bottom_menu i.search,.menu .menu_nav li.search",function(){
	$.newchic_item.all_search($(this));		
})
.on("click",".search_item .search .close",function(){
	$.newchic_item.search_keyword_close($(this));		
})
.on("input propertychange",".search_item .search .keyword",function(){
	$.newchic_item.search_keyword_blur($(this));		
})
.on("click",".search_item .search_list .clearhistory",function(){
	$.newchic_item.clearhistory($(this));		
})
.on("click",".purchased_item .select",function(){
	$.newchic_item.purchased_select($(this));		
})
.on("click",".shipping_total .shipping_box strong",function(){
	$.newchic_item.shipping_methed($(this));		
})
.on("click",".shipping_methed u",function(){
	$.newchic_item.shipping_list($(this));		
})
.on("click",".shipping_methed b",function(){
	$.newchic_item.shipping_methed_check($(this));		
})
.on("click",".goods_list_item .poa .poa_list",function(){
	$.newchic_item.bag_poa_check($(this));		
})
.on("click",".goods_list_item .poa .remove",function(){
	$.newchic_item.bag_goods_remove_alert($(this));		
})
.on("click",".bag_goods_remove .button_yes",function(){
	$.newchic_item.bag_goods_remove_yes($(this));		
})
.on("click",".selectcountry_item .letter span",function(){
	$.newchic_item.select_country($(this));		
})
.on("click",".goods_top_tool li b.show",function(){
	$.newchic_item.image_show($(this));		
})
.on("click",".containerImage .main",function(){
	$.newchic_item.clear_containerImage($(this));		
})
.on("click",".fixed_bottom_checkwish span .move",function(){
	$.newchic_item.move_wish($(this));		
})
.on("click",".account_orders .orders_nav",function(){
	$.newchic_item.orders_nav_select($(this));		
})
.on("click",".newaddress_list li.country",function(){
	$.newchic_item.newaddress_country($(this));		
})
.on("click",".selectcountry_item .country_list li",function(){
	$.newchic_item.country_list_check($(this));		
})
.on("click",".newaddress_list .province .arrow_d",function(){
	$.newchic_item.province_list_check($(this));		
})
.on("click",".zone_list li",function(){
	$.newchic_item.zone_list($(this));		
})
.on("click",".fixed_bottom_checkwish span i.rename",function(){
	$.newchic_item.wish_remane($(this));		
})
.on("click",".messages_queation_item_list .more_question .arrow_a, .messages_queation_item_list .more_question .arrow_b",function(){
	$.newchic_item.more_question_check($(this));		
})
.on("click",".goods_attr a",function(){
	$.newchic_item.check_larger_image($(this));		
})
.on("click",".account_orders .orders_nav li",function(){
	$.newchic_item.orders_nav_li($(this));		
});

function addProduct() {
var ol = $(".detail_swipe").offset().left;
var ot = $(".detail_swipe").offset().top;
var oWidth = $(window).width();
var oHeight = $(".detail_swipe").outerHeight();
var oWidth = $(".detail_swipe").outerWidth();
var offset = $('.fixed_bottom_addtobag .num').offset();
var srollHeight = $(window).scrollTop();   
var flyimage = $(".carouse_swipe .carouse_swipe_box li").eq(0).find("img").attr("src");
var flyer = $('<img class="ncflyer" src="'+flyimage+'"/>');
//alert("1");
flyer.nc_fly({
    start: {
        left: ol+oWidth/2,
        top: oHeight-50
    },
    end: {
        left: offset.left,
        top: offset.top-srollHeight,
        width: 22,
        height: 22
    }
});
//alert("2");
setTimeout(function(){
					$(".ncflyer").remove();
},2000)
}
function ssssss(obj){
	addProduct();

}

function check_image_num(){
	$(".good_larger_image .carouse_swipe .carouse_tab li").each(function(){
		var index = $(this).index();
		alert(index)
		if($(this).hadClass("active")){}
	});
}


function renameWish(obj){
}


function submitLoginPannel(form){
	var o = $(form);
	if(o.find(".login_animated").length>0){return false;}
	var validate = true;
	
	if(o.hasClass("sendemail"))
	{
		o.parent().next().find('.validate').each(function(){
			if(!validateInput(this)){
				validate = false;
			}
		});
		if(!validate){
			return false;
		}
		$('html').addClass('sift_move');
		$("body").append('<div class="login_module"><div class="modal_container"><span>Email发送中...</span></div></div>');
		
		setTimeout(function(){
			$(".login_module").find("span").text("Email发送完毕.");
		},2000);
		
		setTimeout(function(){
			$(".login_module").remove();
			$('html').removeClass('sift_move');
		},3000);
		
		return false;
	}
	$(form).find('.validate').each(function(){
		if(!validateInput(this)){
			validate = false;
		}
	});
	if(!validate){
		return false;
	}
	$('html').addClass('sift_move');
	$("body").append('<div class="login_module"><div class="modal_container"><span>登录中...</span></div></div>');
	
	setTimeout(function(){
		$(".login_module").find("span").text("Password error.");
	},200000);
	
	setTimeout(function(){
		$(".login_module").remove();
		$('html').removeClass('sift_move');
		$('.loginPannel .password').focus();
	},300000);
	
	return false;
}
function validateInput(input){
	var validate = true;
	var val = $(input).val();
	var dvalue = $(input).attr('dvalue');
	var type = $(input).attr('type');
	var rule = $(input).attr('rule');
	if(val==dvalue || val.length == 0){
		validate = false;
		inputNotice($(input));
	}
	else{
		if(rule == 'email'){
			if(!zValidate.email(val)){
				validate = false;
				inputNotice($(input));
			}
		}else if(rule == 'password'){
			if(!zValidate.password(val) || val.length<6){
				validate = false;
				inputNotice($(input));				
			}
		}
		else if(rule == 'username'){
			if(!zValidate.password(val) || val.length<3){
				validate = false;
				inputNotice($(input));
			}
		}
	}
	return validate;
}
/*$(document).on("click",".sendemail",function(){
	
});*/

$(".heartbtn").click(function(){
		if($('.opacity').length < 1){
			$(".container").addClass("containerR");
			$(".main").append('<div class="opacity" />');
			$('html').addClass('sift_move');
		$(".fixed_bottom_menu").hide();
		}else{
			$(".container").removeClass("containerR");
			$(".opacity").remove();
			$(".fixed_bottom_menu").show();
			$('html').removeClass('sift_move');
		}
	});	


function saveChangepassword(id,obj){
	var id = id;
	if($(".account_changepassword").find(".login_animated").length>0){return false;}
    var new_password = $.trim($('#new_password').val());
    var confirm_password = $.trim($('#confirm_password').val());
	var validate = true;
	
	$(".account_changepassword").find('.validate').each(function(){
		if(!validateInput(this)){
			validate = false;
		}
	});
	if(confirm_password != new_password){
      	validate = false;
		$("#confirm_password").css("color","#ffffff");
        $("#confirm_password").prev().show().addClass("login_animated login_shake");
		setTimeout(function(){
			$("#confirm_password").css("color","#000000");
			$("#confirm_password").prev().hide().removeClass("login_animated login_shake");
		},1500);
    }
	if(!validate){
		return false;
	}
	
	$('html').addClass('sift_move');
	$("body").append('<div class="login_module"><div class="modal_container"><span>修改中...</span></div></div>');
	
	setTimeout(function(){
		$(".login_module").find("span").text("修改完毕.");
		$(".inputchang").val('');
		$(".pwdtip").show();
	},2000);
	
	setTimeout(function(){
		$(".login_module").remove();
		$('html').removeClass('sift_move');
	},3000);
	
	return false;
}

$(".account_editprofile .upload_input").change(function(){
	var val = $(this).next().val();
	$(this).next().attr("src",val);
});

function saveEditprofile(obj){
	var validate = true;
	if($(".account_editprofile").find(".login_animated").length>0){return false;}
	$(".account_editprofile").find('.validate').each(function(){
		if(!validateInput(this)){
			validate = false;
		}
	});
	if(!validate){
		return false;
	}
	
	$('html').addClass('sift_move');
	$("body").append('<div class="login_module"><div class="modal_container"><span>修改中...</span></div></div>');
	
	setTimeout(function(){
		$(".login_module").find("span").text("修改完毕.");		
	},2000);
	
	setTimeout(function(){
		$(".login_module").remove();
		$('html').removeClass('sift_move');
	},3000);
	return false;
}



/* ===========================================================
		多功能通用兼容移动端滑动切换功能
		
		startSlide (默认:0) - Swipe开始的索引
		speed (默认:300) - 前进和后退的速度，单位毫秒.
		auto (默认:0) 自动滑动ms 0为禁止
		tabClick (默认:false) 切换click/entermouse 
		resizeAuto (默认:false) 窗口拉动时是否重载
		continuous (默认:true) -是否可以循环播放（注：我设置为false好像也是循环的）
		disableScroll (默认:false) - 停止触摸滑动
		stopPropagation (默认:false) -停止事件传播
		callback - 回调函数，可以获取到滑动中图片的索引.
		transitionEnd - 在最后滑动结束后执行.
		window.mySwipe = $('').Swipe().data('Swipe');
		var banner = Swipe(
			$(".carouse_swipe")[0],{auto:4000,continuous:true,disableScroll:false,startSlide:0,callback: function(pos){console.log(pos)}
		});
		扩展 banner.next()
		$(".carouse_swipe").Swipe({auto:4000,continuous:true,disableScroll:false,startSlide:0,callback: function(pos){}});
	 * =========================================================== */
	;(function($) {
		$.fn.Swipe = function(params) {
		  return this.each(function() {
			$(this).data('Swipe', new Swipe($(this)[0], params));
		  });
		}
	})(jQuery)
	
	function Swipe(container, options) {
	
	  "use strict";//严格模式
	  if (!container) return; // 如果没有找到元素就退出
	  
	  var noop = function() {}; // 创建一个空函数
	  var offloadFn = function(fn) { setTimeout(fn || noop, 0) };//卸载一个空函数
	  
	  // 检测浏览器功能
	  var browser = {
		addEventListener: !!window.addEventListener,
		touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
		transitions: (function(temp) {
		  var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
		  for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
		  return false;
		})(document.createElement('swipe'))
	  };
	
	  var element = container.children[0].children[0];
	  var element_btn = container.children[1];
	  var element_tab = container.children[2];
	  var slides, slidePos, width, length;
	  options = options || {};
	  var index = parseInt(options.startSlide, 10) || 0;
	  var speed = options.speed || 300;
	  options.continuous = options.continuous !== undefined ? options.continuous : true;
	
	  function setup() {
	
		// cache slides
		slides = element.children;//滚动元素
		length = slides.length;//滚动元素个数
	
		// 元素只有一个时禁用滚动
		if (slides.length < 2) options.continuous = false;
	
		//只有二个元素时的滚动
		if (browser.transitions && options.continuous && slides.length < 3) {
		  element.appendChild(slides[0].cloneNode(true));
		  element.appendChild(element.children[1].cloneNode(true));//克隆二个元素插入容器后面
		  slides = element.children;
		}
	
		width = container.getBoundingClientRect().width || container.offsetWidth;//容器宽度
		element.style.width = (slides.length * width) + 'px';//容器内元素宽度之和
	
		// 创建一个数组来保存滑块位置
		slidePos = new Array(slides.length);
		
		// 给每个元素定位
		var pos = slides.length;
		var slides_tab = '';
		while(pos--) {
			var slide = slides[pos];
			slide.style.width = width + 'px';//给每个子元素创建宽度样式
			slide.setAttribute('data-index', pos); //给每子个元素一个序号
			
			//如果支持滑动，给每个子元素添加css3滑动样式
			if (browser.transitions) {
				slide.style.left = (pos * -width) + 'px';
				move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
			}
			//创建滑块tab
			slides_tab = slides_tab + "<li><i></i></li>"
		}
	
		$(element_tab).html(slides_tab).children().eq(index).addClass("active");
	
		// 重置默认开始显示元素之前和之后的参数
		if (options.continuous && browser.transitions) {
			move(circle(index-1), -width, 0);
			move(circle(index+1), width, 0);
		}
		
		//如果不支持滑动，给元素添加定位样式
		if (!browser.transitions) element.style.left = (index * -width) + 'px';
		
		//初始化完成后，设置容器为可见状态
		container.style.visibility = 'visible';
	  }
	
	  function prev() {
		if (options.continuous) slide(index-1);
		else if (index) slide(index-1);
	  }
	
	  function next() {
		if (options.continuous) slide(index+1);
		else if (index < slides.length - 1) slide(index+1);
	  }
	
	  function circle(index) {
	
		// a simple positive modulo using slides.length
		return (slides.length + (index % slides.length)) % slides.length;
	
	  }
	
	  function slide(to, slideSpeed) {
	
		// 如果已经滑动
		if (index == to) return;
		
		if (browser.transitions) {
	
		  var direction = Math.abs(index-to) / (index-to); // 1: 向左, -1: 向右
	
		  // 获取滑块的实际位置
		  if (options.continuous) {
			var natural_direction = direction;
			direction = -slidePos[circle(to)] / width;
	
			// if going forward but to < index, use to = slides.length + to
			// if going backward but to > index, use to = -slides.length + to
			if (direction !== natural_direction) to =  -direction * slides.length + to;
	
		  }
	
		  var diff = Math.abs(index-to) - 1;
	
		  // move all the slides between index and to in the right direction
		  while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);
				
		  to = circle(to);
	
		  move(index, width * direction, slideSpeed || speed);
		  move(to, 0, slideSpeed || speed);
	
		  if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
		}
		else
		{     
		  //不支持transitions时使用animate
		  to = circle(to);
		  animate(index * -width, to * -width, slideSpeed || speed);
		}
	
		index = to;
		offloadFn(options.callback && options.callback(index, slides[index]));
		tabmove();
	  }
	  
		function tabmove(){
		  $(element_tab).children().eq(index).addClass("active").siblings().removeClass("active");	
		}
	
		function move(index, dist, speed) {
		
			translate(index, dist, speed);
			slidePos[index] = dist;
		
		}
	
		function translate(index, dist, speed) {
		
			var slide = slides[index];
			var style = slide && slide.style;
			
			if (!style) return;
			
			style.webkitTransitionDuration = 
			style.MozTransitionDuration = 
			style.msTransitionDuration = 
			style.OTransitionDuration = 
			style.transitionDuration = speed + 'ms';
			
			style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
			style.msTransform = 
			style.MozTransform = 
			style.OTransform = 'translateX(' + dist + 'px)';
		
		}
	
		function animate(from, to, speed) {
			
			// 如果不是动画，就复位
			if (!speed) {
			
			  element.style.left = to + 'px';
			  return;
			
			}
			
			var start = +new Date;
			
			var timer = setInterval(function() {
			  var timeElap = +new Date - start;
			  
			  if (timeElap > speed) {
			
				element.style.left = to + 'px';
			
				if (delay) begin();
			
				options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
			
				clearInterval(timer);
				return;
			
			  }
			
			element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';
			
			}, 4);
		
		}
	
		// 设置自动滚动
		var delay = options.auto || 0;
		var interval;
		
		function begin() {
			clear();
			interval = setTimeout(next, delay);
		}
		
		function clear() {
			clearTimeout(interval);
		}
		
		function stop() {
			delay = 0;
			clearTimeout(interval);
		}
		
		var start = {};
		var delta = {};
		var isScrolling;      
	
	  // 设置事件监听
	  var events = {
	
		handleEvent: function(event) {
	
		  switch (event.type) {
			case 'touchstart': this.start(event); break;
			case 'touchmove': this.move(event); break;
			case 'touchend': offloadFn(this.end(event)); break;
			case 'webkitTransitionEnd':
			case 'msTransitionEnd':
			case 'oTransitionEnd':
			case 'otransitionend':
			case 'transitionend': offloadFn(this.transitionEnd(event)); break;
			case 'resize': offloadFn(setup.call()); break;
		  }
	
		  if (options.stopPropagation) event.stopPropagation();
	
		},
		start: function(event) {
	
		  var touches = event.touches[0];
	
		  start = {
			x: touches.pageX,
			y: touches.pageY,
			time: +new Date
		  };
		  
		  isScrolling = undefined;
		  delta = {};
		  element.addEventListener('touchmove', this, false);
		  element.addEventListener('touchend', this, false);
	
		},
		move: function(event) {

		  if ( event.touches.length > 1 || event.scale && event.scale !== 1) return
		  if (options.disableScroll) event.preventDefault();
		  var touches = event.touches[0];
		  delta = {
			x: touches.pageX - start.x,
			y: touches.pageY - start.y
		  }
		  if ( typeof isScrolling == 'undefined') {
			isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
		  }
		  if (!isScrolling) {
			event.preventDefault();
	
			// 停止延时自动滚动
			clear();
			if (options.continuous) {
	
			  translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
			  translate(index, delta.x + slidePos[index], 0);
			  translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);
	
			} else {
	
			  delta.x = 
				delta.x / 
				  ( (!index && delta.x > 0               // if first slide and sliding left
					|| index == slides.length - 1        // or if last slide and sliding right
					&& delta.x < 0                       // and if sliding at all
				  ) ?                      
				  ( Math.abs(delta.x) / width + 1 )      // determine resistance level
				  : 1 );                                 // no resistance if false
			  
			  // translate 1:1
			  translate(index-1, delta.x + slidePos[index-1], 0);
			  translate(index, delta.x + slidePos[index], 0);
			  translate(index+1, delta.x + slidePos[index+1], 0);
			}
	
		  }
	
		},
		end: function(event) {
			
		  // measure duration
		  var duration = +new Date - start.time;
	
		  // determine if slide attempt triggers next/prev slide
		  var isValidSlide = 
				Number(duration) < 250               // if slide duration is less than 250ms
				&& Math.abs(delta.x) > 20            // and if slide amt is greater than 20px
				|| Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width
	
		  // determine if slide attempt is past start and end
		  var isPastBounds = 
				!index && delta.x > 0                            // if first slide and slide amt is greater than 0
				|| index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0
	
		  if (options.continuous) isPastBounds = false;
		  
		  // determine direction of swipe (true:right, false:left)
		  var direction = delta.x < 0;
	
		  // if not scrolling vertically
		  if (!isScrolling) {
	
			if (isValidSlide && !isPastBounds) {
	
			  if (direction) {
	
				if (options.continuous) { // we need to get the next in this direction in place
	
				  move(circle(index-1), -width, 0);
				  move(circle(index+2), width, 0);
	
				} else {
				  move(index-1, -width, 0);
				}
	
				move(index, slidePos[index]-width, speed);
				move(circle(index+1), slidePos[circle(index+1)]-width, speed);
				index = circle(index+1);  
						  
			  } else {
				if (options.continuous) { // we need to get the next in this direction in place
	
				  move(circle(index+1), width, 0);
				  move(circle(index-2), -width, 0);
	
				} else {
				  move(index+1, width, 0);
				}
	
				move(index, slidePos[index]+width, speed);
				move(circle(index-1), slidePos[circle(index-1)]+width, speed);
				index = circle(index-1);
	
			  }
	
			  options.callback && options.callback(index, slides[index]);
	
			} else {
	
			  if (options.continuous) {
	
				move(circle(index-1), -width, speed);
				move(index, 0, speed);
				move(circle(index+1), width, speed);
	
			  } else {
	
				move(index-1, -width, speed);
				move(index, 0, speed);
				move(index+1, width, speed);
			  }
	
			}
	
		  }
		  
		  element.removeEventListener('touchmove', events, false)
		  element.removeEventListener('touchend', events, false)
	
		},
		transitionEnd: function(event) {
		  if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
			if (delay) begin();
			options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
			tabmove();
		  }
		}
	  }
	
		// trigger setup
		setup();
		
		
		// 如果设置了auto大于0，开始自动滚动
		if (delay) begin();
		
		// 添加事件监听
		if (browser.addEventListener) {
		
			// 设置在元素上的触摸开始
			if (browser.touch) {
				element.addEventListener('touchstart', events, false);
			}
			if (browser.transitions) {
				element.addEventListener('webkitTransitionEnd', events, false);
				element.addEventListener('msTransitionEnd', events, false);
				element.addEventListener('oTransitionEnd', events, false);
				element.addEventListener('otransitionend', events, false);
				element.addEventListener('transitionend', events, false);
			}
			
			// 设置屏幕拉动事件
			window.addEventListener('resize', events, false);
		} else {
		
			window.onresize = function () { setup() }; // to play nice with old IE
		
		}
	  
		$(element_tab).on("mouseenter", "li", function(){
			clear();
			slide($(this).index());	
			begin();
		});
		$(element_btn).on("click", "li.prev", function(){
			clear();
			prev();
			begin();
		})
		.on("click", "li.next", function(){
			clear();
			next();
			begin();
		});
		
		// 暴露API
		return {
		setup: function() {
		  setup();
		},
		slide: function(to, speed) {      
		  clear();  
		  slide(to, speed);
		  begin();
		},
		prev: function() {
			clear();
			prev();
			begin();
		},
		next: function() {
			clear();
			next();
			begin();
		},
		getPos: function() {
		  // 获取当前元素的位置
		  return index;
		},
		getNumSlides: function() {
		  // 获取元素总个数
		  return length;
		},
		kill: function() {
		  stop();
		  // 重置元素样式
		  element.style.width = 'auto';
		  element.style.left = 0;
		  
		  var pos = slides.length;
		  while(pos--) {
			var slide = slides[pos];
			slide.style.width = '100%';
			slide.style.left = 0;
			if (browser.transitions) translate(pos, 0, 0);
		  }
		
		  // 移除绑定事件
		  if (browser.addEventListener) {
			element.removeEventListener('touchstart', events, false);
			element.removeEventListener('webkitTransitionEnd', events, false);
			element.removeEventListener('msTransitionEnd', events, false);
			element.removeEventListener('oTransitionEnd', events, false);
			element.removeEventListener('otransitionend', events, false);
			element.removeEventListener('transitionend', events, false);
			window.removeEventListener('resize', events, false);
		  }
		  else {
			window.onresize = null;
		  }
		
		}
	  }
	
	}
	
	
	
	
$(".carouse_swipe").Swipe({auto:0,resizeAuto:true,continuous:true,disableScroll:false,startSlide:0,callback: function(pos){}});


/* ===========================================================
		对话框模拟
		ZSAlert('This is a custom alert box', 'Alert Dialog');
		ZSConfirm('Can you confirm this?', 'Confirmation Dialog', function(r) {
			ZSAlert('Confirmed: ' + r, 'Confirmation Results');
		});
		ZSPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
			if( r ) alert('You entered ' + r);
		});
		$.alerts.dialogClass = "dialogClass";
		ZSAlert('设置自定义样式', 'Custom Styles', function() {
			$.alerts.dialogClass = null; // 恢复到默认置
		});
	 * =========================================================== */
	
	;(function($) {
		var $popup_msg, $popup_msg_title, $popup_msg_content, $popup_msg_message, popup_msg_pos;
		$.ZSmsgBox = {
			verticalOffset: -75,                // 垂直位移px
			horizontalOffset: 0,                // 水平位移px
			repositionOnResize: true,           // 屏幕缩放是否执行重定位
			overlayOpacity: .55,                // 背景层透明度
			overlayColor: '#000000',               // 背景层颜色
			dialogClass: null,                  // 自定义样式标签
			alertTitle: 'Alert',
			confirmTitle: 'Confirm',
			promptTitle: 'Prompt',
			
			ajaxload: function(message, title) {
				if( title == null ) title = $.ZSmsgBox.alertTitle;
				$.ZSmsgBox._show(title, message, null, 'ajaxload');
			},
			
			gethtml: function(message, title, ok, cancel, callback) {
				if( title == null ) title = $.ZSmsgBox.alertTitle;
				$.ZSmsgBox._show(title, message, null, 'html', ok, cancel, function(result) {
					if( callback ) callback(result);
				});
			},
			blank: function(message,title) {
				if( title == null ) title = $.ZSmsgBox.alertTitle;
				$.ZSmsgBox._show(title, message, null, 'blank');
			},
			
			alert: function(message, title, ok, cancel, callback) {
				if( title == null ) title = $.ZSmsgBox.alertTitle;
				$.ZSmsgBox._show(title, message, null, 'alert', ok, cancel, function(result) {
					if( callback ) callback(result);
				});
			},
			
			confirm: function(message, title, ok, cancel, callback) {
				if( title == null ) title = $.ZSmsgBox.confirmTitle;
				$.ZSmsgBox._show(title, message, null, 'confirm', ok, cancel, function(result) {
					if( callback ) callback(result);
				});
			},
				
			prompt: function(message, value, title, ok, cancel, callback) {
				if( title == null ) title = $.ZSmsgBox.promptTitle;
				$.ZSmsgBox._show(title, message, value, 'prompt', ok, cancel, function(result) {
					if( callback ) callback(result);
				});
			},
			
			_show: function(title, msg, value, type, ok, cancel, callback) {
				
				$.ZSmsgBox._hide();
				$.ZSmsgBox._overlay('show');
				
				var css_name = '';
				//var title_h1 = '<h1 class="popup_msg_title"></h1>';
				var title_h1 = '';
				if(title=='none'){
					css_name = 'border';
					title_h1 = '';
				}
				
				$("body").append(
				'<div class="popup_msg '+css_name+'">' +
					title_h1 +
					'<div class="popup_msg_content">' +
					  '<div class="popup_msg_message"></div>' +
					'</div>' +
				'</div>');
				
				$popup_msg = $(".popup_msg");
				$popup_msg_title = $(".popup_msg .popup_msg_title");
				$popup_msg_content = $(".popup_msg .popup_msg_content");
				$popup_msg_message = $(".popup_msg .popup_msg_message");
				
				if( $.ZSmsgBox.dialogClass ) $popup_msg.addClass($.ZSmsgBox.dialogClass);
				
				// IE6 Fix
				var popup_msg_pos = ('undefined' == typeof(document.body.style.maxHeight)) ? 'absolute' : 'fixed'; 
				
				$popup_msg.css({
					position: popup_msg_pos,
					zIndex: 99999,
					padding: 0,
					margin: 0
				});
				
				if(title !='none'){
					$popup_msg_title.html(title);
					if(type != 'ajaxload'){
						$popup_msg_title.append('<s onclick="$.ZSmsgBox._hide();"></s>');
					}
				}
				$popup_msg_content.addClass(type);
				if(type == 'html' || type == 'ajaxload'){
					$popup_msg_message.html(msg);	
				}else{
					$popup_msg_message.html('<div class="msg">'+ msg +'</div>');
				}

				$popup_msg.css({
					//minWidth: $popup_msg_message.outerWidth(),
				//	maxWidth: $popup_msg_message.outerWidth()
				});
				
				if(type == 'ajaxload'){
					$popup_msg.html('<div class="loading"><div class="animate-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
				}
				
				$.ZSmsgBox._reposition();
				$.ZSmsgBox._maintainPosition(true);
				
				switch( type ) {
					case 'ajaxload':
						$(".popup_overlay").off("click.overlay");
					break;
					case 'html':
					break;
					case 'blank':
						$popup_msg.remove();
					break;
					case 'alert':
						if(ok!=''){
							$popup_msg_message.after('<div class="popup_msg_panel"><b><input type="button" value="' + ok + '" class="popup_btn_ok" /></b></div>');
						}
						$(".popup_btn_ok").click( function() {
							$(".popup_msg").slideUp();					   
							setTimeout(function(){
								$.ZSmsgBox._hide();
							},500);
							callback(true);
						}).focus().keypress( function(e) {
							if( e.keyCode == 13 || e.keyCode == 27 ) $(".popup_btn_ok").trigger('click');
						});
					break;
					case 'confirm':
						$popup_msg_message.after('<div class="popup_msg_panel"><span><input type="button" value="' + ok + '" class="popup_btn_ok" /></span><span><input type="button" value="' + cancel + '" class="popup_btn_cancel" /></span></div>');
						$(".popup_btn_ok").click( function() {
							$(".popup_msg").slideUp();					   
							setTimeout(function(){
								$.ZSmsgBox._hide();
							},500);
							if( callback ) callback(true);
						}).focus();
						$(".popup_btn_cancel").click( function() {
							$(".popup_msg").slideUp();					   
							setTimeout(function(){
								$.ZSmsgBox._hide();
							},500);
							if( callback ) callback(false);
						});
						$(".popup_btn_ok, .popup_btn_cancel").keypress( function(e) {
							if( e.keyCode == 13 ) $(".popup_btn_ok").trigger('click');
							if( e.keyCode == 27 ) $(".popup_btn_cancel").trigger('click');
						});
					break;
					case 'prompt':
						$popup_msg_message.append('<br /><input type="text" size="30" class="popup_msg_prompt" />').after('<div class="popup_msg_panel"><input type="button" value="' + ok + '" class="popup_btn_ok" /> <input type="button" value="' + cancel + '" class="popup_btn_cancel" /></div>');
						$(".popup_msg_prompt").width( $popup_msg_message.width() );
						$(".popup_btn_ok").click( function() {
							$.ZSmsgBox._hide();
							if( callback ) callback( $(".popup_msg_prompt").val() );
						});
						$(".popup_btn_cancel").click( function() {
							$.ZSmsgBox._hide();
							if( callback ) callback( null );
						});
						$(".popup_msg_prompt, .popup_btn_ok, .popup_btn_cancel").keypress( function(e) {
							if( e.keyCode == 13 ) $(".popup_btn_ok").trigger('click');
							if( e.keyCode == 27 ) $(".popup_btn_cancel").trigger('click');
						});
						if( value ) $(".popup_msg_prompt").val(value);
						$(".popup_msg_prompt").focus().select();
					break;
				}
			},
			
			_hide: function() {
				$popup_msg && $popup_msg.remove();
				$.ZSmsgBox._overlay('hide');
				$.ZSmsgBox._maintainPosition(false);
			},
			
			_overlay: function(status) {
				switch( status ) {
					case 'show':
						$.ZSmsgBox._overlay('hide');
						$("body").append('<div class="popup_overlay"></div>');
						$(".popup_overlay").css({
							position: 'absolute',
							zIndex: 99998,
							top: '0px',
							left: '0px',
							right: '0px',
							bottom: '0px',
							height: $(document).height(),
							background: $.ZSmsgBox.overlayColor,
							opacity: $.ZSmsgBox.overlayOpacity
						}).on('click.overlay',function(){
							popup_remove();
							/*$(".popup_msg").slideUp();					   
							setTimeout(function(){
								$.ZSmsgBox._hide();
							},500);*/
						});
						
					break;
					case 'hide':
						$(".popup_overlay").remove();
					break;
				}
			},
			
			_reposition: function() {
				/*var top = (($(window).height() / 2) - ($popup_msg.outerHeight() / 2)) + $.ZSmsgBox.verticalOffset;
				var left = (($(window).width() / 2) - ($popup_msg.outerWidth() / 2)) + $.ZSmsgBox.horizontalOffset;
				if( top < 0 ) top = 0;
				if( left < 0 ) left = 0;*/
				
				// IE6 fix
				/*if('undefined' == typeof(document.body.style.maxHeight)) top = top + $(window).scrollTop();
				
				$popup_msg.css({
					top: top + 'px',
					left: left + 'px'
				});*/
				
				
				$(".popup_overlay").height( $(document).height() );
				setTimeout(function(){
					$popup_msg.slideDown();
				},100);
			},
			
			_maintainPosition: function(status) {
				if( $.ZSmsgBox.repositionOnResize ) {
					switch(status) {
						case true:
							$(window).bind('resize', $.ZSmsgBox._reposition);
						break;
						case false:
							$(window).unbind('resize', $.ZSmsgBox._reposition);
						break;
					}
				}
			}
		}
		
		ZSBlank = function(message,title) {
			$.ZSmsgBox.blank(message,title);
		};
		
		ZSAlert = function(message, title, ok, cancel, callback) {
			$.ZSmsgBox.alert(message, title, ok, cancel, callback);
		};
		
		ZSLoad = function(message, title) {
			$.ZSmsgBox.ajaxload(message, title);
		};
		
		ZSHtml = function(message, title, ok, cancel, callback) {
			$.ZSmsgBox.gethtml(message, title, ok, cancel, callback);
		};
		
		ZSConfirm = function(message, title, ok, cancel, callback) {
			$.ZSmsgBox.confirm(message, title, ok, cancel, callback);
		};
			
		ZSPrompt = function(message, value, title, ok, cancel, callback) {
			$.ZSmsgBox.prompt(message, value, title, ok, cancel, callback);
		};
		
	})(jQuery);
	
	
	!function(a){a.nc_fly=function(b,c){var d={version:"1.0.0",autoPlay:!0,vertex_Rtop:20,speed:1.2,start:{},end:{},onEnd:a.noop},e=this,f=a(b);e.init=function(a){this.setOptions(a),!!this.settings.autoPlay&&this.play()},e.setOptions=function(b){this.settings=a.extend(!0,{},d,b);var c=this.settings,e=c.start,g=c.end;f.css({marginTop:"0px",marginLeft:"0px",position:"fixed"}).appendTo("body"),null!=g.width&&null!=g.height&&a.extend(!0,e,{width:f.width(),height:f.height()});var h=Math.min(e.top,g.top)-Math.abs(e.left-g.left)/3;h<c.vertex_Rtop&&(h=Math.min(c.vertex_Rtop,Math.min(e.top,g.top)));var i=Math.sqrt(Math.pow(e.top-g.top,2)+Math.pow(e.left-g.left,2)),j=Math.ceil(Math.min(Math.max(Math.log(i)/.05-75,30),100)/c.speed),k=e.top==h?0:-Math.sqrt((g.top-h)/(e.top-h)),l=(k*e.left-g.left)/(k-1),m=g.left==l?0:(g.top-h)/Math.pow(g.left-l,2);a.extend(!0,c,{count:-1,steps:j,vertex_left:l,vertex_top:h,curvature:m})},e.play=function(){this.move()},e.move=function(){var b=this.settings,c=b.start,d=b.count,e=b.steps,g=b.end,h=c.left+(g.left-c.left)*d/e,i=0==b.curvature?c.top+(g.top-c.top)*d/e:b.curvature*Math.pow(h-b.vertex_left,2)+b.vertex_top;if(null!=g.width&&null!=g.height){var j=e/2,k=g.width-(g.width-c.width)*Math.cos(j>d?0:(d-j)/(e-j)*Math.PI/2),l=g.height-(g.height-c.height)*Math.cos(j>d?0:(d-j)/(e-j)*Math.PI/2);f.css({width:k+"px",height:l+"px","font-size":Math.min(k,l)+"px"})}f.css({left:h+"px",top:i+"px"}),b.count++;var m=window.requestAnimationFrame(a.proxy(this.move,this));d==e&&(window.cancelAnimationFrame(m),b.onEnd.apply(this))},e.destory=function(){f.remove()},e.init(c)},a.fn.nc_fly=function(b){return this.each(function(){void 0==a(this).data("nc_fly")&&a(this).data("nc_fly",new a.nc_fly(this,b))})}}(jQuery);