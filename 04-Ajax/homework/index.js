let crearAmigo = (datos, container) => {
    let item = document.createElement('li')
    let pName = document.createElement('p')
    pName.innerText = `Name: ${datos.name}`
    let pAge = document.createElement('p')
    pAge.innerText = `Age: ${datos.age}`
    let pMail = document.createElement('p')
    pMail.innerText = `Mail: ${datos.email}`
    item.append(pName,pAge, pMail)
    container.append(item)
}

let mostrarAmigos = ()=>{
    let url='http://localhost:5000/amigos'
    $.ajax({
        method: 'get',
        url,
        success: (data)=>{
            let container = document.body.querySelector('#lista');
            container.innerHTML= '';
            data.forEach(element => {
                crearAmigo(element, container)
            });
        }
    });
}

let buscarAmigo = ()=>{
    let container = document.body.querySelector('#amigo');
    container.innerHTML= '';
    let input = document.body.querySelector('#input')
    if (input.value === '') {
        input.focus()
        return alert('Inrgese un id para buscar')
    }
    let idABuscar = input.value;
    let url=`http://localhost:5000/amigos/${idABuscar}`
    $.ajax({
        method: 'get',
        url,
        error: () => {
            input.value = ''
            input.focus();
            alert('El id buscado no se encuentra en nuesta base de datos')
        },
        success: (data)=>{
            crearAmigo(data, container)
            input.value = ''
        },
    });
}

let borrarAmigo = ()=>{
    let input = document.body.querySelector('#inputDelete')
    let idABuscar = input.value;
    if (input.value === '') {
        input.focus()
        return alert('Inrgese un id para buscar')
    }
    let url=`http://localhost:5000/amigos/${idABuscar}`
    $.ajax({
        method: 'delete',
        url,
        success: ()=>{
            alert(`Se ha borrado el id ${idABuscar} correctamente`),
            input.value = ''
            mostrarAmigos();
            document.body.querySelector('#amigo').innerHTML = ''
        },
        error: (data) => {
            alert(`${data.responseJSON.message}`)
            input.value = ''
            input.focus()
        },
    });
}
