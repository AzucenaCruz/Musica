document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const buscadorInput = document.getElementById('buscador');
    buscadorInput.focus();
});

document.addEventListener('DOMContentLoaded', () => {
    const musicIcon = document.getElementById('music');
    const menu = document.getElementById('menu');

    musicIcon.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!musicIcon.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const musicIcon = document.getElementById('mu');
    const menu = document.getElementById('m');

    musicIcon.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!musicIcon.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const musicIcon = document.getElementById('mus');
    const menu = document.getElementById('nu');

    musicIcon.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!musicIcon.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const musicIcon = document.getElementById('muc');
    const menu = document.getElementById('mn');

    musicIcon.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!musicIcon.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});



