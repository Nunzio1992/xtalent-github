
import { Jobtitle } from "./jobtitle"
import { Studytitle } from "./studytitle"
import { TranslatedResourceContent } from "./translated_resource_content"

export class TranslatedResource {
    idTranslate: number =null;
    description: string="";
    jobtitles: Array<Jobtitle>[]= [];
    studytitles: Array<Studytitle>[]= [];
    translatedresourcecontents: TranslatedResourceContent=null;
}