<template>
  <ServicioDetalle
    nombre="Cafetería SENA"
    :imagen-fachada="fachada"
    descripcion="Espacio acogedor del SENA donde estudiantes, instructores y colaboradores pueden disfrutar de alimentos y bebidas a precios accesibles, en un ambiente agradable y cómodo. Punto de venta y atención al cliente del SENA para el servicio de comidas."
    :horarios="horarios"
    telefono="+57 322 303 8451 · Ficha cocina: 341 0173"
    :encargado="encargado"
  />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/img/cafeteria.jpg'
import fotoJefe from '../assets/img/cafeteriajefe.jpg'

const horarios = [
  { dia: 'Lunes a viernes', horario: '7:00 am - 12:00 m / 1:00 pm - 5:30 pm / 7:00 pm - 9:30 pm' },
  { dia: 'Sábados', horario: '7:30 am - 12:00 m' },
  { dia: 'Domingos y festivos', horario: 'Cerrado' }
]

const encargado = {
  foto: fotoJefe,
  nombre: 'Laura Carreño',
  cargo: 'Coordinadora de Cafetería',
  correo: 'lcarreno@sena.edu.com'
}
</script>
