<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-success text-white text-center">Nuevo Estudiante</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="nombre" id="nombre" class="form-control" placeholder="Nombre"
                                required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="apellido" id="apellido" class="form-control"
                                placeholder="Apellido" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                            <input type="tel" id="telefono" v-model="telefono" class="form-control"
                                placeholder="Teléfono" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                            <input type="email" id="email" v-model="email" class="form-control"
                                placeholder="Correo elcctrónico" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-address-book"></i></span>
                            <input type="text" id="documento" v-model="documento" class="form-control"
                                placeholder="Número de Documento" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-location-dot"></i></span>
                            <input type="text" id="direccion" v-model="direccion" class="form-control"
                                placeholder="Dirección" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-globe"></i></span>
                            <input type="text" id="ciudad" v-model="ciudad" class="form-control" placeholder="Ciudad"
                                required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-calendar"></i></span>
                            <input type="text" id="semestre" v-model="semestre" class="form-control"
                                placeholder="Semestre" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user-plus"></i></span>
                            <input type="text" id="profesor" v-model="profesores_id" class="form-control"
                                placeholder="Identificador del profesor asignado" required>
                        </div>
                        <div class="d-grid col-6 mx-auto">
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk">Guardar</i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {  enviarSolicitud } from '@/funciones';

export default {
    data() {
        return {
            documento: '', nombre: '', apellido: '', email: '', telefono: '', direccion: '', ciudad: '', semestre: '', profesores_id: '', url: 'http://127.0.0.1:8000/api/estudiantes/'
        }
    },
    methods: {
        guardar() {
            event.preventDefault();
            if (this.documento.trim() === '') {
                show_alert('Escribe el nombre', 'warning', 'nommbre');


            }
             if (this.nombre.trim() === '') {
                return false;

            }
            else if (this.apellido.trim() === '') {
                return false;


            }
            else if (this.email.trim() === '') {
                return false;


            }

            else if (this.telefono.trim() === '') {
                return false;


            }
            else if (this.direccion.trim() === '') {
                return false;


            }
            else if (this.ciudad.trim() === '') {
                return false;

            }
            else if(this.semestre.trim() === '' ){
                show_alert('Escribe el semestre', 'warning', 'semestre');


            } else if(this.profesores_id.trim() === '' ){
                show_alert('Escribe el identificador de tu profesor', 'warning', 'profesores_id');
            }else{
                var parametros = {
                documento:this.documento.trim(),
                nombre:this.documento.trim(),
                apellido:this.documento.trim(),
                email:this.email.trim(),
                telefono:this.telefono.trim(),
                direccion:this.direccion.trim(),
                ciudad:this.ciudad.trim(),
                semestre:this.semestre.trim(),
                profesores:this.profesores_id.trim()}
                enviarSolicitud('POST',parametros,this.url,'Estudiante Registrado');
            }

            


            

        }
    }
}

</script>

