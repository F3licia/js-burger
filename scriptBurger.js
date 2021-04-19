//parto dal pulsante che scatena l'azione
var submitBnt = document.getElementById("button")
var somma = 50;

//al click mi salvo gli elementi
submitBnt.addEventListener("click", function (){  

    var nomeBurger = document.getElementById("nameBurger")
       // if (!nomeBurger.value){
            //alert
       // }

    var ingredientsList = document.querySelectorAll(".ingredient");
    console.log(ingredientsList)

        for (var i = 0; i< ingredientsList.length; i++){
            var ingredient = ingredientsList[i];

            if(ingredient.checked) {
            somma += parseInt(ingredient.value)
           }
        }

console.log(somma)
})





