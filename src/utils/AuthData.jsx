const USERS_KEY = "users";
const LOGGED_IN_USER_KEY = "loggedInUser";

export const getUsers = () => {
    try {
        return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch{
        return [];
    }
};

export const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const loginUser = (email, password) => {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if(user){
        localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(user));
        return true;
    }
    return false;
};

export const logoutUser = () => {
    localStorage.removeItem(LOGGED_IN_USER_KEY);
};

export const getLoggedInUser = () => {
    return JSON.parse(localStorage.getItem(LOGGED_IN_USER_KEY));
}