export interface ILogin {
    isLoggedIn: boolean;
    checkSession(): boolean;
    doLogin(username: string, password: string): void;
    doLogout(): void;
}