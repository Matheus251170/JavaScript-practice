function contar()
{
    var inicio = document.getElementById('inicio')
    var final = document.getElementById('final')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')


    if(inicio.value.length == 0 || passo.value.length == 0 || final.value.length == 0 )
    {
        Response.innerHTML = "Não foi possivel contar."
        alert('[ERRO] INSIRA UMA QUANTIDADE VALIDA E TENTE NOVAMENTE!')
    }
    else
    {
        res.innerHTML = "Contando: "

        let i = Number(inicio.value)
        let p = Number(passo.value)
        let f = Number(final.value)
        
        if(p <= 0)
        {
            alert('Passo zero é invalido! Considerando passo 1...')
            p = 1
        }

        if(i < f)
            {
                for(let c = i; c <= f; c += p)
                {
                    
                    res.innerHTML += c + " "
        
                }
            }
            else
            {
                for(let c = i; c > f; c -= p)
                {
                    
                    res.innerHTML += c + " "
        
                }
            }
        
        
    }

}