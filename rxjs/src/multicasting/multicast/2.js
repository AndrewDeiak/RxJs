import {multicast, refCount, tap} from "rxjs/operators";
import {interval, Subject} from "rxjs";
import {ObserverA, ObserverB, ObserverC} from "../../utils/utils";

const interval$ = interval(1000);

/** refCount automatically call connect() when any of any observers subscribe */
/** refCount will unsubscribe from connect() when all observers unsubscribe */

const connectableObservable = interval$.pipe(
    tap(v => console.log('Side Effect, v', v)),
    multicast(() => new Subject()),
    refCount()
);

const subA = connectableObservable.subscribe(ObserverA);

let subB;
setTimeout(() => subB = connectableObservable.subscribe(ObserverB), 3000);

setTimeout(() => {
    subA.unsubscribe();
    subB.unsubscribe();
}, 5000);

/** stream will executed from scratch */
setTimeout(() => connectableObservable.subscribe(ObserverC), 10000);
