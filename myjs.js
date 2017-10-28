//////////variables/////////
var	menuPos = 0;
var imageURL = "";
var title= "";
var disc = "";
var color = "";
var imgTop = 0;
var imgLeft = 0;
var imgHeight = 300;
var divNum = 0
/////functions///////
function expandMenu() {
	if (menuPos == 0){
		document.getElementById("controls").style.bottom = "0px";
		menuPos = 1;
	}
	else if (menuPos == 1){
		document.getElementById("controls").style.bottom = "-120px";
		menuPos = 0;
	}
}
function changeBG(){
	imageURL = document.getElementById("Image").value;
	Replace()
	document.getElementById("background").style.backgroundImage = "url("+imageURL+")";
}
function changeTitle(){
	title = document.getElementById("titleInp").value;
	document.getElementById("title").innerHTML = title;
}
function changeDescripton(){
	disc = document.getElementById("discInp").value;
	document.getElementById("discription").innerHTML = disc;
}
function changeColor(){
	color = document.getElementById("colorInp").value;
	document.getElementById("discription").style.color = color;
	document.getElementById("title").style.color = color;
}
function moveBG(keyCode){
	if (keyCode == 37){
		imgTop = imgTop - 5 
		document.getElementById("background").style.backgroundPosition =imgTop+"px "+imgLeft+"px";
	}
	if (keyCode == 39){
		imgTop = imgTop + 5 
		document.getElementById("background").style.backgroundPosition =imgTop+"px "+imgLeft+"px";
	}
	if (keyCode == 38){
		imgLeft = imgLeft- 5 
		document.getElementById("background").style.backgroundPosition = imgTop+"px "+imgLeft+"px";
	}
	if (keyCode == 40){
		imgLeft = imgLeft + 5 
		document.getElementById("background").style.backgroundPosition = imgTop+"px "+imgLeft+"px";
	}
	if (keyCode == 109){
		imgHeight = imgHeight - 5 
		document.getElementById("background").style.height = imgHeight+"px";
	}
	if (keyCode == 107){
		imgHeight = imgHeight + 5 
		document.getElementById("background").style.height = imgHeight+"px";
	}
}
function Replace(){
	if (imageURL.indexOf("epic") > -1){
		imageURL = "img/bg4.jpg"
	}
	imageURL = imageURL.replace("horse", "img/bg1.jpg" )
	imageURL = imageURL.replace("night", "img/bg2.jpg" )
	imageURL = imageURL.replace("mountain", "img/bg3.jpg" )
}
function createDiv(){
	var newDiv = document.createElement("div");
	var newTitle = document.createElement("div");
	var newDiscription = document.createElement("div");
	newDiv.appendChild(newTitle);
	newDiv.appendChild(newDiscription);
	document.getElementById("display").appendChild(newDiv);
	newDiv.id ="div"+divNum;
	divNum = divNum + 1;
	newDiv.className = "col-12 col-sm-6 col-md-4 col-lg-3";
	newDiv.style.backgroundImage = "url("+imageURL+")";
	newDiv.style.cssText = "height:150px; background-image:url("+imageURL+");background-size:cover; overflow:auto;display:inline-block;";
	newTitle.className = "title"
	newTitle.innerHTML = title;
	newDiscription.className = "discription";
	newDiscription.innerHTML = disc;
	newDiscription.style.color = color;
	newTitle.style.color = color;
}

///////Interactions//////
document.getElementById("menu").addEventListener("click",function(){
	expandMenu() ;
});
document.getElementById("Image").addEventListener("keyup",function(ev){
	if(ev.keyCode == 13){
		changeBG();
	}
});
document.getElementById("titleInp").addEventListener("keyup",function(){
	changeTitle();
});
document.getElementById("discInp").addEventListener("keyup",function(){
	changeDescripton();
});
document.getElementById("colorInp").addEventListener("change",function(){
	changeColor();
});
document.body.addEventListener("keydown",function(ev){
	moveBG(ev.keyCode)
	
});
document.getElementById("add").addEventListener("click",function(){
	createDiv();
});

