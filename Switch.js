let  mes = 5
 
switch (mes) {
    case 1: console.log("31");
    break;
    case 2: console.log("28");
    break;

    case 5: console.log("Mayo con 31 días");
    break;

    default: console.log("No es un mes");

    //Estructutras repetitivas//

    //PARA//

    for ( let i=1;//cuantas veces repite un ciclo //
     i<=100; i++ ) { //incremento // 
        console.log(i);
    }
    //WHILE// 




    for (let i=1; i<=10; i++){
        if(i%2==1){
            continue;
        }
        console.log(i);
    }


    let x= 4;
    
    while (x<=10){
        console.log(x);
        x++;
        if(x===7)break;
    }
  
    for (let i=10; i>=1; i--){
        console.log(i);
    }
    