const icon = document.getElementById('icon')
const menu = document.getElementById('menu');

icon.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
})

const load = document.querySelector('#load');
const pop = document.querySelector('#pop');

load.addEventListener('click', () => {
    if (pop.classList.contains('hidden')) {
        pop.classList.remove('hidden');
    }
    // else {
    //     pop.classList.add('hidden');
    // }
})