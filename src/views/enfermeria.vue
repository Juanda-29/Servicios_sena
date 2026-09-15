<template>
  <ServicioDetalle
    nombre="Enfermería"
    :imagen-fachada="fachada"
    descripcion="En enfermería se ofrecen todos los servicios de promoción y prevención de enfermedades, así como atención básica en primeros auxilios para aprendices, instructores y visitantes del centro."
    :horarios="horarios"
    telefono="+57 321 415 3995"
    :encargado="encargado"
  />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/img/enfermeria.png'
import fotoJefe from '../assets/img/enfermeriajefe.jpg'

const horarios = [
  { dia: 'Lunes a viernes', horario: '6:30 am - 10:30 am / 4:00 pm - 8:00 pm' }
]

const encargado = {
  foto: fotoJefe,
  nombre: 'María Fernanda Gómez Reyes',
  cargo: 'Enfermera',
  correo: 'Mafecita1118@gmail.com'
}
</script>
