// ===============================
// MENU SUAVE
// ===============================

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// BOTÃO "DESCOBRIR MAIS"
// ===============================

const botao = document.querySelector('.botao');

if (botao) {
    botao.addEventListener('click', function(event) {
        event.preventDefault();

        const vantagens = document.querySelector('#vantagens');

        if (vantagens) {
            vantagens.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}


// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================

const cards = document.querySelectorAll('.card');

const observador = new IntersectionObserver(
    (elementos) => {
        elementos.forEach(elemento => {

            if (elemento.isIntersecting) {
                elemento.target.classList.add('aparecer');
            }

        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {
    observador.observe(card);
});


// ===============================
// EFEITO NO CABEÇALHO
// ===============================

window.addEventListener('scroll', function() {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.backgroundColor = '#000000';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.6)';
    } else {
        header.style.boxShadow = 'none';
    }

});


// ===============================
// MENSAGEM DE CONCLUSÃO
// ===============================

const conclusao = document.querySelector('.conclusao');

if (conclusao) {

    conclusao.addEventListener('click', function() {
        alert(
            'A Netflix possui vantagens e desvantagens. ' +
            'A melhor escolha depende das necessidades de cada usuário!'
        );
    });

}
