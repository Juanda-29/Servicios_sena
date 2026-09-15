/**
 * Fuente única de información de los servicios del centro.
 * Las vistas y el menú lateral leen de aquí, así la información
 * se actualiza en un solo lugar.
 */

import enfermeriaFachada from '../assets/img/enfermeria.png'
import enfermeriaJefe from '../assets/img/enfermeriajefe.jpg'
import bienestarFachada from '../assets/img/bienestar.jpg'
import bienestarJefe from '../assets/img/bienestarjefe.jpg'
import bibliotecaFachada from '../assets/img/biblioteca.jpg'
import bibliotecaJefe from '../assets/img/bibliotecajefe.jpg'
import cafeteriaFachada from '../assets/img/cafeteria.jpg'
import cafeteriaJefe from '../assets/img/cafeteriajefe.jpg'
import coordinacionFachada from '../assets/img/coordinacion.jpg'
import coordinacionJefe from '../assets/img/coordinacionjefe.jpg'

export const servicios = [
  {
    id: 'enfermeria',
    ruta: '/',
    nombre: 'Enfermería',
    resumen: 'Atención en salud y primeros auxilios',
    icono: 'local_hospital',
    imagen: enfermeriaFachada,
    ubicacion: 'Sede principal · Primer piso, bloque administrativo',
    descripcion:
      'El servicio de enfermería atiende urgencias menores y presta primeros auxilios a aprendices, instructores y visitantes durante la jornada de formación. También coordina las jornadas de promoción de la salud y prevención de la enfermedad que se realizan en el centro.',
    ofrece: [
      'Primeros auxilios y valoración inicial',
      'Toma de signos vitales',
      'Remisión a la EPS cuando el caso lo requiere',
      'Jornadas de promoción y prevención',
      'Asesoría en salud sexual y reproductiva'
    ],
    horarios: [
      { dia: 'Lunes a viernes', horario: '6:30 a. m. – 10:30 a. m.' },
      { dia: 'Lunes a viernes (tarde)', horario: '4:00 p. m. – 8:00 p. m.' }
    ],
    telefono: '+57 321 415 3995',
    nota: 'En caso de emergencia grave, comunícate primero con la línea 123 y luego informa a enfermería.',
    encargado: {
      foto: enfermeriaJefe,
      nombre: 'María Fernanda Gómez Reyes',
      cargo: 'Enfermera del centro',
      correo: 'mfgomez@sena.edu.co'
    }
  },

  {
    id: 'bienestar',
    ruta: '/bienestar',
    nombre: 'Bienestar al Aprendiz',
    resumen: 'Apoyos, cultura, deporte y acompañamiento',
    icono: 'volunteer_activism',
    imagen: bienestarFachada,
    ubicacion: 'Sede principal y sede Unisangil',
    descripcion:
      'Bienestar al Aprendiz acompaña a los aprendices durante toda su etapa de formación para favorecer su permanencia y su desarrollo integral. Su trabajo sigue los lineamientos de la Política Nacional Integral de Bienestar al Aprendiz: cultura como generadora de identidad e inclusión, promoción de la salud física y mental, fortalecimiento de habilidades para la vida, deporte y aprovechamiento del tiempo libre, y apoyo a las expresiones artísticas.\n\nDesde esta área también se gestionan los apoyos socioeconómicos, las monitorías y los espacios de liderazgo y representación de los aprendices.',
    ofrece: [
      'Apoyos de sostenimiento regular y FIC',
      'Apoyos de alimentación, transporte y medios tecnológicos',
      'Monitorías académicas y sociales',
      'Actividades culturales, deportivas y recreativas',
      'Acompañamiento psicosocial y orientación',
      'Formación en liderazgo y representación estudiantil'
    ],
    horarios: [
      { dia: 'Sede principal', horario: '6:30 a. m. – 10:30 a. m. / 4:00 p. m. – 8:00 p. m.' },
      { dia: 'Sede Unisangil', horario: '8:00 a. m. – 12:00 m. / 4:00 p. m. – 8:00 p. m.' },
      { dia: 'Apoyos socioeconómicos', horario: '8:00 a. m. – 12:00 m. / 2:00 p. m. – 6:00 p. m.' },
      { dia: 'Líder de Bienestar', horario: '7:30 a. m. – 12:00 m. / 2:00 p. m. – 6:00 p. m.' }
    ],
    telefono: '+57 317 637 7670',
    nota: 'Las convocatorias de apoyos se publican al inicio de cada trimestre. Consulta las fechas con tu vocero de ficha.',
    encargado: {
      foto: bienestarJefe,
      nombre: 'María Adela Arenas Mejía',
      cargo: 'Líder de Bienestar al Aprendiz',
      correo: 'mdarenas@sena.edu.co'
    }
  },

  {
    id: 'biblioteca',
    ruta: '/biblioteca',
    nombre: 'Biblioteca',
    resumen: 'Consulta, préstamos y apoyo a la investigación',
    icono: 'menu_book',
    imagen: bibliotecaFachada,
    ubicacion: 'Sede principal · Bloque de formación',
    descripcion:
      'La biblioteca del centro pone a disposición de aprendices e instructores el material bibliográfico físico y digital necesario para la formación. Además del préstamo, ofrece acompañamiento en la búsqueda de información y en el uso de las bases de datos institucionales.',
    ofrece: [
      'Consulta en sala y préstamo a domicilio',
      'Préstamo interbibliotecario (PIP)',
      'Acceso a equipos de cómputo e internet',
      'Asesoría en búsqueda y citación de información',
      'Capacitación en el uso del catálogo bibliográfico',
      'Talleres de lectura y escritura'
    ],
    horarios: [
      { dia: 'Lunes a viernes', horario: '7:00 a. m. – 10:00 a. m.' }
    ],
    telefono: '+57 312 584 8032',
    nota: 'Para el préstamo a domicilio debes presentar el carné vigente de aprendiz o funcionario.',
    encargado: {
      foto: bibliotecaJefe,
      nombre: 'Yudith Milagros Martínez Bautista',
      cargo: 'Bibliotecaria',
      correo: 'ymmartinez@sena.edu.co'
    }
  },

  {
    id: 'cafeteria',
    ruta: '/cafeteria',
    nombre: 'Cafetería',
    resumen: 'Alimentación y punto de encuentro del centro',
    icono: 'restaurant',
    imagen: cafeteriaFachada,
    ubicacion: 'Sede principal · Zona central del campus',
    descripcion:
      'La cafetería ofrece desayunos, almuerzos, refrigerios y bebidas a precios accesibles para la comunidad educativa. Funciona además como ambiente de práctica para los aprendices del programa de cocina, quienes participan en la preparación y el servicio bajo la supervisión de sus instructores.',
    ofrece: [
      'Desayuno, almuerzo y cena',
      'Refrigerios y bebidas',
      'Menú del día a precio institucional',
      'Espacio de práctica para aprendices de cocina',
      'Atención a eventos del centro por solicitud previa'
    ],
    horarios: [
      { dia: 'Lunes a viernes', horario: '7:00 a. m. – 12:00 m. / 1:00 p. m. – 5:30 p. m.' },
      { dia: 'Lunes a viernes (noche)', horario: '7:00 p. m. – 9:30 p. m.' },
      { dia: 'Sábados', horario: '7:30 a. m. – 12:00 m.' },
      { dia: 'Domingos y festivos', horario: 'Cerrado' }
    ],
    telefono: '+57 322 303 8451',
    nota: 'Ficha de cocina: 341 0173. Los pedidos para eventos se solicitan con tres días de anticipación.',
    encargado: {
      foto: cafeteriaJefe,
      nombre: 'Laura Carreño',
      cargo: 'Coordinadora de Cafetería',
      correo: 'lcarreno@sena.edu.co'
    }
  },

  {
    id: 'coordinacion',
    ruta: '/coordinacion',
    nombre: 'Coordinación Académica',
    resumen: 'Novedades, programación y ambientes de formación',
    icono: 'assignment_ind',
    imagen: coordinacionFachada,
    ubicacion: 'Sede principal · Bloque administrativo, segundo piso',
    descripcion:
      'La Coordinación Académica gestiona las novedades de los aprendices de formación titulada —retiros, traslados, aplazamientos y casos de deserción— y acompaña el seguimiento de cada ficha. También organiza la programación de los instructores y verifica que los ambientes de formación estén en condiciones adecuadas para el desarrollo de las clases.',
    ofrece: [
      'Trámite de retiros, traslados y aplazamientos',
      'Seguimiento a la deserción y a la permanencia',
      'Programación de instructores y ambientes',
      'Asignación y verificación de espacios de formación',
      'Orientación sobre el reglamento del aprendiz'
    ],
    horarios: [
      { dia: 'Lunes a viernes', horario: '7:30 a. m. – 12:00 m.' }
    ],
    telefono: '+57 316 678 3027',
    nota: 'Los trámites de novedades se radican con el formato firmado por el instructor líder de la ficha.',
    encargado: {
      foto: coordinacionJefe,
      nombre: 'Luis Carlos Reina',
      cargo: 'Coordinador Académico',
      correo: 'lreina@sena.edu.co'
    }
  }
]

export const menu = [
  ...servicios.map(s => ({
    label: s.nombre,
    caption: s.resumen,
    to: s.ruta,
    icon: s.icono
  })),
  {
    label: 'Acerca del proyecto',
    caption: 'El centro y el equipo',
    to: '/acerca',
    icon: 'info'
  }
]

export function obtenerServicio (id) {
  return servicios.find(s => s.id === id)
}
