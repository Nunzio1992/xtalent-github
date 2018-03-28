import { Accountmanager } from "./accountmanager";
import { Skillassociation } from "./skillassociation";
import { Businessunit } from "./businessunit";
import { Geolocationcity } from "./geolocationcity";
import { Jobtitle } from "./jobtitle";
import { Studytitle } from "./studytitle";

export class Workingprofile {
    idProfile: number = null;
    avaibilityDate: Date = null;
    avaibilityDays: Date = null;
    birthdate: Date = null;
    blacklist: boolean = false;
    companyEmployer: string = "";
    cost: number = null;
    dateBlacklist: Date = null;
    dateIns: Date = null;
    dateUpd: Date = null;
    email: string = "";
    isWorking: boolean = false;
    isHired: boolean = false;
    lastCompanyName: string = "";
    name: string = "";
    nationality: string = "";
    noteAccount: string = "";
    noteColloquio: string = "";
    phone: number = null;
    requestCost: number = null;
    residenceAddress: string = "";
    residenceZip: number = null;
    surname: string = "";
    toAllocate: boolean = false;
    skillassociations: Array<Skillassociation>[] = [];
    accountmanager: Accountmanager=null;
    businessunit: Businessunit=null;
    geolocationcity1: Geolocationcity=null;
    geolocationcity2: Geolocationcity=null;
    jobtitle: Jobtitle=null;
    studytitle: Studytitle= new Studytitle();
}
