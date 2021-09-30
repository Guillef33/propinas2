let porcentajeActual = 0;

let bill = document.getElementById("bill");
let numberPeople = document.getElementById("numberPeople");

bill.value = 0;
numberPeople.value = 0;

let button5 = document.getElementById("5");
let button10 = document.getElementById("10");
let button15 = document.getElementById("15");
let button25 = document.getElementById("25");
let button50 = document.getElementById("50");

let inputCustom = document.getElementById("custom");

// let resultado = document.getElementById("resultado");
let totalPerPerson = document.getElementById("totalPerPerson");

let errorBill = document.getElementById("errorBill");
let errorPorcentaje = document.getElementById("errorPorcentaje");
let errorPersonas = document.getElementById("errorPersonas");

let resetButton = document.getElementById("reset-button");

let buttons = document.querySelectorAll("#gridButtons button");

function validarCampos() {
  /* 
    if( bill.value == 0 ){
      //mostrar mensaje
      errorBill.style.display = 'block';
      //evitamos que se envíe el formulario
    return false;
    } else {
      errorBill.style.display = 'none';
    } 
  */

  errorBill.style.display = bill.value == 0 ? "block" : "none"; // operador ternario del if 

  /* 
    if( numberPeople.value === 0 ){
      //mostrar mensaje
      errorPersonas.style.display = 'block';
      //evitamos que se envíe el formulario
      return false;
    } else {
      errorPersonas.style.display = 'none';
    } 
  */

  errorPersonas.style.display = numberPeople.value == 0 ? "block" : "none";
}

numberPeople.addEventListener("change", (e) => {
  validarCampos();
  actualizarResultado();
});

button5.addEventListener("click", function () {
  buttons.forEach((element) => {
    element.classList.remove("active");
  });
  button5.classList.add("active");
  porcentajeActual = 0.05;

  actualizarResultado();
});

button10.addEventListener("click", function () {
  buttons.forEach((element) => {
    element.classList.remove("active");
  });
  button10.classList.add("active");
  porcentajeActual = 0.1;
  actualizarResultado();
});

button15.addEventListener("click", function () {
  buttons.forEach((element) => {
    element.classList.remove("active");
  });
  button15.classList.add("active");
  porcentajeActual = 0.15;
  actualizarResultado();
});

button25.addEventListener("click", function () {
  buttons.forEach((element) => {
    element.classList.remove("active");
  });
  button25.classList.add("active");
  // cambiarPorcentaje("0.25");
  porcentajeActual = 0.25;
  actualizarResultado();
});

button50.addEventListener("click", function () {
  buttons.forEach((element) => {
    element.classList.remove("active");
  });
  button50.classList.add("active");
  // cambiarPorcentaje("0.5");

  porcentajeActual = 0.5;
  actualizarResultado();
});

inputCustom.addEventListener("change", function (e) {
    porcentajeActual = e.target.value; //esto es lo mismo que inputCustom.value
    console.log(e.target.value)
    actualizarResultado();
  });

//   function cambiarPorcentaje(decimal){ Esta la saque para ir directo con porcentajeActual
//     porcentajeActual = decimal;
//   }

const actualizarResultado = () => {
  console.log(porcentajeActual);
  totalPerPerson.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";

  validarCampos();

  let propinaPorPersona = (bill.value * porcentajeActual) / numberPeople.value;
  let propinaTotal = bill.value * porcentajeActual;

  let propinaDisplay = propinaPorPersona.toFixed(2);
  let propinaTotalDisplay = propinaTotal.toFixed(2);

  // Display Propona
  totalPerPerson.innerHTML = `$${propinaDisplay}`;
  totalAmount.innerHTML = `$${propinaTotalDisplay}`;
};

resetButton.addEventListener("click", function () {
  totalPerPerson.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
});
