<template>
  <div class="eduardo-container">
    <div
      class="eduardo-face"
      @mousemove="trackMouse"
      @click="showNewMessage"
      :style="faceStyle"
      :class="{ hovered: isHovered }"
    >
      <div class="glasses">
        <div
          class="lens"
          v-for="(_, index) in 2"
          :key="index"
          ref="lensElements"
        >
          <div class="pupil" :style="getEyeStyle(index)"></div>
        </div>
      </div>
      <div class="mouth"></div>
    </div>

    <transition name="bounce">
      <div v-if="currentMessage" class="speech-bubble">
        {{ currentMessage }}
        <div class="code">// ¡Gracias Eduardo! 🚀</div>
      </div>
    </transition>
    <NextPrevComponent />

    <div
      class="confetti"
      v-for="confetto in confettis"
      :key="confetto.id"
      :style="getConfettiStyle(confetto)"
    ></div>
  </div>
  <div class="page-credits">
    Creado por Carlos M. Piedra - Gracias Profe Eduardo 💻
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from "vue";
  import NextPrevComponent from './NextPrevComponent.vue';

  const messages = ref([
    'console.log("Gracias por ser nuestro MVP 🏆");',
    "¡Más valioso que un StackOverflow con 100k upvotes! 📚💻",
    "¡Tu código de enseñanza compila perfecto! 👨💻",
    "¡Nos pusiste en modo Strict de aprendizaje! 🧠⚡️",
    "¡Eres el git push que necesitábamos! 📈👨🚀",
    "¡Nuestro state management favorito es tu sabiduría! 🧠💾",
    "¡Eres el .env de nuestras variables existenciales! 🔐",
    "¡Más eficiente que un algoritmo O(1)! ⚡️📊",
    "¡Nuestro proyecto final tiene tu commit en el corazón! ❤️💻",
    "¡Más poderoso que una terminal con sudo privileges! 💪🖥",
    "¡El mejor debugger de problemas existenciales! 🐛🔍",
    "¡Eres el 200 OK de nuestras peticiones de ayuda! 🌐✅",
    "¡El único framework que realmente necesitamos! 🛠",
    "¡Nos debuggeaste el conocimiento! 🐛➡️🌟",
    "NPM install eduardo-legendario",
    "while(true) { enseñarConPasión(); }",
    "¡Nuestro código asíncrono favorito! ⏳",
  ]);

  const isHovered = ref(false);
  const currentMessage = ref("");
  const mouseX = ref(0);
  const mouseY = ref(0);
  const tilt = ref(0);
  const confettis = ref([]);
  const lensElements = ref([]);
  const animationFrame = ref(null);
  const lastUpdate = ref(performance.now());
  // Configuración de física
  const GRAVITY = 0.3;
  const DRAG = 0.98;
  const CONFETTI_SPEED = 4;

  // Animación optimizada
  const animate = () => {
    const now = performance.now();
    const delta = (now - lastUpdate.value) / 1000;

    confettis.value = confettis.value.filter((confetto) => {
      confetto.y += confetto.vy * delta * 60;
      confetto.x += confetto.vx * delta * 60;
      confetto.vy += GRAVITY;
      confetto.vx *= DRAG;
      confetto.rotation += confetto.vr;

      return confetto.y < window.innerHeight + 50;
    });

    lastUpdate.value = now;
    animationFrame.value = requestAnimationFrame(animate);
  };

  // Funciones faltantes añadidas
  const trackMouse = (event) => {
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        mouseX.value = event.clientX - 100;
        mouseY.value = event.clientY - 100;
        tilt.value = (event.clientX / window.innerWidth - 0.5) * 60;
        isHovered.value = true;
      });
    }
  };

  const showNewMessage = () => {
    currentMessage.value =
      messages.value[Math.floor(Math.random() * messages.value.length)];
    createConfetti();
    setTimeout(() => (currentMessage.value = ""), 3000);
  };

  // Estilo de la cara (versión corregida)
  const faceStyle = computed(() => {
    return {
      transform: "rotate(" + tilt.value + "deg)",
    };
  });

  // Función para estilo de ojos (versión corregida)
  const getEyeStyle = (index) => {
    if (!lensElements.value[index]) return {};

    const face = document.querySelector(".eduardo-face");
    const eye = lensElements.value[index].getBoundingClientRect();
    const faceRect = face.getBoundingClientRect();

    // Coordenadas relativas al centro de la cara
    const mouseXRelative = mouseX.value - faceRect.left - faceRect.width / 2;
    const mouseYRelative = mouseY.value - faceRect.top - faceRect.height / 2;

    // Movimiento proporcional (15% del desplazamiento)
    const eyeMovementX = mouseXRelative * 0.15;
    const eyeMovementY = mouseYRelative * 0.15;

    return {
      "--pupil-x": eyeMovementX + "px",
      "--pupil-y": eyeMovementY + "px",
    };
  };

  // Función para estilo del confeti (corregida)
  const getConfettiStyle = (confetto) => {
    return {
      left: confetto.x + "%",
      background: confetto.color,
      top: confetto.y + "px",
      "--delay": confetto.delay + "s",
      "--duration": confetto.duration + "s",
      "--x-offset": confetto.direction * Math.random() * 50 + "vw",
    };
  };

  // Crear confeti con física realista
  const createConfetti = () => {
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

    for (let i = 0; i < 30; i++) {
      confettis.value.push({
        id: performance.now() + i,
        x: 50,
        y: -10,
        vy: Math.random() * CONFETTI_SPEED + 2,
        vx: (Math.random() - 0.5) * CONFETTI_SPEED * 2,
        vr: (Math.random() - 0.5) * 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * 360,
      });
    }

    if (!animationFrame.value) {
      animationFrame.value = requestAnimationFrame(animate);
    }
  };
</script>

<style scoped>
  .eduardo-container {
    position: relative;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #1d2b53 0%, #2c2137 100%);
    overflow: hidden;
  }

  /* Rostro más amigable */
  .eduardo-face {
    width: 200px;
    height: 200px;
    background: #ffe0b2; /* Color piel suave */
    border-radius: 50%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1),
      inset 0 -8px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  /* Gafas modernas y realistas */
  .glasses {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    display: flex;
    justify-content: space-between;
    z-index: 2;
  }

  .lens {
    width: 60px;
    height: 60px;
    background: rgba(58, 91, 134, 0.1); /* Cristal azul claro */
    border-radius: 20px;
    border: 3px solid #3a5b86; /* Marco azul */
    box-shadow: inset 0 0 15px rgba(58, 91, 134, 0.2),
      0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(2px);
  }

  .pupil {
    width: 30px;
    height: 30px;
    will-change: transform;
    background: #93c137;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(var(--pupil-x), var(--pupil-y), 0);
    transition: all 0.1s ease;
  }

  /* Boca más visible */
  .mouth {
    width: 80px;
    height: 40px;
    background: #e57373;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 80px 80px;
    box-shadow: inset 0 -4px 8px rgba(0, 0, 0, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Burbuja de diálogo mejorada */
  .speech-bubble {
    position: absolute;
    top: 100px;
    background: #2c3e50;
    color: #fff;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    text-align: center;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    animation: float 3s ease-in-out infinite;
    border: 2px solid #34495e;
  }

  .speech-bubble::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    border-width: 10px;
    border-style: solid;
    border-color: #2c3e50 transparent transparent transparent;
  }

  .code {
    font-family: "Courier New", monospace;
    margin-top: 0.8rem;
    font-size: 0.9em;
    color: #3a5b86;
    font-weight: bold;
  }

  /* Confeti más visible */
  .confetti {
    position: absolute;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    width: 10px;
    height: 10px;
    border-radius: 30%;
    animation: confettiFall var(--duration)
      cubic-bezier(0.55, 0.085, 0.68, 0.53) var(--delay) forwards;
    opacity: 0.9;
    z-index: 999;
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

  /* Animaciones mejoradas */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(-2deg);
    }
    50% {
      transform: translateY(-15px) rotate(2deg);
    }
  }

  @keyframes confettiFall {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translate3d(var(--x-offset), 120vh, 0) rotate(720deg);
      opacity: 0;
    }
  }

  /* Efecto hover con variable CSS */
  .eduardo-face:hover {
    transform: scale(1.05) rotate(var(--tilt));
    filter: brightness(1.1) drop-shadow(0 0 15px rgba(240, 219, 79, 0.5));
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15),
      inset 0 -8px 25px rgba(0, 0, 0, 0.1);
  }

  .eduardo-face:hover .mouth {
    height: 30px;
    border-radius: 0 0 60px 60px;
  }

  .pupil::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 20%;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    filter: brightness(1.2);
  }
</style>
