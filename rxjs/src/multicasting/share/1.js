import {interval} from "rxjs";
import {filter, map, share, take, toArray} from "rxjs/operators";
import {ObserverA, ObserverB, ObserverC} from "../../utils/utils";

/**
 * share - share source among multiple subscribers
 * share is like multicast with a Subject and refCount
 */

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
