import {multicast, tap} from "rxjs/operators";
import {interval, ReplaySubject} from "rxjs";
import {ObserverA, ObserverB} from "../../utils/utils";

/** multicast - share source utilizing the provided Subject */

const interval$ = interval(1000);

const connectableObservable = interval$.pipe(
    tap(v => console.log('Side Effect, v', v)),
    /** can use any type of subject */
    multicast(() => new ReplaySubject(3))
);

const sub = connectableObservable.connect();
const subA = connectableObservable.subscribe(ObserverA);

/** subscriber will receive all previous values on subscription because of ReplaySubject */
let subB;
setTimeout(() => subB = connectableObservable.subscribe(ObserverB), 3000);

setTimeout(() => {
    subA.unsubscribe();
    subB.unsubscribe();
    /** steam will still execute with Side Effect */
}, 5000);

/** stream will only stop with unsubscribing from connectableObservable.connect() */
setTimeout(() => setTimeout(() => sub.unsubscribe()), 15000);
