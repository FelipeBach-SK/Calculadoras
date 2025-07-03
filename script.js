const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultado = document.getElementById('resultado')

function somar(){
    if(num1.value === '' || num2.value === ''){
        alert('Preencha todos os campos!')
    }
    else{
        let soma = Number(num1.value) + Number(num2.value)
        resultado.textContent = `Resultado = ${soma}`
    }
}

function diminuir(){
    if(num1.value === '' || num2.value === ''){
        alert('Preencha todos os campos!')
    }
    else{
        let diminuicao = Number(num1.value) - Number(num2.value)
        resultado.textContent = `Resultado = ${diminuicao}`
    }
}

function multiplicar(){
    if(num1.value === '' || num2.value === ''){
        alert('Preencha todos os campos!')
    }
    else{
        let multiplicacao = Number(num1.value) * Number(num2.value)
        resultado.textContent = `Resultado = ${multiplicacao}`
    }
}

function dividir(){
    if(num1.value === '' || num2.value === ''){
        alert('Preencha todos os campos!')
    }
    else{
        let divicao = Number(num1.value) / Number(num2.value)
        resultado.textContent = `Resultado = ${divicao}`
    }
}

function limpar(){
    num1.value = ''
    num2.value = ''
    resultado.textContent = "Resultado ="
}