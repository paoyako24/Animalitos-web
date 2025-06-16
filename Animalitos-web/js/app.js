const mascotas = [
  {
    tipo: 'Perro',
    descripcion: 'Fiel y juguetón, el mejor amigo del hombre.',
    edad: '10-13 años',
    tamaño: 'Mediano a grande',
    alimentacion: 'Carnívoro',
    caracteristicas: 'Leales, inteligentes y activos.',
    imagen: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80'
  },
  {
    tipo: 'Gato',
    descripcion: 'Independiente y curioso, con personalidad única.',
    edad: '12-16 años',
    tamaño: 'Pequeño a mediano',
    alimentacion: 'Carnívoro',
    caracteristicas: 'Agiles, limpios y territoriales.',
    imagen: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80'
  },
  {
    tipo: 'Pájaro',
    descripcion: 'Colorido y alegre, llena el ambiente de música.',
    edad: '5-10 años',
    tamaño: 'Pequeño',
    alimentacion: 'Granívoro y frugívoro',
    caracteristicas: 'Sociales, cantores y vivos.',
    imagen: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=400&q=80'
  },
  {
    tipo: 'Conejo',
    descripcion: 'Dulce y suave, perfecto para compañía.',
    edad: '8-12 años',
    tamaño: 'Pequeño',
    alimentacion: 'Herbívoro',
    caracteristicas: 'Tranquilos, sociables y saltarines.',
    imagen: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80'
  }
];

const container = document.getElementById('mascotas-container');

mascotas.forEach(mascota => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${mascota.imagen}" alt="${mascota.tipo}" />
    <h2>${mascota.tipo}</h2>
    <div class="info">
      <button class="close-btn" title="Cerrar">&times;</button>
      <p><strong>Descripción:</strong> ${mascota.descripcion}</p>
      <p><strong>Edad promedio:</strong> ${mascota.edad}</p>
      <p><strong>Tamaño:</strong> ${mascota.tamaño}</p>
      <p><strong>Alimentación:</strong> ${mascota.alimentacion}</p>
      <p><strong>Características:</strong> ${mascota.caracteristicas}</p>
    </div>
  `;

  const img = card.querySelector('img');
  const info = card.querySelector('.info');
  const closeBtn = card.querySelector('.close-btn');

  // Animación inicial GSAP para la card
  gsap.to(card, {
    duration: 1.2,
    y: 0,
    opacity: 1,
    stagger: 0.25,
    ease: 'elastic.out(1, 0.6)',
    delay: 0.4
  });

  img.addEventListener('click', () => {
    // Mostrar info con animación si está oculta
    if (info.style.display === 'none' || info.style.display === '') {
      info.style.display = 'block';
      gsap.fromTo(info, {opacity: 0, y: -20}, {opacity: 1, y: 0, duration: 0.4});
    }
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    gsap.to(info, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        info.style.display = 'none';
      }
    });
  });

  container.appendChild(card);
});





