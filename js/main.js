





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



const box = document.createElement("div")
box.classList.add("box")




const board = document.querySelector("#board")

let nb = 1

// On cree une boucle pour rajouter 10 box
for (let i = 1; i <= 10; i++) {
    const newbox = box.cloneNode();
    newbox.innerText = i;
    board.appendChild(newbox);

    newbox.addEventListener("click", function(){
        if(i == nb){
        // console.log("Boite n° " + i + ", click !")
        newbox.classList.add("box-valid")

            if(nb == board.children.length){
                alert("VICTOIRE !")
            }
            nb++
        }
        else if (i > nb){
            alert ("Erreur, recommencez !")
            nb = 1
            board.querySelectorAll(".box-valid").forEach(function(valideBox){valideBox.classList.remove("box-valid")
        })
        }

        else{
            alert("Case déjà cliquée !")
        }
    })

}

shuffleChildren(board)