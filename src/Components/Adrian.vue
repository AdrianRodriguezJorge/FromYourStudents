<template>
  <div class="thanks-container">
    <h1 class="title">¡Muchísimas gracias, Eduardo Profe!</h1>
    <div class="card fade-in">
      <p>Eduardo Profe (así al revés, no profe Eduardo jaja), tu pasión y dedicación por la enseñanza han dejado en todos nosotros una marca imborrable. Siempre encontraste la forma de explicar cualquier cosa fácilmente y que nos riéramos en el proceso, y tuviste respuesta a cada cosa que preguntamos y eso que jodimos bastante. Como te mencioné en una ocasión: gracias nuevamente por dedicarnos tu tiempo, sabes tan bien como nosotros lo inusual que es eso en la facultad.</p>
    </div>
    <div class="card fade-in delay-1">
      <p>¡Poco se habla del bot que hiciste para nosotros!, así como un proyecto para cada contenido que dábamos, resúmenes en markdawn, en fin, ¿Se podría hacer MEJOR en 3 meses de semestre? IMPOSIBLE.</p>
    </div>
    <div class="card fade-in delay-2">
      <p>Gracias por cada miel, consejo y preocupación genuina hacia todos nosotros desde la docencia, lo personal y nuestros futuros.</p>
    </div>
    <div class="card fade-in delay-3">
      <p>Cuando sea grande quiero ser como tú (aunque tengamos la misma edad 🤣). Habré cumplido uno de mis objetivos en la vida si alguna vez logro, como alumno ayudante o profe, ayudar, influir tanto en mis estudiantes y lograr tener de ellos la mitad del respeto y agradecimiento que tenemos nosotros hacia ti.</p>
    </div>
    <div class="card fade-in delay-4">
      <p>Espero podamos seguir teniendo el placer de contar contigo para cualquier cosa, desde una duda técnica hasta una existencial. También deseo que nos tengas presentes cuando necesites cualquier cosa y recuerdes nuestro eterno agradecimiento.</p>
    </div>
    <div class="card fade-in delay-5">
      <p><strong>PD:</strong> ¿Cuándo vas a enseñarle al resto de los profesores a utilizar un bot de Telegram para hacer entregas, publicar notas y notificarlas al correo eh? 🤣🤣</p>
    </div>
    <div class="card fade-in delay-6">
      <p><strong class="last">Gracias</strong></p>
    </div>
    <NextPrevComponent />
  </div>
  <div class="page-credits">
    Adrián Rodríguez
  </div>
</template>

<script setup>
import NextPrevComponent from './NextPrevComponent.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.thanks-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(-45deg,#3c609b, #3c9b44, #9f873a, #9f2a2a);
  background-size: 400% 400%;
  animation: gradientBG 8s ease infinite;
  color: #fff;
  box-sizing: border-box;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.title {
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  color: white;
}

.card {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 15px 15px 5px 15px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  opacity: 0;
  color: white;
}

.fade-in {
  animation: fadeInUp 1s ease forwards;
}

.fade-in.delay-1 {
  animation-delay: 2s;
}

.fade-in.delay-2 {
  animation-delay: 4s;
}

.fade-in.delay-3 {
  animation-delay: 6s;
}

.fade-in.delay-4 {
  animation-delay: 8s;
}

.fade-in.delay-5 {
  animation-delay: 10s;
}

.fade-in.delay-6 {
  animation-delay: 12s;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.last {
  font-size: 1.8rem;
}

@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }
  .card {
    padding: 10px;
    margin: 10px;
  }
  .last {
    font-size: 1.5rem;
  }
}

.page-credits {
    position: fixed;
    bottom: 15px;
    right: 20px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    font-family: Arial, sans-serif;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .page-credits:hover {
    opacity: 1;
  }
</style>
