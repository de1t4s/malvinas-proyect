// Mantener el menú desplegable abierto mientras el mouse esté sobre él
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!dropdownMenu.matches(':hover')) {
                dropdownMenu.style.display = 'none';
            }
        }, 200);
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });

// Cambiar entre modo claro y oscuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verificar si el usuario ya tenía el modo oscuro activado
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.checked = true; // Marcar el slider como activado
}

// Escuchar cambios en el slider
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled'); // Guardar preferencia
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled'); // Guardar preferencia
    }
});

// Galería de imágenes
const images = document.querySelectorAll('.background-gallery img');
const dots = document.querySelectorAll('.gallery-controls .dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Función para mostrar la imagen actual
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Función para cambiar a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Función para cambiar a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Eventos para los botones
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Eventos para los puntos
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

// Cambiar automáticamente las imágenes cada 5 segundos
setInterval(nextImage, 5000);
});
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita la recarga de la página
  
    const inputField = document.getElementById('address');
    const submitButton = document.getElementById('submitBtn');
    const buttonText = document.getElementById('buttonText');
    const checkIcon = document.getElementById('checkIcon');
  
    // Verificamos si el input no tiene errores
    if (inputField.validity.valid) {
      // Cambiar el texto y mostrar el icono
      buttonText.textContent = '¡Enviado!';
      checkIcon.classList.remove('hidden'); // Mostrar el icono
      submitButton.disabled = true; // Desactivar el botón para evitar envíos múltiples
    } else {
      // Si hay error de tipeo, no hacer nada o mostrar mensaje de error
      buttonText.textContent = 'Enviar';
      checkIcon.classList.add('hidden'); // Asegurarse de que el icono no se muestre
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const loadingBar = document.getElementById("loading-bar");

    // Ocultar la barra de carga cuando la página termine de cargarse
    window.addEventListener("load", function () {
        document.body.classList.add("loaded"); // Activa la animación

        setTimeout(() => {
            loadingBar.style.opacity = "0";
            loadingBar.style.transition = "opacity 0.5s ease";
        }, 2000);

        setTimeout(() => {
            loadingBar.remove();
        }, 2500);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        const pageHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition + windowHeight >= pageHeight - 100) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const popup = document.getElementById("whitelist-popup");

        if (popup) {
            popup.style.display = "flex";
            setTimeout(() => {
                popup.classList.add("active");
            }, 200);

            setTimeout(() => {
                popup.classList.remove("active");
                setTimeout(() => {
                    popup.style.display = "none";
                }, 300);
            }, 5000);
        }
    }, 100);
});









