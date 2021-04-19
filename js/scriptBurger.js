//★-parto dal pulsante che scatena l'azione-★
var submitBnt = document.getElementById("button")

//★-al click mi salvo gli elementi della pagina-★
submitBnt.addEventListener("click", function (){  

    var somma = 50;
    var coupon = document.getElementById("coupon").value 

    //nome burger
   var name = document.getElementById("name").value
   console.log(name)

    //recupero i valori degli ingredienti
        var ingredientsList = document.querySelectorAll(".ingredient-checkbox");
        
            for (var i = 0; i< ingredientsList.length; i++){        
                var ingredient = ingredientsList[i];

                if(ingredient.checked) {
                somma += parseInt(ingredient.value)                  
            }   //li sommo al prezzo base
            }

    //funzione di calcolo sconto
    function discount(x) {
        if(x ==="sconto005") {
            return 5;
        }else if (x ==="sconto010") {
            return 10;
        }else{ return null};   
    }
    //prezzo finale somma - sconto
    document.getElementById("price").innerHTML = (somma - discount(coupon)) 

})
  
