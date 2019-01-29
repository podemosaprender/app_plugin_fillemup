async function get_from_url(opts) {
	return await fetch(opts.url, {
		method: (opts.method=="POST") ? "POST" : "GET", // *GET, POST, PUT, DELETE, etc.
		headers: opts.headers,
		body: opts.data !=null ? JSON.stringify(opts.data): null,
		mode: "cors", // no-cors, cors, *same-origin //A: cors para ir a otros dominios
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "omit", // include, *same-origin, omit
		redirect: "follow", // manual, *follow, error
		referrer: "no-referrer", // no-referrer, *client
	});
}

async function get_data(txt) {
	var m;
	if (m= txt.match(/^[\s\r\n]*(http\S+)/)) {
		let res= await get_from_url({url: m[1]});
		xx= res;
		console.log("RES",res);
		let rtxt= await res.text();
		if (rtxt.match(/^[\s\r\n]*\{/)) { return JSON.parse(rtxt); }
		else { alert("ERROR FORMATO"); console.log("TXT",m[1], rtxt); }
	}
	else if (txt.match(/^[\s\r\n]*\{/)) {
		return JSON.parse(txt);
	}
}


document.addEventListener("DOMContentLoaded", function () {
	var tabId= parseInt(window.location.hash.substring(1));
	var b_cancel_el= document.getElementById("cancel");
	var b_fill_el= document.getElementById("fill");
	var b_extract_el= document.getElementById("extract");
	var ta_el= document.getElementById("ta");
	
	b_cancel_el.onclick= () => window.close();
	b_fill_el.onclick= async () => {
		let data= await get_data(ta_el.value);
		if (data) {
			chrome.runtime.sendMessage({fill: data, id: tabId}, function (error) {
				if (!error) { window.close(); }
			})
		}
	};

	b_extract_el.onclick= () => {
		chrome.runtime.sendMessage({fill_get: true, id: tabId}, function (valores) {
			ta_el.value= JSON.stringify(valores,null,1);
		})
	};
});
