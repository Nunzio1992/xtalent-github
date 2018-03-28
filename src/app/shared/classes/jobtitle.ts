import { TranslatedResource } from "./translated_resource";
import { Workingprofile } from "./workingprofile";

export class Jobtitle {
    idJob: number= null;
    translatedresource: TranslatedResource=null;
    workingprofiles: Array<Workingprofile>[]=[];
}
