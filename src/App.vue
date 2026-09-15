<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header-principal">
      <q-toolbar class="q-px-lg barra-header">
        <q-btn dense flat round icon="menu" class="boton-menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="titulo-header">
          <q-avatar size="48px" class="logo-sena">
            <img alt="Logo SENA" src="./assets/img/Logosimbolo-SENA-PRINCIPAL.png">
          </q-avatar>
          <span>Centro Agroturístico SENA</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
      class="drawer-principal"
    >
      <div class="encabezado-drawer">
        <q-avatar size="62px" class="logo-drawer">
          <img src="./assets/img/Logosimbolo-SENA-PRINCIPAL.png" alt="Logo SENA">
        </q-avatar>
        <div class="texto-drawer">
          <div class="titulo-drawer">Servicios</div>
          <div class="subtitulo-drawer">Centro Agroturístico</div>
        </div>
      </div>

      <q-list class="lista-servicios">
        <q-item
          v-for="item in servicios"
          :key="item.to"
          clickable
          v-ripple
          :to="item.to"
          exact
          active-class="servicio-activo"
          class="servicio-item"
        >
          <q-item-section avatar>
            <q-avatar size="40px" class="icono-servicio">
              <q-icon :name="item.icon" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="texto-servicio">{{ item.label }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="chevron_right" size="20px" class="flecha-servicio" />
          </q-item-section>
        </q-item>
      </q-list>

      <div class="footer-drawer">
        <q-icon name="eco" size="20px" />
        <span>Servicio y bienestar</span>
      </div>
    </q-drawer>

    <q-page-container class="contenido-principal">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const servicios = [
  { label: 'Inicio', to: '/', icon: 'home' },
  { label: 'Enfermería', to: '/enfermeria', icon: 'local_hospital' },
  { label: 'Bienestar', to: '/bienestar', icon: 'favorite' },
  { label: 'Biblioteca', to: '/biblioteca', icon: 'menu_book' },
  { label: 'Cafetería', to: '/cafeteria', icon: 'restaurant' },
  { label: 'Coordinación', to: '/coordinacion', icon: 'groups' },
  { label: 'Acerca de', to: '/acerca', icon: 'info' }
]
</script>

<style scoped>
.header-principal {
  background: linear-gradient(120deg,#2f5233,#4f7942 55%,#7a9d54);
  color: #fff;
  box-shadow: 0 4px 14px rgba(47,82,51,.35);
}
.barra-header {
  min-height: 64px;
  position: relative;
}
.boton-menu {
  color: #fff;
  position: relative;
  z-index: 10;
}
.titulo-header {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: .3px;
}
.logo-sena {
  background: #fff;
  padding: 0;
  border: 2px solid #e0a458;
  box-shadow: 0 3px 12px rgba(0,0,0,.22);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.logo-sena img,
.logo-drawer img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  display: block;
}
.drawer-principal {
  background: #fbf7ee;
}
.encabezado-drawer {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 25px 20px;
  background: linear-gradient(135deg,#2f5233,#3f6b3f);
  color: #fff;
}
.logo-drawer {
  background: #fff;
  padding: 0;
  border: 2px solid #e0a458;
  box-shadow: 0 3px 12px rgba(0,0,0,.25);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.texto-drawer {
  display: flex;
  flex-direction: column;
}
.titulo-drawer {
  font-size: 22px;
  font-weight: 700;
}
.subtitulo-drawer {
  margin-top: 3px;
  font-size: 15px;
  opacity: .8;
  color: #dce113;
}
.lista-servicios {
  padding: 18px 12px;
}
.servicio-item {
  min-height: 58px;
  margin-bottom: 10px;
  border-radius: 14px;
  background: #fff;
  color: #2f5233;
  border: 1px solid #e6dfc9;
  transition: transform .2s ease,box-shadow .2s ease,background .2s ease,border-color .2s ease;
}
.servicio-item:hover {
  transform: translateX(6px) scale(1.01);
  box-shadow: 0 6px 16px rgba(47,82,51,.18);
  background: #f4f0e2;
  border-color: #e0a458;
}
.icono-servicio {
  background: #eaf2e6;
  color: #4f7942;
}
.texto-servicio {
  font-size: 15px;
  font-weight: 600;
}
.flecha-servicio {
  color: #c98a3a;
}
.servicio-activo {
  background: linear-gradient(135deg,#2f5233,#4f7942) !important;
  color: #fff !important;
  border-color: #e0a458;
  box-shadow: 0 6px 18px rgba(47,82,51,.35);
}
.servicio-activo .icono-servicio {
  background: #fff;
  color: #2f5233;
}
.servicio-activo .flecha-servicio {
  color: #ffe1a8;
}
.footer-drawer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 16px;
  font-size: 12px;
  font-weight: 600;
  color: #6b7c5e;
  border-top: 1px solid #e6dfc9;
  background: #f4f0e2;
}
.contenido-principal {
  background: #fbf9f2;
}
@media (max-width:600px) {
  .barra-header {
    min-height: 58px;
  }
  .titulo-header {
    font-size: 17px;
    gap: 9px;
  }
  .logo-sena {
    width: 40px;
    height: 40px;
  }
  .encabezado-drawer {
    padding: 20px 16px;
  }
}
@media (max-width:400px) {
  .titulo-header {
    font-size: 15px;
    gap: 7px;
  }
  .logo-sena {
    width: 36px;
    height: 36px;
  }
}
</style>