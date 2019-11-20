
$(function(){
	$(".afterSidebar").css("marginLeft",Math.max(350,parseMax($("#bodyElement").width()) / 100 * 25) + "px");
	alert("test");
				
});

function parseMax(item){
	if(typeof(item) == "string" && item.indexOf("px") != -1)
		return parseInt(item.subString(0,item.indexof("px")));
	return parseInt(item);
}
			
function res(){
	$(".afterSidebar").css("marginLeft",Math.max(350,parseMax($("#bodyElement").width()) / 100 * 25) + "px");
				
}