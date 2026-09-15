<template>
  <ServicioDetalle
    nombre="Biblioteca"
    :imagen-fachada="fachada"
    descripcion="La biblioteca ofrece consultas en sala, préstamos a domicilio, préstamo interbibliotecario (PIP), talleres de lectura y capacitaciones, acceso a TIC, asesorías en búsqueda de información y asesorías para el uso adecuado del catálogo bibliográfico."
    :horarios="horarios"
    telefono="+57 312 584 8032"
    :encargado="encargado"
  />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/img/biblioteca.jpg'
import fotoJefe from '../assets/img/bibliotecajefe.jpg'

const horarios = [
  { dia: 'Lunes a viernes', horario: '7:00 am - 10:00 am' }
]

const encargado = {
  foto: fotoJefe,
  nombre: 'Yudith Milagros Martínez Bautista',
  cargo: 'Bibliotecaria',
  correo: 'ymmartinez@sena.edu.co'
}
</script>
