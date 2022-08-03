 
 const lista = document.getElementById('lista')
 console.log(lista)

 const array = ['huevos', 'pan', 'lechita', 'carne', 'salchicha']
 array.forEach(item => {
    console.log(item) 
    const li = document.createElement('li')
    li.textContent = item
    
    lista.appendChild(li)
 }) 