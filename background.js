function onCtxClick(domElement, tab) {
	var url = 'fillEmUp.html#' + tab.id;
	chrome.windows.create({ url: url, width: 520, height: 660 });
};

chrome.contextMenus.create({
  "title" : "Fill'em up",
  "type" : "normal",
  "contexts" : ["editable"],
  "onclick" : onCtxClick
});
//A: cree el context menu para regiones editables

chrome.runtime.onMessage.addListener( function(req,sender,sendResponse) {
	if(req.fill && req.id) {
		chrome.tabs.executeScript(req.id,{code: `
			//e= document.activeElement;
			valores= ${JSON.stringify(req.fill)};
			fillParent= document.body;
			if (valores["__feu_id__"]) { //A:xpath,nombre criptico para que no nos reclamen
				var x= document.evaluate(valores["__feu_id__"],document, null, XPathResult.ANY_TYPE,null); 
				fillParent= x.iterateNext();
				console.log("FILL EM UP PARENT",valores["__feu_id__"],fillParent);
			}
			for (k in valores) { 
				var e= document.getElementById(k) || fillParent.querySelector("[name='"+k+"']"); 
				console.log("FILL EM UP FOUND",k,e);
				if (e && (e.tagName=="INPUT" || e.tagName=="SELECT")) { 
					console.log("FILL EM UP SET",valores[k],e);
					e.value= valores[k] 
				} 
				else {
					console.error("FILL EM UP WILL NOT SET (for security reasons)",valores[k],e);
				}
			}
		`}, function (comoFue) {
			sendResponse();
		});
	}
});
