<template>
  <q-page class="q-pa-md acerca-page">

    <!-- Hero del centro -->
    <q-img :src="hero" class="rounded-borders shadow-3 banner" fit="cover">
      <div class="absolute-bottom banner-title">
        <div class="text-h4 text-weight-bold">Centro Agroturístico SENA</div>
      </div>
    </q-img>

    <!-- Info del centro -->
    <q-card flat bordered class="q-mt-md">
      <q-card-section>
        <div class="text-subtitle1 text-green-9 text-weight-medium q-mb-xs">
          Sobre el centro
        </div>
        <p class="text-body1">
         El Centro Agroturístico SENA es un espacio de formación que prepara técnicos y tecnólogos en diferentes áreas relacionadas con el sector agropecuario, ambiental y turístico. Su formación combina el aprendizaje en las aulas con actividades prácticas, unidades productivas y experiencias de campo, permitiendo que los aprendices desarrollen conocimientos y habilidades para su vida laboral. Esta aplicación tiene como propósito reunir en un solo lugar la información de los principales servicios que hacen parte de la comunidad educativa. Aquí se puede consultar información sobre Bienestar, Enfermería, Biblioteca, Cafetería y Coordinación Académica, facilitando el acceso a horarios, servicios, información de contacto y otros datos importantes.De esta manera, la aplicación busca brindar una herramienta sencilla, organizada y fácil de utilizar para que aprendices e instructores puedan encontrar rápidamente la información que necesitan durante su día a día en el Centro Agroturístico.

        </p>
        <p class="text-body1 q-mb-none">
Esta aplicación fue desarrollada como parte de un proyecto de formación, con el propósito de facilitar el acceso a la información y a los diferentes servicios del Centro Agroturístico SENA. A través de ella, los aprendices e instructores pueden consultar de manera rápida y sencilla los horarios, datos de contacto y responsables de cada área.
La plataforma puede ser utilizada desde el celular o el computador, permitiendo tener en un solo lugar información sobre servicios como Bienestar, Enfermería, Biblioteca, Cafetería y Coordinación Académica. De esta manera, se busca mejorar la organización y facilitar la consulta de información importante para la comunidad educativa.

        </p>
      </q-card-section>
    </q-card>

    <!-- Equipo desarrollador -->
    <div class="text-subtitle1 text-green-9 text-weight-medium q-mt-lg q-mb-sm">
      Equipo desarrollador
    </div>

    <div class="row justify-center">
      <div class="col-12 col-sm-6 col-md-4">
        <q-card flat bordered class="text-center">
          <q-card-section>
            <q-avatar size="90px" class="q-mb-sm">
              <img :src="desarrolladora.foto" :alt="desarrolladora.nombre">
            </q-avatar>
            <div class="text-h6">{{ desarrolladora.nombre }}</div>
            <div class="text-body2 text-grey-8 q-mb-xs">{{ desarrolladora.rol }}</div>
            <div class="text-body2">
              <q-icon name="mail" size="16px" class="q-mr-xs" />{{ desarrolladora.correo }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import hero from '../assets/img/senasangil.jpg'
import fotoDev from '../assets/img/avatar.jpg'

const desarrolladora = {
  foto: fotoDev,
  nombre: 'Juan David Castro Rojas',
  rol: 'Desarrollador de esta pagina web',
  correo: 'juandavidjr04@gmail.com'
}
</script>

<style scoped>
.acerca-page { 
  max-width: 1000px;
  margin: 0 auto;
}
.banner {
  height: 220px;
}
.banner-title {
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.65) 100%);
  color: #fff;
}
</style>
