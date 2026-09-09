<template>
  <q-page class="q-pa-md sena-page">

    <q-img
      :src="imagenFachada"
      class="rounded-borders shadow-3 banner"
      fit="cover"
    >
      <div class="absolute-bottom banner-title">
        <div class="text-h4 text-weight-bold">{{ nombre }}</div>
      </div>
    </q-img>

    <q-card flat bordered class="q-mt-md">
      <q-card-section>
        <div class="text-subtitle1 text-green-9 text-weight-medium q-mb-xs">
          Qué ofrece este servicio
        </div>
        <p class="text-body1 q-mb-none" style="white-space: pre-line">
          {{ descripcion }}
        </p>
      </q-card-section>
    </q-card>

    <div class="row q-col-gutter-md q-mt-none">

      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle1 text-green-9 text-weight-medium q-mb-sm">
              <q-icon name="schedule" size="20px" class="q-mr-xs" />
              Horarios de atención
            </div>
            <q-list separator>
              <q-item v-for="(h, i) in horarios" :key="i" dense>
                <q-item-section>{{ h.dia }}</q-item-section>
                <q-item-section side class="text-grey-8">{{ h.horario }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>

        <q-card flat bordered class="q-mt-md">
          <q-card-section>
            <div class="text-subtitle1 text-green-9 text-weight-medium q-mb-sm">
              <q-icon name="call" size="20px" class="q-mr-xs" />
              Contacto
            </div>
            <div class="text-body1">{{ telefono }}</div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Encargado -->
      <div class="col-12 col-md-6">
        <q-card flat bordered class="full-height">
          <q-card-section class="text-center">
            <div class="text-subtitle1 text-green-9 text-weight-medium q-mb-md">
              <q-icon name="badge" size="20px" class="q-mr-xs" />
              Encargado de atención al cliente
            </div>
            <q-avatar size="110px" class="q-mb-sm">
              <img :src="encargado.foto" :alt="encargado.nombre">
            </q-avatar>
            <div class="text-h6">{{ encargado.nombre }}</div>
            <div class="text-body2 text-grey-8 q-mb-sm">{{ encargado.cargo }}</div>
            <div class="text-body2">
              <q-icon name="mail" size="16px" class="q-mr-xs" />{{ encargado.correo }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineProps({
  nombre: { type: String, required: true },
  imagenFachada: { type: String, required: true },
  descripcion: { type: String, required: true },
  horarios: { type: Array, required: true },
  telefono: { type: String, required: true },
  encargado: { type: Object, required: true }
})
</script>

<style scoped>
.sena-page {
  max-width: 1000px;
  margin: 0 auto;
}
.banner {
  height: 260px;
}
.banner-title {
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.65) 100%);
  color: #fff;
}
</style>
