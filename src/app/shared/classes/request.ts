import { Requeststatus } from './requeststatus';
import { Requestskills } from './requestskills';
import { Accountmanager } from './accountmanager';

export class Request {
    idRequest: number = null;
    activityOffice: string = "";
    clientCompany: string = "";
    clientContractual: string = "";
    dateRequest: Date = null;
    dateUpd: Date = null;
    dateIns: Date = null;
    endDate: Date = null;
    initDate: Date = null;
    descrInitDate: string = "";
    descrEndDate: string = "";
    isActive: boolean = null;
    noteSpec: string = "";
    noteAccount: string = "";
    resourceNumber: number = null;
    requeststatus: Requeststatus = new Requeststatus();
    requestskills: Requestskills[] = [new Requestskills];
    accountmanager: Accountmanager = new Accountmanager() ;
}
