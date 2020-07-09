import {interval} from "rxjs";
import {filter, map, share, take, toArray} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

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

export const ObserverC = {
    next: (v) => console.log("[C] next", v),
    error: (err) => console.log("[C] error", err),
    complete: () => console.log("[C] Complete"),
};

export const ObserverD = {
    next: (v) => console.log("[D] next", v),
    error: (err) => console.log("[D] error", err),
    complete: () => console.log("[D] Complete"),
};

export const ObserverE = {
    next: (v) => console.log("[E] next", v),
    error: (err) => console.log("[E] error", err),
    complete: () => console.log("[E] Complete"),
};

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
