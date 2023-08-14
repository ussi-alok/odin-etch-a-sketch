const body = document.querySelector('body');


const containerDimension = 550;

function createMainContainer() {
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class','mainContainer');
    mainContainer.style.cssText=`height:${containerDimension}px;
                                width:${containerDimension}px;
                                background-color:red`;
    return mainContainer;
};

function createSmallContainer() {
    const smallContainer = document.createElement('div');
    smallContainer.setAttribute('class','smallContainer');
    smallContainer.style.cssText=`height:${containerDimension/2}px;
                                width:${containerDimension/2}px;
                                background-color:black`;
    return smallContainer;
};

const mainContainer = createMainContainer();
const smallContainer = createSmallContainer();

mainContainer.appendChild(smallContainer);
body.appendChild(mainContainer);