
function generaPrezzoBiglietto(){

    // Inizializzazione prezzoBiglietto
    let prezzoViaggio;

    // PrezzoBiglietto al kilometro
    let prezzoBase= 0.21;
    console.log(prezzoBase);

    // Inizializzazione Eta
    let valoreEta= document.getElementById("age").value;
    console.log(valoreEta);

    // Inizializzazione Kilometri
    let valorekilometre = document.getElementById("kilometre").value;
    console.log(valorekilometre);
    
    // Condizione sull'eta
    if(valoreEta < 18){
        // Valore prezzo viaggio se < 18
        prezzoViaggio= (valorekilometre * prezzoBase) - (valorekilometre * prezzoBase) * 0.2;

        // Stampa del prezzo viaggio
        document.getElementById("prezzoCorsa").innerHTML= `Il costo del biglietto viene ${prezzoViaggio.toFixed(2)}`
       console.log(prezzoViaggio);
    }
    else if (valoreEta > 65){
        // Valore prezzo viaggio se > 65
        prezzoViaggio= (valorekilometre * prezzoBase) - (valorekilometre * prezzoBase) * 40/100;

        // Stampa del prezzo viaggio
        document.getElementById("prezzoCorsa").innerHTML= `Il costo del biglietto viene ${prezzoViaggio.toFixed(2)}`
        console.log(prezzoViaggio);
    }
    else{
        // Valore prezzo viaggio se compreso fra 18 e 65
        prezzoViaggio= valorekilometre * prezzoBase;

        // Stampa del prezzo viaggio
        document.getElementById("prezzoCorsa").innerHTML= `Il costo del biglietto viene ${prezzoViaggio.toFixed(2)}`
        console.log(prezzoViaggio);
    }
    
}