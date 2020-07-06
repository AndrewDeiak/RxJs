import {combineLatest, of} from "rxjs";
import {ObserverE} from "../examples";

/**
 * difference between combineLatest and zip
 * combineLatest - when any observable emits a value, emit the last emitted value from each
 * zip - after all observables emit, emit values
 */

const width$ = of(1, 4);
const height = of(2, 5);
const length$ = of(3, 6);

// const volume$ = zip(width$, height, length$, (width, height, length) => {
const volume$ = combineLatest(width$, height, length$, (width, height, length) => {
//                          zip   | combineLatest
    console.log(width);  // 1, 4  | 4, 4
    console.log(height); // 2, 5  | 5, 5
    console.log(length); // 3, 6  | 3, 6
    return width * height * length
});

volume$.subscribe(ObserverE);
