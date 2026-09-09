<template>
  <ServicioDetalle
    nombre="Coordinación Académica"
    :imagen-fachada="fachada"
    descripcion="La Coordinación Académica apoya el tema de novedades de los aprendices: retiros, deserción, traslados y aplazamientos correspondientes a la formación titulada del SENA. También apoya la programación de los instructores para la formación y la logística de los ambientes, verificando que se encuentren en óptimas condiciones."
    :horarios="horarios"
    telefono="3166783027"
    :encargado="encargado"
  />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/img/coordinacion.jpg'
import fotoJefe from '../assets/img/coordinacionjefe.jpg'

const horarios = [
  { dia: 'Lunes a viernes', horario: '7:30 am - 12:00 m' }
]

const encargado = {
  foto: fotoJefe,
  nombre: 'Luis Carlos Reina',
  cargo: 'Coordinador Académico',
  correo: 'lreinas@sena.edu.com'
}
</script>
