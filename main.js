//esercizio N 1
function control(n1,n2) {
    if ((n1===50)||(n2===50)) {
        console.log("true");
    } else if ((n1+n2)===50) {
        console.log("true");
    } else {
        console.log("false");
        
    }
    }

// Esercizio N 2
function deleteCaratter(string,n) {
   if (n < 0 || n >= string.length) {
    return "posizione non valida"
   } else {
    return string.slice(0,n) + string.slice(n+1);  
 }
    
}


//ESERCIZIO N 3

function control(a,b) {
    if ((a >= 40 && a < 60 ) && (b >= 70 && b <= 100)) {
        console.log("true");
    } else{
        console.log("false");
    }
}
    
       // ESercizio N 4

       function checkCity(city) {
        if (city.startsWith("Los")||city.startsWith("New")) {
            return true;
        } else {
            return false;
        }
        
       }
     //  console.log(checkCity("Los amrelvjkdbn"));

    // Esercizio N 5

    function sumArray(arr) {
        
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            
        }
        return sum;
        
    }

  //  console.log(sumArray([3,45,5,5,5]));

function SumArray(arr2) {
   return  arr2.reduce((acc,curr)=>acc+curr,0)
    
}
//console.log(SumArray([1,23,4,,55,6,4578784784,]));

// Esercizio N 6

function checkingNumbers() {
    const numbers = [2,4,5,6,3];
    if (numbers.includes(1) || numbers.includes(3)) {
        return true;
        
    } else {
       return false;        
    }
}
    
    //console.log(checkingNumbers());

    // Esercizio N 7 
    function angoloName(gradi) {
        if (gradi < 90) {
            return "ACUTO";
            
        } else if (gradi === 90) {
            return "RETTO";
            
        } else if(gradi > 90 && gradi < 180){
            return "OTTTUSO";

            
        }else if(gradi === 180){
            return "PIATTO";

            
        }else{
            return "ANGOLO NON TROVATO";
        }
        
    }
     
     // console.log(angoloName(78));

     // Esercizio N 8

     function generateAcronimus(stringa) {
        const words = stringa.split(" ");
        let acronimo = "";
        for (let i = 0; i < words.length; i++) {
            acronimo += words[i].charAt(0).toUpperCase();
            
        }
        return acronimo;
        
     }

     console.log(generateAcronimus("gianni toscano gruppo"));

