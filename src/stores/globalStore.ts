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
                return true;
            }

        }
        catch {
            currentUser.value = null;
            await router.push({ name: "login" });
            return false;
        }

    };

    async function getUserId() {
        return new Promise<string|null>(async (resolve) => {
            try {
                const { username, userId, signInDetails } = await getCurrentUser();
                currentUser.value = userId;
                resolve(userId);
            }
            catch {
                try {
                    const isAuthed = await isAuthenticated();
                    if (!isAuthed) {
                        throw("session expired");
                    }

                    resolve("guest");
                }
                catch {
                    await router.push({ name: "login" });
                }
            }
        });
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
