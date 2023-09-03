class cliente{
    constructor( nombre, dni, deuda){
        this.nombre = nombre;
        this.dni = dni;
        this.deuda = deuda;
    }

    get_datos(){
        console.log("Cliente registrado");
        console.log("Nombre: ", this.nombre);
        console.log("DNI: ", this.dni);
        console.log("Deuda: ", this.deuda);
        console.log("-------------------------------");
    }
}
// creacion lista de clientes //
let listaclientes = [];

alert("Inicio de carga de clientes");
for ( let i=0 ; i < 3 ; i = i + 1){    
    let nombre = prompt("Ingrese nombre de cliente");
    let dni = prompt("Ingrese dni de cliente sin puntos(solo numeros)");
    let deuda = prompt("Ingrese deuda de cliente");
    if(!isNaN(dni) && !isNaN(deuda)){
        let clientes = new cliente(nombre,dni,deuda);
        listaclientes.push(clientes);
    }
    else{
        console.log("Datos ingresados incorrectos")
        continue
    }
}

alert("Carga de datos finalizada");

// funcion calculo intereses //
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
// funcion buscar dni //
function buscardni(cliente){
	return cliente.dni == nuevodni
}

// inicio al sistema //
console.log("Bienvenido/a a Creditos Tales");
console.log("Clientes actuales:");
console.log("");

for( let clientes of listaclientes){
    clientes.get_datos();
}
deudor = "no";
let cuotas = 0;
let errorcuotas = "inicio";
let errormonto = "si";

let nuevodni = prompt("Bienvenido Ingrese su dni sin puntos(solo numeros)");
let resultado_find = listaclientes.find( buscardni);

if(resultado_find != undefined){
    alert("Usted debe saldar credito vigente antes de solicitar otro");
    console.log("Usted debe saldar credito vigente antes de solicitar otro");
    console.log(resultado_find);
    monto = "FIN";
    deudor = "si";
}


while( errormonto == "si" && resultado_find == undefined){
    alert("Usted es cliente nuevo debe registrar sus datos");
    console.log("Usted es cliente nuevo debe registrar sus datos:");
    nombre = prompt("Bienvenido Ingrese su nombre");
    dni = prompt("Ingrese su dni nuevamente sin puntos(solo numeros)");
    monto = prompt("Ingrese el monto del credito a solicitar o FIN para cancelar");
    deuda = monto;
    if(!isNaN(dni) && !isNaN(deuda)){
        let clientes = new cliente(nombre,dni,deuda);
        listaclientes.push(clientes);
        console.log("Datos registrados correctamente");
        console.log("-------------------------------");
        break
    }
	else if(monto =="FIN"){
        break
    }
	else{
		errormonto = "si";
        alert("error al ingresar el monto vuelva a intentarlo");
		console.log("error al ingresar el monto vuelva a intentarlo");
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
        alert("Credito aprobado, gracias por visitar Creditos Tales");
        let creditoFinal = calculoDeCredito( monto , cuotas);
        console.log("Datos del credito solicitado:");
        console.log("cliente:", nombre);
        console.log("Solicito:", monto);
        console.log("Cuotas:", cuotas);
        console.log("Monto a saldar:", creditoFinal);
        console.log("Gracias por visitar Creditos Tales");
        break
    }
    else if( errorcuotas == "error"){
        console.log("Ingrese una cantidad de cuotas correcta");
        errorcuotas = "inicio";
        continue
    }
}
// lista de clientes actualizada al finalizar //
if (deudor != "si"){
    console.log("-------------------------------");
    console.log("Clientes actuales:");
    console.log();
    
    for( let clientes of listaclientes){
        clientes.get_datos();
    }
}

if( monto == "FIN"){
    console.log("-------------------------------");
    console.log("Gracias por visitar Creditos Tales");
}