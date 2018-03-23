$(document).ready(function(){
	$("#sumtotal").hide();
	$("#hi").click(function(){
		$("#totals").hide();
		$("#sumtotal").show();
	});
	$("#hello").click(function(){
		$("#sumtotal").hide();
		$("#totals").show();
	});
	$('.parent').click(function () {
		$("[type=checkbox]").each(function() {
			this.checked = !this.checked;
		});
	});	
// $(".child").click(function(){
// 	$('input[type=checkbox]').each(function() { 
// 		debugger
// 		this.checked = false; 
// 	});
// });
$('.submitBtn').click(function () {
	var total = 0;
	$(':checkbox:checked.group1').each(function () {
		debugger;
		total += +this.value;
	});
	debugger
	$("#totalvalue").html(total);
});
// $(".parent").click(function(){
// 	debugger
// 	$('input[type=checkbox]').each(function() { 
// 		debugger
// 		this.checked = true; });
// });
});