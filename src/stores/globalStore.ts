import { defineStore } from 'pinia'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import * as Auth from 'aws-amplify/auth';

export const useGlobalStore = defineStore('globalStore', () => {
    const router = useRouter()
   
    const userId = ref();

    async function getUserId() {
        return new Promise<string>(async (resolve) => {
            const session = await Auth.fetchAuthSession();
            if (session.userSub) {
                resolve(session.userSub);
            } else {
            router.push({ path: '/' });
                resolve(''); // Replace with the actual default path
            }
        });
    }

    async function signOut() {
        await Auth.signOut();
        router.push({ path: '/' });
    }

    function setUserId(id: any) {
        userId.value = id;
    }
    
    return { 
        getUserId,
        setUserId,
        signOut,
    }
})
