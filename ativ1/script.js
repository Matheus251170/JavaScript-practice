function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    //para testar altere a hora do dia
    //var hora = 15 
    msg.innerHTML = 'Agora são ' + hora + ' horas.'

   

    if (hora >= 5 && hora < 12)
    {
        img.src = 'dia.png'
        document.body.style.background ='#cdac00'
    }
    else if(hora >= 12 && hora < 18)
    {
        img.src = 'tarde.png'
        document.body.style.background = "#ff5700"
    }
    else
    {
        img.src = 'noite.png'
        document.body.style.background = "#4f3b57"
    }
}