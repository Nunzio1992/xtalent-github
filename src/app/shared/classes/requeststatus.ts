import { Request } from "./request";

export class Requeststatus {
    idStatus: number = null;
    description:string="";
    flagStatus:boolean=null;
    requests: Array<Request>[]=[];
    
}
