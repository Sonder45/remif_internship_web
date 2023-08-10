import Cookies from "js-cookie";

export default class Auth{
    static setToken(token){
        Cookies.set("token", token);
    }
    static getToken(){
        const token = Cookies.get("token");
        return token;
    }
    static setName(name){
        Cookies.set("name", name);
    }
    static getName(){
        const name = Cookies.get("name");
        return name;
    }
    


    static removeToken(){
        Cookies.remove("token");
        Cookies.remove("name");
    }
}