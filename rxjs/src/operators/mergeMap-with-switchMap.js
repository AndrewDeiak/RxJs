import {ajax} from "rxjs/ajax";
import {interval, of} from "rxjs";
import {map, mergeMap} from "rxjs/operators";

export const ObserverA = {
    next: (v) => console.log("[A] next", v),
    error: (err) => console.log("[A] error", err),
    complete: () => console.log("[A] Complete"),
};

export const ObserverB = {
    next: (v) => console.log("[B] next", v),
    error: (err) => console.log("[B] error", err),
    complete: () => console.log("[B] Complete"),
};


/**
 mergeMap allows for multiple inner subscriptions to be active at a time
 switchMap - on each emission the previous inner observable (the result of the function) is cancelled and the new observable is subscribed
 */
const userData$ = ajax("https://jsonplaceholder.typicode.com/todos/1");
const resOnInteval$ = interval(10).pipe(
    mergeMap(()=> userData$), // multiple inner subscriptions to be active at a time
    // switchMap(() => userData$), // if the request will take more then 10 ms it will be canceled
    map(data => data.response)
);

resOnInteval$.subscribe(ObserverA);

/**
 * mergeMap with resultSelector
 */
const dog$ = of("Dog");
const cat$ = of("Cat");

dog$.pipe(
    mergeMap(() => cat$, (dog, cat) => `${dog} and ${cat}`)
).subscribe(ObserverB);


