
function generaPrezzoBiglietto(){

    let prezzoViaggio;

    let prezzoBase= 0.21;
    console.log(prezzoBase);

    let valoreEta= document.getElementById("age").value;
    console.log(valoreEta);

    let valorekilometre = document.getElementById("kilometre").value;
    console.log(valorekilometre);
    
    if(valoreEta < 18){
        prezzoViaggio= (valorekilometre * prezzoBase) - (valorekilometre * prezzoBase) * 0.2;

        document.getElementById("prezzoCorsa").innerHTML= `Il costo del biglietto viene ${prezzoViaggio}`
       console.log(prezzoViaggio);
    }
    else if (valoreEta > 65){
        prezzoViaggio= (valorekilometre * prezzoBase) - (valorekilometre * prezzoBase) * 40/100;
        document.getElementById("prezzoCorsa").innerHTML= `Il costo del biglietto viene ${prezzoViaggio}`
        console.log(prezzoViaggio);
    }
    else{
        prezzoViaggio= valorekilometre * prezzoBase;
        document.getElementById("prezzoCorsa").innerHTML= `Il costo del biglietto viene ${prezzoViaggio}`
        console.log(prezzoViaggio);
    }
    
}