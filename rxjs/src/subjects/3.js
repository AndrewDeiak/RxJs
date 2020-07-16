import {BehaviorSubject} from "rxjs";
import {ObserverA, ObserverB, ObserverC} from "../utils/utils";

const behaviorSubject = new BehaviorSubject(0);

behaviorSubject.subscribe(ObserverA);

behaviorSubject.next(1);
behaviorSubject.next(2);
behaviorSubject.next(3);

behaviorSubject.subscribe(ObserverB);

behaviorSubject.next(4);

behaviorSubject.complete();

behaviorSubject.next(5);

behaviorSubject.subscribe(ObserverC);

/**
 * after complete() observers will stop getting values,
 * getValue() will get the latest value
 */

console.log(behaviorSubject.getValue());
