import { User } from './user';
import { Workingprofile } from './workingprofile';

export class Accountmanager {
    idAccount: number = null;
    name: string = "";
    surname: string = "";
    user: User;
    workingprofile: Array<Workingprofile>[] = [];

}
