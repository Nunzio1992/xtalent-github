import { Role } from "./role"
import { Accountmanager } from "./accountmanager"

export class User {
    idUser: number = null;
    username: string = "";
    password: string = "";
    accountmanagers: Array<Accountmanager>[] = [];
    roles: Array<Role>[] = [];

}
