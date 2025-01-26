<script setup lang="ts">
import { computed } from 'vue';
import { useCurrentThanxStore } from '../stores/StoreT';


const state = useCurrentThanxStore();
const current = computed(() => state.current);
const size = computed(() => state.size);

const goNext = () => {
    state.nextView();
}

const goBack = () => {
    state.previousView();
}

const goHome = () => {
    state.homeView();
}
</script>

<template>
    <footer>
        <div class="prev" @click="goBack()" v-if="current > 0">
            <p >Anterior</p>
        </div>

        <div class="home" @click="goHome()" :class="{
            'margin': current < 1,
            'margin-r': current === size,
        }">
            <p>Inicio</p>
        </div>


        <div @click="goNext()" v-if="current !== size" class="next">
            <p>Siguiente</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    padding: 0 0 0 0;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 10;
    position: relative;
    display: flex;
    justify-content: space-between;

}

footer .prev {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
    border: none;
    padding: 12px 24px 0 24px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: background-color 0.3s, transform 0.2s;
    display: flex;
    align-items: center;
    margin-left: 100px;
    margin-bottom: 50px;
}

footer .prev.none {
    background-color: transparent;
}

footer .next {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
    border: none;
    padding: 12px 24px 0 24px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: background-color 0.3s, transform 0.2s;
    display: flex;
    align-items: center;
    margin-right: 100px;
    margin-bottom: 50px;
}

footer .home{
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
    border: none;
    padding: 12px 24px 0 24px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: background-color 0.3s, transform 0.2s;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

footer .home.margin{
    margin-left: 100px;
}

footer .home.margin-r{
    margin-right: 100px;
}

footer .next:hover,
footer .prev:hover,
footer .home:hover {
    background-color:rgb(255, 255, 255);
    transform: translateY(-2px);
}

@media (max-width: 750px) {
    footer .next{
        margin-right: 7px;
        font-size: 1rem;
    }

    footer .prev{
        margin-left: 7px;
        font-size: 1rem;
    }

    footer .home.margin{
        margin-left: 7px;
        font-size: 1rem;
    }
    footer .home{
        font-size: 1rem;
    }
    
    footer .home.margin-r{
    margin-right: 7px;
    font-size: 1rem;
}
}
</style>