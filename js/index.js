$(function() {
	var nowpage = 0;
	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(4 * height);
	$(".page").width(width);
	$(".page").height(height);
	$(".content").swipe({
		swipe: function(event, direction, distance, duration, fingercount) {
			if(direction == "up") {
				nowpage++;
			}
			if(direction == "down") {
				nowpage--;
			}
			if(nowpage > 3) {
				nowpage = 3;
			} else if(nowpage < 0) {
				nowpage = 0;
			}
			$(".content").animate({
				top: -nowpage * 100 + "%"
			}, {
				duration: 400,
				complete: function() {
					if(nowpage == 1) {
						$(".page2-farm").fadeIn(2000, function() {
							$(".page2-it").fadeIn(2000)
						});
					}
					if(nowpage == 2) {
						$(".page3-earlytitle").fadeIn(2000);
						$(".page3-lastbustitle").fadeIn(3000);
						$(".page3-bus").animate({
							left: "-100%"
						}, {
							duration: 2000
						});
						$(".page3-lastbusavatar").animate({
							right: "50%"
						}, {
							duration: 3000,
							complete: function() {
								$(".page3-earlybuilding").fadeOut("slow");
								$(".page3-earlytitle").fadeOut("slow");
								$(".page3-lastbusavatar").fadeOut("slow");
								$(".page3-lastbusstation").fadeOut("slow");
								$(".page3-lastbustitle").fadeOut("slow");
								$(".page3-bus").fadeOut("slow", function() {
									$(".page3-myteamwall").fadeIn("slow");
									$(".page3-myteamavatar").fadeIn("slow", function() {
										$(".page3-myteamspace").animate({
											width: "30%"
										}, {
											duration: 400,
											complete: function() {
												$(".page3-myteamwhere").animate({
													width: "55%"
												}, {
													duration: 400
												})
											}
										})
									});

								});
							}
						});
					}
				}
			})

		}
	});
	$(".page1-building").fadeIn(800, function() {
		$(".page1-flight").animate({
			width: "80%"
		}, {
			duration: 2000
		})

	});
	$(".page4-lightoff").click(function(){
		$(this).attr("src","img/lightOn.png")
		$(".page4-lightoffbg").fadeOut("slow")
		$(".page4-clickguide").fadeOut("slow")
		$(".page4-cornertitle").fadeOut("slow",function(){
			$(".page4-lightonbg").fadeIn("slow");
			$(".page4-lighton").fadeIn("slow");
		})
	})
	$(".musicbtn").click(function(){
		var music=$("#music")[0];
		if(music.paused){
			music.play();
			$(this).attr("src","img/musicBtn.png")
		}else{
			music.pause();
			$(this).attr("src","img/musicBtnOff.png")
		}
	})
 
})