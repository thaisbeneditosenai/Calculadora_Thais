let calc = document.querySelector("#calcular");
calc.addEventListener("click", mullti);

function mullti() {
    let tn1 = document.querySelector("#txtn1");
    let n1 = Number(tn1.value);
    let resultado = document.querySelector("#resultado");


    resultado.innerText = "";

    for (let i = 1; i <= 10; i++) {
        resultado.innerText += `${n1} x ${i} = ${n1 * i}\n`;
    }
}