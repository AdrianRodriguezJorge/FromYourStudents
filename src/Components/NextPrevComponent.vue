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
</script>

<template>
    <footer>
        <div class="prev" @click="goBack()" :class="{
            'none': current < 1,
        }">
            <p v-if="current > 0">Anterior</p>
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
    background-color: #ff4081;
    color: white;
    border: none;
    padding: 12px 24px 0 24px;
    border-radius: 5px;
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
    background-color: #ff4081;
    color: white;
    border: none;
    padding: 12px 24px 0 24px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: background-color 0.3s, transform 0.2s;
    display: flex;
    align-items: center;
    margin-right: 100px;
    margin-bottom: 50px;
}

footer .next:hover,
footer .prev:hover {
    background-color: #e91e63;
    transform: translateY(-2px);
}
</style>