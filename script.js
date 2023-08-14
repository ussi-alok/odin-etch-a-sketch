const body = document.querySelector('body');

function createMainContainer() {
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class','mainContainer');
    return mainContainer;
};



body.appendChild(createMainContainer());