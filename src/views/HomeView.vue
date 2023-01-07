<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1 mt-5">
      <div class="table-responsive">
        <RouterLink :to="{path:'/create/'}" class="btn btn-success ml-auto float-end"> Nuevo Estudiante</RouterLink>

        <table class="table table-bordered table-hover">
          <thead>
            
            
            <h1 class="mt-5">Estudiantes</h1>
            <tr>
              <th>#</th>
              <th>Nombre </th>
              <th>Apellido</th>
              <th>Documento</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Ciudad</th>
              <th>Semestre</th>
              <th>Acciones</th>


            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido"></tbody>

          <tr v-for="est, i in estudiantes" key="est.id">
            <td>{{ (i+1) }}</td>
            <td>{{est.nombre}}</td>
            <td>{{est.apellido}}</td>
            <td>{{est.documento}}</td>
            <td>{{est.email}}</td>
            <td>{{est.telefono}}</td>
            <td>{{est.direccion}}</td>
            <td>{{est.ciudad}}</td>
            <td>{{est.semestre}}</td>
            <td>
                            <RouterLink :to="{ path: '/edit/'+est.id }" class="btn btn-warning">
                                <i class="fa-solid fa-edit"></i>
                            </RouterLink>&nbsp;
                            <button class="btn" v-on:click="eliminar(est.id,est.nombre)">
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
import {show_confirm} from '../funciones';
import axios from "axios";

export default {
  data() {
    return {

      estudiantes: null
    }
  },
  mounted() {
    this.getEstudiantes();

  },
  methods: {
    getEstudiantes() {
      axios.get('http://127.0.0.1:8000/api/estudiantes').then(
        response => (
          this.estudiantes = response.data
        )
      );

    },
    eliminar(id,nombre){
            show_confirm(id,nombre);
        }
  }
}
        
</script>


