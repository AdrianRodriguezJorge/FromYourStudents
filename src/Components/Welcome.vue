<template>
  <div class="welcome-container">
    <h1>Bienvenido</h1>
    <p>Esta es una serie de componentes hechos por los estudiantes para EduardoProfe.</p>
    <router-link to="/abdiel">
      <button>Comenzar</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
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
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
  }

  button {
    background-color: #ff4081;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.2s;
  }

  button:hover {
    background-color: #e91e63;
    transform: translateY(-2px);
  }
</style>
