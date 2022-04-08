const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Ayuda a las organizaciones con un conjunto de procesos, modelos de administración, criterios y más aspectos favorables para la dirección de proyectos.",
    respuestas: {
      a: "PMBOOK",
      b: "SS ERA",
      c: "AT",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "2. Es una metodología que sirve para que domines varios aspectos tales como lo son: mejor comunicación, mejorar el trabajo en equipo, asegurar un proceso visible y controlado, repetitivo, eficiente y predecible, mejorar la experiencia y por ultimo estandarizar las actividades a realizar en las fases del ciclo de vida del proyecto, simplificando los procesos de gestión.",
    respuestas: {
      a: "KALITAS",
      b: "PMBOOK",
      c: "Administración de proyectos",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. ¿En qué se divide la administración de proyectos?",
    respuestas: {
      a: "Inicio",
      b: "Planificación y Ejecución",
      c: "Control y Cierre",
      d: "Todas las anteriores",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "4. Aquí se ve las Historias del Usuario y las Tareas por asignar a cada integrante del equipo, a cada una de las tareas ya se le asignó puntos de esfuerzo, los cuales muestran la dificultad y el tiempo que se tardarán en hacer cada tarea.",
    respuestas: {
      a: "Backlog holográfico",
      b: "Backlog",
      c: "Diseño",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5. Es una metodología para optimizar y planificar las etapas de un proyecto y así no perder mucho tiempo en la planeación.",
    respuestas: {
      a: "PMBOOK",
      b: "PHP",
      c: "Scrum",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "6. Es la persona que estará en contacto entre el Scrum Owner y Scrum Team para que el proyecto no tenga ninguna fuga de información y es el que mas experiencia tiene en este tipo de proyectos.",
    respuestas: {
      a: "Líder del equipo",
      b: "Scrum Owner",
      c: "Scrum Master",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "7. Es el que conoce la metodología para poder acabar este proyecto a tiempo.",
    respuestas: {
      a: "Scrum Master",
      b: "Scrum Owner",
      c: "Líder del equipo",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8. Es el equipo encargado de desarrollar el proyecto.",
    respuestas: {
      a: "Equipo 1",
      b: "Scrum Team",
      c: "Scrum datos",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "9. En esta se colocan nuestras metas y actividades que tenemos que realizar.",
    respuestas: {
      a: "Backlog List",
      b: "Diseño Web",
      c: "Sprint",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. ¿En qué grupos se divide scrum?",
    respuestas: {
      a: "Scrum Owner, Master y Team",
      b: "Scrum Master y Team",
      c: "Scrum Owner y Team",
    },
    respuestaCorrecta: "a",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta] }
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " + respuestasCorrectas +
    " preguntas de un total de " + preguntas.length + " preguntas.";
}

botonRes.addEventListener("click", mostrarResultado);