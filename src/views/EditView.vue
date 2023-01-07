<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-success text-white text-center">Editar Estudiante</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="Nombre" id="nombre" class="form-control" placeholder="Nombre"
                                required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="Apellido" id="apellido" class="form-control"
                                placeholder="Apellido" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                            <input type="tel" id="telefono" v-model="Telefono" class="form-control"
                                placeholder="Teléfono" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                            <input type="email" id="email" v-model="Email" class="form-control"
                                placeholder="Correo elcctrónico" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-address-book"></i></span>
                            <input type="text" id="documento" v-model="Documento" class="form-control"
                                placeholder="Número de Documento" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-location-dot"></i></span>
                            <input type="text" id="direccion" v-model="Direccion" class="form-control"
                                placeholder="Dirección" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-globe"></i></span>
                            <input type="text" id="ciudad" v-model="Ciudad" class="form-control" placeholder="Ciudad"
                                required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-calendar"></i></span>
                            <input type="text" id="semestre" v-model="Semestre" class="form-control"
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
import { enviarSolicitud } from '@/funciones';
import { useRoute } from 'vue-router';
import axios from 'axios';
export default {
    data() {
        return {
            id: 0, Documento: '', Nombre: '', Apellido: '', Email: '', Telefono: '', Direccion: '', Ciudad: '', Semestre: '', profesores_id: '', url: 'http://127.0.0.1:8000/api/estudiantes/'
        }
    }
    ,
    mounted() {
        const route = useRSoute();
        this.id = route.params.id;
        this.url = url + '/' + this.id;

        this.getEstudiantes();
    },
    methods: {
        getEstudiantes(){
            axios.get(this.url).then(
                response=>(
                    this.documento = response.data['documento'],
                    this.nombre = response.data['nombre'],
                    this.apellido = response.data['apellido'],
                    this.email = response.data['email'],
                    this.telefono = response.data['telefono'],
                    this.direccion = response.data['direccion'],
                    this.ciudad = response.data['cepudad'],
                    this.semestre = response.data['semestre'],
                    this.profesores_id = response.data['profesores_id']

                )
            );
        },
        guardar() {
            event.preventDefault();
            if (this.Documento.trim() === '') {
                show_alert('Escribe el nombre', 'warning', 'nommbre');


            }
            if (this.Nombre.trim() === '') {
                return false;

            }
            else if (this.Apellido.trim() === '') {
                return false;


            }
            else if (this.Email.trim() === '') {
                return false;


            }

            else if (this.Telefono.trim() === '') {
                return false;


            }
            else if (this.Direccion.trim() === '') {
                return false;


            }
            else if (this.Ciudad.trim() === '') {
                return false;

            }
            else if (this.Semestre.trim() === '') {
                show_alert('Escribe el semestre', 'warning', 'semestre');


            } else if (this.profesores_id.trim() === '') {
                show_alert('Escribe el identificador de tu profesor', 'warning', 'profesores_id');
            } else {
                var parametros = {
                    documento: this.Documento.trim(),
                    nombre: this.Nombre.trim(),
                    apellido: this.Apellido.trim(),
                    email: this.Email.trim(),
                    telefono: this.Telefono.trim(),
                    direccion: this.Direccion.trim(),
                    ciudad: this.Ciudad.trim(),
                    semestre: this.Semestre.trim(),
                    profesores: this.profesores_id.trim()
                }
                enviarSolicitud('PUT', parametros, this.url, 'Estudiante Registrado');
            }






        }
    }
}

</script>

