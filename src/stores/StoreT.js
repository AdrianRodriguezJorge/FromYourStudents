import { defineStore } from 'pinia';
import router from '../router';


export const useCurrentThanxStore = defineStore('StoreT', {
  state: () => ({
    components: [
      'abdiel',
      'adriana',
      'leyder',
      'piedra',
      'my-thanks',
    ],
    current: JSON.parse(localStorage.getItem('current')) ,
    size: 4,
    
  }),
  actions: {
    nextView(){
      this.current++;
      localStorage.setItem('current', this.current);
      console.log(this.current)
      router.push(`/${this.components[this.current]}`)
    },
    previousView(){
      this.current--;
      localStorage.setItem('current', this.current);
      router.push(`/${this.components[this.current]}`)
    },
  },
});
