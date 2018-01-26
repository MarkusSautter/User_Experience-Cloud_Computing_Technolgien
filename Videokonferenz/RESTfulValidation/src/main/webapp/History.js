/**
 * 
 */

function getDocInHistory(docDaten){
	
	var newElement = document.createElement("div");
	newElement.className = "bar";
	var data = document.createTextNode(docDaten);
	newElement.appendChild(data);
	var Ausgabebereich = document.getElementById('history');
	Ausgabebereich.appendChild(newElement);
	
	  
}

