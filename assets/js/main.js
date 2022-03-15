// Capturar evento de submit do formulário
const form = document.querySelector('#calculo-IMC');

form.addEventListener('submit', function(e){
    e.preventDefault()


    const inpPeso = e.target.querySelector('#peso');
    
    const inpAltura = e.target.querySelector('#altura');
    const peso = Number(inpPeso.value);
    const altura = Number(inpAltura.value);
    
    if(!peso){
        setResultado('peso invalido', false);
        return;
    }
    
    if(!altura){
        setResultado('Altura invalida', false);
        return;
    }
    
    const imc = pegarImc(peso, altura);
    
});
    
    function pegarImc(altura, peso){
    
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function setResultado(msg){
    const  resultado = document.querySelector('#resultado')
    resultado.innerHTML = ' ';
    const p = document.createElement('p');
    p.innerHTML = 'Teste';
    resultado.appendChild(p);
}