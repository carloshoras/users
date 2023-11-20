let nuevaInfoUsuarios = []
const listUsers = document.getElementById('listaUsuarios');

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
})
.then((users) => {
    users.forEach((user) => {
        const randomAge = Math.floor(Math.random()*130)
        const usuarioActualizado = {...user, age: randomAge, img: `./assets/img/${user.id}.jpeg`, address: {
            street: user.address.street, 
            suite: user.address.suite, 
            city: user.address.city}}
        nuevaInfoUsuarios.push(usuarioActualizado)
    })
}).then(() => {
    nuevaInfoUsuarios.forEach((user) => {
        const userInList = document.createElement('li')
    
        const infoUserInList = `
        <section class="infoUsuario">
            <section class="infoBasica">
                <p><span>Nombre:</span>${user.name}</p>
                <p><span>Edad:</span>${user.age}</p>
                <p><span>Username:</span>${user.username}</p>
                <p><span>Teléfono:</span>${user.phone}</p>
                <p><span>Email:</span>${user.email}</p>
            </section>
            <section class="imgUsuario">
                <img src="${user.img}"/>
            </section>
        </section>`
        
        const addressUserInList = `
        <section class="direccionUsuario">
            <p><span>Compañía:</span>${user.company.name}</p>
            <p><span>Dirección:</span>${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
        </section>`
    
        userInList.innerHTML = infoUserInList + addressUserInList
        listUsers.appendChild(userInList)
    })
})
