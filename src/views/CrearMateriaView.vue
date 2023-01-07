<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-success text-white text-center">Nueva Materia</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="descripcion" id="descripcion" class="form-control"
                                placeholder="Descripción" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="nombre" id="nombre" class="form-control" placeholder="Nombre"
                                required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                            <input type="tel" id="creditos" v-model="creditos" class="form-control"
                                placeholder="Creditos" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                            <input type="text" id="area" v-model="area_conocimiento" class="form-control"
                                placeholder="Area de Conocimiento" required>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Tipo de Materia</label>
                            </div>
                            <select name="opciones"  class="custom-select" id="id" v-model="opciones">
                                <option selected>Selecciona</option>
                                <option value="1">Obligatoria</option>
                                <option value="2">Opcional</option>
                            </select>
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

export default {
    data() {
        return {
            descripcion: '', nombre: '', creditos: '', area_conocimiento: '', opciones: '', url: 'http://127.0.0.1:8000/api/materias/'
        }
    },
    methods: {
        guardar() {
            event.preventDefault();
            if (this.descripcion.trim() === '') {
                show_alert('Escribe el nombre', 'warning', 'nommbre');


            }
            if (this.nombre.trim() === '') {
                return false;

            }
            else if (this.creditos.trim() === '') {
                return false;


            }
            else if (this.area_conocimiento.trim() === '') {
                return false;


            }

            else if (this.opciones.trim() === '') {
                return false;


            }
             else {
                var parametros = {
                    descripcion: this.descripcion.trim(),
                    nombre: this.nombre.trim(),
                    creditos: this.creditos.trim(),
                    area: this.area_conocimiento.trim(),
                    opciones: this.opciones.trim(),
                }
                enviarSolicitud('POST', parametros, this.url, 'Estudiante Registrado');
            }






        }
    }
}

</script>

