//GENERATING THE GRID

//this creates the entire grid
function createGrid(dimensions)
{
    //set the grid's row and column sizes
    screen.style.setProperty('--rowNum', dimensions);
    screen.style.setProperty('--colNum', dimensions);

    //creates the pixel divs to populate the grid
    for(let x = 0; x < dimensions * dimensions; x++)
    {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", colourPixel); //calls colour function
        document.getElementById("screen").appendChild(pixel);
    }
}

//RESIZING THE GRID WITH THE SLIDER

//Update grid slider label
let slider = document.getElementById("gridSlider");
let sliderLabel = document.getElementById("gridSize");
sliderLabel.innerHTML = slider.value;

slider.oninput = function() {
    sliderLabel.innerHTML = this.value;
    //remove the current grid, then build a fresh one with this new value
    //remove all with class of pixel?
    screen.innerHTML = ''; //clears the screen div
    createGrid(this.value);
    changePenColour();
}


//CHANGING THE PEN COLOUR AND ERASING

//changes the colour of the pixel
function colourPixel()
{
    if (rainbowPen == true)
    {
        // const randomColour = Math.floor(Math.random()*16777215).toString(16);

        // console.log("#" + randomColour);

        // this.style.backgroundColor = "#" + randomColour;

        this.style.backgroundColor = rainbowGen();
    }
    else if (greyScale == true)
    {
        this.style.backgroundColor = greyscaleGen();
    }
    else
    {
        this.style.backgroundColor = penColour;
    }
}

//Grab a colour from the colour picker
function changePenColour()
{
    rainbowPen = false;
    newColour = document.getElementById("colourPicker").value;
    penColour = newColour;
    console.log("colour changed");
}


function rainbowGen()
{
    console.log
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return `rgb(${R},${G},${B})`;
}


function greyscaleGen()
{
    let randomNumber = Math.floor(Math.random() * 256);
    return `rgb(${randomNumber},${randomNumber},${randomNumber})`;   
}



// TOGGLES DIFFERENT PENS

function toggleRainbow()
{
    rainbowPen = true;
    greyScale = false;
}


function toggleGreyScale()
{
    greyScale = true;
    rainbowPen = false;
}

//makes the pen white
function toggleEraser()
{
    rainbowPen = false;
    greyScale = false;
    penColour = "#ffffff";
    //remove background colour value entirely?
}



//START SETTINGS

//grabs the screen div
let screen = document.getElementById("screen");

//This is temporary
let dimensions = 16;


createGrid(dimensions);



//COLOURS 

//default pen value
let penColour = document.getElementById("colourPicker").value;
let rainbowPen = false;
let greyScale = false;

document.getElementById("colourPicker").addEventListener("input", changePenColour);
document.getElementById("penButton").addEventListener("click", changePenColour);
document.getElementById("rainbowButton").addEventListener("click", toggleRainbow);
document.getElementById("greyscaleButton").addEventListener("click", toggleGreyScale);
document.getElementById("eraserButton").addEventListener("click", toggleEraser);



