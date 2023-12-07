import { defineStore } from 'pinia'
import { useRouter, useRoute } from 'vue-router';
import { getCurrentUser, fetchAuthSession, signOut } from 'aws-amplify/auth';
import { ref } from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {
    const router = useRouter()
    const route = useRoute();

    const currentUser = ref<string|null>(null);
   
    async function isAuthenticated() {
        const session = await fetchAuthSession();        
        if (session.userSub) {
            currentUser.value = session.userSub;
            return true;
        }

        currentUser.value = null;
        return false;
    };

    async function getUserId() {
        return new Promise<string|null>(async (resolve) => {
            try {
                const { username, userId, signInDetails } = await getCurrentUser();
                currentUser.value = userId;
                resolve(userId);
            }
            catch {
                currentUser.value = null;
                resolve(null);
            }
        });
    }

    async function signOffUser() {
        await signOut();
        currentUser.value = null;
        router.push({ name: 'home' });
    }
    
    return { 
        getUserId,
        signOffUser,
        isAuthenticated,
        currentUser
    }
})
