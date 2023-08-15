const body = document.querySelector('body');

const dimesnions = document.querySelector('.containerDimension');
const noOfBoxes = document.querySelector('.noOfBoxes');

const containerDimension = Number(dimesnions.value) || 550;
const noOfBox = Number(noOfBoxes.value) || 4;
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
    smallContainer.style.cssText=`height:${smallContainerDimension }px;
                                width:${smallContainerDimension }px;
                                /*background-color:black;
                                margin:0.5px*/`;
    smallContainer.addEventListener('mouseover',()=>{smallContainer.style['background-color']='blue'});
    return smallContainer;
};

const mainContainer = createMainContainer();


for (let index = 0; index < noOfBox**2; index++) {
    const smallContainer = createSmallContainer();
    mainContainer.appendChild(smallContainer);
    
}


body.appendChild(mainContainer);