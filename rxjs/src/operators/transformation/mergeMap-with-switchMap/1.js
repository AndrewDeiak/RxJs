import {ajax} from "rxjs/ajax";
import {interval} from "rxjs";
import {map, mergeMap} from "rxjs/operators";
import {ObserverA} from "../../../utils/utils";

/**
 mergeMap allows for multiple inner subscriptions to be active at a time
 switchMap - on each emission the previous inner observable (the result of the function) is cancelled and the new observable is subscribed
 */

const userData$ = ajax("https://jsonplaceholder.typicode.com/todos/1");
const responseOnInterval$ = interval(10).pipe(
    mergeMap(() => userData$), // multiple inner subscriptions to be active at a time
    // switchMap(() => userData$), // if the request will take more then 10 ms it will be canceled
    map(data => data.response)
);

responseOnInterval$.subscribe(ObserverA);
