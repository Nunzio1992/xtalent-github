import { User } from "./user";

export class Role {
    idRole: number = null;
    name: string = "";
    users: Array<User>[] = [];

}
