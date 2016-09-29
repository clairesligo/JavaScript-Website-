// JavaScript Document
"use strict";
function PartA()
{	
	var x = document.getElementById('bodyMain');
	x.style.backgroundColor = ("#5593DA");  
	
	ChangePara();
	changeHeader();
	changeNavImage();
	changeMainHeaders();
	changeSmallHeaders();
	changePictures();
	changeListstyle();
	changeFooter();
	}
	
	//changes main body of text
	function ChangePara(){
	var para = document.getElementById("box");
	para.style.color = ("blue");
	para.style.fontSize ="15px";
	para.style.fontFamily = "Play, sans-serif";
	}
	
	//changes header images
	function changeHeader(){
	var headerImg = document.getElementById("headerImg");
	headerImg.parentNode.removeChild(headerImg);
	var imgHeader = document.createElement("img");
	imgHeader.setAttribute("src", "images/christmas-light.png");
	imgHeader.setAttribute("id", "imgHeader");
	imgHeader.setAttribute("margin", "0 auto");
	imgHeader.setAttribute("width", "100%");
	imgHeader.setAttribute("height", "350px");
	imgHeader.setAttribute("padding", "0px");
	imgHeader.setAttribute("background-repeat", "repeat");
	document.getElementById('newHeader').appendChild(imgHeader);
	}
	
	//changes large santa on nav bar to rudolph
	function changeNavImage(){
	var santa = document.getElementById("imgSanta");
	santa.parentNode.removeChild(santa);
	var img = document.createElement("img");
	img.setAttribute("src", "images/reindeer.png");
	img.setAttribute("id", "imgReindeer");
	img.setAttribute("alt", "no image");
	img.setAttribute("width", "300px");
	img.setAttribute("height", "320px");
	img.setAttribute("onclick", "rotateRuldoplh()");
	img.style.position="absolute";
	img.style.top="40px";
	img.style.left="650px";
	img.style.top="-150px";
	document.getElementById('headerDeer').appendChild(img);
	}
	
	//changes large headers styling
	function changeMainHeaders(){
	var header2 = document.getElementById("welcome");
	header2.parentNode.removeChild(header2); 	
	var heading2 = document.createElement('p');
	var paragraphText = document.createTextNode("Welcome to Lapland Ho Ho Ho!");
	heading2.appendChild(paragraphText);
	heading2.style.fontFamily="Curlz MT";
	heading2.style.color="#b30000";
	heading2.style.fontSize="38px";
	heading2.style.fontWeight = "bold";
	document.getElementById('welcome2').appendChild(heading2);
	
	var head2 = document.getElementById('info');
	head2.parentNode.removeChild(head2); 	
	var heade2 = document.createElement('p');
	var paraText = document.createTextNode("Some Christmas information");
	heade2.appendChild(paraText);
	heade2.style.fontFamily="Curlz MT";
	heade2.style.color="#b30000";
	heade2.style.fontSize="32px";
	heade2.style.fontWeight = "bold";
	document.getElementById('info2').appendChild(heade2);
	
	var head3 = document.getElementById('todoList');
	head3.parentNode.removeChild(head3); 	
	var header3 = document.createElement('p');
	var para1Text = document.createTextNode("Things to do");
	header3.appendChild(para1Text);
	header3.style.fontFamily="Curlz MT";
	header3.style.color="#b30000";
	header3.style.fontSize="32px";
	header3.style.fontWeight = "bold";
	header3.style.textDecoration = "underline";
	document.getElementById('todoList2').appendChild(header3);
		}
		
	//change smaller headers styling
	function changeSmallHeaders(){
	var celebrations = document.getElementById('celebrations');
	celebrations.style.color = ("#b30000");
	celebrations.style.fontFamily="Curlz MT";
	celebrations.style.fontSize="20px";
	
	var carols = document.getElementById('carols');
	carols.style.color = ("#b30000");
	carols.style.fontFamily="Curlz MT";
	carols.style.fontSize="20px";
	
	var history = document.getElementById('history');
	history.style.color = ("#b30000");
	history.style.fontFamily="Curlz MT";
	history.style.fontSize="20px";
	}
	
	//changes small pictures in main body of text
	function changePictures(){
	var snowmen = document.getElementById("snowmen");
	snowmen.parentNode.removeChild(snowmen);
	var img2 = document.createElement("img");
	img2.setAttribute("src", "images/Christmas-tree.jpg");
	img2.setAttribute("width", "50px");
	img2.setAttribute("height", "50px");
	img2.setAttribute("float", "left");
	img2.setAttribute("margin-right", "18px");
	document.getElementById('li1').appendChild(img2);
	
	var snowmen2 = document.getElementById("snowmen2");
	snowmen2.parentNode.removeChild(snowmen2);
	var img3 = document.createElement("img");
	img3.setAttribute("src", "images/christmas-wreath.jpg");
	img3.setAttribute("width", "50px");
	img3.setAttribute("height", "50px");
	img3.setAttribute("float", "left");
	img3.setAttribute("margin-right", "18px");
	document.getElementById('li2').appendChild(img3);
	
	var snowmen3 = document.getElementById("snowmen3");
	snowmen3.parentNode.removeChild(snowmen3);
	var img4 = document.createElement("img");
	img4.setAttribute("src", "images/christmas-carolers.jpg");
	img4.setAttribute("width", "50px");
	img4.setAttribute("height", "50px");
	img4.setAttribute("float", "left");
	img4.setAttribute("margin-right", "18px");
	document.getElementById('li3').appendChild(img4);
	}
	
	//changes styling of list to the right of main body
	function changeListstyle(){
	var list1 = document.getElementById('list1');
	list1.style.fontFamily="Play, sans-serif";
	list1.style.fontSize="15px";
	
	var lis1 = document.getElementById('lis1');
	lis1.style.color = ("#b30000");
	lis1.style.fontFamily="Curlz MT";
	lis1.style.fontSize="20px";
	var lis2 = document.getElementById('lis2');
	lis2.style.color = ("#b30000");
	lis2.style.fontFamily="Curlz MT";
	lis2.style.fontSize="20px";
	var lis3 = document.getElementById('lis3');
	lis3.style.color = ("#b30000");
	lis3.style.fontFamily="Curlz MT";
	lis3.style.fontSize="20px";
	var lis4 = document.getElementById('lis4');
	lis4.style.color = ("#b30000");
	lis4.style.fontFamily="Curlz MT";
	lis4.style.fontSize="20px";
	}
	
	//changes footer img from presents to penguins
	function changeFooter(){
	var footer2 = document.getElementById("footerImg"); 
	footer2.parentNode.removeChild(footer2);
	var imgFooter = document.createElement("img");
	imgFooter.setAttribute("src", "images/footer_animation_1.png");
	imgFooter.setAttribute("id", "imgFooter");
	imgFooter.style.marginLeft="320px";
	imgFooter.style.marginTop = "-50px";
	imgFooter.style.marginBottom ="0px";
	imgFooter.setAttribute("height", "250px");
	imgFooter.setAttribute("padding", "0px");
	imgFooter.setAttribute("background-repeat", "repeat");
	document.getElementById('newFooter').appendChild(imgFooter);
	}
	
	//tried to rotate rudoplh so he danced when clicked but didnt work

	/*function setUpListeners()
{
	document.getElementById('headerDeer').addEventListener("mousemove",rotateRuldoplh , false);
}
	function rotateRuldoplh()
	{
		var imgReindeer = document.getElementById("headerDeer");
		//imgReindeer.style.transform="scaleX(-1)";
		
		if(imgReindeer=== "scaleX(-1)")
			{imgReindeer.style.transform="scaleX(-1)";}
		else
			{imgReindeer.style.transform="scaleX(-1)";}
			
			var imgReindeer = document.getElementById("headerDeer");
		imgReindeer.style.translate="(100px)";
		
		if(window.getComputedStyle(imgReindeer).getPropertyValue('transform') === "rotateY(180deg)")
			imgReindeer.style.translate="rotateY(100px)";
			imgReindeer.style.transform-origin:( 0, -250px)";
		else
			imgReindeer.style.translate="(100px)";
  */

	//on click event to spin timer	
	function rotateTimer(){
	var x = document.getElementById("countdown");
	x.style.transform = "rotate(360deg)";
	x.style.transitionDuration = "3s";
}	
function PartB(){

	var bodyMain = document.getElementById("bodyMain");
	bodyMain.style.transform = "rotate(360deg)";
	bodyMain.style.transitionDuration = "4s";
	bodyMain.style.backgroundColor="#084A8C";
	document.body.style.backgroundImage = "url('images/blue-christmas-snow-fall-animation.gif')"; 

	removeElements();
	createVideo();
	CreateCountdown();
	stylesCountdown();
	createNavImages();
	createButton();
	createSanta();	
}
	// remove elements from Part A and tmplate
	function removeElements(){
	var santa = document.getElementById("imgSanta");
	santa.parentNode.removeChild(santa);
	var headerImg = document.getElementById("headerImg");
	headerImg.parentNode.removeChild(headerImg);
	var list1 = document.getElementById("list1");
	list1.parentNode.removeChild(list1);
	var snowmen = document.getElementById("snowmen");
	snowmen.parentNode.removeChild(snowmen);
	var snowmen2 = document.getElementById("snowmen2");
	snowmen2.parentNode.removeChild(snowmen2);
	var snowmen3 = document.getElementById("snowmen3");
	snowmen3.parentNode.removeChild(snowmen3);
	var footer2 = document.getElementById("footerImg");
	footer2.parentNode.removeChild(footer2);
	var header2 = document.getElementById("welcome");
	header2.parentNode.removeChild(header2); 	
	var head2 = document.getElementById('info');
	head2.parentNode.removeChild(head2); 	
	var head3 = document.getElementById('todoList');
	head3.parentNode.removeChild(head3);
	var wrapper = document.getElementById("wrapper");
	wrapper.parentNode.removeChild(wrapper);
	}
	//creates video for main body of part B
	function createVideo(){
    var y = document.createElement("div");
	y.setAttribute("id", "vid1");
	y.setAttribute("align", "center");
	document.getElementById('main').appendChild(y);
	var vid = document.createElement('video');
	vid.setAttribute("src", "Coca-Cola Santa Packs-Holidays Are Coming Adverts.mp4");
	vid.setAttribute("autoplay", "true");
	vid.setAttribute("controls", "on");
	vid.setAttribute("width", "740");
	vid.setAttribute("height", "555");
	vid.style.borderStyle="solid";
	vid.style.borderWidth="12px";
	vid.style.borderColor="black";
	vid.style.margin="0px";
	document.getElementById('vid1').appendChild(vid);
	 }
	//creates christmas countdown timer
	function CreateCountdown(){
	var endDate = new Date('12/25/2015 00:01 AM');//christmas 2015
    var _sec = 1000;
    var _min = _sec * 60;
    var _hour = _min * 60;
    var _day = _hour * 24;
    var timer;

    function Remainder() {
    var now = new Date();
    var diff = endDate - now;
    if (diff < 0) 
		{
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Its Christmas!';
            return;
        }
    var days = Math.floor(diff / _day);
    var hours = Math.floor((diff % _day) / _hour);
    var minutes = Math.floor((diff % _hour) / _min);
    var seconds = Math.floor((diff % _min) / _sec);

    document.getElementById('countdown').innerHTML = days +''+ 'Days ';
    document.getElementById('countdown').innerHTML += hours + 'Hours ';
    document.getElementById('countdown').innerHTML += minutes + 'Mins ';
    document.getElementById('countdown').innerHTML += seconds + 'Secs';
    }

    timer = setInterval(Remainder, 1000);
}
	//creates dancing images on nave bar
	function createNavImages(){
	var img6 = document.createElement("img");
	img6.setAttribute("src", "images/reindance2.gif");
	img6.setAttribute("id", "reindance6");
	img6.setAttribute("height", "80px");
	document.getElementById('topNav').appendChild(img6);
	
	var img7 = document.createElement("img");
	img7.setAttribute("src", "images/reindance2.gif");
	img7.setAttribute("id", "reindance7");
	img7.setAttribute("height", "80px");
	document.getElementById('topNav').appendChild(img7);
		
	var img3 = document.createElement("img");
	img3.setAttribute("src", "images/minitreedance.gif");
	img3.setAttribute("id", "minitreedance");
	img3.setAttribute("height", "150px");
	img3.style.marginleft = "600px";
	document.getElementById('topNav').appendChild(img3);
	
	var img4 = document.createElement("img");
	img4.setAttribute("src", "images/reindance2.gif");
	img4.setAttribute("id", "reindance2");
	img4.setAttribute("height", "80px");
	document.getElementById('topNav').appendChild(img4);
	
	var img5 = document.createElement("img");
	img5.setAttribute("src", "images/reindance2.gif");
	img5.setAttribute("id", "reindance5");
	img5.setAttribute("height", "80px");
	document.getElementById('topNav').appendChild(img5);
	
	var topNav1 = document.getElementById('reindance6');
	topNav1.style.marginLeft= '320px';
	}
	//adds some style to the timer also some in css
	function stylesCountdown(){
	//creates a text node under the countdowntimer
	var para1Text = document.createTextNode("To Christmas!");
	document.getElementById('text').appendChild(para1Text);
	var christmas = document.getElementById("text");
	christmas.style.fontSize = "60px";
	christmas.style.textAlign ="center";
	christmas.style.padding = "20px";
	
	//styles the countdown timer	
	var span =document.getElementById("countdown");
	span.style.margin="100px";
	span.setAttribute("onclick", "rotateTimer()");
	span.style.textAlign ="center";
	span.style.fontSize = "50px";
}
	//warning button on top of screen
	function createButton(){
	var y = document.createElement("div");
	y.setAttribute("id", "div1");
	document.getElementById('text').appendChild(y);
	var img2 = document.createElement("img");
	img2.setAttribute("src", "images/warning.png");
	img2.setAttribute("id", "warningbtn");
	img2.setAttribute("height", "150px");
	img2.setAttribute("onclick", "buttonClick()");
	img2.style.position="absolute";
	img2.style.left="10px";
	document.getElementById('div1').appendChild(img2);
	 }
	 //what happens when button is clicked(create text and button)
	function buttonClick(){
	var x = document.getElementById('main');
	x.parentNode.removeChild(x);
	
	var para1Text = document.createTextNode("I Told you not to press the button!!!");
	document.getElementById("afterText").appendChild(para1Text); 
	
	var z = document.getElementById("afterText");
	z.style.fontSize ="70px";
	z.style.color = "#b30000";
	z.style.padding = "30px";
	z.style.textAlign="center";
	var y = document.getElementById("movingSanta");
	y.style.visibility = "hidden";
	
	var btn = document.createElement("BUTTON");
	btn.setAttribute("id", "btn1");
	var t = document.createTextNode("Click me for a surprise!");     
	btn.appendChild(t);
	document.getElementById("bodyMain").appendChild(btn);
	
	var btn1 = document.getElementById("btn1");
	btn1.setAttribute("width", "100px");
	btn1.setAttribute("height", "150px");
	btn1.setAttribute("onclick", "buttonClick2()");
	btn1.style.top= "200px";
	btn1.style.left = "500px";
	btn1.style.fontweight="bold";
	 }
	 //creates present image and changes top text
	function buttonClick2(){
	var x = document.getElementById('btn1');
	x.parentNode.removeChild(x);
	
	var y = document.getElementById("afterText");
	y.innerHTML = "Open your present!";
	y.style.textAlign="center";
	
	var img = document.createElement("img");
	img.setAttribute("src", "images/present.png");
	img.setAttribute("id", "present");
	img.setAttribute("alt", "no image");
	img.setAttribute("width", "500px");
	img.setAttribute("height", "500px");
	img.setAttribute("onclick", "changePic()");
	img.style.position="absolute";
	img.style.top="150px";
	img.style.left="400px";
	document.getElementById('bodyMain').appendChild(img); 
	 }
	//changes present picture to puppy 
	function changePic(){
	var x = document.getElementById("present");
	x.setAttribute("src", "images/cutepuppy.gif");
	x.setAttribute("id", "puppy");
	x.setAttribute("width", "500px");
	x.setAttribute("height", "500px");
	x.style.bottom= "200px";	 
	 }
	// creating moving santa along bottom of page 
	function createSanta(){
	var img = document.createElement("img");
	img.setAttribute("src", "images/santa12.gif");
	img.setAttribute("id", "movingSanta");
	document.getElementById('newFooter').appendChild(img);
	
	//making santa walk
	var el = document.getElementById("movingSanta");
 	el.style.webkitAnimation = 'Move 30s linear infinite';
	}
	
	
	
	









	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	