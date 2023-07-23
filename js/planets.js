

//	alert("Hello world!");

//	.on("mouseenter", 

//	$(this).attr("background-color", "black");
//		}

//	("v-bind:src", "'../media/map_ui/mission_' + mission.type + '_focused' + '.png'");

//$('.mission')
//	.on('mouseleave'), function () {
//		$(this).css('v-bind:src', $(this).attr("'../media/map_ui/mission_' + mission.type + '.png'"));




$(document).ready(function () {


		$('img.mission').on('mouseover'), function () {
			$(this).attr('v-bind:src', "'../media/map_ui/mission_' + mission.type + '_focused' + '.png'");
		}
	


		$('img.mission').on('mouseout'), function () {
			$(this).attr('v-bind:src', "'../media/map_ui/mission_' + mission.type + '.png'");
		}
	

});

//$("#outer").on("mouseenter", function () {
//	$("#log").append("<div>Handler for `mouseenter` called.</div>");
//});

//$('.mission').on('mouseover'), function () {
//	$(this).attr('v-bind:src', "'../media/map_ui/mission_' + mission.type + '_focused' + '.png'");



	//$('img .mission')
	//	.on('mouseenter', function () {
	//		$(this).attr('v-bind:src', "'../media/map_ui/mission_' + mission.type + '_focused' + '.png'");
	//	},
	//			$('.mission')
	//			.on('mouseleave'), function () {
	//				$(this).css('v-bind:src', $(this).attr("'../media/map_ui/mission_' + mission.type + '.png'"));
	//			});
