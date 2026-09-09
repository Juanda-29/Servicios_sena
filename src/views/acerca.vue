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
          El Centro Agroturístico SENA forma técnicos y tecnólogos en áreas
          agropecuarias, ambientales y de turismo, combinando aulas, unidades
          productivas y prácticas de campo. A través de esta aplicación
          reunimos en un solo lugar la información de los servicios de
          bienestar, enfermería, biblioteca, cafetería y coordinación
          académica que acompañan el día a día de aprendices e instructores.
        </p>
        <p class="text-body1 q-mb-none">
          Esta aplicación fue desarrollada como proyecto de formación,
          buscando facilitar el acceso a horarios, contactos y encargados de
          cada servicio del centro desde el celular o el computador.
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
  rol: 'Desarrollador Frontend',
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
