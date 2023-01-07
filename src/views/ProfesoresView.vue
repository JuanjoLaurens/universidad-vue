<template>
    <div class="row">
        <div class="col-lg-10 offset-sm-1 mt-5">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <h1>Profesores</h1>
                        <tr>
                            <th>#</th>
                            <th>Nombre </th>
                            <th>Apellido</th>
                            <th>Documento</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Ciudad</th>
                            <th>Acciones</th>

                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="contenido"></tbody>

                    <tr v-for="prof, i in profesores" key="prof.id">
                        <td>{{ (i + 1) }}</td>
                        <td>{{ prof.nombre }}</td>
                        <td>{{ prof.apellido }}</td>
                        <td>{{ prof.documento }}</td>
                        <td>{{ prof.email }}</td>
                        <td>{{ prof.telefono }}</td>
                        <td>{{ prof.direccion }}</td>
                        <td>{{ prof.ciudad }}</td>
                        <td>
                            <RouterLink :to="{ path:'/profesores/edit/'+prof.id }" class="btn btn-warning">
                                <i class="fa-solid fa-edit"></i>
                            </RouterLink>&nbsp;
                            <button class="btn" v-on:click="eliminar(prof.id,prof.Nombre)">
                                <i class="fa-solid fa-trash"></i>
                            </button>

                        </td>

                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {confirm_profesor} from '../funciones';


export default {
    data() {
        return {

            profesores: null
        }
    },
    mounted() {
        this.getProfesores();

    },
    methods: {
        getProfesores() {
            axios.get('http://127.0.0.1:8000/api/profesores').then(
                response => (
                    this.profesores = response.data
                )
            );

        },
        eliminar(id,nombre){
            confirm_profesor(id,nombre);
        }
    }
}
       
</script>


