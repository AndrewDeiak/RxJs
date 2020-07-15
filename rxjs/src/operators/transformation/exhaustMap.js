import {ajax} from "rxjs/ajax";
import {delay, exhaustMap} from "rxjs/operators";
import {fromEvent} from "rxjs";
import {ObserverA} from "../../utils/utils";

const click$ = fromEvent(document, 'click');

/** exhaustMap - map to inner observable, ignore other values until that observable completes */

const request$ = ajax("https://jsonplaceholder.typicode.com/todos/1");

click$.pipe(
    exhaustMap(() => request$.pipe(delay(1000))),
).subscribe(ObserverA);
