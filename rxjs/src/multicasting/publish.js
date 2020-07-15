import {interval} from "rxjs";
import {ObserverA} from "../utils/utils";
import {publish, tap} from "rxjs/operators";

const interval$ = interval(1000).pipe(
    tap(v => console.log("tap ", v)),
    publish()
);

/**
 * sourse will no emit values until connect called()
 */

interval$.subscribe(ObserverA);

setTimeout(()=>interval$.connect(),3000);
