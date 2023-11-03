let container2 = document.getElementsByClassName('container2')[0];
let container3 = document.getElementsByClassName('container3')[0];
let checkIcon = document.getElementById('check-icon');
let deleteIcon = document.getElementById('delete-icon');
let i = 0;

//this function makes the create note box appear when button  is clicked
function createNotes(){
    container3.style.display = 'block'
}

//This event listener will call a function removeNote() when deleteIcon is clicked
deleteIcon.addEventListener('click', function(){
    removeNote();
})
//This removes the create note box when deleteIcon is clicked
function removeNote(){
    container3.style.display = 'none'

}
//this is the event listener that will call the function pasteNote() when the checkIcon is clicked
checkIcon.addEventListener('click', function(){
    pasteNote();
})

//this function will create the notes
function pasteNote(){
    var noteText = document.getElementById('create-note-box').value;
    var noteH1 = document.createElement('h1');
    var noteDiv = document.createElement('div');
    
    noteH1.innerHTML = noteText;
    noteH1.setAttribute('style', 'font-style: italic; padding: 20px; width: 240px; height: 240px; font-size: 26px; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)');

    noteH1.style.margin = margin();
    noteH1.style.transform = rotate();
    noteH1.style.background = color();

    noteDiv.appendChild(noteH1);
    noteDiv.style.transition = '0.5s'

    container2.insertAdjacentElement('beforeend', noteDiv);

    noteDiv.addEventListener('mouseenter', function(){
        noteDiv.style.transform = 'scale(1.1)';
    })
    noteDiv.addEventListener('mouseleave', function(){
        noteDiv.style.transform = 'scale(1)';
    })
    noteDiv.addEventListener('dblclick', function(){
        noteDiv.style.display = 'none'
    })

    document.getElementById('create-note-box').value = '';

}
//this function will be used to create random margin on every note
function margin(){
    var randoMargin = ['-5px', '1px', '5px', '10px', '15px'];
    return randoMargin[Math.floor(Math.random() * randoMargin.length)];
}
//this function will be used to create random color of notes
function color(){
    var randomColor = ['limegreen', '#ff8c00', '#0e8df1', '#fd128a', '#f56a6a', '#f1c40f'];
    if(i > randomColor.length -1){
            i = 0;
     }
    return randomColor[i++];
}

//this function is will randomize the rotation degree of a note
function rotate(){
    var randomRotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(5deg)', 'rotate(-5deg)', 'rotate(-3deg)'];
    return randomRotate[Math.floor(Math.random() * randomRotate.length)];
    
}

//i think we can also make the function color() to do a for loop. Right? I tried to fo FOR loop but it doesnt work.