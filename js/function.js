// JavaScript Document
function moveElement(elementID,final_x,final_y,interval){
	var elem=document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos==final_x&&ypos==final_y) return true;
	if(xpos<final_x){
		dist=Math.ceil((final_x-xpos)/10);
		xpos=xpos+dist;
	}
	if(xpos>final_x){
		dist=Math.ceil((xpos-final_x)/10);
		xpos=xpos-dist;
	}
	if(ypos<final_y){
		dist=Math.ceil((final_y-ypos)/10);
		ypos=ypos+dist;
	}
	if(ypos>final_y){
		dist=Math.ceil((ypos-final_y)/10);
		ypos=ypos-dist;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);
}
//Add a load function
function addLoadEvent(func) { 
	var oldonload = window.onload; 
		if (typeof window.onload != 'function') { 
			window.onload = func; 
			} else { 
			window.onload = function() { 
			oldonload(); 
			func(); 
		} 
	} 
}
addLoadEvent(prepareSlideshow);
function prepareSlideshow(){
	
	var preview=document.getElementById("preview");
	
	preview.style.position="absolute";
	preview.style.left="0px";
	preview.style.top="0px";	
	
	
	
	var links=document.getElementsByClassName("li_soft");
	var i
	/*for(i=0;i<links.length;i++){
		window.alert(i);
		links[i].onmouseover=function(){
			moveElement("preview",-55.4*i,0,10);
		}
	}
	
	}*/
	links[0].onmouseover=function(){
		moveElement("preview",0,0,10);
	}
	links[1].onmouseover=function(){
		moveElement("preview",-55.4,0,10);
	}
	links[2].onmouseover=function(){
		moveElement("preview",-110.8,0,10);
	}
	links[3].onmouseover=function(){
		moveElement("preview",-166.2,0,10);
	}
	links[4].onmouseover=function(){
		moveElement("preview",-277,0,10);
	}
	links[5].onmouseover=function(){
		moveElement("preview",-55.4*5,0,10);
	}
	links[6].onmouseover=function(){
		moveElement("preview",-55.4*6,0,10);
	}
	links[7].onmouseover=function(){
		moveElement("preview",-55.4*7,0,10);
	}
	links[8].onmouseover=function(){
		moveElement("preview",-55.4*8,0,10);
	}
	links[9].onmouseover=function(){
		moveElement("preview",-55.4*9,0,10);
	}
	
	
};
function changeBack(picPath,sectionID){
	var section=document.getElementById(sectionID);
	section.style="background:url("+picPath+")  no-repeat;";
}
function changeBack(sectionID){
	var section=document.getElementById(sectionID);
	section.style="background:inherit;";	
}