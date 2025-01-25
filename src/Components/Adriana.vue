<template>

  <div class="background">
    <div class="container">
      <h1>{{ title }}</h1>
      <p class="message">{{ message }}</p>
      <button @click="Mensajitos">Otrooo!!</button>
    </div>

    <NextPrevComponent />
  </div>
</template>

<script>
import NextPrevComponent from './NextPrevComponent.vue';
export default {
  data() {
    return {
      title: 'Gracias',
      message: 'Por todos los pinky mensajes de aliento en cada una de las entregas.',
    };
  },
  methods: {
    Mensajitos() {
      const messages = [
        'Por todo el tiempo dedicado.',
        'Por todas las charlas motivacionales.',
        'Y por apreciar mi esfuerzo dibujando el camello en Paint.'
      ];
      this.message = messages[Math.floor(Math.random() * messages.length)];
    }
  },
  components: {
    NextPrevComponent,
  }
};
</script>

<style scoped>
.background {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  background: rgb(243, 243, 243);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin-bottom: 200px;
}

h1 {
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.message {
  color: #444;
  font-size: 1.3rem;
  margin: 20px 0;
  line-height: 1.5;
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
