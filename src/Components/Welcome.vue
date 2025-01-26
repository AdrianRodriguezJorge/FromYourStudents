<template>
  <div class="welcome-container">
    <h1>Bienvenido Profe ;)</h1>
    <div class="text">
      <p>Esto es para ti EduardoProfe como agradecimiento por el tiempo dedicado, esperamos te guste.</p>
     <br>
      <p><strong>En representación de los estudiantes del grupo 31, Ingeniería Informática, CUJAE</strong></p>
     <br>
      <h3>Sinceramente gracias por todo... ❤️</h3>
    </div>
    <router-link to="/abdiel">
      <button>Comenzar</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  setup() {
    localStorage.setItem('current', JSON.stringify(0));
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  color: white;
  background-image: url('/LP.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
}

.welcome-container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.welcome-container > * {
  z-index: 1;
  position: relative;
}

.welcome-container h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}

.text {
  width: 60%;
  max-width: 800px;
  text-align: justify;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  background: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.welcome-container p {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #fff;
}

button {
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  border: none;
  padding: 14px 20px 18px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: translateY(-4px);
}

button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .welcome-container h1 {
    font-size: 2.5rem;
  }

  .text {
    width: 80%;
    padding: 15px;
  }

  button {
    font-size: 1.2rem;
    padding: 13px 20px 16px 20px;
  }
}

@media (max-width: 480px) {
  .welcome-container h1 {
    font-size: 2rem;
  }

  .text {
    width: 100%;
    padding: 10px;
  }

  button {
    font-size: 1rem;
    padding: 13px 20px 16px 20px;
  }
}
</style>
