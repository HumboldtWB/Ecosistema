
import lunr from 'lunr';

// Datos del directorio
export const directoryData = [
    {
        id: '1',
        name: 'Hernando García',
        position: 'Director General',
        email: 'hgarcia@humboldt.org.co',
        image: 'img/directorio/direccion/Hernando Garcia Martinez.jpg'
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
    {
        id: "5",
        name: "Johanna Gálvis",
        position: "Gerente Jurídica y Cumplimiento",
        email: "jgalvis@humboldt.org.co",
        image: "img/directorio/direccion/Claudia Johanna Galvis Galindo.jpg"
    }
];

// Crear el índice de Lunr
export const idx = (() => {
    const index = lunr(function () {
        this.ref('id');
        this.field('name');
        this.field('position');
        this.field('email');

        directoryData.forEach((doc) => {
            this.add(doc);
        });
    });

    return index;
})();