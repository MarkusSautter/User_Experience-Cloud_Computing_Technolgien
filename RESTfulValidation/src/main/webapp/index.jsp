<html>
<head>

</head>
<body>
<div id="top">
	<div id="ueberschrift">Broken Bits</div>
	<img id="hilfe" src="Icons/Hilfe.png">
	<img id="einstellungen" src="Icons/Einstellungen.png">
	
</div>
	<div id="historyBereich">
		<h1>Historie</h1>
		<h3>Zuletzt geöffnet</h3>	
		<div id="history">	</div>	
		
	</div>

	<div id="videoBereich">
		<div id="videoCall"> </div>
		<div id="docInVideo"></div>
		<button id="callButton"  onclick="startKonferenz()"><img id="callButtonIMG" src="Icons/Anrufen.png"></button>

	</div>
	
	<div id="vorschlaege">
		<h1>Dokumente</h1>
		<h3>Vorschläge für Sie</h3>
		<div id="chart"></div>
	</div>
</body>
	
	<script src="changeData.js"></script>
	<script src="History.js"></script>
	<script src="video.js"></script>
	<script src="SimulateUpdatingBarChart.js"></script>
	<script src="UpdatingBarChart.js"></script>
	
	<link rel="stylesheet" type="text/css" href="style.css" media="screen" />
		
	<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/jquery-1.10.2.js"></script>	
 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

  <script>
// Globale Variablen
var isButton = "OutCall";
var historyJSON;
var json;
var docOpened = false;

  </script>
</html>
