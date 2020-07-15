import {multicast, tap} from "rxjs/operators";
import {interval, ReplaySubject} from "rxjs";

/** 1 */

const interval$ = interval(1000);

/** since we are multicasting below, side effects will be executed once */

const source$ = interval$.pipe(
    tap(v => console.log('Side Effect, v', v)),
);

/** can use any type of subject */

const multi$ = source$.pipe(multicast(() => new ReplaySubject(3)));
multi$.connect();

/** subscriber will receive all previous values on subscription because of ReplaySubject */

setTimeout(() => multi$.subscribe(val => console.log("multi val", val)), 3000);
