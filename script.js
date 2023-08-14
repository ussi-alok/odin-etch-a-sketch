const body = document.querySelector('body');

const dimesnions = document.querySelector('.containerDimension');
const noOfBoxes = document.querySelector('.noOfBoxes');

const containerDimension = Number(dimesnions.value);
const noOfBox = Number(noOfBoxes.value);
const smallContainerDimension = containerDimension/noOfBox;

function createMainContainer() {
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class','mainContainer');
    mainContainer.style.cssText=`height:${containerDimension}px;
                                width:${containerDimension}px;
                                background-color:red;
                                display:flex;
                                flex-wrap:wrap`;
    return mainContainer;
};

function createSmallContainer() {
    const smallContainer = document.createElement('div');
    smallContainer.setAttribute('class','smallContainer');
    smallContainer.style.cssText=`height:${smallContainerDimension -1}px;
                                width:${smallContainerDimension -1.3}px;
                                background-color:black;
                                margin:0.5px`;
    return smallContainer;
};

const mainContainer = createMainContainer();


for (let index = 0; index < noOfBox**2; index++) {
    const smallContainer = createSmallContainer();
    mainContainer.appendChild(smallContainer);
    
}


body.appendChild(mainContainer);