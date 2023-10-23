let alumnos = [];
let materias = [];

function agregarAlumnos() {

  let num = document.getElementById("numAlumnos").value;

  alumnos = [];

  for (let i = 1; i <= num; i++) {

    let alumno = {
      nombre: "Alumno " + i,
      materia1: 0,
      materia2: 0,
      materia3: 0,
      materia4: 0,
      materia5: 0
    }

    alumnos.push(alumno);

  }

  materia1 = document.getElementById("materia1").value;
  materia2 = document.getElementById("materia2").value;
  materia3 = document.getElementById("materia3").value;
  materia4 = document.getElementById("materia4").value;
  materia5 = document.getElementById("materia5").value;

  materias = [materia1, materia2, materia3, materia4, materia5];

  mostrarAlumnos();

}

function mostrarAlumnos() {

  let html = "<table border='1'><tr><th>Nombre</th>";

  for (let i = 0; i < materias.length; i++) {
    html += "<th>" + materias[i] + "</th>";
  }

  html += "</tr>";

  for (let i = 0; i < alumnos.length; i++) {

    let a = alumnos[i];

    html += "<tr>";
    html += "<td>" + a.nombre + "</td>";
    html += "<td>" + a.materia1 + "</td>";
    html += "<td>" + a.materia2 + "</td>";
    html += "<td>" + a.materia3 + "</td>";
    html += "<td>" + a.materia4 + "</td>";
    html += "<td>" + a.materia5 + "</td>";
    html += "</tr>";

  }

  html += "</table>";

  document.getElementById("alumnos").innerHTML = html;

}


function agregarNotas() {

  for (let i = 0; i < alumnos.length; i++) {

    let nota1 = prompt("Ingrese nota de " + alumnos[i].nombre + " en " + materias[0]);
    alumnos[i].materia1 = nota1;

    let nota2 = prompt("Ingrese nota de " + alumnos[i].nombre + " en " + materias[1]);
    alumnos[i].materia2 = nota2;

    let nota3 = prompt("Ingrese nota de " + alumnos[i].nombre + " en " + materias[2]);
    alumnos[i].materia3 = nota3;

    let nota4 = prompt("Ingrese nota de " + alumnos[i].nombre + " en " + materias[3]);
    alumnos[i].materia4 = nota4;

    let nota5 = prompt("Ingrese nota de " + alumnos[i].nombre + " en " + materias[4]);
    alumnos[i].materia5 = nota5;

  }

}

function calcularPromedio() {

  for (let i = 0; i < alumnos.length; i++) {

    let sumaNotas = parseInt(alumnos[i].materia1) + parseInt(alumnos[i].materia2) + parseInt(alumnos[i].materia3) + parseInt(alumnos[i].materia4) + parseInt(alumnos[i].materia5);

    let promedio = sumaNotas / materias.length;

    alumnos[i].promedio = promedio;

  }

}


function mostrarNotas() {

  let html = "<table border='1'><tr><th>Alumno</th><th>Nota Materia 1</th><th>Nota Materia 2</th><th>Nota Materia 3</th><th>Nota Materia 4</th><th>Nota Materia 5</th></tr>";  

  for (let i = 0; i < alumnos.length; i++) {

    let a = alumnos[i];

    html += "<tr>";
    html += "<td>" + a.nombre + "</td>";
    html += "<td>" + a.materia1 + "</td>";
    html += "<td>" + a.materia2 + "</td>";
    html += "<td>" + a.materia3 + "</td>";
    html += "<td>" + a.materia4 + "</td>";
    html += "<td>" + a.materia5 + "</td>";
    html += "</tr>";

  }

  html += "</table>";

  document.getElementById("notas").innerHTML = html;

}

function notaMasAlta() {
  
  let notaMasAlta = 0;

  for (let i = 0; i < alumnos.length; i++) {

    let nota1 = parseInt(alumnos[i].materia1);
    let nota2 = parseInt(alumnos[i].materia2);
    let nota3 = parseInt(alumnos[i].materia3);
    let nota4 = parseInt(alumnos[i].materia4);
    let nota5 = parseInt(alumnos[i].materia5);

    let notaMayor = Math.max(nota1, nota2, nota3, nota4, nota5);

    if (notaMayor > notaMasAlta) {
      notaMasAlta = notaMayor;
    }

  }

  alert("La nota más alta es: " + notaMasAlta);

}

function verificarAplazos() {
  
  for (let i = 0; i < alumnos.length; i++) {

    let nota1 = parseInt(alumnos[i].materia1);
    let nota2 = parseInt(alumnos[i].materia2);
    let nota3 = parseInt(alumnos[i].materia3);
    let nota4 = parseInt(alumnos[i].materia4);
    let nota5 = parseInt(alumnos[i].materia5);

    if (nota1 < 4 || nota2 < 4 || nota3 < 4 || nota4 < 4 || nota5 < 4) {
      alert(alumnos[i].nombre + " tiene al menos un aplazo");
    }

  }
  
}
