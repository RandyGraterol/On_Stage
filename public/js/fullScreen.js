// Seleccionar las imágenes con la clase 'clickable'
const clickableImages = document.querySelectorAll('img.clickable');
const fullScreenImage = document.getElementById('full-screen-image');
const fullScreenImgElement = fullScreenImage.querySelector('img');
const closeButton = document.getElementById('close-button');

// Agregar el evento de clic a cada imagen
clickableImages.forEach(image => {
  image.addEventListener('click', function() {
    // Cargar la imagen a pantalla completa
    const imgSrc = image.getAttribute('src') || image.getAttribute('data-src');
    fullScreenImgElement.setAttribute('src', imgSrc);
    
    // Mostrar el contenedor de pantalla completa
    fullScreenImage.style.display = 'flex';
  });
});

// Cerrar la imagen en pantalla completa
closeButton.addEventListener('click', function() {
  fullScreenImage.style.display = 'none';
});
