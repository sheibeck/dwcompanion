import { defineStore } from 'pinia'
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import * as Auth from 'aws-amplify/auth';
import * as bootstrap from 'bootstrap';

export const useGlobalStore = defineStore('globalStore', () => {
    const router = useRouter()
   
    const isAuthenticated = computed(async () => (await Auth.fetchAuthSession()).userSub);

    async function getUserId() {
        return new Promise<string>(async (resolve) => {
            const session = await Auth.fetchAuthSession();
            if (session.userSub) {
                resolve(session.userSub);
            } else {
            router.push({ path: '/login' });
                resolve(''); // Replace with the actual default path
            }
        });
    }

    async function signOut() {
        await Auth.signOut();
        router.push({ path: '/' });
    }

    function userMessage(message: string) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(UserMessage)
    }
    
    return { 
        getUserId,
        signOut,
        isAuthenticated,
    }
})
