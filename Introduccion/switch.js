const usuario = {
  edad: 27,
  pais: "argentina",
  ticket: false,
};
// if (usuario.pais === 'mexico') {
//  console.log('el usuari es mexicano')
//}else if (usuario.pais === 'paraguay'){
//console.log('El usuario es paraguayo')
//}else if (usuario.pais === 'paraguay') {
// console.log('El usuario es paraguayo')

//}else {
// console.log('El usuario es otro pais')
//}
switch (usuario.pais) {
  case "mexico":
    console.log("el usuario es mexicano");
    break;
  case "paraguay":
    console.log("el usuario es paraguayo");
    break;
  case "argentina":
    console.log("el usuario es argentino");
    break;
  default:
    console.log("El usuario es de otro pais");
}
