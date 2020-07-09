import {interval} from "rxjs";
import {filter, map, share, take, toArray} from "rxjs/operators";

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
