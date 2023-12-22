import { defineStore } from 'pinia'
import { useRouter, useRoute } from 'vue-router';
import { getCurrentUser, fetchAuthSession, signOut } from 'aws-amplify/auth';
import { ref } from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {
    const router = useRouter()
    const route = useRoute();

    const currentUser = ref<string|null>(null);
   
    async function isAuthenticated() {

        try {
            const session = await fetchAuthSession();        
            if (session.userSub) {
                currentUser.value = session.userSub;
                return true;
            }
            else {
                //is a guest user
                throw("guest users not allowed");
            }

        }
        catch {
            currentUser.value = null;
            //await router.push({ name: "login" });
            return false;
        }

    };

    async function getUserId() {
        try {
            const { username, userId, signInDetails } = await getCurrentUser();
            currentUser.value = userId;
            return userId;
        }
        catch {
            currentUser.value = null;
            return null;    
        }
    }

    async function signOffUser() {
        await signOut();
        currentUser.value = null;
        await router.push({ name: 'login' });
    }
    
    return { 
        getUserId,
        signOffUser,
        isAuthenticated,
        currentUser
    }
})
