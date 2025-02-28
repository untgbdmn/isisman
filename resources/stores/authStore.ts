import { create } from 'zustand';
import { persist, StorageValue } from 'zustand/middleware';
import Cookies from 'js-cookie';

interface User {
    id?: number | string;
    email?: string;
    name?: string;
    image?: string;
    emailVerified?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

type AuthStoreType = {
    token: string | null;
    user: User | null;
    login: (token: string, user: User) => void;
    logout: () => void;
};

const customCookies = {
    getItem: (name: string) => {
        const value = Cookies.get(name);
        return value ? JSON.parse(value) : null;
    },
    setItem: (name: string, value: StorageValue<AuthStoreType>, options?: Cookies.CookieAttributes) => {
        Cookies.set(name, JSON.stringify(value), { expires: 1, ...options });
    },
    removeItem: (name: string, options?: Cookies.CookieAttributes) => {
        Cookies.remove(name, options);
    },
    removeAll: () => {
        const allCookies = Cookies.get();
        for (let name in allCookies) {
            if (allCookies.hasOwnProperty(name)) {
                Cookies.remove(name);
            }
        }
    }
};

const authStore = create<AuthStoreType>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            login: (token, user) => {
                set({ token, user })
            },
            logout: () => {
                customCookies.removeAll();
                set({ token: null, user: null })
            },
        }),
        {
            name: 'isisman-auth',
            storage: customCookies,
        }
    )
);

export default authStore;