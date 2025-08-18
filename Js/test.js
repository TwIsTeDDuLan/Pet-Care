function changeText() {
    alert('Fuck You Bitch!');
}

function changeColor(x) {
    if(x == 1) {
        document.querySelector(".block").style.backgroundColor = 'blue';
    }
    else {
        document.querySelector(".block").style.backgroundColor = 'red';
    }
}

function exit() {
    let car = {
        name : "Toyota",
        start: function() {
            console.log("Brum Brum! car started!");
        }
    };

    car.start();
    
}