<template>
  <div class="welcome-container">
    <h1>Bienvenido Profe ;)</h1>
    <div class="text">
      <p>Esta es una serie de componentes hechos por los estudiantes del grupo 31 para EduardoProfe. Decidimos hacer
        esto entre todos como agradecimiento por el tiempo dedicado, esperamos que le guste.
      </p>
    </div>
    <router-link to="/abdiel">
      <button>Comenzar</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  setup(){
    localStorage.setItem('current', JSON.stringify(0))
  }
};
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: white;
  background-image: url('/LP.jpg'); /* Reemplaza con la URL de tu imagen */
  background-size: cover; 
  background-position: center;
  position: relative; /* Necesario para el pseudoelemento */
}

.welcome-container::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)); /* Degradado oscuro con transparencia */
    z-index: 0; /* Asegura que el degradado esté detrás del texto */
}

.welcome-container > * {
    z-index: 1; /* Asegura que el contenido esté por encima del degradado */
    position: relative; /* Para que la propiedad z-index se aplique */
}

.welcome-container h1{
  font-size: 40px;
}

.welcome-container .text{
  width: 60%;
  text-align: justify;
}
.welcome-container p {
  font-size: 25px;
}

button {
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s, transform 0.2s;
}


button:hover {
  background-color: #e91e63;
  transform: translateY(-2px);
}
</style>
