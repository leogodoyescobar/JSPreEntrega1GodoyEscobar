//funcion calculo intereses //
function calculoDeCredito( monto, cuotas){
    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);
    
    let credito = 0;

    if( cuotas == 1 && monto > 0){
        credito = monto + (monto * 0.1);
        errorcuotas = "ok2";
        return credito
    }
    else if( cuotas == 3 && monto >0){
        credito = monto + (monto * 0.2);
        errorcuotas = "ok2";
        return credito
    }
    else if( cuotas == 6 && monto >0){
        credito = monto + (monto * 0.4);
        errorcuotas = "ok2";
        return credito
    }
    else if( cuotas == 9 && monto >0){
        credito = monto + (monto * 0.6);
        errorcuotas = "ok2";
        return credito
    }
    else if( cuotas == 12 && monto >0){
        credito = monto + (monto * 0.85);
        errorcuotas = "ok2";
        return credito
    }
    else{
        errorcuotas = "error";
        return errorcuotas
    }

}

// inicio al sistema //
console.log("Bienvenido/a a Creditos Tales");

let cuotas = 0;
let errorcuotas = "inicio";
let errormonto = "si";

while( errormonto == "si"){
	monto = prompt("Ingrese el monto del credito a solicitar o FIN para terminar");
    if(!isNaN(monto)){
        break
    }
	else if(monto =="FIN"){
        break
    }
	else{
		errormonto = "si";
		console.log("error al ingresar el monto");
		continue
    }
}


while( monto != "FIN"){
    if( monto != "FIN" && errorcuotas == "inicio"){
        cuotas = prompt("Ingrese cantidad de cuotas: 1, 3, 6, 9, 12");
        errorcuotas = "ok"
        continue
    }
    else if( monto != "FIN" && errorcuotas == "ok"){
        let creditoFinal = calculoDeCredito( monto , cuotas);
        continue        
    }
    else if( monto != "FIN" && errorcuotas =="ok2"){
        let creditoFinal = calculoDeCredito( monto , cuotas);
        console.log("Solicito:", monto);
        console.log("Cuotas:", cuotas);
        console.log("Monto a saldar:", creditoFinal);
        break
    }
    else if( errorcuotas == "error"){
        console.log("Ingrese una cantidad de cuotas correcta");
        errorcuotas = "inicio";
        continue
    }
}
if( monto == "FIN"){
    console.log("Gracias por visitar Creditos Tales");
}