import { Workingprofile } from "./workingprofile";
import { Geolocationcitytranslated } from "./geolocationcitytranslated";

export class Geolocationcity {
    idCity:number=null;
    boundsNorthEastLatitude:number=null;
    boundsNorthEastLongitude:number=null;
    boundsSouthWestLatitude:number=null;
    boundsSouthWestLongitude:number=null;
    latitude:number=null;
    longitude:number=null;
    viewPortNorthEastLatitude:number=null;
    viewPortNorthEastLongitude:number=null;
    viewPortSouthWestLatitude:number=null;
    viewPortSouthWestLongitude:number=null;
    comment:string="";
    placeId:string="";
    geolocationcitytranslateds:Array<Geolocationcitytranslated>[]=[];
    workingprofiles1:Array<Workingprofile>[]=[];
    workingprofiles2:Array<Workingprofile>[]=[];
}
