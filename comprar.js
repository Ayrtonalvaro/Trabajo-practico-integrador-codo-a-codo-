const cantidadEntrada =  document.getElementById('cantidadEntrada');
const botonResumen = document.getElementById('resumen');
const categoria = document.getElementById('inputState');
const total = document.getElementById('total');

const valorTicket = 200

function descuentoPorCategoria(categoria){
    if(categoria == 'estudiante'){
        return 0.8;
   }else if (categoria == 'trainee'){
      return 0.5;
   }else if (categoria == "junior"){
       return 0.15
   }
   else{
       return 0;
   }
}

function calcular(){
    let totalConDescuento = 0;
    let valorTotal = valorTicket * cantidadEntrada.value;
    let porcentajeDescuento = descuentoPorCategoria(categoria.value);
    let descuentoAbsoluto = valorTotal * porcentajeDescuento;
    totalConDescuento = valorTotal - descuentoAbsoluto;
    total.innerHTML = totalConDescuento;
}

botonResumen.addEventListener('click', calcular())


