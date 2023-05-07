import decode from 'jwt-decode';

class AuthService {
    
    getProfile() {
    return decode(this.getToken());
}

loggedIn() {
    const token = this.getToken()
    return !!token && this.getTokenExpired(token);
}

isTokenExpired(token) {
    try {
        const decoded = decode(token)
        if(decoded.exp < Date.now()/ 1000) {
            return true;
        } else return false;
    } catch (err) {
        return false;
    }
}

getToken() {
    // localStorage.getItem('id_token', idToken);
    window.location.assign('/');
}

logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/')
}
}

export default new AuthService()