import { Injectable } from '@angular/core';
import { TimeUpdateObject } from '../+state/app.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  formatTime(currentTime: number): { hh: string; mm: string; ss: string } {
    const s = Math.floor(currentTime) % 60;
    const m = Math.floor(currentTime / 60) % 60;
    const h = Math.floor(currentTime / 60 / 60) % 60;

    const sec = s < 10 ? '0' + s : s.toString();
    const min = m < 10 ? '0' + m : m.toString();
    const hrs = h < 10 ? '0' + h : h.toString();

    return { hh: hrs, mm: min, ss: sec };
  }

  createFullTimeStamp(currentTime: number): TimeUpdateObject {
    return {
      currentTime,
      formatted: this.formatTime(currentTime),
    };
  }
  
}
