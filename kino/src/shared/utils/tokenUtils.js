

const TOKEN_KEY = "session-token"

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token); 
}  

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function clearToken() {
    localStorage.removeItem(TOKEN_KEY); 
}

//we could have sent api request for this, but it is acceptable and simpler to stay in front. 
export function tokenExists() {
    return localStorage.getItem(TOKEN_KEY)!=null
}