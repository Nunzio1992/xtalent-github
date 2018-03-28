import { Workingprofile } from "./workingprofile";
import { TranslatedResource } from "./translated_resource";

export class Studytitle {
    idStudy: number=null;
    translatedresource: TranslatedResource=null;
    workingprofiles: Array<Workingprofile>[]=[];
}
