import { Component } from '@angular/core';

interface Mascota {
  tipo: string;
  descripcion: string;
  edad: string;
  tamaño: string;
  alimentacion: string;
  caracteristicas: string;
  imagen: string;
  mostrarInfo?: boolean;
}

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent {
  mascotas: Mascota[] = [
    {
      tipo: 'Perro',
      descripcion: 'Fiel y juguetón, el mejor amigo del hombre.',
      edad: '10-13 años',
      tamaño: 'Mediano a grande',
      alimentacion: 'Carnívoro',
      caracteristicas: 'Leales, inteligentes y activos.',
      imagen: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80',
      mostrarInfo: false
    },
    {
      tipo: 'Gato',
      descripcion: 'Independiente y curioso, con personalidad única.',
      edad: '12-16 años',
      tamaño: 'Pequeño a mediano',
      alimentacion: 'Carnívoro',
      caracteristicas: 'Ágiles, limpios y cariñosos.',
      imagen: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80',
      mostrarInfo: false
    },
    {
      tipo: 'Pájaro',
      descripcion: 'Colorido y alegre, llena el ambiente de música.',
      edad: '5-10 años',
      tamaño: 'Pequeño',
      alimentacion: 'Omnívoro',
      caracteristicas: 'Sociables y vocales.',
      imagen: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=400&q=80',
      mostrarInfo: false
    },
    {
      tipo: 'Conejo',
      descripcion: 'Dulce y suave, perfecto para compañía.',
      edad: '8-12 años',
      tamaño: 'Pequeño',
      alimentacion: 'Herbívoro',
      caracteristicas: 'Tranquilos y amigables.',
      imagen: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
      mostrarInfo: false
    }
  ];

  toggleInfo(mascota: Mascota) {
    mascota.mostrarInfo = !mascota.mostrarInfo;
  }
}







