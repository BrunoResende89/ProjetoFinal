"use strict";
{
    const campo1 = document.querySelector('#campo1');
    const campo2 = document.querySelector('#campo2');
    const formulario = document.querySelector('form');
    const mensagem = document.querySelector('#mensagem');
    campo1.focus();
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        campo1.className = campo2.className = mensagem.className = '';
        let n1 = parseFloat(campo1.value);
        let n2 = parseFloat(campo2.value);
        if (isNaN(n1)) {
            mensagem.innerText = 'Por favor informe o seu peso!!';
            campo1.className = mensagem.className = 'negative';
            campo1.focus();
            return;
        }
        if (isNaN(n2)) {
            mensagem.innerText = 'A altura deve ser informada.!';
            campo2.className = mensagem.className = 'negative';
            campo2.focus();
            return;
        }
        const imc = n1 / (n2 * n2);
        if (imc < 18.5) {
            mensagem.innerHTML = `Seu calculo de IMC retornou o valor de <b>${imc}</b> Que indica <b>Magreza</b>.`;
            //mensagem.className = 'negative'
        }
        else if (imc < 25) {
            mensagem.innerHTML = `Seu calculo de IMC retornou o valor de <b>${imc}, Parabéns você esta no peso ideal </b>.`;
            mensagem.className = 'positive';
        }
        else if (imc < 30) {
            mensagem.innerHTML = `Seu calculo de IMC retornou o valor de <b>${imc}, Você está com sobrepeso </b>.`;
            mensagem.className = 'medium';
        }
        else if (imc < 50) {
            if (imc < 35) {
                mensagem.innerHTML = `Seu calculo de IMC retornou o valor de <b>${imc}, Você esta com obesidade grau I (Leve)</b>.`;
                mensagem.className = 'negative';
            }
            else if (imc < 40) {
                mensagem.innerHTML = `Seu calculo de IMC retornou o valor de <b>${imc}, Você esta com obesidade grau II (Severa)</b>.`;
                mensagem.className = 'negative';
            }
            else {
                mensagem.innerHTML = `Seu calculo de IMC retornou o valor de <b>${imc}, Você esta com Obesidade grau III (Mórbida)</b>.`;
                mensagem.className = 'negative';
            }
        }
        else if (imc < 60) {
            mensagem.innerHTML = `Seu calculo de IMC retornou o valor de <b>${imc}, você esta Super Obeso, começe se exercitar Logoo !!</b>.`;
            mensagem.className = 'negative';
        }
        else {
            mensagem.innerHTML = `Seu calculo de IMC retornou o valor de ${imc}, você esta <b>Hiper Obeso</b>, Mude seus habitos alimentares e faça exercicios com urgência ! ! !.`;
            mensagem.className = 'negative';
        }
        campo1.value = campo2.value = '';
        campo1.focus();
    });
}
