const malla = document.getElementById("malla");

/* -------  LISTA COMPLETA  (idéntica a tu malla)  ------- */
const ramos = [
  // 1‑1
  {n:"Español",p:"1-1",req:[]},
  {n:"Matematicas",p:"1-1",req:[]},
  {n:"Introduccion a las Ciencias de la Computación",p:"1-1",req:[]},
  {n:"Sociologia",p:"1-1",req:[]},
  {n:"Filosofia",p:"1-1",req:[]},
  // 1‑2
  {n:"Expresion Oral y Esrita",p:"1-2",req:["Español"]},
  {n:"Pre-calculo",p:"1-2",req:["Matematicas"]},
  {n:"Fundamentos y logica de programacion",p:"1-2",req:["Introduccion a las Ciencias de la Computación"]},
  {n:"Historia de Honduras",p:"1-2",req:[]},
  {n:"El hombre frente a la vida",p:"1-2",req:["Filosofia"]},
  {n:"Ingles I",p:"1-2",req:[]},
  // 1‑3
  {n:"Estadistica",p:"1-3",req:[]},
  {n:"Calculo I",p:"1-3",req:["Pre-calculo"]},
  {n:"Programacion estructurada I",p:"1-3",req:["Fundamentos y logica de programacion"]},
  {n:"Estructuras discretas",p:"1-3",req:["Fundamentos y logica de programacion"]},
  {n:"Ingles II",p:"1-3",req:["Ingles I"]},
  {n:"Diseño grafico",p:"1-3",req:[]},

  /* … (resto de ramos tal como ya te los entregué previamente) … */

  {n:"Practica profesional",p:"4-4",req:["Taller de software"]},
];

/* ----------  Agrupar por periodo ---------- */
const periodos = {};
ramos.forEach(r=>{
  if(!periodos[r.p]) periodos[r.p]=[];
  periodos[r.p].push(r);
});

/* ----------  Progreso guardado ---------- */
let aprob = new Set(JSON.parse(localStorage.getItem("mallaICC")||"[]"));

/* ----------  Render ---------- */
function render(){
  malla.innerHTML="";
  const orden = Object.keys(periodos).sort((a,b)=>{
    const [a1,a2]=a.split("-").map(Number);
    const [b1,b2]=b.split("-").map(Number);
    return a1!==b1? a1-b1 : a2-b2;
  });

  orden.forEach((p,i)=>{
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
        }else if(disbloqueado(r)){ // aprobar
          aprob.add(r.n);
        }
        guardar();
        render();
      };
      col.appendChild(div);
    });

    malla.appendChild(col);
  });
}

function disbloqueado(r){return r.req.every(req=>aprob.has(req));}
function guardar(){localStorage.setItem("mallaICC",JSON.stringify([...aprob]));}
function textoPeriodo(p){
  const [,sem]=p.split("-");
  return `${sem}º Semestre`;
}

render();
