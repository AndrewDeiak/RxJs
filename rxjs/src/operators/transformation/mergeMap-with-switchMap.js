import {ajax} from "rxjs/ajax";
import {fromEvent, interval, of} from "rxjs";
import {map, mergeMap, pairwise} from "rxjs/operators";
import {ObserverB, ObserverC} from "../../utils/utils";

/**
 mergeMap allows for multiple inner subscriptions to be active at a time
 switchMap - on each emission the previous inner observable (the result of the function) is cancelled and the new observable is subscribed
 */
const userData$ = ajax("https://jsonplaceholder.typicode.com/todos/1");
const resOnInteval$ = interval(10).pipe(
    mergeMap(() => userData$), // multiple inner subscriptions to be active at a time
    // switchMap(() => userData$), // if the request will take more then 10 ms it will be canceled
    map(data => data.response)
);

// resOnInteval$.subscribe(ObserverA);

/**
 * mergeMap with resultSelector
 */
const dog$ = of("Dog");
const cat$ = of("Cat");

dog$.pipe(
    mergeMap(() => cat$, (dog, cat) => `${dog} and ${cat}`)
).subscribe(ObserverB);

/**
 *  mergeMap & switchMap simulating save of click locations
 */

// faking network request for save
const saveLocation = location => {
    return of(location).pipe();
};
// streams
const click$ = fromEvent(document, 'click');

click$
    .pipe(
        mergeMap((e) => {
            // switchMap((e) => {
            return saveLocation({
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now()
            })
        }),
        pairwise(),
    )
    .subscribe(ObserverC);
