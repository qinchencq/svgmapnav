$(document).ready(function(){

	var navHeight = $("svg").height();	
	
		
	$("circle, text").click(function(){
		var anchor = $(this);
		var gElement = anchor.parent();
		$("html,body").stop().animate({
			scrollTop: $(gElement.attr("id")).offset().top - navHeight 
			},
			1500);//end animate

	})//end click

	var navChild = $("g");
	var navHref = [];
	
	for (i = 0; i < navChild.length; i++) {
		var navEach = navChild[i];
		var navHrefList = $(navEach).attr("id");
		navHref.push(navHrefList);
	}

	$(window).scroll(function(){
		var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < navHref.length; i++) {
            var theHash = navHref[i];
            var divPos = $(theHash).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theHash).height(); // get the height of the div in question
         
            if (windowPos >= divPos - navHeight && windowPos < (divPos + divHeight - navHeight)) {
            	//Instead of .addClass("newclass")
                $("g[id='" + theHash + "']").find("circle").attr("class", "old newclass");
                $("g[id='" + theHash + "']").find("text").attr("class", "oldText newclassText");
            } else {
            	// Instead of .removeClass("newclass")
                $("g[id='" + theHash + "']").find("circle").attr("class", "old");
                $("g[id='" + theHash + "']").find("text").attr("class", "oldText");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("circle:last-child").attr("class", "old newclass")) {
                var navActiveCurrent = $(".newclass").attr("id");
                $("g[id='" + navActiveCurrent + "']").find("circle").attr("class", "old");
                $("g[id='" + navActiveCurrent + "']").find("text").attr("class", "oldText");
                $("circle:last-child").attr("class", "old newclass");
                $("text:last-child").attr("class", "oldText newclassText");
            }
        }
	});	
});//end ready

