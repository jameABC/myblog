import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, debounceTime, map, shareReplay, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetTimingsService {

  constructor(private http:HttpClient) {

   }
   public readonly Ap :string = 'https://api.aladhan.com/v1/timingsByCity?city=Ljubljana&country=SI'
   suspens$ = this.http.get<data>(this.Ap).pipe(
    shareReplay(1),
    tap(f => console.log(f) ));


   timing(){
    return this.http.get<data>(this.Ap).pipe(
      map(res => res.data  ),
      debounceTime(300),

      // tap((res)=> console.log(res)
      // )

    )
   }


}

class d{
  constructor(
    status:string,
    code:number,
    data:{
      timings:{
        Fajr: string,
    Asr: string,
    Dhuhr: string,
    Firstthird: string,
    Imsak: string,
    Isha: string,
    Lastthird: string,
    Maghrib: string,
    Midnight: string,
    Sunrise: string,
    Sunset: string
      },
      date:{
         date: string;
      }
    },

  ){}
}

interface data{
  status:string;
  code:number;
  data:{timings:timings,date:date }
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
  Fajr: string;
  Asr: string;
  Dhuhr: string;
  Firstthird: string;
  Imsak: string;
  Isha: string;
  Lastthird: string;
  Maghrib: string;
  Midnight: string;
  Sunrise: string;
  Sunset: string;
}
