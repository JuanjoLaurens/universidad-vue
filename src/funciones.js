import Swal from "sweetalert2";
import axios from "axios";

export function show_alert(mensaje, icono, foco = '') {
    if (foco !== '') {
        document.getElementById(foco).focus();

    }
    Swal.fire({
        icon: icono,
        title: mensaje,
        customClass: { confirmButton: 'btn btn-primary', popup: 'animated zoomIn' },
        buttonsStyling: false
    });
}

export function show_confirm(id) {
    var url = 'http://127.0.0.1:8000/api/materias/' + id;
    const swalWithBootstrapButton = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger'
        }
        , buttonsStyling: false
    });
    swalWithBootstrapButton.fire({
        title: '¿Estas seguro de eliminar este registro?',
        text: 'Se perderan los datos guardados',
        icon: 'quesion',
        showCancelButton: true,
        confirmButtonText: '<i class=" fa-solid fa-check"></i>Si, Eliminar',
        cancelButton: '<i class=" fa-solid fa-ban"></i>Cancelar'
    }).then((ressult) => {
        if (ressult.isConfirmed) {
            enviarsolicitud('DELETE', { id: id }, url, 'Materia Eliminada');
        }
        else {
            show_alert('Operacion cancelada', 'info');

        }
    })
}

export function confirm_profesor(id) {
    var url = 'http://127.0.0.1:8000/api/profesores/' + id;
    const swalWithBootstrapButton = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger'
        }
        , buttonsStyling: false
    });
    swalWithBootstrapButton.fire({
        title: '¿Estas seguro de eliminar este registro?',
        text: 'Se perderan los datos guardados',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class=" fa-solid fa-check"></i>Si, Eliminar',
        cancelButton: '<i class=" fa-solid fa-ban"></i>Cancelar'
    }).then((ressult) => {
        if (ressult.isConfirmed) {
            enviarSolicitud('DELETE', { id: id }, url, 'Profesor Eliminado');
        }
        else {
            show_alert('Operacion cancelada', 'info');

        }
    })
}


export function confirm_estudiante(id) {
    var url = 'http://127.0.0.1:8000/api/estudiantes/' + id;
    const swalWithBootstrapButton = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger'
        }
        , buttonsStyling: false
    });
    swalWithBootstrapButton.fire({
        title: '¿Estas seguro de eliminar este registro?',
        text: 'Se perderan los datos guardados',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class=" fa-solid fa-check"></i>Si, Eliminar',
        cancelButton: '<i class=" fa-solid fa-ban"></i>Cancelar'
    }).then((ressult) => {
        if (ressult.isConfirmed) {
            enviarSolicitud('DELETE', { id: id }, url, 'Profesor Eliminado');
        }
        else {
            show_alert('Operacion cancelada', 'info');

        }
    })
}
export function enviarSolicitud(metodo,parametros,url,mensaje){
    axios({method:metodo,url:url,data:parametros}).then(function(respuesta){
        var status = respuesta.data[0]['status'];
        if(status ==='success'){
            show_alert(mensaje,status);
            window.setTimeout(function(){
                window.location.href='/';
            },1000);
        }
        else{
            var listado='';
            var errores = respuesta.data[1]['errors'];
            Object.keys(errores).forEach(
                key => listado += errores[key][0]+'.'
            );
            show_alert(listado,'error');
        }
    }).catch(function(error){
        show_alert('Error en la solicitud','error');
    });

    
}