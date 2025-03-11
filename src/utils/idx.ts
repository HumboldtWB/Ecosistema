
import lunr from 'lunr';

// Datos del directorio
export const directoryData = [
/* dirección general */
    {
        id: '1',
        name: 'Hernando García',
        position: 'Director General',
        email: 'hgarcia@humboldt.org.co',
        image: 'img/directorio/direccion/Hernando Garcia Martinez.jpg',
        ciudad: 'Bogotá',
        profesion: 'Biologo',
    },
    {
        id: "2",
        name: "Germán Andrade",
        position: "Asesor Senior",
        email: "gandrade@humboldt.org.co",
        image: "img/directorio/direccion/German Ignacio Andrade Perez.jpg"
    },
    {
        id: "3",
        name: "Ximena Franco",
        position: "Líder",
        email: "xfranco@humboldt.org.co",
        image: "img/directorio/direccion/Ximena Franco Villegas.png"
    },
    {
        id: "4",
        name: "Claudia Alfonso",
        position: "Analista Junior",
        email: "secretariadireccion@humboldt.org.co",
        image: "img/directorio/direccion/Claudia Esperanza Alfonso.jpg"
    },
    /* gerencia jurídica */
    {
        id: "5",
        name: "Johanna Gálvis",
        position: "Gerente Jurídica y Cumplimiento",
        email: "jgalvis@humboldt.org.co",
        image: "img/directorio/direccion/Claudia Johanna Galvis Galindo.jpg"
    },
    {
        id: "6",
        name: "Carolina Pinto",
        position: "Responsable",
        email: "ppinto@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/juridica/Paola Carolina Pinto Escobar.jpg"
    }
    ,
    /* auditoria */
    {
        id: "7",
        name: "Erica Pineda",
        position: "Líder Auditoría",
        email: "auditoriainterna@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/auditoria/Erica Johana Pineda Mateus.png"
    }
    ,
    {
        id: "8",
        name: "Lorena Heredia",
        position: "Líder Auditoría",
        email: "auditoriainterna@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/auditoria/Erica Johana Pineda Mateus.png"
    }
    /* asesorí juirídica */
    ,
    {
        id: "9",
        name: "Diana Botero",
        position: "Abogada Senior",
        email: "dbotero@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/juridica/Diana Lucia Botero Jerez.jpg"
    }
    ,
    {
        id: "10",
        name: "Julieth Sastoque",
        position: "Abogada",
        email: "jsastoque@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/juridica/Julieth Sastoque Valbuena.png"
    }
    ,
    {
        id: "11",
        name: "Nicolas Tapias",
        position: "Abogado",
        email: "ntapias@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/juridica/Nicolas Tapias Schachtebeck.png"
    }
    ,
    {
        id: "12",
        name: "Maria C. Guerrero",
        position: "Abogada Junior",
        email: "mguerrero@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/juridica/Maria Camila Guerrero Hoyos.png"
    }
    ,
    {
        id: "13",
        name: "Paula A. Arroyo",
        position: "Abogada Junior",
        email: "parroyo@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/juridica/Paula Andrea Arroyo Triviño.jpeg"
    }
    ,
    {
        id: "14",
        name: "Ana K. Perico",
        position: "Abogada Junior",
        email: "aperico@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/juridica/Ana Karina Perico Sanchez.png"
    }
    ,
    {
        id: "15",
        name: "Juan E. Molina",
        position: "Abogado Junior",
        email: "jmolina@humboldt.org.co",
        image: "img/directorio/gerencia_juridica/juridica/Juan Esteban Molina Cadena.PNG"
    }
    
    
    
];

// Crear el índice de Lunr
export const idx = (() => {
    const index = lunr(function () {
        this.ref('id');
        this.field('name');
        this.field('position');
        this.field('email');
        this.field('ciudad');

        directoryData.forEach((doc) => {
            this.add(doc);
        });
    });

    return index;
})();