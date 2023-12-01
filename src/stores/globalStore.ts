import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {

    const userId = ref();

    const getUserId = computed(() => userId.value);
    
    return { 
        getUserId
    }
})
