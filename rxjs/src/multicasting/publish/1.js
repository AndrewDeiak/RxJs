import {interval} from "rxjs";
import {publish, tap} from "rxjs/operators";
import {ObserverA} from "../../utils/utils";

/** publish - share source and make hot by calling connect */

const interval$ = interval(1000).pipe(
    tap(v => console.log("Side Effect, v", v)),
    publish()
);

/** source will no emit values until connect called() */

interval$.subscribe(ObserverA);
setTimeout(() => interval$.connect(), 3000);

