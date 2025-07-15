const malla = document.getElementById("malla");

/* --- LISTA COMPLETA DE RAMOS Y REQUISITOS --- */
const ramos = [
  /* ===== PRIMER AÑO ===== */
  // 1‑1
  {nombre:"Español",                       req:[],                                        per:"1-1"},
  {nombre:"Matematicas",                   req:[],                                        per:"1-1"},
  {nombre:"Introducción a las Ciencias de la Computación", req:[],                        per:"1-1"},
  {nombre:"Sociología",                    req:[],                                        per:"1-1"},
  {nombre:"Filosofía",                     req:[],                                        per:"1-1"},

  // 1‑2
  {nombre:"Expresión Oral y Escrita",      req:["Español"],                               per:"1-2"},
  {nombre:"Pre‑cálculo",                   req:["Matematicas"],                           per:"1-2"},
  {nombre:"Fundamentos y Lógica de Programación", req:["Introducción a las Ciencias de la Computación"], per:"1-2"},
  {nombre:"Historia de Honduras",          req:[],                                        per:"1-2"},
  {nombre:"El Hombre frente a la Vida",    req:["Filosofía"],                             per:"1-2"},
  {nombre:"Inglés I",                      req:[],                                        per:"1-2"},

  // 1‑3
  {nombre:"Estadística",                   req:[],                                        per:"1-3"},
  {nombre:"Cálculo I",                     req:["Pre‑cálculo"],                           per:"1-3"},
  {nombre:"Programación Estructurada I",   req:["Fundamentos y Lógica de Programación"],  per:"1-3"},
  {nombre:"Estructuras Discretas",         req:["Fundamentos y Lógica de Programación"],  per:"1-3"},
  {nombre:"Inglés II",                     req:["Inglés I"],                              per:"1-3"},
  {nombre:"Diseño Gráfico",                req:[],                                        per:"1-3"},

  /* ===== SEGUNDO AÑO ===== */
  // 2‑1
  {nombre:"Métodos y Técnicas de la Investigación", req:["Estadística"],                  per:"2-1"},
  {nombre:"Cálculo II",                    req:["Cálculo I"],                             per:"2-1"},
  {nombre:"Programación Estructurada II",  req:["Programación Estructurada I"],           per:"2-1"},
  {nombre:"Física I",                      req:[],                                        per:"2-1"},
  {nombre:"Administración",                req:[],                                        per:"2-1"},
  {nombre:"Inglés III",                    req:["Inglés II"],                             per:"2-1"},
  {nombre:"Laboratorio de Física",         req:["Física I"],                              per:"2-1"},

  // 2‑2
  {nombre:"Base de Datos I",               req:[],                                        per:"2-2"},
  {nombre:"Contabilidad",                  req:[],                                        per:"2-2"},
  {nombre:"Programación en Entornos de Desarrollo Visual", req:["Programación Estructurada II"], per:"2-2"},
  {nombre:"Principios de la Electrónica",  req:["Física I"],                              per:"2-2"},
  {nombre:"Matemática Financiera",         req:[],                                        per:"2-2"},
  {nombre:"Inglés IV",                     req:["Inglés III"],                            per:"2-2"},

  // 2‑3
  {nombre:"Base de Datos II",              req:["Base de Datos I"],                       per:"2-3"},
  {nombre:"Ética",                         req:["El Hombre frente a la Vida"],            per:"2-3"},
  {nombre:"Análisis y Diseño de Sistemas", req:["Programación en Entornos de Desarrollo Visual"], per:"2-3"},
  {nombre:"Redes I",                       req:[],                                        per:"2-3"},
  {nombre:"Circuitos Lógicos",             req:["Principios de la Electrónica"],          per:"2-3"},
  {nombre:"Inglés V",                      req:["Inglés IV"],                             per:"2-3"},

  /* ===== TERCER AÑO ===== */
  // 3‑1
  {nombre:"Base de Datos Multidimensionales",      req:["Base de Datos II"],              per:"3-1"},
  {nombre:"Programa Multiplataforma",              req:["Análisis y Diseño de Sistemas"], per:"3-1"},
  {nombre:"Desarrollo de Software",                req:["Análisis y Diseño de Sistemas"], per:"3-1"},
  {nombre:"Redes II",                              req:["Redes I"],                       per:"3-1"},
  {nombre:"Sistemas Automatizados",                req:["Circuitos Lógicos"],             per:"3-1"},
  {nombre:"Inglés VI",                             req:["Inglés V"],                      per:"3-1"},

  // 3‑2
  {nombre:"Sistemas Inteligentes para Negocios",   req:["Base de Datos Multidimensionales"],        per:"3-2"},
  {nombre:"Implementación de Sistemas de Software",req:["Desarrollo de Software"],                   per:"3-2"},
  {nombre:"Sistemas Operativos I",                 req:[],                                         per:"3-2"},
  {nombre:"Microcontroladores",                    req:["Sistemas Automatizados"],                  per:"3-2"},
  {nombre:"Ecología",                              req:[],                                         per:"3-2"},

  // 3‑3
  {nombre:"Desarrollo de Portales Web I",          req:["Programa Multiplataforma"],                per:"3-3"},
  {nombre:"Programación Móvil I",                  req:["Programa Multiplataforma"],                per:"3-3"},
  {nombre:"Gestión a la Calidad Total",            req:[],                                         per:"3-3"},
  {nombre:"Sistemas Operativos II",                req:["Sistemas Operativos I"],                   per:"3-3"},

  /* ===== CUARTO AÑO ===== */
  // 4‑1
  {nombre:"Desarrollo de Portales Web II",         req:["Desarrollo de Portales Web I"],            per:"4-1"},
  {nombre:"Programación Móvil II",                 req:["Programación Móvil I"],                    per:"4-1"},
  {nombre:"Control Estadístico de la Calidad",     req:["Gestión a la Calidad Total"],              per:"4-1"},
  {nombre:"Gestión y Estándares de TI",            req:[],                                         per:"4-1"},
  {nombre:"Doctrina Social de la Iglesia (TES)",   req:[],                                         per:"4-1"},

  // 4‑2
  {nombre:"Negocios Web",                          req:["Desarrollo de Portales Web II"],           per:"4-2"},
  {nombre:"Programación de Negocios",              req:[],                                         per:"4-2"},
  {nombre:"Planeación y Diseño de un Modelo de Calidad", req:["Control Estadístico de la Calidad"], per:"4-2"},
  {nombre:"Seguridad Informática y Gestión de Riesgo",    req:["Gestión y Estándares de TI"],        per:"4-2"},
  {nombre:"Administración de Centros de Cómputo",  req:["Gestión y Estándares de TI"],              per:"4-2"},
  {nombre:"TES",                                   req:["Doctrina Social de la Iglesia (TES)"],     per:"4-2"},

  // 4‑3
  {nombre:"Taller de Software",                    req:["Negocios Web"],                            per:"4-3"},
  {nombre:"Gestión de Proyectos",                  req:["Programación de Negocios"],                per:"4-3"},
  {nombre:"Big Data",                              req:["Sistemas Inteligentes para Negocios"],     per:"4-3"},
  {nombre:"Auditoría de Sistemas",                 req:["Seguridad Informática y Gestión de Riesgo"], per:"4-3"},
  {nombre:"Excel Avanzado para Ingenierías",       req:[],                                         per:"4-3"},

  // 4‑4
  {nombre:"Práctica Profesional",                  req:["Taller de Software"],                      per:"4-4"},
];

/* --- AGRUPAR POR PERÍODO --- */
const periodos = {};
ramos.forEach(r => {
  if(!periodos[r.per]) periodos[r.per] = [];
  periodos[r.per].push(r);
});

/* --- APROBADOS (persistimos en localStorage) --- */
const aprobados = new Set(JSON.parse(localStorage.getItem("aprobadosMalla")||"[]"));

/* --- CONSTRUIR UI --- */
function pintar(){
  malla.innerHTML="";
  Object.keys(periodos).sort().forEach(p=>{
    const col=document.createElement("div");
    col.className="periodo";
    col.innerHTML=`<h2>Periodo ${p.replace("-"," Año ")}</h2>`;

    periodos[p].forEach(r=>{
      const div=document.createElement("div");
      div.className="ramo";
      div.textContent=r.nombre;

      const desbloqueado = r.req.every(req=>aprobados.has(req));
      if(!desbloqueado) div.classList.add("bloqueado");
      if(aprobados.has(r.nombre)) div.classList.add("aprobado");

      div.addEventListener("click",()=>{
        if(aprobados.has(r.nombre)){
          aprobados.delete(r.nombre);
        }else if(desbloqueado){
          aprobados.add(r.nombre);
        }
        guardar();
        pintar();
      });

      col.appendChild(div);
    });

    malla.appendChild(col);
  });
}

/* --- guardar progreso --- */
function guardar(){
  localStorage.setItem("aprobadosMalla",JSON.stringify([...aprobados]));
}

pintar();
