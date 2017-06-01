var btn = document.createElement('button');             //Create Button on top of page
btn.id = 'add-square';
btn.innerText = "Add Square";

var container = document.createElement('div');          //create parent container for boxes to appear inside

//function to add a new box to container
function addBox(){
    var box = document.createElement('div');
    box.className = 'box';
    box.id = document.getElementsByClassName('box').length;
    container.appendChild(box);
    box.addEventListener('mouseover', function(){
        box.innerText = box.id;
    });
    box.addEventListener('mouseout', function(){
        box.innerText = "";
    })
    box.addEventListener('dblclick', function(){
        if(box.id%2 === 0){
            if(box.nextSibling){
                box.nextSibling.remove();
            }else{
                alert("There are no boxes to the right");
            }
        }else{
            if(box.previousSibling){
                box.previousSibling.remove();
            }else{
                alert("There are no boxes to the left");
            }
        }
    })
    box.addEventListener('click', function(){
        var rndColor = "rgb(" + Math.floor(Math.random()*255) + ","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
        box.style.backgroundColor = rndColor;
    })
}

document.addEventListener('DOMContentLoaded', function(){
    document.body.appendChild(btn);
    document.body.appendChild(container);
    btn.addEventListener('click', addBox());
});
