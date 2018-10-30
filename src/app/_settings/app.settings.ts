/**
 *
 *
 * @interface IAppConfig
 */
interface IAppConfig {
    protocol: string;
    server: string;
    port: string;
    baseUri: string;
    baseFullUri: string;
    planUri: string;
}
export class globalApiSettings {
    public static protocol = 'http';
    public static server = 'localhost';
    public static port = '4000';
    public static baseUri = '/api/v1';
    public static baseFullUri = globalApiSettings.protocol + "://" + globalApiSettings.server + ":" + globalApiSettings.port + globalApiSettings.baseUri;
    public static baseHalfUri = globalApiSettings.protocol + "://" + globalApiSettings.server + ":" + globalApiSettings.port;
    public static planUri = globalApiSettings.baseFullUri + "/plan/getPlans";
    public static bloginUri = globalApiSettings.baseFullUri + "/basic/login";
    public static loginUri = globalApiSettings.baseHalfUri + "/login";
    public static logoutUri = globalApiSettings.baseHalfUri + "/logout";
    public static saveUserUri = globalApiSettings.baseFullUri + "/register/saveUser";



}