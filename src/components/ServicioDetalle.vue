<template>
  <q-page class="sena-page">

    <div class="contenedor">

      <!-- =========================
           ENCABEZADO
      ========================== -->
      <section class="encabezado">

        <div class="icono-servicio">
          <q-icon name="business" size="30px" />
        </div>

        <h1>{{ nombre }}</h1>

        <p>
          Información, horarios y datos de contacto del servicio
          del Centro Agroturístico SENA.
        </p>

      </section>


      <!-- =========================
           IMAGEN DE LA FACHADA
      ========================== -->
      <q-card class="tarjeta tarjeta-imagen">

        <div class="titulo-imagen">
          <q-icon name="photo" size="22px" />
          <span>Espacio del servicio</span>
        </div>

        <div class="imagen-contenedor">

          <q-img
            :src="imagenFachada"
            class="imagen-fachada"
            fit="contain"
            spinner-color="green"
            :alt="`Fachada de ${nombre}`"
          />

        </div>

      </q-card>


      <!-- =========================
           DESCRIPCIÓN
      ========================== -->
      <q-card class="tarjeta descripcion-card">

        <div class="titulo-seccion">

          <div class="icono-seccion">
            <q-icon name="info" size="23px" />
          </div>

          <div>
            <span>Información</span>
            <h2>Qué ofrece este servicio</h2>
          </div>

        </div>

        <q-separator />

        <p class="descripcion">
          {{ descripcion }}
        </p>

      </q-card>


      <!-- =========================
           INFORMACIÓN
      ========================== -->
      <div class="informacion-grid">

        <!-- HORARIOS -->
        <q-card class="tarjeta informacion-card">

          <div class="titulo-seccion">

            <div class="icono-seccion">
              <q-icon name="schedule" size="23px" />
            </div>

            <div>
              <span>Atención</span>
              <h2>Horarios de atención</h2>
            </div>

          </div>

          <q-separator />

          <q-list class="lista-horarios">

            <q-item
              v-for="(h, i) in horarios"
              :key="i"
              class="horario-item"
            >

              <q-item-section avatar>

                <div class="icono-horario">
                  <q-icon name="access_time" size="19px" />
                </div>

              </q-item-section>

              <q-item-section>

                <q-item-label class="dia">
                  {{ h.dia }}
                </q-item-label>

                <q-item-label caption class="hora">
                  {{ h.horario }}
                </q-item-label>

              </q-item-section>

            </q-item>

          </q-list>

        </q-card>


        <!-- CONTACTO -->
        <q-card class="tarjeta informacion-card">

          <div class="titulo-seccion">

            <div class="icono-seccion">
              <q-icon name="phone" size="23px" />
            </div>

            <div>
              <span>Comunicación</span>
              <h2>Información de contacto</h2>
            </div>

          </div>

          <q-separator />

          <div class="contacto">

            <div class="icono-contacto">
              <q-icon name="call" size="27px" />
            </div>

            <div class="datos-contacto">

              <span>Teléfono</span>

              <strong>
                {{ telefono }}
              </strong>

            </div>

          </div>

        </q-card>

      </div>


      <!-- =========================
           ENCARGADO
      ========================== -->
      <q-card class="tarjeta encargado-card">

        <div class="titulo-seccion">

          <div class="icono-seccion">
            <q-icon name="badge" size="23px" />
          </div>

          <div>
            <span>Personal de atención</span>
            <h2>Encargado del servicio</h2>
          </div>

        </div>

        <q-separator />

        <div class="encargado-contenido">

          <!-- FOTO -->
          <div class="foto-encargado">

            <q-avatar size="135px">

              <img
                :src="encargado.foto"
                :alt="encargado.nombre"
              >

            </q-avatar>

          </div>


          <!-- DATOS -->
          <div class="datos-encargado">

            <h3>
              {{ encargado.nombre }}
            </h3>

            <div class="dato">

              <q-icon
                name="work"
                size="19px"
              />

              <span>
                {{ encargado.cargo }}
              </span>

            </div>

            <div class="dato correo">

              <q-icon
                name="mail"
                size="19px"
              />

              <span>
                {{ encargado.correo }}
              </span>

            </div>

          </div>

        </div>

      </q-card>

    </div>

  </q-page>
</template>


<script setup>

defineProps({

  nombre: {
    type: String,
    required: true
  },

  imagenFachada: {
    type: String,
    required: true
  },

  descripcion: {
    type: String,
    required: true
  },

  horarios: {
    type: Array,
    required: true
  },

  telefono: {
    type: String,
    required: true
  },

  encargado: {
    type: Object,
    required: true
  }

})

</script>


<style scoped>

/* =================================
   PÁGINA
================================= */

.sena-page {
  min-height: 100vh;

  background: #f6f8f5;

  font-family:
    Arial,
    Helvetica,
    sans-serif;

  color: #333;
}


/* =================================
   CONTENEDOR
================================= */

.contenedor {

  width: 100%;

  max-width: 1050px;

  margin: 0 auto;

  padding:
    0 20px 45px;

  box-sizing: border-box;

}


/* =================================
   ENCABEZADO
================================= */

.encabezado {

  text-align: center;

  padding:
    32px 15px 25px;

}


.icono-servicio {

  width: 58px;

  height: 58px;

  margin:
    0 auto 12px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #e5f1e6;

  color: #387442;

}


.encabezado h1 {

  margin: 0;

  color: #28552f;

  font-size: 34px;

  font-weight: 700;

}


.encabezado p {

  max-width: 650px;

  margin:
    10px auto 0;

  color: #777;

  font-size: 15px;

  line-height: 1.6;

}


/* =================================
   TARJETAS
================================= */

.tarjeta {

  background: #fff;

  border:
    1px solid #e2e7e1;

  border-radius: 18px;

  box-shadow:
    0 5px 18px rgba(0, 0, 0, 0.06);

  overflow: hidden;

}


/* =================================
   IMAGEN
================================= */

.tarjeta-imagen {

  margin-bottom: 20px;

}


.titulo-imagen {

  display: flex;

  align-items: center;

  gap: 9px;

  padding:
    17px 22px;

  color: #315e36;

  font-size: 15px;

  font-weight: 700;

  border-bottom:
    1px solid #e8ebe7;

}


.imagen-contenedor {

  width: 100%;

  min-height: 400px;

  padding: 20px;

  box-sizing: border-box;

  display: flex;

  align-items: center;

  justify-content: center;

  background: #b9ceaa;

}


/*
   IMPORTANTE:

   contain hace que la fachada
   se vea COMPLETA y centrada.
*/

.imagen-fachada {

  width: 100%;

  height: 400px;

}


/* Evita que Quasar recorte la imagen */

.imagen-fachada :deep(.q-img__container) {

  display: flex;

  align-items: center;

  justify-content: center;

}


.imagen-fachada :deep(.q-img__image) {

  object-fit: contain !important;

  object-position:
    center center !important;

}


/* =================================
   DESCRIPCIÓN
================================= */

.descripcion-card {

  padding: 25px;

  margin-bottom: 20px;

}


.titulo-seccion {

  display: flex;

  align-items: center;

  gap: 13px;

  margin-bottom: 18px;

}


.titulo-seccion > div:last-child {

  display: flex;

  flex-direction: column;

}


.titulo-seccion span {

  color: #909090;

  font-size: 11px;

  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: .6px;

}


.titulo-seccion h2 {

  margin:
    3px 0 0;

  color: #2e5133;

  font-size: 19px;

  font-weight: 700;

}


.icono-seccion {

  width: 45px;

  height: 45px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 12px;

  background: #e7f1e7;

  color: #3d7041;

}


.descripcion {

  margin:
    20px 0 0;

  color: #5f5f5f;

  font-size: 15px;

  line-height: 1.8;

}


/* =================================
   INFORMACIÓN
================================= */

.informacion-grid {

  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 20px;

  margin-bottom: 20px;

}


.informacion-card {

  padding: 25px;

}


.q-separator {

  background: #e6eae5;

}


/* =================================
   HORARIOS
================================= */

.lista-horarios {

  padding-top: 8px;

}


.horario-item {

  min-height: 70px;

  padding:
    8px 0;

  border-bottom:
    1px solid #eeeeee;

}


.horario-item:last-child {

  border-bottom: none;

}


.icono-horario {

  width: 38px;

  height: 38px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #f0f5ef;

  color: #47744b;

}


.dia {

  color: #333;

  font-size: 15px;

  font-weight: 700;

}


.hora {

  margin-top: 4px;

  color: #777;

  font-size: 14px;

}


/* =================================
   CONTACTO
================================= */

.contacto {

  min-height: 110px;

  display: flex;

  align-items: center;

  gap: 17px;

}


.icono-contacto {

  width: 58px;

  height: 58px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 15px;

  background: #e7f1e7;

  color: #3d7041;

}


.datos-contacto {

  display: flex;

  flex-direction: column;

  gap: 5px;

}


.datos-contacto span {

  color: #929292;

  font-size: 13px;

}


.datos-contacto strong {

  color: #333;

  font-size: 17px;

  font-weight: 700;

}


/* =================================
   ENCARGADO
================================= */

.encargado-card {

  padding: 25px;

}


.encargado-contenido {

  display: flex;

  align-items: center;

  gap: 30px;

  padding:
    25px 5px 5px;

}


.foto-encargado {

  flex-shrink: 0;

}


.foto-encargado .q-avatar {

  border:
    4px solid #e0a458;

  background: #fff;

  box-shadow:
    0 5px 15px rgba(0, 0, 0, .12);

}


.foto-encargado img {

  width: 100%;

  height: 100%;

  object-fit: cover;

  object-position: center;

}


.datos-encargado {

  display: flex;

  flex-direction: column;

  gap: 10px;

}


.datos-encargado h3 {

  margin: 0;

  color: #303030;

  font-size: 21px;

  font-weight: 700;

}


.dato {

  display: flex;

  align-items: center;

  gap: 8px;

  color: #47744b;

  font-size: 14px;

  font-weight: 600;

}


.dato.correo {

  color: #707070;

  font-weight: 400;

}


/* =================================
   TABLET
================================= */

@media (max-width: 800px) {

  .informacion-grid {

    grid-template-columns: 1fr;

  }

  .imagen-contenedor {

    min-height: 350px;

  }

  .imagen-fachada {

    height: 350px;

  }

}


/* =================================
   CELULAR
================================= */

@media (max-width: 600px) {

  .contenedor {

    padding:
      0 12px 35px;

  }


  .encabezado {

    padding:
      23px 10px 20px;

  }


  .encabezado h1 {

    font-size: 29px;

  }


  .encabezado p {

    font-size: 14px;

  }


  .imagen-contenedor {

    min-height: 270px;

    padding: 10px;

  }


  .imagen-fachada {

    height: 270px;

  }


  .descripcion-card,
  .informacion-card,
  .encargado-card {

    padding: 20px;

  }


  .titulo-seccion h2 {

    font-size: 18px;

  }


  .descripcion {

    font-size: 14px;

    line-height: 1.7;

  }


  .encargado-contenido {

    flex-direction: column;

    text-align: center;

    gap: 18px;

  }


  .datos-encargado {

    align-items: center;

  }


  .dato {

    justify-content: center;

  }

}

</style>