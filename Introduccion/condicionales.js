//📌 Operadores de Comparación:
//	==		Igual que
//	===		Igual en valor y tipo de valor
//	!=		Diferente
//	!==		Diferente en valor y diferente en tipo
//	>		Mayor que
//	<		Menor que
//	>=		Mayor o igual que
//	<=		Menor o igual que
//	?		Operador ternario
//	📌 Operadores Lógicos
//	&& 	And
//	||	OR
//	! 	NOT
//*/

// 📌 Estructura de una condicional
// if (true) {
// Código a ejecutar
// }

// 📌 Ejemplo #1:
//const usuario = {
//  edad: 17,
// pais: "Mexico",
// ticket: true,
//};
//if (usuario.edad > 17) {
//  console.log("El usuario es mayor de edad, puede ingresar al concierto.");
//} else {
//  console.log("El usuario es menor de edad, no puede ingresar al concierto.");
//}

//const usuario = {
//edad: 17,
// pais: "Mexico",
//ticket: true,
//};
//if (usuario.edad >= 18 && usuario.ticket) {
//  console.log(
//    "El usuario es mayor de edad y tiene ticket, puede ingresar en el concierto."
// );
//} else {
// console.log(
//  "El usuario es menor de edad y no tiene ticket,no puede ingresar en el concierto."
// );
//}

//📌 Anidando condicional (poner algo dentro de algo ej poner condiciones dentro de condiciones)
//const usuario = {
//edad: 27,
//pais: "Mexico",
//ticket: false,
//};

//if (usuario.edad >= 18) {
//if (usuario.ticket) {
// console.log("El usuario es mayor de edad y tiene ticket.");
//} else {
//console.log("El usuario es mayor de edad pero no tiene ticket.");
// }
//} else {
// console.log("El usuario es menor de edad.");
//}

//📌 Ej # 4 - elseif

const usuario = {
  edad: 27,
  pais: "paraguay",
  ticket: false,
};

if (usuario.pais === "mexico") {
  console.log("El usuario es mexicano");
} else if (usuario.pais === "colombia") {
  console.log("El usuario es de colombia");
} else if (usuario.pais === "paraguay") {
  console.log("El usuario es de paraguay");
} else {
  console.log("El usuario es de otro pais");
}
