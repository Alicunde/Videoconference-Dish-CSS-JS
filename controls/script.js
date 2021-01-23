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

window.addEventListener("load",function(event) {
   
    let Body = document.body;
    let Add = document.createElement('div');
    Add.className='more';
    Add.addEventListener("click",function(event) {
        add();
    });

    let Less = document.createElement('div');
    Less.className='less';
    Less.addEventListener("click",function(event) {
        less();
    });


    Body.appendChild(Add);
    Body.appendChild(Less);

},false);
