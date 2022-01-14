export interface TimeUpdateObject{
  currentTime: number;
  formatted: TimeStampObject,
}

export interface TimeStampObject {
  hh: string; mm: string; ss: string;
}
