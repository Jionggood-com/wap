	
	var modal_scroller = true;
	var modal_status = true;
	function modal_bg()
	{
		//if(!modal_status)return false;
		modal_status = false;
		$('html').addClass('sift_move');
		/*if($(".header_top").length>0){
			if($(".filter").length>0)
			{
				$('body').addClass('noscroll').append('<div class="module"><div class="modal_mask"></div><div class="modal_scroller"><div class="modal_container"></div></div></div>');
			}
			else
			{
				$('.main').append('<div class="module" style="top:5rem;"><div class="modal_mask"></div><div class="modal_scroller"><div class="modal_container"></div></div></div>');
			}
		}
		else
		{
			$('body').addClass('noscroll').append('<div class="module"><div class="modal_mask"></div><div class="modal_scroller"><div class="modal_container"></div></div></div>');
		}*/
		$('body').addClass('noscroll').append('<div class="module"><div class="modal_mask"></div><div class="modal_scroller"><div class="modal_container"></div></div></div>');
		$('.module .modal_mask').css("opacity","0.5");
	}

	function modal_remove(){
		modal_status = true;
		modal_item_operate();
		$('.module').remove();
		$('body').removeClass('noscroll');
		$('html').removeClass('sift_move');
		module_index_remove();
		if($(".editwishlist").length>0)
		{
			$(".fixed_bottom_menu").hide();	
		}
	}
	
	function modal_add(){
		
		var modal_container = $('.module .modal_container');
		var modal_content = modal_container.children().eq(0);
		var modal_content_width = modal_content.outerWidth(true);
		var modal_content_height = modal_content.outerHeight(true);
		var window_width = $(window).outerWidth(true);
		var window_height = $(window).outerHeight(true);
		
		var sum = 50;
		//modal_content.css({margin:'0 auto'});
	/*	if(!IsPC()){
			modal_container.css({marginTop:sum+'px'});
			$('.module .modal_mask').css("background-image","none");
		}
		else
		{
			if(modal_content_height >= window_height-sum)
			{
				modal_container.css({marginTop:sum+'px'});
			}
			else
			{
				if((window_height - modal_content_height)/2 <= sum)
				{
					modal_container.css({marginTop:sum+'px'});
				}
				else
				{
					modal_container.css({marginTop:(window_height - modal_content_height)/2+'px'});	
				}
			}
		}*/
		
		modal_content.hover(
			function(){
				modal_scroller = false;
			},
			function(){
				modal_scroller=true;
			}
		);
		
		modal_content.find("select").click(function(){
			modal_scroller = false;
		});
		//解决ie8兼容性问题
		
		$('.modal_scroller').click(function(){
			if(modal_scroller)
			{
				alert("s")
				modal_remove();
			}
		});
		
	}
	$(window).resize(function(){modal_add()});