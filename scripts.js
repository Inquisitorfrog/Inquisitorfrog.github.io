let showTimeTable = true;

function greetUser(){
    alert("Hello! This is a javascript test.");
}


function changeContent(){
    showTimeTable = !showTimeTable;
    let button = document.getElementById('contentButton');
    let timeTable = document.getElementById('timetable');
    let functionalityToAdd = document.getElementById('functionalityToAdd');
    
    if (showTimeTable){
        timeTable.hidden = false;
        functionalityToAdd.hidden = true;
        button.innerHTML = 'Features to Add';
    } else {
        timeTable.hidden = true;
        functionalityToAdd.hidden = false;  
        button.innerHTML = 'Timetable';      
    }
}



function changeHeaderColor(){
    let randomColor = Math.random();
    let titleElement = document.getElementById('title');
    if (randomColor > 0.5){
        titleElement.style.color = "red";
    } else{
        titleElement.style.color = "black";
    }

    //titleElement.innerHTML = "yoyoyo";
    /*
    if (titleElement.innerHTML === originalTitle){
        titleElement.innerHTML = 'YO?';
    } else {
        titleElement.innerHTML = originalTitle;
    }
    */
}