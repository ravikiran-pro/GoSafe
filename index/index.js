function loadDoc() {
  var xhttp = new XMLHttpRequest();
  var query = document.getElementById("heroname").value;
  var obj;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	    obj = JSON.parse(this.responseText);		
			document.getElementById("status").innerHTML = ""			       	
       	if(obj.response=="error")
       		document.getElementById("status").innerHTML = "Not Available In our Super Hero list"
       	document.getElementById("img").src= obj.results[0].image.url;
         document.getElementById("id").innerHTML = obj.results[0]["id"];        
	    	document.getElementById("name").innerHTML = obj.results[0]["name"];	    
	    	document.getElementById("gender").innerHTML = obj.results[0].appearance["gender"];
	    	document.getElementById("fullname").innerHTML = obj.results[0].biography["full-name"];
	    	document.getElementById("firstappearance").innerHTML = obj.results[0].biography["first-appearance"];
			
			$("#intelligence").css("width",(obj.results[0].powerstats.intelligence)+"%");
			$("#strength").css("width", (obj.results[0].powerstats.strength)+"%");
			$("#speed").css("width", (obj.results[0].powerstats.speed)+"%");
			$("#durability").css("width",(obj.results[0].powerstats.durability)+"%");
			$("#power").css("width", (obj.results[0].powerstats.power)+"%");
			$("#combat").css("width", (obj.results[0].powerstats.combat)+"%");			
			
			document.getElementById("intelligence").innerHTML = obj.results[0].powerstats.intelligence+"%";
			document.getElementById("strength").innerHTML = obj.results[0].powerstats.strength+"%";
			document.getElementById("speed").innerHTML = obj.results[0].powerstats.speed+"%";
			document.getElementById("durability").innerHTML = obj.results[0].powerstats.durability+"%";				
			document.getElementById("power").innerHTML = obj.results[0].powerstats.power+"%";
			document.getElementById("combat").innerHTML = obj.results[0].powerstats.combat+"%";        
    			document.getElementById("card").style.display="block";
    } 
  };
  ///var url="http://localhost/cgi-bin/connection?name="+query;
  var url="https://www.superheroapi.com/api.php/106555427509424/search/"+query;	
  xhttp.open("GET",url, true);
  xhttp.send();
}


