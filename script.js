// script.js
const ramos = {
  "Español": ["Expresion Oral y Escrita"],
  "Matematicas": ["Pre-calculo"],
  "Introduccion a las Ciencias de la Computación": ["Fundamentos y logica de programacion"],
  "Filosofia": ["El hombre frente a la vida"],
  "Expresion Oral y Esrita": [],
  "Pre-calculo": ["Calculo I"],
  "Fundamentos y logica de programacion": ["Programacion estructurada I", "Estructuras discretas"],
  "Historia de Honduras": [],
  "El hombre frente a la vida": ["Etica"],
  "Ingles I": ["Ingles II"],
  "Estadistica": ["Metodos y tecnicas de la investigacion"],
  "Calculo I": ["Calculo II"],
  "Programacion estructurada I": ["Programacion estructurada II"],
  "Estructuras discretas": [],
  "Ingles II": ["Ingles III"],
  "Diseño grafico": [],
  "Metodos y tecnicas de la investigacion": [],
  "Calculo II": [],
  "Programacion estructurada II": ["Programacion en entornos de desarrollo visual"],
  "Fisica I": ["Principios de la electronica"],
  "Administracion": [],
  "Ingles III": ["Ingles IV"],
  "Laboratorio de Fisica": [],
  "Base de Datos I": ["Base de Datos II"],
  "Contabilidad": [],
  "Programacion en entornos de desarrollo visual": [],
  "Principios de la electronica": ["Circuitos Logicos"],
  "Matematica financiera": [],
  "Ingles IV": ["Ingles V"],
  "Base de Datos II": ["Base de datos multidimensionales"],
  "Etica": [],
  "Analisis y diseño de sistemas": ["Desarrollo de software"],
  "Redes I": ["Redes II"],
  "Circuitos Logicos": ["Sistemas automatizados"],
  "Ingles V": ["Ingles VI"],
  "Base de datos multidimensionales": ["Sistemas inteligentes para negocios"],
  "Programa multiplataforma": ["Desarrollo de portales web I"],
  "Desarrollo de software": ["Implementacion de sistemas de software"],
  "Redes II": [],
  "Sistemas automatizados": [],
  "Ingles VI": [],
  "Sistemas inteligentes para negocios": ["Big data"],
  "Implementacion de sistemas de software": [],
  "Sistemas operativos I": ["Sistemas operativos II"],
  "Microcrontroladores": ["Seminario de hardware"],
  "Ecologia": [],
  "Desarrollo de portales web I": ["Desarrollo de portales web II"],
  "Programacion movil I": ["Programacion movil II"],
  "Gestion a la calidad total": ["Control estadistico de la calidad"],
  "Sistemas operativos II": [],
  "Desarrollo de portales web II": ["Negocios web"],
  "Programacion movil II": [],
  "Control estadistico de la calidad": ["Planeacion y diseño de un modelo de calidad"],
  "Gestion y estandares de tecnologia de informacion": ["Seguridad informatica y gestion de riesgo", "Administracion de centros de computo"],
  "Doctrina social de la iglesia": [],
  "Negocios web": ["Taller de software"],
  "Programacion de negocios": ["Gestion de Proyectos"],
  "Planeacion y diseño de un modelo de calidad": [],
  "Seguridad informatica y gestion de riesgo": ["Auditoria de sistemas"],
  "Administracion de centros de computo": [],
  "TES": [],
  "Taller de software": [],
  "Gestion de Proyectos": [],
  "Big data": [],
  "Auditoria de sistemas": [],
  "Excel avanzado para ingenierias": [],
  "Practica profesional": []
};

const contenedor = document.getElementById("malla");

Object.keys(ramos).forEach(ramo => {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.classList.add("bloqueado");
  div.textContent = ramo;
  div.addEventListener("click", () => aprobarRamo(ramo, div));
  contenedor.appendChild(div);
});

function aprobarRamo(nombre, div) {
  if (div.classList.contains("bloqueado")) return;

  div.classList.toggle("aprobado");

  const dependientes = ramos[nombre];
  dependientes.forEach(dep => {
    const hijos = [...document.querySelectorAll(".ramo")];
    const target = hijos.find(h => h.textContent === dep);
    if (target && !document.querySelector(`.ramo.aprobado:contains('${nombre}')`)) {
      target.classList.remove("bloqueado");
    }
  });
}

// Desbloquear los ramos iniciales
["Español", "Matematicas", "Introduccion a las Ciencias de la Computación", "Sociologia", "Filosofia"].forEach(nombre => {
  const target = [...document.querySelectorAll(".ramo")].find(h => h.textContent === nombre);
  if (target) target.classList.remove("bloqueado");
});
