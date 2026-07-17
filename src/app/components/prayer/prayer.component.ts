import {  Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTimingsService } from '../../services/get-timings.service';
import { Elad } from '../../elad';
import { BehaviorSubject, Subscription, take} from 'rxjs'

@Component({
  selector: 'app-prayer',
  standalone: true,
  imports: [CommonModule],
  providers: [GetTimingsService],
  template: `
    <div class="pt-wrap">

  <div class="pt-header">
    <h2>Prayer Times</h2>
    <p class="date">{{ today | date:'fullDate' }}</p>
  </div>

  <div class="pt-grid" *ngIf="dec$ | async as tims">
    <div
      class="pt-card"
      *ngFor="let item of tims.data.timings | keyvalue"
      [class.active]="item.key === nextPrayer"
    >
      <span class="pt-icon">{{ icons[item.key] || '🕌' }}</span>
      <div class="pt-name">{{ item.key }}</div>
      <div class="pt-time">{{ item.value }}</div>
      <span class="pt-badge" *ngIf="item.key === nextPrayer">Next</span>
    </div>
  </div>

  <div class="pt-footer">
    Prayer times &copy; 2023
  </div>

</div>
  `,
  styles: `
    .pt-wrap {
  max-width: 760px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: sans-serif;
}

.pt-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.pt-header h2 {
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 4px;
  color: #1a1a1a;
}

.date {
  font-size: 13px;
  color: #888;
}

.pt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 1.5rem;
}

.pt-card {
  background: #ffffff;
  border: 0.5px solid #e0e0e0;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: all 0.2s;
}

.pt-card.active {
  border: 2px solid #1D9E75;
}

.pt-icon {
  font-size: 22px;
  display: block;
  margin-bottom: 8px;
}

.pt-name {
  font-size: 13px;
  color: #888;
  margin-bottom: 4px;
}

.pt-time {
  font-size: 20px;
  font-weight: 500;
  color: #1a1a1a;
}

.pt-card.active .pt-time {
  color: #1D9E75;
}

.pt-badge {
  display: inline-block;
  font-size: 11px;
  background: #e1f5ee;
  color: #0f6e56;
  border-radius: 99px;
  padding: 2px 10px;
  margin-top: 6px;
}

.pt-footer {
  text-align: center;
  font-size: 12px;
  color: #aaa;
  border-top: 0.5px solid #eee;
  padding-top: 1rem;
}
 

  `,
})
export class PrayerComponent implements OnInit, OnDestroy {
  response$: any = {};
  data: any={};
  sub$!: Subscription;
  today = new Date();
  nextPrayer= '';




  // icons
   icons: Record<string, string> = {
    Fajr: '🌙',
    Sunrise: '🌅',
    Dhuhr: '☀️',
    Asr: '🌤️',
    Maghrib: '🌇',
    Isha: '✨',
  };


  constructor(private timings: GetTimingsService) {}

 dec$ = this.timings.suspens$;
  ngOnInit() {

    // this.sub$=
    // this.timings.timing().subscribe({
    //   next: (m) => {
    //     this.response$ = m.timings;
    //     this.data = m;

    //   },
    //   error: (error) => console.log(error),
    // });
  }

  ngOnDestroy() {

  //  this.sub$.unsubscribe();
    // this.response$.unsubscribe();
    // this.data.unsubscribe();
  }
}
