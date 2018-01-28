/**
 * 
 */

function getDocInHistory(historyJSON){
	
	var newElement = document.createElement("div");
	newElement.className = "barHistory";
	var data = document.createTextNode(historyJSON);
	newElement.appendChild(data);
	var Ausgabebereich = document.getElementById('history');
	Ausgabebereich.appendChild(newElement);

	  
}

