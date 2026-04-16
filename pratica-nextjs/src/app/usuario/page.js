async function getUsuario() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2"); 
    return res.json();
}

export default async function Usuario() {
    const usuario = await getUsuario();

    return (
        <section>
            <h1> Usuario: {usuario.name} </h1>
            <p> E-mail: {usuario.email} </p>
            <p> Cidade: {usuario.address.city} </p>
        </section>
    );
};