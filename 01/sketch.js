/*Estoy tomando referencias de p5 para agregar HTML y slider
*Slider en Html 
*/

var slider 
var ola;
var sol;
var mira;

function setup() { 
  createCanvas(720,400);
  // hue, saturation, and brightness
  colorMode(200,100,255);
  // slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(0, 255, 30);
	
ola = 30;
sol = 125;
mira=100;
} 

function draw() { 
	
	//Para controlar el color del fondo con el slider  
background(slider.value(),50, 255, 204);
	 ola++;

//Para que el cambio de tamaño y ubicación de los círculos dependa del mouse
 ellipse(mouseX,mouseY,100,100);	

//Jugar con los bordes que me parecían feos
	strokeWeight(mouseX,mouseY,100,100);

	
ellipse(mouseX-10,ola+mouseY,9,9);
	fill(ola,100,67);
	
	
ellipse(mira+mouseX,ola+mouseY,9,9);
		fill(ola,100,67);

ellipse(sol+mouseX,ola+mouseY,9,9);
 		fill(ola,100,67);
	

	
	/* if (mouseY < 0) mouseY = 0;
	if (mouseX > 401) mouseX = 400;	
	if (mouseX < 0) mouseX = 0;	
	*/
	
} 