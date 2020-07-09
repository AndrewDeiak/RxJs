import {ajax} from "rxjs/ajax";
import {delay, exhaustMap} from "rxjs/operators";
import {fromEvent} from "rxjs";

export const ObserverA = {
    next: (v) => console.log("[A] next", v),
    error: (err) => console.log("[A] error", err),
    complete: () => console.log("[A] Complete"),
};

const click$ = fromEvent(document, 'click');

/**
 * Map to inner observable, ignore other values until that observable completes
 */

const request$ = ajax("https://jsonplaceholder.typicode.com/todos/1");

click$.pipe(
    exhaustMap(() => request$.pipe(delay(1000))),
).subscribe(ObserverA);
