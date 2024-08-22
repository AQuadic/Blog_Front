// Toggle
document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.getElementById('toggleButton');
        const navbarMenu = document.getElementById('navbar-menu');
        
        toggleButton.addEventListener('click', function() {
            navbarMenu.classList.toggle('hidden');
        });
    });
