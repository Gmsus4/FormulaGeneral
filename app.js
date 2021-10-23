const a = document.querySelector('#tc');
const b = document.querySelector('#ti');
const c = document.querySelector('#tl');
const form = document.querySelector('#form');
const resultado = document.querySelector('.resultado');

 
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const sqrt = Math.sqrt(b.value * b.value -4 * a.value * c.value);
    const menos = -1 * b.value;
    const div2 = 2 * a.value;
    const alCuadrado = b.value * b.value;
    const cuatroAC = (-4 * a.value) * c.value;
    const raiz = alCuadrado + cuatroAC;
    const raizCuadrada = Math.sqrt(raiz);
    const sumaB1 = menos + raizCuadrada;
    const sumaB2 = menos - raizCuadrada;
    const res1 = sumaB1 / div2;
    const res2 = sumaB2 / div2;
    resultado.classList.remove('display-none');
/*     console.log(sqrt); */
    if(isNaN(sqrt)){//Si la raiz cuadrada es negativa...
        const newSqrt = Math.sqrt(Math.abs(b.value * b.value -4 * a.value * c.value))*-1;
        const sumaX1 = menos + newSqrt;
        const sumaX2 = menos - newSqrt;
        let rX1 = (-b.value + newSqrt) / (2 * a.value);
        let rX2 = (-b.value - newSqrt) / (2 * a.value);
        resultado.innerHTML = `<b>a: ${a.value}</b><br>
                               <b>b: ${b.value}</b><br>
                               <b>c: ${c.value}</b><br><br> `;
        resultado.innerHTML += `- (${b.value}) ± √(${b.value})² - 4(${a.value})(${c.value}) ÷ 2(${a.value})<br>`;
        resultado.innerHTML += `${menos} ± √${alCuadrado} ${cuatroAC} ÷ ${div2}<br>`;
        resultado.innerHTML += `${menos} ± √${raiz} ÷ ${div2}<br>`;
        resultado.innerHTML += `${menos} ± ${newSqrt} ÷ ${div2}<br><br>`;
        resultado.innerHTML += `x1 = ${menos} + (${newSqrt}) ÷ ${div2}<br>`;
        resultado.innerHTML += `x1 = ${sumaX1} ÷ ${div2}<br>`;
        resultado.innerHTML += `<b>x1 = ${rX1} </b><br><br>`;

        resultado.innerHTML += `x2 = ${menos} - (${newSqrt}) ÷ ${div2}<br>`;
        resultado.innerHTML += `x2 = ${sumaX2} ÷ ${div2}<br>`;
        resultado.innerHTML += `<b>x2 = ${rX2} </b><br>`;
    } else{
/*         resultado.innerHTML = `Resultado de x1: <b> ${resX1}</b><br><br>
        Resultado de x2: <b>${resX2}</b>`; */
        resultado.innerHTML = `<b>a: ${a.value}</b><br>
        <b>b:  ${b.value}</b><br>
        <b>c: ${c.value}</b><br><br> `;
        resultado.innerHTML += `- (${b.value}) ± √(${b.value})² - 4(${a.value})(${c.value}) ÷ 2(${a.value})<br>`;
        resultado.innerHTML += `${menos} ± √${alCuadrado} ${cuatroAC} ÷ ${div2}<br>`;
        resultado.innerHTML += `${menos} ± √${raiz} ÷ ${div2}<br>`;
        resultado.innerHTML += `${menos} ± ${raizCuadrada} ÷ ${div2}<br><br>`;

        resultado.innerHTML += `x1 = ${menos} + (${raizCuadrada}) ÷ ${div2}<br>`;
        resultado.innerHTML += `x1 = ${sumaB1} ÷ ${div2}<br>`;
        resultado.innerHTML += `<b>x1 = ${res1} </b><br><br>`;

        resultado.innerHTML += `x2 = ${menos} - (${raizCuadrada}) ÷ ${div2}<br>`;
        resultado.innerHTML += `x2 = ${sumaB2} ÷ ${div2}<br>`;
        resultado.innerHTML += `<b>x2 = ${res2} </b><br><br>`;

    }
});
