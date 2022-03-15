// Capturar evento de submit do formulário
const form = document.querySelector('#calculo-IMC');

form.addEventListener('submit', function(e){
    e.preventDefault();
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
    
    const imc = CalcularIMC(peso, altura);
    const nivel = pegarImc(imc);
    
    
    const msg = `Seu IMC é: ${imc} (${nivel})`;
    setResultado(msg, true);
    
});
    
function pegarImc(imc){
    
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc > 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];s
}

function CalcularIMC(peso, altura){
    const calculo  = peso / altura ** 2;
    return calculo.toFixed(2);
}

function setResultado(msg, validar){
    const  resultado = document.querySelector('#resultado')
    resultado.innerHTML = ' ';
    const p = CriarParagrafo();

    if(validar){
        p.classList.add('paragrafo-resultado'); 
    }else{
        p.classList.add('erro');
    }
    resultado.appendChild(p);
    p.innerHTML = msg;
    
}

function CriarParagrafo(){
    const paragrafo = document.createElement('p');
    return paragrafo;
}
