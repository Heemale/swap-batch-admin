import {AuthProvider} from "react-admin";
import decodeJwt from 'jwt-decode';
import {apiUrl} from "@/common/constants";

export const authProvider: AuthProvider = {

    // called when the user attempts to log in
    login: ({username, password}) => {

        const request = new Request(`${apiUrl}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });

        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', auth.access_token);
                return {redirectTo: '/'};
            })
            .catch(() => {
                throw new Error('登录失败');
            });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem("auth");
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({status}: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("auth");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return check();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {

        const token = localStorage.getItem("auth");

        if (!token) return Promise.reject();

        const role = decodeJwt(token);

        return role ? Promise.resolve(role) : Promise.reject();

    },
};

const check = () => {

    const token = localStorage.getItem("auth");

    if (!token) return Promise.reject();

    const request = new Request(`${apiUrl}/auth/profile`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }),
    });

    return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json(); // Parse the response JSON
        })
        .then(user => {
            // Return the user data to indicate successful authentication
            return Promise.resolve(user);
        })
        .catch(() => {
            localStorage.removeItem("auth");
            throw new Error('Authentication error');
        });
}