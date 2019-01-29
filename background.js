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
