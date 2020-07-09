import {Subject, timer} from "rxjs";
import {ObserverE} from "../utils/utils";

/**
 *
 * next function microsyntax
 */

const timer$ = timer(0, 3000);
const subject$ = new Subject();

timer$.subscribe(subject$);
subject$.subscribe(ObserverE);
