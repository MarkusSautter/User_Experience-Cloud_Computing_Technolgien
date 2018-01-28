/**
 * 
 */

//Funktionen für die Darstellung des Dokumentes im Videobereich
function getDoc() {

	if (docOpened == false){
    var iframe = document.createElement("iframe");
    iframe.src= "https://docs.google.com/document/d/e/2PACX-1vQxUSb4-R4E5vMk0PyMAONYIOyEQ0iks8aYpijMDaPt1YaHzbU8LOaauNnUk5vzYiloFGPUO2A1ixTL/pub?embedded=true";
    iframe.height = "100%";
    iframe.width = "100%";
    iframe.id= "docID"
    //element.appendChild(document.createTextNode("<iframe id='frameID' src='https://docs.google.com/document/d/e/2PACX-1vQxUSb4-R4E5vMk0PyMAONYIOyEQ0iks8aYpijMDaPt1YaHzbU8LOaauNnUk5vzYiloFGPUO2A1ixTL/pub?embedded=true'style='height: 100%; width: 100%;'></iframe>"));
    document.getElementById('docInVideo').appendChild(iframe);
    getCloseButton();
    getShareButton();
    minVideo()
    docOpened = true;
	}
}


//Funktionen für die Darstellung der Videotelefonie im Videobereich
function getCall(){
		var video = document.createElement("VIDEO");
		var source = document.createElement("source"); 
		video.id = "videoExample";
		video.type = "video/mp4";
		video.loop = true;
		video.src = "Video/Konferez_BillGates.mp4";
		video.height = "100%";
		video.width = "100%";
	

	    //element.appendChild(document.createTextNode("<iframe id='frameID' src='https://docs.google.com/document/d/e/2PACX-1vQxUSb4-R4E5vMk0PyMAONYIOyEQ0iks8aYpijMDaPt1YaHzbU8LOaauNnUk5vzYiloFGPUO2A1ixTL/pub?embedded=true'style='height: 100%; width: 100%;'></iframe>"));
	    document.getElementById('videoCall').appendChild(video);
	    video.play();
	    
	    changeCallButton();
}
function minVideo() {
	  $( "#videoCall" ).animate({
		    width: "320px",
		    height: "350px",
		    left: "10%",
		    top: "60%",
		    fontSize: "3em",
		    borderWidth: "10px",
		    position: 'absolute'
		  }, 1500, function(){
			 // $(this).css('z-index', 2)
		  } );
}
function maxVideo() {
	  $( "#videoCall" ).animate({
		    height: "90%",
	  		width: "60%",
		    left: "20%",
		    top: "10%", 
		    fontSize: "3em",
		    borderWidth: "10px",  
		  }, 1500, function(){
			 // $(this).css('z-index', 1)
			  
		  } );
	  document.getElementById('closeButton').remove();
	  document.getElementById('docID').remove();
	  document.getElementById('shareButton').remove();
	  getDocInHistory(historyJSON);
	  docOpened = false;
}
function stopCall(){
	document.getElementById('videoExample').remove();
	d3.selectAll("svg > *").remove();
}


// Funktionen und Ändern des Call-Buttons

function changeCallButton(){
	if (isButton == "OutCall"){
		document.getElementById("callButtonIMG").src="Icons/Auflegen.png";
		document.getElementById("callButton").onclick = changeCallButton;
		isButton = "InCall";
	}else{
		document.getElementById("callButtonIMG").src="Icons/Anrufen.png";
		document.getElementById("callButton").onclick = startKonferenz;
		isButton = "OutCall";
		stopCall();
	}

}


function getCloseButton(){
	  var closeButton = document.createElement("button");
	  closeButton.id = "closeButton"; // And the name too?
	  document.getElementById('videoBereich').appendChild(closeButton);
	  closeButton.onclick = function() { 
	  maxVideo();
	 };
}
function getShareButton(){
	var shareButton = document.createElement("button");
		shareButton.id = "shareButton"; // And the name too?
		document.getElementById('videoBereich').appendChild(shareButton);
		shareButton.onclick = function() { 
			window.alert("Funktion folgt");
	 };
}