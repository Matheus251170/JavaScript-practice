let num = document.getElementById('num')
let lista = document.getElementById('lista')
let p = document.getElementById('p')
let valores = []



function isNumber(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}

function inList(n, l)
{
    if (l.indexOf(Number(n))!= -1)
    {
        return true
    }
    else
    {
        return false
    }
}

function adicionar()
{
    if(isNumber(num.value) && !inList(num.value, valores))
    {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        p.innerHTML = ''
    }
    else
    {
        window.alert('valor inválido ou já encontrado na lista')
    }
    
    num.value = ''
    num.focus()
}

function final()
{
    if(valores.lenght == 0)
    {
     alert('Adicione valores válidos!')
    }
    else
    {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores)
        {
            soma += valores[pos]
            if(valores[pos] > maior)
            {
                maior = valores[pos]
            }
            if(valores[pos] < menor)
            {
                menor = valores[pos]
            }
        }
        media = soma/tot
        p.innerHTML = ''
        p.innerHTML += `<p>Ao todo temos ${tot} números cadastrados. </p>`
        p.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        p.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        p.innerHTML += `<p>A soma dos valores é ${soma}. </p>`
        p.innerHTML += `<p>A média dos valores é ${media}. </p>`
    }
}