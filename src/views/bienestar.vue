<template>
  <ServicioDetalle
    nombre="Bienestar al Aprendiz"
    :imagen-fachada="fachada"
    descripcion="Bienestar al Aprendiz es una estrategia institucional para contribuir a la permanencia de los aprendices en su proceso formativo. Los servicios que presta están alineados con los objetivos estratégicos y operativos de la Política Nacional Integral de Bienestar al Aprendiz: el reconocimiento de la cultura como creadora de identidad, generadora de inclusión y catalizadora de diversidad; la generación de prácticas de prevención de la enfermedad y promoción de la salud física y mental mediante la gestión con entidades competentes; el fortalecimiento de habilidades blandas y para la vida; el deporte, la actividad física y el aprovechamiento del tiempo libre como elementos de la formación profesional integral; y la promoción de expresiones artísticas de los aprendices.

Además, desde Bienestar al Aprendiz se gestionan los apoyos socioeconómicos (sostenimiento regular, FIC, medios tecnológicos, alimentación y transporte), las monitorías, y el fortalecimiento y ejercicio del liderazgo."
    :horarios="horarios"
    telefono="+57 317 637 7670"
    :encargado="encargado"
  />
</template>

<script setup>
import ServicioDetalle from '../components/ServicioDetalle.vue'
import fachada from '../assets/img/bienestar.jpg'
import fotoJefe from '../assets/img/bienestarjefe.jpg'

const horarios = [
  { dia: 'Sede Principal', horario: '6:30 am - 10:30 am / 4:00 pm - 8:00 pm' },
  { dia: 'Sede Unisangil', horario: '8:00 am - 12:00 m / 4:00 pm - 8:00 pm' },
  { dia: 'Apoyos socioeconómicos', horario: '8:00 am - 12:00 m / 2:00 pm - 6:00 pm' },
  { dia: 'Líder de Bienestar al Aprendiz', horario: '7:30 am - 12:00 m / 2:00 pm - 6:00 pm' }
]

const encargado = {
  foto: fotoJefe,
  nombre: 'María Adela Arenas Mejía',
  cargo: 'Líder de Bienestar al Aprendiz',
  correo: 'mdarenas@sena.edu.com'
}
</script>
