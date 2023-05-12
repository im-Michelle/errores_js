const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Le faltaba el . para referenciar la clase de name
// Antes: const $n = document.querySelector('name');
// Despues:
const $n = document.querySelector('.name');
// Se necesitaba cmabiar # por el . para referenciar clase
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// faltaba agregar el async para el uso de await
// Antes:  function displayUser(username) {
// Despues: 
async function displayUser(username) {
  $n.textContent = 'cargando...';
  // faltaba el try-catch para el manejo de errores
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    // falta obtener los datos del response 
    const data = await response.json();
    console.log(data);
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (error) {
    handleError(error);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // faltaba el $ antes de la n 
  // Antes: n.textContent = `Algo salió mal: ${err}`
  // Despues: 
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);