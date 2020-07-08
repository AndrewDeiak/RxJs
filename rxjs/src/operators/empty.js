import {empty, fromEvent, interval, merge} from "rxjs";
import {mapTo, scan, switchMap} from "rxjs/operators";

const pause = document.getElementById("pause");
const start = document.getElementById("start");
const timer = document.getElementById("timer");

const startClick$ = fromEvent(start, "click").pipe(mapTo(true));
const pauseClick$ = fromEvent(pause, "click").pipe(mapTo(false));
const interval$ = interval(1000).pipe(mapTo(1));
/**
 * merge - turn multiple observables into a single observable
 */

const timer$ = merge(startClick$, pauseClick$).pipe(
    switchMap(v => v ? interval$ : empty()),
    scan((acc, curr) => acc + curr, 0)
).subscribe((v)=> timer.innerText = v);
