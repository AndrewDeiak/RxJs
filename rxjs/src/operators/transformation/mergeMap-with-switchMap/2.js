import {of} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {ObserverB} from "../../../utils/utils";

/** mergeMap with resultSelector */

const dog$ = of("Dog");
const cat$ = of("Cat");

dog$.pipe(
    mergeMap(() => cat$, (dog, cat) => `${dog} and ${cat}`)
).subscribe(ObserverB);
