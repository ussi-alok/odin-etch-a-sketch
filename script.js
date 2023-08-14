const body = document.querySelector('body');

function createMainContainer() {
    const containerDimension = 550;
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class','mainContainer');
    mainContainer.style.cssText=`height:${containerDimension}px;
                                width:${containerDimension}px;
                                background-color:red`;
    return mainContainer;
};



body.appendChild(createMainContainer());