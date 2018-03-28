import { Skillassociation } from "./skillassociation";

export class Skill {
    idSkill:number=null;
    description:string="";
    skillassociations:Array<Skillassociation>[]=[];
}
