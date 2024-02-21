//pour x nombre de boite rentrer alors add moi x nombre de boite 

// function nbrBox(){
//     //cree une variable pour stocker le nombre de box
//     let joueur = prompt("Nombre de Box au départ pour commencer a jouer");
//     //on verifie que la valeur stockée par l'utilisateur n'est pas nul ( si il a bien rentré une valeur) pour poouvoir executer le bloc
//     if(joueur !=null){

//         const board = document.querySelector("#board")
//         const box = document.createElement("div")

//         for(let i = 0; i <= joueur; i++){
//             const newbox = box.cloneNode();
//             newbox.innerText = i;
//             board.appendChild(newbox);

            

//         }
            
//     }

// }
// nbrBox();



//l'algorithme de mélange de fisher-Yates  pour mélanger aleatoirement tous les enfants de l'élement board

function shuffleChildren(parent){
    let children = parent.children
    let i = board.children.length, k , temp
    while(--i>0){
        k = Math.floor(Math.random() * (i+1))
        temp = board.children[k]
        children[k] = children[i]
        parent.appendChild(temp)
    }
    
}

function showReaction(type,clickBox){
    clickBox.classList.add(type)
    if(type !=="sucess"){
        setTimeout(function(){
            clickBox.classList.remove(type)
        }, 800)
    }
}


const box = document.createElement("div")
box.classList.add("box")
// const butt = document.querySelector("")


const board = document.querySelector("#board")


let nb = 1
let joueur = prompt("Nombre de Box au départ pour commencer a jouer");
if(joueur !=null){
    
    // newbox.addEventListener("click", updateTime()); //sencé lancer le chrono............
    
    for (let i = 1; i <= joueur; i++) {
        const newbox = box.cloneNode();
        newbox.innerText = i;
        board.appendChild(newbox); //ajoute une box au conteneur (board)
        
        newbox.addEventListener("click", function(){
            if(i == nb){
                newbox.classList.add("box-valid")
                shuffleChildren(board)
                if(nb == board.children.length){
                    board.querySelectorAll(".box").forEach(function(box){
                        showReaction("succes",box)
                    })
                    
                }
                nb++
                
                
            }
            else if (i > nb){
                showReaction ("error", newbox)
                nb = 1
                board.querySelectorAll(".box-valid").forEach(function(valideBox){valideBox.classList.remove("box-valid")
            })
            shuffleChildren(board)
        }
        
        else{
            showReaction("notice",newbox)
        }
    })
    
}
}

shuffleChildren(board)




//chrono
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTime() {
    seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }

        let displayHours;
        if (hours < 10) {
            displayHours = "0" + hours;
        } else {
            displayHours = hours;
        }
        
        let displayMinutes;
        if (minutes < 10) {
            displayMinutes = "0" + minutes;
        } else {
            displayMinutes = minutes;
        }
        
        let displaySeconds;
        if (seconds < 10) {
            displaySeconds = "0" + seconds;
        } else {
            displaySeconds = seconds;
        }

        document.getElementById("chrono").textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }

    
    

    
    
    
    // newbox.addEventListener("click", updateTime());