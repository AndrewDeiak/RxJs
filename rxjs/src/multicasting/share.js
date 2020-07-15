import {interval} from "rxjs";
import {filter, map, share, take, toArray} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {ObserverA, ObserverB, ObserverC, ObserverD, ObserverE} from "../utils/utils";

const interval$ = interval(1000).pipe(
    take(5),
    share(),
);

const random$ = interval$.pipe(
    map(v => Math.random() * 100),
    share(),
);

const smallNum$ = random$.pipe(
    filter(v => v < 40),
    toArray()
);

const bigNum$ = random$.pipe(
    filter(v => v > 60),
    toArray()
);

random$.subscribe(ObserverA);
smallNum$.subscribe(ObserverB);
bigNum$.subscribe(ObserverC);

const request$ = ajax("https://jsonplaceholder.typicode.com/todos/1").pipe(share());

request$.subscribe(ObserverD);
request$.subscribe(ObserverE);
// setTimeout(() => request$.subscribe(ObserverE), 1000);
