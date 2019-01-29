document.addEventListener("DOMContentLoaded", function () {
	var tabId= window.location.hash.substring(1);
	var b_cancel_el= document.getElementById("cancel");
	var b_fill_el= document.getElementById("fill");
	var ta_el= document.getElementById("ta");
	
	b_cancel_el.onclick= () => window.close();
	b_fill_el.onclick= () => alert("dale!");
});
