import {empty, fromEvent, interval, merge, of} from "rxjs";
import {mapTo, mergeMap, scan, switchMap} from "rxjs/operators";
import {ObserverB} from "../../utils/utils";

const pause = document.getElementById("pause");
const start = document.getElementById("start");
const timer = document.getElementById("timer");

const startClick$ = fromEvent(start, "click").pipe(mapTo(true));
const pauseClick$ = fromEvent(pause, "click").pipe(mapTo(false));
const interval$ = interval(1000).pipe(mapTo(1));

/**
 * 1
 * merge - turn multiple observables into a single observable
 */

const timer$ = merge(startClick$, pauseClick$).pipe(
    switchMap(v => v ? interval$ : empty()),
    scan((acc, curr) => acc + curr, 0)
).subscribe(v => timer.innerText = v);


/**
 * 2
 * odd values
 */

const someInterval$ = interval(1000).pipe(
    mergeMap(v => v % 2 === 0 ? empty() : of(v))
);

someInterval$.subscribe(ObserverB);
