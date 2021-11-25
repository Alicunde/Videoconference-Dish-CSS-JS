// Function to delete Camera
function less() {
    let Cameras = document.getElementsByClassName('Camera');
    if (Cameras.length > 1) {
        let Camera = Cameras[Cameras.length - 1];
        Camera.parentNode.removeChild(Camera);
    }
    Dish();
}

// Function to add Camera
function add() {
    let Scenary = document.getElementById('Dish');
    let Camera = document.createElement('div');
    Camera.className = 'Camera';
    Scenary.appendChild(Camera);
    Dish();
}


// Function to add Camera
function share() {
    let screens = document.getElementsByClassName('Screen');
    if(screens.length == 0){
        let Screen = document.createElement('div');
        Screen.className = 'Screen';
        document.body.appendChild(Screen);
        document.body.classList.add('sharing');
    }
    else{
        document.body.removeChild(screens[0]);
        document.body.classList.remove('sharing');
    }
    Dish();
}


window.addEventListener("load", function (event) {

    // button to add new camera
    let Body = document.body;
    let Add = document.createElement('div');
    Add.className = 'more';
    Add.addEventListener("click", function (event) {
        add();
    });

    // button to delete last camera
    let Less = document.createElement('div');
    Less.className = 'less';
    Less.addEventListener("click", function (event) {
        less();
    });

    // button to add share screen
    let Share = document.createElement('div');
    Share.className = 'share';
    Share.addEventListener("click", function (event) {
        share();
    });

    // add buttons to body
    Body.appendChild(Add);
    Body.appendChild(Less);
    Body.appendChild(Share);

}, false);