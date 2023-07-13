const personaArreglo = ["Carlos", 27, "correo@correo.com", true, true];
const persona = {
  nombre: "Carlos",
  edad: 27,
  correo: "correo@correo.com",
  suscripcion: {
    Web: true,
    correo: true,
  },
  coloresFavoritos: ["Negro", "Rojo"],
  saludo: function () {
    alert("Hola!");
  },
};

//console.log(persona.nombre);
//console.log(persona["edad"]);
persona.pais = "Mexico";
persona.pais = "Paraguay";

console.log(persona);
persona.saludo();
