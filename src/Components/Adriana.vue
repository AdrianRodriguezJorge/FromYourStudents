<template>
  <div class="background"></div>
  <div class="mes-con">
    <div class="container-a">
      <h1>{{ title }}</h1>
      <p class="message">{{ message }}</p>
      <button @click="Mensajitos">Otrooo!!</button>
    </div>
  </div>
  <NextPrevComponent />
</template>

<script>
import NextPrevComponent from './NextPrevComponent.vue';

export default {
  data() {
    return {
      title: 'Gracias',
      message: 'Por todos los pinky mensajes de aliento en cada una de las entregas.',
      messageIndex: 0,
      messages: [
        'Por todo el tiempo dedicado.',
        'Por todas las charlas motivacionales.',
        'Y por apreciar mi esfuerzo dibujando el camello en Paint.'
      ],
    };
  },
  mounted() {
    this.Mensajitos(); // Inicializa el primer mensaje
  },
  methods: {
    Mensajitos() {
      this.message = this.messages[this.messageIndex];
      this.messageIndex = (this.messageIndex + 1) % this.messages.length;
    }
  },
  components: {
    NextPrevComponent,
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.background {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -1;
  margin: 0;
}

.mes-con {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-a {
  text-align: center;
  background: rgb(243, 243, 243);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin-bottom: 200px;
  margin-top: 150px;
  z-index: 2;
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

@media (max-width: 610px) {
  .container-a {
    width: 90%;
  }
}
</style>
