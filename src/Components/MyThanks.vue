<template>
  <div class="thanks-container">
    <h1>Gracias EduardoProfe</h1>
    <p>Gracias por tu dedicación y esfuerzo en enseñarnos. Tu pasión por la enseñanza ha dejado una huella imborrable en nosotros.</p>
    <router-link to="/abdiel">
      <button>Ver dedicatorias</button>
    </router-link>
  </div>
</template>

<style scoped>
  .thanks-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background: linear-gradient(to right, #ff4081, #ff4081);
    color: white;
  }

  button {
    background-color: #6a11cb;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.2s;
  }

  button:hover {
    background-color: #2575fc;
    transform: translateY(-2px);
  }
</style>