document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    var text = document.createTextNode('Click Me');
    button.appendChild(text);
    button.className = 'myButton';
    button.onclick = clickButton;
    document.body.appendChild(button);
});

function clickButton() {
    var divNumber = String(document.getElementsByClassName('newSquares').length);
    var newBox = document.createElement('div');
    newBox.id = divNumber;
    divNumber = parseInt(divNumber, 10);
    var thisDiv = divNumber;
    var nextDiv = (divNumber + 1);
    var prevDiv = (divNumber - 1);
    newBox.className = 'newSquares';
    newBox.addEventListener('click', randomColor);
    newBox.addEventListener('mouseenter', mouseEnter);
    newBox.addEventListener('mouseleave', mouseLeave);
    newBox.addEventListener('dblclick', boxGone);
    document.body.appendChild(newBox);

function randomColor(e) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.backgroundColor = color;
}

function mouseEnter(e) {
    e.target.innerHTML = e.target.id;
}

function mouseLeave(e) {
    e.target.innerHTML = "";
}

function boxGone(e) {
    console.log('im working');
    if (thisDiv%2===0) {
       document.getElementById(nextDiv).remove();
     } else if (thisDiv%2>0) {
       document.getElementById(prevDiv).remove();
     }
     else {
         alert('the element does not exist');
     }
}
}
