import lunr from "lunr";

// Datos del directorio
export const directoryData = [
  /* dirección general */
  {
    id: "1",
    name: "Hernando García",
    position: "Director General",
    email: "hgarcia@humboldt.org.co",
    image: "img/directorio/direccion/Hernando Garcia Martinez.jpg",
    ciudad: "Bogotá",
    profesion: "Biologo",
  },
  {
    id: "2",
    name: "Germán Andrade",
    position: "Asesor Senior",
    email: "gandrade@humboldt.org.co",
    image: "img/directorio/direccion/German Ignacio Andrade Perez.jpg",
    ciudad: "Bogotá",
    profesion: "Biologo",
  },
  {
    id: "3",
    name: "Ximena Franco",
    position: "Líder",
    email: "xfranco@humboldt.org.co",
    image: "img/directorio/direccion/Ximena Franco Villegas.png",
    ciudad: "Bogotá",
    profesion: "Ingeniería Industrial",
  },
  {
    id: "4",
    name: "Claudia Alfonso",
    position: "Analista Junior",
    email: "secretariadireccion@humboldt.org.co",
    image: "img/directorio/direccion/Claudia Esperanza Alfonso.jpg",
    ciudad: "Bogotá",
    profesion: "Auxiliar contable",
  },
  /* gerencia jurídica */
  {
    id: "5",
    name: "Johanna Gálvis",
    position: "Gerente Jurídica y Cumplimiento",
    email: "jgalvis@humboldt.org.co",
    image: "img/directorio/direccion/Claudia Johanna Galvis Galindo.jpg",
    ciudad: "Cajicá",
    profesion: "Derecho",
  },
  {
    id: "6",
    name: "Carolina Pinto",
    position: "Responsable",
    email: "ppinto@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/juridica/Paola Carolina Pinto Escobar.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería industrial",
  },
  /* auditoria */
  {
    id: "7",
    name: "Erica Pineda",
    position: "Líder Auditoría",
    email: "auditoriainterna@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/auditoria/Erica Johana Pineda Mateus.png",
    ciudad: "Bogotá",
    profesion: "Administración Pública",
  },
  {
    id: "8",
    name: "Lorena Heredia",
    position: "Líder Auditoría",
    email: "auditoriainterna@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/auditoria/Erica Johana Pineda Mateus.png",
    ciudad: "Bogotá",
    profesion: "Contaduría Pública",
  },
  /* asesoría juirídica */
  {
    id: "9",
    name: "Diana Botero",
    position: "Abogada Senior",
    email: "dbotero@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/juridica/Diana Lucia Botero Jerez.jpg",
    ciudad: "Bogotá",
    profesion: "Derecho",
  },
  {
    id: "10",
    name: "Julieth Sastoque",
    position: "Abogada",
    email: "jsastoque@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/juridica/Julieth Sastoque Valbuena.png",
    ciudad: "Bogotá",
    profesion: "Derecho",
  },
  {
    id: "11",
    name: "Nicolas Tapias",
    position: "Abogado",
    email: "ntapias@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/juridica/Nicolas Tapias Schachtebeck.png",
    ciudad: "Bogotá",
    profesion: "Derecho",
  },
  {
    id: "12",
    name: "Maria C. Guerrero",
    position: "Abogada Junior",
    email: "mguerrero@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/juridica/Maria Camila Guerrero Hoyos.png",
    ciudad: "Bogotá",
    profesion: "Derecho",
  },
  {
    id: "13",
    name: "Paula A. Arroyo",
    position: "Abogada Junior",
    email: "parroyo@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/juridica/Paula Andrea Arroyo Triviño.jpeg",
    ciudad: "Bogotá",
    profesion: "Derecho",
  },
  {
    id: "14",
    name: "Ana K. Perico",
    position: "Abogada Junior",
    email: "aperico@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/juridica/Ana Karina Perico Sanchez.png",
    ciudad: "Bogotá",
    profesion: "Derecho",
  },
  {
    id: "15",
    name: "Juan E. Molina",
    position: "Abogado Junior",
    email: "jmolina@humboldt.org.co",
    image:
      "img/directorio/gerencia_juridica/juridica/Juan Esteban Molina Cadena.PNG",
    ciudad: "Bogotá",
    profesion: "Derecho",
  },
  /* Inicia Direccion de conocimiento */
  {
    id: "16",
    name: "Gisele Didier",
    position: "Directora",
    email: "gdidier@humboldt.org.co",
    image: "img/directorio/DICO/Gisele Didier.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "17",
    name: "Maria F. Gómez",
    position: "Líder de Redes",
    email: "mgomez@humboldt.org.co",
    image: "img/directorio/DICO/María Fernanda Gomez Ahumada.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "18",
    name: "Soraya Rozo",
    position: "Especialista Senior",
    email: "srozo@humboldt.org.co",
    image: "img/directorio/DICO/Soraya Milena Rozo Velasco.jpeg",
    ciudad: "Bogotá",
    profesion: "Relaciones Internacionales Y Estudios Políticos",
  },
  {
    id: "19",
    name: "Lina Garcia",
    position: "Inv. Titular 1",
    email: "lgarcia@humboldt.org.co",
    image: "img/directorio/DICO/Lina Marcela Garcia Loaiza.png",
    ciudad: "Pereira - Risaralda",
    profesion: "Biología",
  },
  {
    id: "20",
    name: "Sebastián Beltrán",
    position: "Líder de Operaciones",
    email: "sbeltran@humboldt.org.co",
    image: "img/directorio/DICO/Sebastian Beltran Cruz.png",
    ciudad: "Bogotá",
    profesion: "Ingeniería Industrial",
  },
  {
    id: "21",
    name: "Juan D. Castañeda",
    position: "Analista Senior",
    email: "jcastaneda@humboldt.org.co",
    image: "img/directorio/DICO/Juan David Castañeda Puentes .jpg",
    ciudad: "Cajicá",
    profesion: "Administración De Empresas",
  },
  {
    id: "22",
    name: "Valeria Díaz",
    position: "Auxiliar",
    email: "pdiaz@humboldt.org.co",
    image: "img/directorio/DICO/Paula Valeria Diaz Duarte.jpg",
    ciudad: "Bogotá",
    profesion: "Tecnología En Cartografía",
  },
  {
    id: "23",
    name: "Diana Olivera",
    position: "Auxiliar",
    email: "dolivera@humboldt.org.co",
    image: "img/directorio/DICO/Diana Marcela Olivera Feria.png",
    ciudad: "Bogotá",
    profesion: "Técnico Apoyo Administrativo En Salu",
  },
  {
    id: "24",
    name: "Ana M. Chaparro",
    position: "Auxiliar",
    email: "achaparro@humboldt.org.co",
    image: "img/directorio/DICO/Ana María Chaparro.png",
    ciudad: "Bogotá",
    profesion: "Asistencia Administrativa",
  },
  {
    id: "25",
    name: "Sharom Amórtegui",
    position: "Auxiliar",
    email: "samortegui@humboldt.org.co",
    image: "img/directorio/DICO/Sharom Osmarla Amortegui.jpeg",
    ciudad: "Bogotá",
    profesion: "Administración De Empresas",
  },
  /* Inicia Centro colección y gestión de especies */
  {
    id: "26",
    name: "Carolina Castellanos",
    position: "Gerente de Centro",
    email: "ccastellanos@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/Carolina Castellanos Castro.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "27",
    name: "Hernán Colorado",
    position: "Analista Senior",
    email: "fcolorado@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/Fabio Hernan Colorado.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería De Procesos Industriales",
  },
  {
    id: "28",
    name: "Carolina Gómez",
    position: "Inv. Principal",
    email: "cgomez@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/Maria Carolina Gomez Posada.png",
    ciudad: "Tunja - Boyacá",
    profesion: "Biología",
  },
  {
    id: "29",
    name: "Kevin Borja",
    position: "Inv. Adjunto 2",
    email: "kborja@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/curaduria/Kevin Giancarlo Borja Acosta.jpg",
    ciudad: "Oicatá - Boyacá",
    profesion: "Ingeniería De Sistemas",
  },
  {
    id: "30",
    name: "Bomnierw L Hernández",
    position: "Inv. Asistente 1",
    email: "bhernandez@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/curaduria/Bomnierw Lisefth Hernandez Acosta.png",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "31",
    name: "Eduardo Tovar",
    position: "Inv Asistente 3",
    email: "etovar@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/laboratorio/",
    ciudad: "Cali - Valle",
    profesion: "Biología",
  },
  {
    id: "32",
    name: "Sandra Medina",
    position: "Analista de Inv. 4",
    email: "spmedina@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/laboratorio/Sandra Patricia Medina Saiz.jpg",
    ciudad: "Bogotá",
    profesion: "",
  },
  {
    id: "33",
    name: "Mailyn González",
    position: "Inv. Principal",
    email: "magonzalez@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/genetica/Mailyn Adriana Gonzalez Herrera.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "34",
    name: "Vladimir Sandoval",
    position: "Inv. Adjunto 1",
    email: "jsandoval@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/genetica/Jose Vladimir Sandoval Sierra.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "35",
    name: "Erika García",
    position: "Inv. Adjunto 1",
    email: "egarcia@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/genetica/",
    ciudad: "Bogotá",
    profesion: "Microbiología Industrial",
  },
  {
    id: "36",
    name: "Natalia Trujillo",
    position: "Inv. Adjunto 1",
    email: "ntrujillo@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/genetica/Natalia Trujillo Arias.png",
    ciudad: "Armenia - Quindío",
    profesion: "Biología",
  },
  {
    id: "37",
    name: "María C. Gonzalez",
    position: "Inv. Asistente 3",
    email: "mgonzalez@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/genetica/Maria Claudia Gonzalez Penagos.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "38",
    name: "Yuliana Castañeda",
    position: "Inv. Asistente 1",
    email: "ycastaneda@humboldt.org.co",
    image: "img/directorio/DICO/Sharom Osmarla Amortegui.jpeg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "39",
    name: "Maikel Alvarez",
    position: "Inv. Asistente 1",
    email: "malvarez@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/genetica/Maikel Andres Alvarez.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "40",
    name: "Alejandro Guerrero",
    position: "Inv. Asistente 1",
    email: "jguerrero@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/genetica/Juan Alejandro Guerrero Cupacan.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "41",
    name: "María P. Baptiste",
    position: "Inv. Principal",
    email: "mpbaptiste@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/especies/Maria Piedad Baptiste Espinosa.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "42",
    name: "Carlos Lasso",
    position: "Inv. Titular 2",
    email: "classo@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/especies/Carlos Andres Lasso Alcala.png",
    ciudad: "Bogotá",
    profesion: "Licenciatura En Biología",
  },
  {
    id: "43",
    name: "Maria C. Torres",
    position: "Inv. Adjunto 2",
    email: "ctorres@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/especies/Maria Claudia Torres Romero.png",
    ciudad: "Pereira - Risaralda",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "44",
    name: "Karolina Fierro",
    position: "Inv. Adjunto 1",
    email: "kfierro@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/especies/Karolina Fierro Calderon.png",
    ciudad: "Cali - Valle",
    profesion: "Biología",
  },
  {
    id: "45",
    name: "Germán Torres",
    position: "Inv. Adjunto 1",
    email: "gtorres@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/especies/German Eduardo Torres Morales.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "46",
    name: "Luisa Casas",
    position: "Inv. Asistente 3",
    email: "lcasas@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/especies/Luisa Fernanda Casas Caro.png",
    ciudad: "Armenia - Quindío",
    profesion: "Biología",
  },
  {
    id: "47",
    name: "Samanta Castro",
    position: "Inv. Asistente 1",
    email: "scastro@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/especies/Samanta Castro Sanabria.png",
    ciudad: "Bogotá",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "48",
    name: "Laura Nova",
    position: "Inv. Asistente 1",
    email: "lnova@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/especies/Laura Johanna Nova Leon.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "49",
    name: "Amalia Díaz",
    position: "Inv. Adjunto 2",
    email: "cdiaz@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/herbario/Carmen Amalia Diaz Peña.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  {
    id: "50",
    name: "Daniel Nossa",
    position: "Daniel Nossa",
    email: "dnossa@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/herbario/Daniel Nossa Silva.jpg",
    ciudad: "Chía - Cundinamarca",
    profesion: "Biología",
  },
  {
    id: "51",
    name: "Leidy Y. Vallejo",
    position: "Inv. Asistente 1",
    email: "lvallejo@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/herbario/Leidy Yuliana Vallejo Mayo.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "52",
    name: "Alba Robles",
    position: "Analista de Inv. 4",
    email: "ajrobles@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/herbario/Alba Yaneth Robles Pardo.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Mercadeo Agropecuario",
  },
  {
    id: "53",
    name: "Aura Robles",
    position: "Analista de Inv. 4",
    email: "aerobles@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/herbario/Aura Eugenia Robles Pardo.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "",
  },
  {
    id: "54",
    name: "Mónica Florez",
    position: "Inv. Asistente 3",
    email: "mflorez@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/herbario/Monica Andrea Florez Pulido.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  {
    id: "55",
    name: "Luís M. Leyton",
    position: "Investigador",
    email: "lleyton@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/tejidos/Luis Miguel Leyton Ramos.jpg",
    ciudad: "",
    profesion: "",
  },
  {
    id: "56",
    name: "Gustavo Bravo",
    position: "Curador",
    email: "gbravo@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/avesyhuevos/Gustavo Adolfo Bravo Mora.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "57",
    name: "Andres F. Sierra",
    position: "Inv. Asistente 1",
    email: "asierra@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/avesyhuevos/Andres Felipe Sierra Ricaurte.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "58",
    name: "Socorro Sierra",
    position: "Analista de Inv. 4",
    email: "msierra@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/avesyhuevos/Maria del Socorro Sierra Buitrago.jpg",
    ciudad: "Sáchica - Boyacá",
    profesion: "",
  },
  {
    id: "59",
    name: "Daniela Martinez",
    position: "Inv. Asistente 2",
    email: "dmartinez@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/sonidos/Daniela Martinez Medina.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "60",
    name: "Eliana Barona",
    position: "Inv. Asistente 2",
    email: "ebarona@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/sonidos/Eliana Barona Cortes.png",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  {
    id: "61",
    name: "María P. Toro",
    position: "Investigador",
    email: "mtoro@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/sonidos/Maria Paula Toro Gomez.png",
    ciudad: "Pijao - Quindío",
    profesion: "Biología",
  },
  {
    id: "62",
    name: "Sandra Galeano",
    position: "Inv. Adjunto 2",
    email: "sgaleano@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/anfibiosyreptiles/Sandra Patricia Galeano Muñoz.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "63",
    name: "Khristian Venegas",
    position: "Inv. Asistente 1",
    email: "kvenegas@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/anfibiosyreptiles/Khristian Venegas Valencia.png",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  {
    id: "64",
    name: "María X. García",
    position: "Inv. Asistente 1",
    email: "xgarcia@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/anfibiosyreptiles/Maria Ximena Garcia Gonzalez.png",
    ciudad: "Cali - Valle",
    profesion: "Biología",
  },
  {
    id: "65",
    name: "Carlos Montaña",
    position: "Analista de Inv. 4",
    email: "crmontana@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/anfibiosyreptiles/Carlos Ricardo Montaña Gil.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "",
  },
  {
    id: "66",
    name: "Nicolás Reyes",
    position: "Curador",
    email: "nreyes@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/mamiferos/Nicolas Rafael Reyes Amaya.png",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  {
    id: "67",
    name: "Alejandra Castaño",
    position: "Inv. Asistente 1",
    email: "acastano@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/mamiferos/Alejandra Castaño Rivera.jpg",
    ciudad: "Tuluá - Valle",
    profesion: "Biología",
  },
  {
    id: "68",
    name: "Robinson Sánchez",
    position: "Auxiliar de Inv. 1",
    email: "rsanchez@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/mamiferos/Robinson Fabian Sanchez Letrado.png",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "",
  },
  {
    id: "69",
    name: "Angela Gutierrez",
    position: "Curador",
    email: "agutierrez@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/peces/Angela Liliana Gutierrez Cortes.png",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  {
    id: "70",
    name: "Yuliana Chala",
    position: "Inv. Asistente 1",
    email: "ychala@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/peces/Yuliana Chala Velasquez.png",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  {
    id: "71",
    name: "Jhon Neita",
    position: "Curador",
    email: "jneita@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/insectos/Jhon Cesar Neita Moreno.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "72",
    name: "Diana Espítia",
    position: "Inv. Asistente 1",
    email: "despitia@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/insectos/Diana Patricia Espitia Reina.png",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  {
    id: "73",
    name: "Jenilee Montes",
    position: "Inv. Asistente 1",
    email: "jmontes@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/insectos/Jenilee Maarit Montes Fontalvo.png",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  {
    id: "74",
    name: "Miguel Torres",
    position: "Analista de Inv. 4",
    email: "mtorres@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/insectos/Miguel Angel Torres Pineda.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Obras Civiles",
  },
  {
    id: "75",
    name: "Edwín Torres",
    position: "Analista de Inv. 4",
    email: "etorres@humboldt.org.co",
    image:
      "img/directorio/DICO/colecciones/insectos/Edwin Daniel Torres Pineda.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "",
  },
  {
    id: "76",
    name: "Julián Clavijo",
    position: "Investigador",
    email: "jclavijo@humboldt.org.co",
    image: "img/directorio/DICO/colecciones/insectos/Julián Clavijo Bustos.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Biología",
  },
  /* Centro de Estudio Socio Ecológicos y Cambio Global */
  {
    id: "76",
    name: "José Manuel Ochoa",
    position: "Gerente de Centro",
    email: "jochoa@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/Jose Manuel Ochoa Quintero.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "77",
    name: "Susana Rodríguez",
    position: "Inv. Principal",
    email: "drodriguez@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/Diana Susana Rodriguez Buritica.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "78",
    name: "Julián Gómez",
    position: "Inv. Titular 1",
    email: "jgomez@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/Julian David Gomez Gil.png",
    ciudad: "Bogotá",
    profesion: "Economía",
  },
  {
    id: "79",
    name: "Sandra Peña",
    position: "Analista Senior",
    email: "spena@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/Sandra Patricia Peña Alfonso.jpg",
    ciudad: "Bogotá",
    profesion: "Administración De Empresas",
  },
  {
    id: "80",
    name: "Natalia Norden",
    position: "Inv. Principal",
    email: "nnorden@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/funcionamientoecosistemas/Natalia Norden Medina.png",
    ciudad: "Bogotá",
    profesion: "Licenciatura En Biología",
  },
  {
    id: "81",
    name: "Daniel García",
    position: "Inv. Asistente 3",
    email: "dgarcia@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/funcionamientoecosistemas/Daniel Hernan Garcia Villalobos.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "82",
    name: "Sonia Rodríguez",
    position: "Inv. Asistente 1",
    email: "prodriguez@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/funcionamientoecosistemas/Sonia Paola Rodríguez Martinez.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "83",
    name: "Luís Romero",
    position: "Inv. Asistente 1",
    email: "lromero@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/funcionamientoecosistemas/Luis Hernando Romero Jiménez.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "84",
    name: "Juán Ulloa",
    position: "Inv. Adjunto 1",
    email: "julloa@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/funcionamientoecosistemas/Juan Sebastian Ulloa Chacon.png",
    ciudad: "Cali - Valle",
    profesion: "Ingeniería Electrónica",
  },
  {
    id: "85",
    name: "Fabián Garzón",
    position: "Inv. Asistente 1",
    email: "fgarzon@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/funcionamientoecosistemas/Fabian Camilo Garzon Ramos.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "86",
    name: "Laura Salinas",
    position: "Inv. Asistente 1",
    email: "lsalinas@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/funcionamientoecosistemas/Laura Viviana Salinas Vargas.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "87",
    name: "Nicolas Betancourt",
    position: "Inv. Asistente 1",
    email: "nbetancourtc@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/funcionamientoecosistemas/Nicolas Betancourt Cardona.png",
    ciudad: "Bogotá",
    profesion: "Matemáticas",
  },
  {
    id: "88",
    name: "Bibiana Gómez",
    position: "Inv. Principal",
    email: "bgomezv@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/analisisecosistemas/Bibiana Gomez Valencia.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "89",
    name: "Jennyfer Ruiz",
    position: "Inv. Asistente 2",
    email: "jruiz@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/analisisecosistemas/Jennyfer Ruiz Sanchez.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "90",
    name: "Margarita Roa",
    position: "Inv. Asistente 3",
    email: "mroa@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/analisisecosistemas/Margarita Maria Roa Cubillos.png",
    ciudad: "Bucaramanga - Santander",
    profesion: "Biología",
  },
  {
    id: "91",
    name: "Jorge Amador",
    position: "Inv. Adjunto 1",
    email: "jamador@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/analisisecosistemas/Jorge Armando Amador Moncada.png",
    ciudad: "Bogotá",
    profesion: "Ingeniería Química",
  },
  {
    id: "92",
    name: "Adriana Restrepo",
    position: "Inv. Adjunto 1",
    email: "arestrepo@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/analisisecosistemas/Adriana Restrepo Isaza.jpg",
    ciudad: "La Estrella - Antioquia",
    profesion: "Biología",
  },
  {
    id: "93",
    name: "Ana B. Hurtado",
    position: "Inv. Adjunto 1",
    email: "ahurtado@humboldt.org.c",
    image:
      "img/directorio/DICO/estudiossocioecologicos/analisisecosistemas/Ana Belen Hurtado Martilletti.jpg",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "94",
    name: "Dario Torres",
    position: "Aux. Investigación 2",
    email: "dtorres@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/analisisecosistemas/Dario Javier Torres Guelgua.png",
    ciudad: "Pasto - Nariño",
    profesion: "",
  },
  {
    id: "95",
    name: "Monica Hernandez",
    position: "Inv. Titular 1",
    email: "",
    image: "",
    ciudad: "Bogotá",
    profesion: "Historia",
  },
  {
    id: "96",
    name: "Angélica Díaz",
    position: "Inv. Adjunto 2",
    email: "adiaz@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/aspectoseconomicos/Angelica Paola Diaz Pulido.png",
    ciudad: "Medellín - Antioquia",
    profesion: "Biología",
  },
  {
    id: "97",
    name: "Ana Santos",
    position: "Inv. Adjunto 1",
    email: "asantos@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/aspectoseconomicos/Ana Carolina Santos Rocha.JPG",
    ciudad: "Bogotá",
    profesion: "Ingeniería Civil",
  },
  {
    id: "98",
    name: "Hector Arango",
    position: "Inv. Asistente 1",
    email: "harango@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/aspectoseconomicos/Hector Manuel Arango Martinez.jpg",
    ciudad: "Villa de Leyva - Boyacá",
    profesion: "Villa de Leyva - Boyacá",
  },
  {
    id: "99",
    name: "Oriana Ceballos",
    position: "Investigador",
    email: "oceballos@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/aspectoseconomicos/Oriana de Jesus Ceballos Rivera.jpg",
    ciudad: "Barrancabermeja - Santander",
    profesion: "Barrancabermeja - Santander",
  },
  {
    id: "100",
    name: "Sindy Martinez",
    position: "Inv. Asistente 3",
    email: "smartinez@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/aspectoseconomicos/Sindy Jineth Martinez Callejas.jpeg",
    ciudad: "Bogotá",
    profesion: "Bogotá",
  },
  {
    id: "101",
    name: "Juan S. Sanabria",
    position: "Aux. Investigación 2",
    email: "jsanabria@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/aspectoseconomicos/Juan Sebastian Sanabria Jimenez.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "102",
    name: "Maria L. Palomino",
    position: "Aux. Investigación 2",
    email: "mpalomino@humboldt.org.co",
    image:
      "img/directorio/DICO/estudiossocioecologicos/aspectoseconomicos/María Lucía Palomino Briceño.jpg",
    ciudad: "Piedecuesta - Santander",
    profesion: "Ingeniería Ambiental",
  },
  /* Centro de Estudio Socio Ecológicos y Cambio Global */
  {
    id: "103",
    name: "Felipe García",
    position: "Gerente de Centro",
    email: "fgarcia@humboldt.org.co",
    image: "img/directorio/DICO/economiayfinanzas/Felipe Garcia Cardona.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería Agronómica",
  },
  {
    id: "104",
    name: "Lina Sánchez",
    position: "Analista Senior",
    email: "lmsanchez@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/Lina Marcela Sanchez Giraldo.png",
    ciudad: "Bogotá",
    profesion: "Contaduría Pública",
  },
  {
    id: "105",
    name: "Diana Moreno",
    position: "Analista Senior",
    email: "dmoreno@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/Diana Marcela Moreno Sotelo.jpg",
    ciudad: "Cali - Valle",
    profesion: "Administración de Empresas Comerciales",
  },
  {
    id: "106",
    name: "Nathalia Flórez",
    position: "Inv. Titular 1",
    email: "nflorez@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratorioinnovacion/Nathalia Maria Vanessa Florez Zapata.png",
    ciudad: "Bogotá",
    profesion: "Bacteriología y Laboratorio Clínico",
  },
  {
    id: "107",
    name: "Camila Bernal",
    position: "Inv. Adjunto 1",
    email: "cbernal@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratorioinnovacion/Camila Cristina Bernal Mattos.png",
    ciudad: "",
    profesion: "",
  },
  {
    id: "108",
    name: "Laura Gómez",
    position: "Inv. Asistente 3",
    email: "lgomez@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratorioinnovacion/Laura Paola Gomez Santiago.JPG",
    ciudad: "Bogotá",
    profesion: "Ingeniería Ambiental y Sanitaria",
  },
  {
    id: "109",
    name: "Natalia Sanabria",
    position: "Inv. Asistente 3",
    email: "nsanabria@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratorioinnovacion/Natalia Estefania Sanabria.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería Ambiental",
  },
  {
    id: "110",
    name: "Alejandra Castro",
    position: "Inv. Asistente 3",
    email: "alejandracastro@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratorioinnovacion/Alejandra Castro Correa.jpg",
    ciudad: "Bogotá",
    profesion: "Ecología",
  },
  {
    id: "111",
    name: "Leidy Paola Arce",
    position: "Inv. Adjunto 1",
    email: "larce@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratorioinnovacion/Leidy Paola Arce Castellanos.jpg",
    ciudad: "Bogotá",
    profesion: "Ingeniería Ambiental",
  },
  {
    id: "112",
    name: "Brian Amaya",
    position: "Inv. Asistente 1",
    email: "bamaya@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratorioinnovacion/Brian Amaya Guzman.png",
    ciudad: "Bogotá",
    profesion: "Economía",
  },
  {
    id: "113",
    name: "María F. Cañón",
    position: "Inv. Asistente 1",
    email: "mcanon@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratorioinnovacion/Maria Fernanda Cañon Ruiz.png",
    ciudad: "Bogotá",
    profesion: "Biología",
  },
  {
    id: "114",
    name: "Manuela Montoya",
    position: "Inv. Asistente 1",
    email: "mmontoya@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratorioinnovacion/Manuela Montoya Castrillon.png",
    ciudad: "Rionegro - Antioquia",
    profesion: "Ingeniería Bioquímica",
  },
  {
    id: "115",
    name: "Carla Mosquera",
    position: "Inv. Titular 1",
    email: "cmosquera@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriofinanzas/Carla Blondineth Mosquera Zapata.png",
    ciudad: "Bogotá",
    profesion: "Administración De Empresas",
  },
  {
    id: "116",
    name: "Diana Tovar",
    position: "Inv. Titular 1",
    email: "dtovar@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Diana Alexandra Tovar Bonilla.png",
    ciudad: "Bogotá",
    profesion: "Economía",
  },
  {
    id: "117",
    name: "Marcela Arango",
    position: "Inv. Adjunto 1",
    email: "marango@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Marcela Arango Bernal.png",
    ciudad: "Bogotá",
    profesion: "Comunicación Social y Periodismo",
  },
  {
    id: "118",
    name: "Carlos Cortés",
    position: "Inv. Asistente 1",
    email: "ccortes@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Carlos Alberto Cortes Gutierrez.jpg",
    ciudad: "Bogotá",
    profesion: "Economía",
  },
  {
    id: "119",
    name: "Luz H. Ruíz",
    position: "Inv. Asistente 1",
    email: "lruiz@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Luz Herminda Ruiz Ortiz.png",
    ciudad: "Málaga - Santander",
    profesion: "Ingeniería Forestal",
  },
  {
    id: "120",
    name: "Jenny Vanegas",
    position: "Inv. Asistente 1",
    email: "jvanegas@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Jenny Paola Vanegas Pinilla.jpeg",
    ciudad: "Popayán - Cauca",
    profesion: "Medicina Veterinaria",
  },
  {
    id: "121",
    name: "Gersson Vergel",
    position: "Inv. Asistente 1",
    email: "gvergel@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Gersson Farid Vergel Mendieta.jpeg",
    ciudad: "Ráquira - Boyacá",
    profesion: "Ingeniería Ambiental",
  },
  {
    id: "122",
    name: "Jennifer Ceballos",
    position: "Inv. Asistente 1",
    email: "jceballos@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Jennifer Dayana Ceballos.jpg",
    ciudad: "Ibagué - Tolima",
    profesion: "Agronomía",
  },
  {
    id: "123",
    name: "Milena Moreno",
    position: "Inv. Asistente 3",
    email: "amoreno@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Ana Milena Moreno Quevedo.jpeg",
    ciudad: "Bogotá",
    profesion: "Ingeniería Agroecológica",
  },
  {
    id: "124",
    name: "Marcela Carlosama",
    position: "Inv. Asistente 1",
    email: "mcarlosama@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Marcela Carolina Carlosama Colimba.jpg",
    ciudad: "Guachucal - Nariño",
    profesion: "Zootecnia",
  },
  {
    id: "125",
    name: "Lisseth M. Acosta",
    position: "Aux. Investigación 1",
    email: "lacosta@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Lisseth Marcela Acosta Pidiache.jpg",
    ciudad: "Piedecuesta - Santander",
    profesion: "Tecnología En Producción Agropecuaria Ecológica",
  },
  {
    id: "126",
    name: "Eduin Y. Usama",
    position: "Aux. Investigación 1",
    email: "eusama@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Eduin Yamid Usama Hidalgo.png",
    ciudad: "",
    profesion: "",
  },
  {
    id: "127",
    name: "Diego A. Calambas",
    position: "Aux. Investigación 1",
    email: "dcalambas@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Diego Armando Calambas Vásquez.jpg",
    ciudad: "Puracé - Cauca",
    profesion: "Tecnología En Producción Ganadera",
  },
  {
    id: "128",
    name: "Junior F. Muñoz",
    position: "Aux. Investigación 1",
    email: "jfmunoz@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Junior Fernando Muñoz Serna.png",
    ciudad: "Popayán - Cauca",
    profesion: "Tecnología en Control Ambiental",
  },
  {
    id: "129",
    name: "Jhoel M. Lozano",
    position: "Aux. Investigación 1",
    email: "jlozano@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Jhoel Mauricio Lozano Chaves.png",
    ciudad: "Roncesvalles - Tolima",
    profesion: "Tecnología En Control Ambiental",
  },
  {
    id: "130",
    name: "Estefani Olmos",
    position: "Aux. Investigación 1",
    email: "eolmos@humboldt.org.co",
    image:
      "img/directorio/DICO/economiayfinanzas/laboratoriovalores/Estefani Olmos Tovar.jpeg",
    ciudad: "Murillo - Tolima",
    profesion: "Tecnología en Sistemas de Gestión Ambiental",
  },
];

// Crear el índice de Lunr
export const idx = (() => {
  const index = lunr(function () {
    this.ref("id");
    this.field("name");
    this.field("position");
    this.field("email");
    this.field("ciudad");
    this.field("profesion");

    directoryData.forEach((doc) => {
      this.add(doc);
    });
  });

  return index;
})();
