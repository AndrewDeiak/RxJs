import {empty, interval, of} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {ObserverB} from "../../../utils/utils";

/** odd values */

const interval$ = interval(1000).pipe(
    mergeMap(v => v % 2 === 0 ? empty() : of(v))
);

interval$.subscribe(ObserverB);
