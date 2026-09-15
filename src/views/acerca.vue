<template>
  <q-page class="acerca-page">
    <div class="contenedor">
      <section class="encabezado">
        <div class="icono-encabezado">
          <q-icon name="info" size="30px" />
        </div>
        <h1>Acerca de</h1>
        <p>Conoce un poco más sobre el Centro Agroturístico SENA y los servicios disponibles.</p>
      </section>

      <q-card class="tarjeta tarjeta-imagen">
        <div class="titulo-imagen">
          <q-icon name="photo" size="22px" />
          <span>Centro Agroturístico SENA</span>
        </div>
        <div class="imagen-contenedor">
          <q-img :src="hero" class="imagen-centro" fit="contain" alt="Centro Agroturístico SENA" />
        </div>
      </q-card>

      <q-card class="tarjeta informacion-card">
        <div class="titulo-seccion">
          <div class="icono-seccion">
            <q-icon name="school" size="23px" />
          </div>
          <div>
            <span>Información</span>
            <h2>Sobre el centro</h2>
          </div>
        </div>
        <q-separator />
        <div class="texto-contenido">
          <p>El Centro Agroturístico SENA ofrece formación en diferentes áreas relacionadas con el sector agropecuario, ambiental y turístico. En sus instalaciones los aprendices cuentan con espacios para desarrollar sus actividades académicas y prácticas.</p>
          <p>El centro también cuenta con diferentes servicios que apoyan a los aprendices, instructores y demás integrantes de la comunidad educativa, como Enfermería, Bienestar, Biblioteca, Cafetería y Coordinación.</p>
        </div>
      </q-card>

      <q-card class="tarjeta servicios-card">
        <div class="titulo-seccion">
          <div class="icono-seccion">
            <q-icon name="apps" size="23px" />
          </div>
          <div>
            <span>Servicios</span>
            <h2>Servicios disponibles</h2>
          </div>
        </div>
        <q-separator />
        <div class="servicios-grid">
          <div class="servicio">
            <div class="servicio-icono"><q-icon name="local_hospital" size="23px" /></div>
            <span>Enfermería</span>
          </div>
          <div class="servicio">
            <div class="servicio-icono"><q-icon name="favorite" size="23px" /></div>
            <span>Bienestar</span>
          </div>
          <div class="servicio">
            <div class="servicio-icono"><q-icon name="menu_book" size="23px" /></div>
            <span>Biblioteca</span>
          </div>
          <div class="servicio">
            <div class="servicio-icono"><q-icon name="restaurant" size="23px" /></div>
            <span>Cafetería</span>
          </div>
          <div class="servicio">
            <div class="servicio-icono"><q-icon name="groups" size="23px" /></div>
            <span>Coordinación</span>
          </div>
        </div>
      </q-card>

      <q-card class="tarjeta desarrollador-card">
        <div class="titulo-seccion">
          <div class="icono-seccion">
            <q-icon name="code" size="23px" />
          </div>
          <div>
            <span>Proyecto</span>
            <h2>Desarrollador</h2>
          </div>
        </div>
        <q-separator />
        <div class="desarrollador-contenido">
          <q-avatar size="120px" class="foto-desarrollador">
            <img :src="desarrolladora.foto" :alt="desarrolladora.nombre">
          </q-avatar>
          <div class="datos-desarrollador">
            <h3>{{ desarrolladora.nombre }}</h3>
            <div class="dato rol">
              <q-icon name="computer" size="19px" />
              <span>{{ desarrolladora.rol }}</span>
            </div>
            <div class="dato correo">
              <q-icon name="mail" size="19px" />
              <span>{{ desarrolladora.correo }}</span>
            </div>
          </div>
        </div>
      </q-card>

      <div class="pie">
        <q-icon name="eco" size="20px" />
        <span>CENTRO AGROTURÍSTICO SENA</span>
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
  min-height: 100vh;
  background: #f6f8f5;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
}
.contenedor {
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 20px 40px;
  box-sizing: border-box;
}
.encabezado {
  text-align: center;
  padding: 30px 15px 22px;
}
.icono-encabezado {
  width: 55px;
  height: 55px;
  margin: 0 auto 10px;
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
  font-size: 32px;
}
.encabezado p {
  max-width: 650px;
  margin: 8px auto 0;
  color: #777;
  font-size: 15px;
}
.tarjeta {
  background: #fff;
  border: 1px solid #e2e7e1;
  border-radius: 18px;
  box-shadow: 0 5px 18px rgba(0,0,0,.06);
  overflow: hidden;
  margin-bottom: 18px;
}
.titulo-imagen {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 20px;
  color: #315e36;
  font-size: 15px;
  font-weight: 700;
  border-bottom: 1px solid #e8ebe7;
}
.imagen-contenedor {
  width: 100%;
  height: 380px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b9ceaa;
  box-sizing: border-box;
}
.imagen-centro {
  width: 100%;
  height: 100%;
}
.imagen-centro :deep(.q-img__image) {
  object-fit: contain !important;
  object-position: center !important;
}
.informacion-card,
.servicios-card,
.desarrollador-card {
  padding: 23px;
}
.titulo-seccion {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
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
}
.titulo-seccion h2 {
  margin: 3px 0 0;
  color: #2e5133;
  font-size: 19px;
}
.icono-seccion {
  width: 43px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: #e7f1e7;
  color: #3d7041;
}
.texto-contenido {
  padding-top: 16px;
}
.texto-contenido p {
  margin: 0 0 14px;
  color: #5f5f5f;
  font-size: 15px;
  line-height: 1.7;
}
.texto-contenido p:last-child {
  margin-bottom: 0;
}
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 12px;
  padding-top: 18px;
}
.servicio {
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid #e4e9e3;
  border-radius: 13px;
  background: #fafcf9;
  text-align: center;
}
.servicio-icono {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #e7f1e7;
  color: #3d7041;
}
.servicio span {
  color: #444;
  font-size: 14px;
  font-weight: 700;
}
.desarrollador-contenido {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 22px 5px 5px;
}
.foto-desarrollador {
  flex-shrink: 0;
  border: 4px solid #e0a458;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,.12);
}
.foto-desarrollador img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.datos-desarrollador {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.datos-desarrollador h3 {
  margin: 0;
  color: #303030;
  font-size: 21px;
}
.dato {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}
.rol {
  color: #47744b;
  font-weight: 600;
}
.correo {
  color: #707070;
}
.pie {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  color: #6f776f;
  font-size: 13px;
}

</style>