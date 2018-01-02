var colorSize=6;
var color=generateRandomColor(colorSize);
var colorNo=Math.floor(Math.random()*colorSize);
var correct=color[colorNo];
var rgbValue=document.getElementById("rgbval");
var block = document.querySelectorAll(".block");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
		h1.style.background="steelblue";

	colorSize=3;
	hard.classList.remove("selected");
	easy.classList.add("selected");
	color=generateRandomColor(colorSize);
	colorNo=Math.floor(Math.random()*colorSize);
	correct=color[colorNo];
	rgbValue.textContent=correct;

	for(var i=0;i<block.length;i++)
	{
		if(color[i]){
			block[i].style.backgroundColor=color[i];
		}
		else
			block[i].style.display="none";
	}

});

hard.addEventListener("click",function(){
	h1.style.background="steelblue";
	colorSize=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	color=generateRandomColor(colorSize);
	colorNo=Math.floor(Math.random()*colorSize);
	correct=color[colorNo];
	rgbValue.textContent=correct;

	for(var i=0;i<block.length;i++)
	{
			block[i].style.backgroundColor=color[i];
			block[i].style.display="block";
	}
});



rgbValue.textContent=correct;

blockColor();

reset.addEventListener("click",function(){
	message.textContent="";
	h1.style.background="steelblue";	
	if(this.textContent==="Play Again?")
		this.textContent="New Colors";
	color=generateRandomColor(colorSize);
	colorNo=Math.floor(Math.random()*colorSize);
	correct=color[colorNo];
	rgbValue.textContent=correct;
	blockColor();
	h1.style.background="#steelblue";
});

function blockColor(){
	for(var i=0;i<block.length;i++)
	{
		block[i].style.backgroundColor=color[i];
		block[i].addEventListener("click",function()
		{
			if(this.style.backgroundColor===correct)
			{
				changeColor(this.style.backgroundColor);
				message.textContent="Correct";
				reset.textContent="Play Again?";
				h1.style.background=this.style.backgroundColor;
			}
			else
			{
				this.style.backgroundColor="#232323";
				message.textContent="Incorrect";
			}
		});
	}
}

function changeColor(color){
	for(var i=0;i<colorSize;i++)
	{
		block[i].style .background=color;
	}
}

function generateRandomColor(colorSize)
{
	var color1=[];
	for(var i=0 ;i<colorSize;i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		
		color1.push("rgb(" + r + ", " + g + ", " + b + ")");
		
	}
	return color1;	
}