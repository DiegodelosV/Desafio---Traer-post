const consultarDatos = async () => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const repuesta = await fetch(url);
    const datos = await repuesta.json();
    const traerPost = document.getElementById("post-data");
    datos.forEach((element) => {
      traerPost.innerHTML += `
            <ul>
                <li style="font-weight: bold">${element.title}</li>
                <p>${element.body}</p>
            </ul>
        `;
    });
  } catch (error) {
    console.error("Error al consultar los datos", error);
  }
};

const getPosts = () => {
  consultarDatos();
};
