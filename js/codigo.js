

const botonCargar = document.querySelector("#CargarTrabajos");
const botonTema = document.querySelector("#CambiarTema");
const seccionTrabajos = document.querySelector("#trabajos"); 


function cargarTrabajos () {
  


   fetch("js/datos.json")
        .then(res => res.json())
        .then(trabajos => {

            for (let trabajo of trabajos) {

         document.querySelector("#trabajos").innerHTML+= `
                   <div> 
                        <h2>${trabajo.titulo}</h2>
                        <p>${trabajo.descripcion}</p>
                        <p>${trabajo.detalles}</p> 
                        </div> `;
            }
          
        });
      } 

      


function CargarTema() {
  document.body.classList.toggle("temaoscuro");
  
}
 
botonCargar.addEventListener("click", cargarTrabajos );
botonTema.addEventListener("click",CargarTema ); 

  


