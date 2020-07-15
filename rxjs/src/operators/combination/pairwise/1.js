import {fromEvent, of} from "rxjs";
import {mergeMap, pairwise} from "rxjs/operators";
import {ObserverC} from "../../../utils/utils";


/**
 * pairwise - emit the previous and current values as an array.
 * simulating save of click locations
 */

const saveLocation = location => {
    return of(location).pipe();
};
const click$ = fromEvent(document, 'click');

click$
    .pipe(
        mergeMap(e => {
            return saveLocation({
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now()
            })
        }),
        pairwise(),
    )
    .subscribe(ObserverC);
