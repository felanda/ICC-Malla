const malla = document.getElementById("malla");

// Datos de ramos con requisitos
const ramos = [
  // PRIMER AÑO
  { nombre: "Español", periodo: "1-1", reqs: [] },
  { nombre: "Matematicas", periodo: "1-1", reqs: [] },
  { nombre: "Introduccion a las Ciencias de la Computación", periodo: "1-1", reqs: [] },
  { nombre: "Sociologia", periodo: "1-1", reqs: [] },
  { nombre: "Filosofia", periodo: "1-1", reqs: [] },

  { nombre: "Expresion Oral y Esrita", periodo: "1-2", reqs: ["Español"] },
  { nombre: "Pre-calculo", periodo: "1-2", reqs: ["Matematicas"] },
  { nombre: "Fundamentos y logica de programacion", periodo: "1-2", reqs: ["Introduccion a las Ciencias de la Computación"] },
  { nombre: "Historia de Honduras", periodo: "1-2", reqs: [] },
  { nombre: "El hombre frente a la vida", periodo: "1-2", reqs: ["Filosofia"] },
  { nombre: "Ingles I", periodo: "1-2", reqs: [] },

  { nombre: "Estadistica", periodo: "1-3", reqs: [] },
  { nombre: "Calculo I", periodo: "1-3", reqs: ["Pre-calculo"] },
  { nombre: "Programacion estructurada I", periodo: "1-3", reqs: ["Fundamentos y logica de programacion"] },
  { nombre: "Estructuras discretas", periodo: "1-3", reqs: ["Fundamentos y logica de programacion"] },
  { nombre: "Ingles II", periodo: "1-3", reqs: ["Ingles I"] },
  { nombre: "Diseño grafico", periodo: "1-3", reqs: [] },

  // SEGUNDO AÑO
  { nombre: "Metodos y tecnicas de la investigacion", periodo: "2-1", reqs: ["Estadistica"] },
  { nombre: "Calculo II", periodo: "2-1", reqs: ["Calculo I"] },
  { nombre: "Programacion estructurada II", periodo: "2-1", reqs: ["Programacion estructurada I"] },
  { nombre: "Fisica I", periodo: "2-1", reqs: [] },
  { nombre: "Administracion", periodo: "2-1", reqs: [] },
  { nombre: "Ingles III", periodo: "2-1", reqs: ["Ingles II"] },
  { nombre: "Laboratorio de Fisica", periodo: "2-1", reqs: ["Fisica I"] },

  { nombre: "Base de Datos I", periodo: "2-2", reqs: [] },
  { nombre: "Contabilidad", periodo: "2-2", reqs: [] },
  { nombre: "Programacion en entornos de desarrollo visual", periodo: "2-2", reqs: ["Programacion estructurada II"] },
  { nombre: "Principios de la electronica", periodo: "2-2", reqs: ["Fisica I"] },
  { nombre: "Matematica financiera", periodo: "2-2", reqs: [] },
  { nombre: "Ingles IV", periodo: "2-2", reqs: ["Ingles III"] },

  { nombre: "Base de Datos II", periodo: "2-3", reqs: ["Base de Datos I"] },
  { nombre: "Etica", periodo: "2-3", reqs: ["El hombre frente a la vida"] },
  { nombre: "Analisis y diseño de sistemas", periodo: "2-3", reqs: ["Programacion en entornos de desarrollo visual"] },
  { nombre: "Redes I", periodo: "2-3", reqs: [] },
  { nombre: "Circuitos Logicos", periodo: "2-3", reqs: ["Principios de la electronica"] },
  { nombre: "Ingles V", periodo: "2-3", reqs: ["Ingles IV"] },

  // TERCER AÑO
  { nombre: "Base de datos multidimensionales", periodo: "3-1", reqs: ["Base de Datos II"] },
  { nombre: "Programa multiplataforma", periodo: "3-1", reqs: ["Analisis y diseño de sistemas"] },
  { nombre: "Desarrollo de software", periodo: "3-1", reqs: ["Analisis y diseño de sistemas"] },
  { nombre: "Redes II", periodo: "3-1", reqs: ["Redes I"] },
  { nombre: "Sistemas automatizados", periodo: "3-1", reqs: ["Circuitos Logicos"] },
  { nombre: "Ingles VI", periodo: "3-1", reqs: ["Ingles V"] },

  { nombre: "Sistemas inteligentes para negocios", periodo: "3-2", reqs: ["Base de datos multidimensionales"] },
  { nombre: "Implementacion de sistemas de software", periodo: "3-2", reqs: ["Desarrollo de software"] },
  { nombre: "Sistemas operativos I", periodo: "3-2", reqs: [] },
  { nombre: "Microcrontroladores", periodo: "3-2", reqs: ["Sistemas automatizados"] },
  { nombre: "Ecologia", periodo: "3-2", reqs: [] },

  { nombre: "Desarrollo de portales web I", periodo: "3-3", reqs: ["Programa multiplataforma"] },
  { nombre: "Programacion movil I", periodo: "3-3", reqs: ["Programa multiplataforma"] },
  { nombre: "Gestion a la calidad total", periodo: "3-3", reqs: [] },
  { nombre: "Sistemas operativos II", periodo: "3-3", reqs: ["Sistemas operativos I"] },

  // CUARTO AÑO
  { nombre: "Desarrollo de portales web II", periodo: "4-1", reqs: ["Desarrollo de portales web I"] },
  { nombre: "Programacion movil II", periodo: "4-1", reqs: ["Programacion movil I"] },
  { nombre: "Control estadistico de la calidad", periodo: "4-1", reqs: ["Gestion a la calidad total"] },
  { nombre: "Gestion y estandares de tecnologia de informacion", periodo: "4-1", reqs: [] },
  { nombre: "Doctrina social de la iglesia (TES)", periodo: "4-1", reqs: [] },

  { nombre: "Negocios web", periodo: "4-2", reqs: ["Desarrollo de portales web II"] },
  { nombre: "Programacion de negocios", periodo: "4-2", reqs: [] },
  { nombre: "Planeacion y diseño de un modelo de calidad", periodo: "4-2", reqs: ["Control estadistico de la calidad"] },
  { nombre: "Seguridad informatica y gestion de riesgo", periodo: "4-2", reqs: ["Gestion y estandares de tecnologia de informacion"] },
  { nombre: "Administracion de centros de computo", periodo: "4-2", reqs: ["Gestion y estandares de tecnologia de informacion"] },
  { nombre: "TES", periodo: "4-2", reqs: ["Doctrina social de la iglesia (TES)"] },

  { nombre: "Taller de software", periodo: "4-3", reqs: ["Negocios web"] },
  { nombre: "Gestion de Proyectos", periodo: "4-3", reqs: ["Programacion de negocios"] },
  { nombre: "Big data", periodo: "4-3", reqs: ["Sistemas inteligentes para negocios"] },
  { nombre: "Auditoria de sistemas", periodo: "4-3", reqs: ["Seguridad informatica y gestion de riesgo"] },
  { nombre: "Excel avanzado para ingenierias", periodo: "4-3", reqs: [] },

  { nombre: "Practica profesional", periodo: "4-4", reqs: ["Taller de software"] },
];

// Cargar ramos aprobados del almacenamiento local
let aprobados = new Set(JSON.parse(localStorage.getItem("aprobadosICC") || "[]"));

// Agrupar por periodo
const periodos = {};
ramos.forEach(r => {
  if (!periodos[r.periodo]) periodos[r.periodo] = [];
  periodos[r.periodo].push(r);
});

// Renderizar
function render() {
  malla.innerHTML = "";
  Object.keys(periodos).sort().forEach(p => {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h2>${formatoPeriodo(p)}</h2>`;

    periodos[p].forEach(r => {
      const div = document.createElement("div");
      div.className = "ramo";
      if (p.endsWith("1") || p.endsWith("3")) div.classList.add("lila");

      const desbloqueado = r.reqs.every(req => aprobados.has(req));
      if (!desbloqueado) div.classList.add("bloqueado");
      if (aprobados.has(r.nombre)) div.classList.add("aprobado");

      div.textContent = r.nombre;
      div.onclick = () => {
        if (aprobados.has(r.nombre)) {
          aprobados.delete(r.nombre);
        } else if (desbloqueado) {
          aprobados.add(r.nombre);
        }
        localStorage.setItem("aprobadosICC", JSON.stringify([...aprobados]));
        render();
      };

      col.appendChild(div);
    });

    malla.appendChild(col);
  });
}

function formatoPeriodo(p) {
  const [año, sem] = p.split("-");
  const suf = ["", "er", "do", "er", "to"];
  return `${sem}º Semestre`;
}

render();
