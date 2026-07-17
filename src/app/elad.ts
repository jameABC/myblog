export interface Elad {
  code:number;
  status:string;
  data:{timings:timings,meta:meta,date:date }
}


interface meta{
  latitude:number;
  latitudeAdjustmentMethod:string;
  longitude:number;
  method:method;
  midnightMode:string;
  offset:offset;
  school:string;
  timezone:string;

}

interface offset {
  Asr: number;
  Dhuhr:number;
  Fajr:number;
  Imsak:number;
  Isha:number;
  Maghrib:number;
  Midnight:number;
  Sunrise:number;
  Sunset:number;
}

interface method{
  id:number;
  location:location;
  name:string;
  params:params;
}
interface params{
  fajr:string;
  isha:string;
}

interface location{
  latitude:number;
  longitude:number;
}


interface date {
  date: string;
  format: string;
  day: string;
  weekday: Weekday;
  month: Month;
  year: string;
  designation: Designation;
}

 interface Designation {
  abbreviated: string;
  expanded:    string;
}

 interface Month {
  number: number;
  en:     string;
}

 interface Weekday {
  en: string;
}

interface timings {
  Asr: string;
  Dhuhr: string;
  Fajr: string;
  Firstthird: string;
  Imsak: string;
  Isha: string;
  Lastthird: string;
  Maghrib: string;
  Midnight: string;
  Sunrise: string;
  Sunset: string;
}
