const malla = document.getElementById("malla");

const ramos = [
  // 1-1
  {n:"Español",p:"1-1",req:[]},
  {n:"Matematicas",p:"1-1",req:[]},
  {n:"Introduccion a las Ciencias de la Computación",p:"1-1",req:[]},
  {n:"Sociologia",p:"1-1",req:[]},
  {n:"Filosofia",p:"1-1",req:[]},

  // 1-2
  {n:"Expresion Oral y Esrita",p:"1-2",req:["Español"]},
  {n:"Pre-calculo",p:"1-2",req:["Matematicas"]},
  {n:"Fundamentos y logica de programacion",p:"1-2",req:["Introduccion a las Ciencias de la Computación"]},
  {n:"Historia de Honduras",p:"1-2",req:[]},
  {n:"El hombre frente a la vida",p:"1-2",req:["Filosofia"]},
  {n:"Ingles I",p:"1-2",req:[]},

  // 1-3
  {n:"Estadistica",p:"1-3",req:[]},
  {n:"Calculo I",p:"1-3",req:["Pre-calculo"]},
  {n:"Programacion estructurada I",p:"1-3",req:["Fundamentos y logica de programacion"]},
  {n:"Estructuras discretas",p:"1-3",req:["Fundamentos y logica de programacion"]},
  {n:"Ingles II",p:"1-3",req:["Ingles I"]},
  {n:"Diseño grafico",p:"1-3",req:[]},

  // 2-1
  {n:"Metodos y tecnicas de la investigacion",p:"2-1",req:["Estadistica"]},
  {n:"Calculo II",p:"2-1",req:["Calculo I"]},
  {n:"Programacion estructurada II",p:"2-1",req:["Programacion estructurada I"]},
  {n:"Fisica I",p:"2-1",req:[]},
  {n:"Administracion",p:"2-1",req:[]},
  {n:"Ingles III",p:"2-1",req:["Ingles II"]},
  {n:"Laboratorio de Fisica",p:"2-1",req:["Fisica I"]},

  // 2-2
  {n:"Base de Datos I",p:"2-2",req:[]},
  {n:"Contabilidad",p:"2-2",req:[]},
  {n:"Programacion en entornos de desarrollo visual",p:"2-2",req:["Programacion estructurada II"]},
  {n:"Principios de la electronica",p:"2-2",req:["Fisica I"]},
  {n:"Matematica financiera",p:"2-2",req:[]},
  {n:"Ingles IV",p:"2-2",req:["Ingles III"]},

  // 2-3
  {n:"Base de Datos II",p:"2-3",req:["Base de Datos I"]},
  {n:"Etica",p:"2-3",req:["El hombre frente a la vida"]},
  {n:"Analisis y diseño de sistemas",p:"2-3",req:[]},
  {n:"Redes I",p:"2-3",req:[]},
  {n:"Circuitos Logicos",p:"2-3",req:["Principios de la electronica"]},
  {n:"Ingles V",p:"2-3",req:["Ingles IV"]},

  // 3-1
  {n:"Base de datos multidimensionales",p:"3-1",req:["Base de Datos II"]},
  {n:"Programa multiplataforma",p:"3-1",req:[]},
  {n:"Desarrollo de software",p:"3-1",req:["Analisis y diseño de sistemas"]},
  {n:"Redes II",p:"3-1",req:["Redes I"]},
  {n:"Sistemas automatizados",p:"3-1",req:["Circuitos Logicos"]},
  {n:"Ingles VI",p:"3-1",req:["Ingles V"]},

  // 3-2
  {n:"Sistemas inteligentes para negocios",p:"3-2",req:["Base de datos multidimensionales"]},
  {n:"Implementacion de sistemas de software",p:"3-2",req:["Desarrollo de software"]},
  {n:"Sistemas operativos I",p:"3-2",req:[]},
  {n:"Microcrontroladores",p:"3-2",req:[]},
  {n:"Ecologia",p:"3-2",req:[]},

  // 3-3
  {n:"Desarrollo de portales web I",p:"3-3",req:["Programa multiplataforma"]},
  {n:"Programacion movil I",p:"3-3",req:[]},
  {n:"Gestion a la calidad total",p:"3-3",req:[]},
  {n:"Sistemas operativos II",p:"3-3",req:["Sistemas operativos I"]},

  // 4-1
  {n:"Desarrollo de portales web II",p:"4-1",req:["Desarrollo de portales web I"]},
  {n:"Programacion movil II",p:"4-1",req:["Programacion movil I"]},
  {n:"Control estadistico de la calidad",p:"4-1",req:["Gestion a la calidad total"]},
  {n:"Gestion y estandares de tecnologia de informacion",p:"4-1",req:[]},
  {n:"Doctrina social de la iglesia (TES)",p:"4-1",req:[]},

  // 4-2
  {n:"Negocios web",p:"4-2",req:["Desarrollo de portales web II"]},
  {n:"Programacion de negocios",p:"4-2",req:[]},
  {n:"Planeacion y diseño de un modelo de calidad",p:"4-2",req:["Control estadistico de la calidad"]},
  {n:"Seguridad informatica y gestion de riesgo",p:"4-2",req:["Gestion y estandares de tecnologia de informacion"]},
  {n:"Administracion de centros de computo",p:"4-2",req:["Gestion y estandares de tecnologia de informacion"]},
  {n:"TES",p:"4-2",req:["Doctrina social de la iglesia (TES)"]},

  // 4-3
  {n:"Taller de software",p:"4-3",req:["Negocios web"]},
  {n:"Gestion de Proyectos",p:"4-3",req:["Programacion de negocios"]},
  {n:"Big data",p:"4-3",req:["Sistemas inteligentes para negocios"]},
  {n:"Auditoria de sistemas",p:"4-3",req:["Seguridad informatica y gestion de riesgo"]},
  {n:"Excel avanzado para ingenierias",p:"4-3",req:[]},

  // 4-4
  {n:"Practica profesional",p:"4-4",req:["Taller de software"]},
];

// Agrupar por periodo
const periodos = {};
ramos.forEach(r=>{
  if(!periodos[r.p]) periodos[r.p]=[];
  periodos[r.p].push(r);
});

// Progreso guardado
let aprob = new Set(JSON.parse(localStorage.getItem("mallaICC")||"[]"));

// Función para renderizar toda la malla
function render(){
  malla.innerHTML="";

  // Ordenar periodos
  const orden = Object.keys(periodos).sort((a,b)=>{
    const [a1,a2]=a.split("-").map(Number);
    const [b1,b2]=b.split("-").map(Number);
    return a1!==b1? a1-b1 : a2-b2;
  });

  // Agrupar periodos por año
  const años = {};
  orden.forEach(p=>{
    const [año] = p.split("-");
    if(!años[año]) años[año] = [];
    años[año].push(p);
  });

  // Nombres de años para mostrar
  const nombresAños = {
    "1": "Primer Año",
    "2": "Segundo Año",
    "3": "Tercer Año",
    "4": "Cuarto Año"
  };

  // Renderizar cada año con sus semestres
  Object.entries(años).forEach(([año, semestres])=>{
    const divAño = document.createElement("div");
    divAño.className = "año";

    const tituloAño = document.createElement("h1");
    tituloAño.textContent = nombresAños[año] || `Año ${año}`;
    divAño.appendChild(tituloAño);

    semestres.forEach((p,i)=>{
      const col=document.createElement("div");
      col.className="semestre";
      col.innerHTML=`<h2>${textoPeriodo(p)}</h2>`;

      periodos[p].forEach(r=>{
        const div=document.createElement("div");
        div.className="ramo "+(i%2===0?"lila":"rosa");

        // estado
        const desbloq = r.req.every(req=>aprob.has(req));
        if(!desbloq) div.classList.add("bloqueado");
        if(aprob.has(r.n)) div.classList.add("aprobado");

        div.textContent=r.n;
        div.onclick=()=>{
          if(aprob.has(r.n)){ // quitar aprobación
            aprob.delete(r.n);
          }else if(desbloqueado(r)){ // aprobar
            aprob.add(r.n);
          }
          guardar();
          render();
        };
        col.appendChild(div);
      });

      divAño.appendChild(col);
    });

    malla.appendChild(divAño);
  });
}

function desbloqueado(r){return r.req.every(req=>aprob.has(req));}
function guardar(){localStorage.setItem("mallaICC",JSON.stringify([...aprob]));}
function textoPeriodo(p){
  const [ano,sem]=p.split("-");
  return `${sem}º Semestre`;
}

render();
