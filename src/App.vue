<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success navbar-dark pl-5" >
    <router-link to="/" class="navbar-brand" >--Universidad Psicol</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link active" >Estudiantes <span
            class="sr-only">(current)</span></router-link>
        <router-link to="/profesores" class="nav-item nav-link active" >Profesores</router-link>
        <router-link to="/materias" class="nav-item nav-link active" >Materias</router-link>

      </div>
    </div>
  </nav>

  <div class="container-fluid"></div>
  <router-view />
</template>

