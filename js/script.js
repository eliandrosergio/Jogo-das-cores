
// Global var

const corAual = document.querySelector('.corAtual');
const mensagem = document.querySelector('.mensagem');
const reiniciarButton = document.querySelector('.novaCor');
const quadrados = document.querySelectorAll('.quadrado');
const backColorCabeca = document.querySelector('#cabeca');
const dificuldadeButton = document.querySelectorAll('.dificuldade');

var numQuadrados = 6;
var corSelecionada;
var cores = [];

// Main function
function iniciar() {
    dificuldadeFunction();
    quadradosFunction();
    reiniciar();
}

// Difuculdade function
function dificuldadeFunction() {
    for (var i = 0; i < dificuldadeButton.length; i++) {
        dificuldadeButton[i].addEventListener('click', function() {
            dificuldadeButton[0].classList.remove('selecionado');
            dificuldadeButton[1].classList.remove('selecionado');
            dificuldadeButton[2].classList.remove('selecionado');
            this.classList.add('selecionado');

            //this.textContent === 'Fácil' ? numQuadrados = 3 : numQuadrados = 6;

            if (this.textContent === 'Fácil') {
                numQuadrados = 3;
            }
            else if (this.textContent === 'Normal') {
                numQuadrados = 6;
            } 
            else {
                numQuadrados = 9;
            }
            
            reiniciar();
        });
    }
}

// Quadrados function
function quadradosFunction() {
    for(var i = 0; i < quadrados.length; i++) {
        quadrados[i].addEventListener('click', function() {
            var corClickada = this.style.backgroundColor;

            if (corClickada === corSelecionada) {
                mensagem.textContent = 'Correcto!';
                reiniciarButton.textContent = 'Jogar novamente?';

                trocarDeCor(corClickada);
                backColorCabeca.style.backgroundColor = corClickada;
            } 
            else {
                this.style.backgroundColor = 'var(--clr-transparent)';
                this.style.border = 'none';
                mensagem.textContent = 'Tenta novamente!';
            }
        });
    }
}

// Reiniciar function
function reiniciar() {
    cores = novasCores(numQuadrados);
    corSelecionada = corSelecionadaFunction();

    corAual.textContent = corSelecionada;
    reiniciarButton.textContent = 'Nova Cor!';
    mensagem.textContent = '';

    for (var i = 0; i < quadrados.length; i++) {
        if (cores[i]) {
            quadrados[i].style.display = 'block';
            quadrados[i].style.backgroundColor = cores[i];
            quadrados[i].style.border = '2px solid var(--clr-dark)';
        } 
        else {
            quadrados[i].style.display = 'none';
        }
    }

    backColorCabeca.style.backgroundColor = 'var(--clr-dark-translucid)';
}

// Trocar de cor function
function trocarDeCor(cor) {
    for (var i = 0; quadrados.length; i++) {
        quadrados[i].style.backgroundColor = cor;
        quadrados[i].style.border = '2px solid var(--clr-dark)'
    }
}

// Cor selecionada function
function corSelecionadaFunction() {
    var aleatorio = Math.floor(Math.random() * cores.length);
    return cores[aleatorio];
}

// Novas cores function
function novasCores(num) {
    var arrayCores = [];

    for (var i = 0; i < num; i++) {
        arrayCores.push(corAteatoria());
    }

    return arrayCores;
}

// Cor aleatoria function
function corAteatoria() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

// Event Reiniciar button
reiniciarButton.addEventListener('click', reiniciar);

// Call Main function
iniciar();
