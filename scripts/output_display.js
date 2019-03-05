display(Uc);
display(Lc);
display(G);

function display(c){
	var thisKeys = Object.keys(c);
	var thisVals = Object.values(c);
	var thisLength = thisKeys.length;
	console.log(thisVals);
	for(i = 0;i<thisLength;i++){
		if(i%10==0){
			$("#container").append("<div class = 'c ids rows'></div><div class = 'c vals rows'></div>");
		}
		$(".ids").last().append("<div><h1>"+thisKeys[i]+"</h1></div>");
		$(".vals").last().append("<div><h2>"+thisVals[i]+"</h2></div>");
	}
	var thisSup = 10-(thisLength%10);
	$(".ids").last().append("<div class = 'thisSup' style = 'flex:"+thisSup+"'></div>");
	$(".vals").last().append("<div class = 'thisSup' style = 'flex:"+thisSup+"'></div>");

}
