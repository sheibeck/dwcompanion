import { defineStore } from 'pinia'
import { useRouter, useRoute } from 'vue-router';
import * as Auth from 'aws-amplify/auth';
import { ref } from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {
    const router = useRouter()
    const route = useRoute();

    const userId = ref<string|null>(null);
   
    async function isAuthenticated() {
        const session = await Auth.fetchAuthSession();
        if (session.userSub) {
            userId.value = session.userSub;
            return true;
        }

        userId.value = null;
        return false;
    };

    async function getUserId() {
        return new Promise<string|null>(async (resolve) => {
            const session = await Auth.fetchAuthSession();
            if (session.userSub) {
                userId.value = session.userSub;
                resolve(session.userSub);
            } else {
                if (route.name !== "home") {
                    router.push({ path: '/login' });
                }
                userId.value = null;
                resolve(null); // Replace with the actual default path
            }
        });
    }

    async function signOut() {
        await Auth.signOut();
        userId.value = null;
        router.push({ path: '/' });
    }
    
    return { 
        getUserId,
        signOut,
        isAuthenticated,
        userId
    }
})
