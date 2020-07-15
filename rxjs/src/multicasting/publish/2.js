import {from} from "rxjs";
import {ObserverB, ObserverC} from "../../utils/utils";
import {publish} from "rxjs/operators";

const source$ = from([1, 2, 3]).pipe(
/** uncomment to publish source for multiple subscribers */
//     publish()
);

source$.subscribe(ObserverB);
source$.subscribe(ObserverC);

/** uncomment to publish source for multiple subscribers */
// source$.connect();


