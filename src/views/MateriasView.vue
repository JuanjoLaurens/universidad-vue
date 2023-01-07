<template>
    <div class="row">
        <div class="col-lg-10 offset-lg-1 mt-5">
        <RouterLink :to="{path:'/crearmateria/'}" class="btn btn-success ml-auto float-end"> Nueva Materia</RouterLink>

            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <h1>Materias</h1>
                        <tr>
                            <th>#</th>
                            <th>Descripcion </th>
                            <th>Nombre</th>
                            <th>Creditos</th>
                            <th>Area de Conocimiento</th>
                            <th>Opciones</th>
                            <th>Acciones</th>

                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="contenido"></tbody>

                    <tr v-for="mate, i in materias" key="mate.id">
                        <td>{{ (i + 1) }}</td>
                        <td>{{ mate.descripcion }}</td>
                        <td>{{ mate.nombre }}</td>
                        <td>{{ mate.creditos }}</td>
                        <td>{{ mate.area_conocimiento }}</td>
                        <td>{{ mate.opciones }}</td>
                        <td>
                            <RouterLink :to="{ path: 'materias/edit/'+mate.id }" class="btn btn-warning">
                                <i class="fa-solid fa-edit"></i>
                            </RouterLink>&nbsp;
                            <button class="btn" v-on:click="eliminar(mate.id,mate.nombre)">
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
import {show_confirm} from '../funciones';
export default {
    data() {
        return {

            materias: null
        }
    },
    mounted() {
        this.getMaterias();

    },
    methods: {
        getMaterias() {
            axios.get('http://127.0.0.1:8000/api/materias').then(
                response => (
                    this.materias = response.data
                )
            );

        },
        eliminar(id,nombre){
            show_confirm(id,nombre);
        }
    }

}
</script>


