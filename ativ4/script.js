function contar()
{
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
        
        
   if(num.value.length == 0)
        {
            alert("insira um número válido")
        }
   else
        {
            
                var x = Number(num.value)
                var y = 1

                while(y <= 10)
                {
                    let item = document.createElement('option')

                    item.innerText = x + ' x ' + y + ' = ' + x*y

                    tab.appendChild(item)
                    y++
                }
                
        }
   
}