import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transitiontimeInSeconds',
})
export class TransitionTimeInSecondsPipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): unknown {
    if (value === 0 ?? undefined) return;

    if (value! / 10 === 0.2) return '(default)';

    return value! / 10 + 's';
  }
}
