const URLGET = "https://jsonplaceholder.typicode.com/posts"

const infopost = {nombre :"ana", profesion:"programadora"}

$("body").prepend('<button id="btn1">POST</button>');

$("#btn1").click(() => {
    $.post(URLGET , infopost ,(respuesta,estado)=> {
        if (estado === "suceess"){
            $("body").prepend(`<div>
                              Guardado:${respuesta.nombre}
                              </div`);
        }
    });
});