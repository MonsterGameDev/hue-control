import { HttpErrorResponse } from '@angular/common/http';

export interface TimeUpdateObject {
  currentTime: number;
  formatted: TimeStampObject;
}

export interface TimeStampObject {
  hh: string;
  mm: string;
  ss: string;
}

export interface Behaviors {
  loading: boolean;
  error: HttpErrorResponse | null;
}
