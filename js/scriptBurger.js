//★-parto dal pulsante che scatena l'azione-★
var submitBnt = document.getElementById("button")

//★-al click mi salvo gli elementi della pagina-★
submitBnt.addEventListener("click", function (){  

    var somma = 50;
    var coupon = document.getElementById("coupon").value 

    //nome burger
   var name = document.getElementById("name").value
    //alert se manca il nome
   if(!name){alert("inserisci un nome") };
   
   console.log(name)

    //recupero i valori degli ingredienti
        var ingredientsList = document.querySelectorAll(".ingredient-checkbox");
        
            for (var i = 0; i< ingredientsList.length; i++){        
                var ingredient = ingredientsList[i];

                if(ingredient.checked) {
                somma += parseInt(ingredient.value)                  
            }   //li sommo al prezzo base
            }

    var codiciSconto = ["sconto005" , "sconto010" ]
    
    //funzione di calcolo sconto
    function discount(x) {
        if(x === codiciSconto[0] ) {
            return 5;
        }else if (x === codiciSconto[1]) {
            return 10;
        }else{ return null};   
    }
    //prezzo finale somma - sconto
    document.getElementById("price").innerHTML = (somma - discount(coupon)) 

})




