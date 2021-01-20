function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
   

    if (fAno.value.length == 0 || Number(fAno.value) > ano)
    {
        window.alert("ERRO VERIFIQUE OS DADOS E TENTE NOVAMENTE!")
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (fsex[0].checked)
        {
            genero = 'Homem'

            if(idade >= 0 && idade < 10)
            {
                //criança
                img.setAttribute('src','bb-menino.png')
            }
            else if  (idade < 18)
            {
               //jovem
               img.setAttribute('src', 'adol-menino.png')
            }
            else if (idade < 50)
            {
                //adulto
                img.setAttribute('src', 'adulto-man.png')
            }
            else
            {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }
        else if (fsex[1].checked)
        {
            genero = 'Mulher'

            
            if(idade >= 0 && idade < 10)
            {
                //criança
                img.setAttribute('src','bb-menina.png')
            }
            else if  (idade < 18)
            {
               //jovem
               img.setAttribute('src','adol-menina.png')
            }
            else if (idade < 50)
            {
                //adulto
                img.setAttribute('src','adulto-wom.png')
            }
            else
            {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = "Detectamos " + genero + " com " + idade + " anos."
        res.appendChild(img)
    }
}