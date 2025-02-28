import Cookies from 'js-cookie';

const useCookies = () => {
    return {
        setItem: (name: string, value: string, options?: Cookies.CookieAttributes) => {
            Cookies.set(name, JSON.stringify(value), options);
        },
        getItem: (name: string) => {
            const value = Cookies.get(name);
            return value ? JSON.parse(value) : null;
        },
        getAll: () => {
            const allCookies = Cookies.get(); 
            return allCookies;
        },
        removeItem: (name: string, options?: Cookies.CookieAttributes) => {
            Cookies.remove(name, options);
        },
        removeAll: () => {
            const allCookies = Cookies.get(); // Get all cookies
            for (let name in allCookies) {
                if (allCookies.hasOwnProperty(name)) {
                    Cookies.remove(name); // Remove each cookie
                }
            }
        }
    };
};

export default useCookies;
