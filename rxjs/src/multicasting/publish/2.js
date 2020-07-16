import {from} from "rxjs";
import {ObserverA, ObserverB} from "../../utils/utils";
import {publish} from "rxjs/operators";

const source$ = from([1, 2, 3]).pipe(
    /** uncomment to publish source for multiple subscribers */
    // publish()
);

source$.subscribe(ObserverA);
source$.subscribe(ObserverB);

/** uncomment to publish source for multiple subscribers */
// source$.connect();


