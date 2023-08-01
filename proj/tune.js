let buttonAll= document.querySelectorAll(".tones").length;
console.log(buttonAll);


for(var i=0; i<buttonAll; i++){
    document.querySelectorAll(".tones")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;
    
     
        

    })
}


function makesound(keys){
    switch(keys){
        case 'a' : var sound1 = new Audio("c3-95007.mp3");
                    sound1.play();
                    break;
                    case 's' : var sound2 = new Audio("c6-102822.mp3");
                    sound2.play();
                    break;
                    case 'd' : var sound3 = new Audio("do-80236.mp3");
                    sound3.play();
                    break;
                    case 'f' : var sound4 = new Audio("fa-78409.mp3");
                    sound4.play();
                    break;
                    case 'g' : var sound5 = new Audio("g6-82014.mp3");
                    sound5.play();
                    break;
                    case 'h' : var sound6 = new Audio("sol-101774.mp3");
                    sound6.play();
                    break;
                    case 'j' : var sound7 = new Audio("re-78500.mp3");
                    sound7.play();
                    break;
                    case 'k' : var sound7 = new Audio("mi-80239.mp3");
                    sound7.play();
                    break;
                    case 'l' : var sound7 = new Audio("bb3_piano_note-98736.mp3");
                    sound7.play();
                    break;



    }

 
}
document.addEventListener("keypress",function(event){
    var key= event.key
    makesound(key)
})

