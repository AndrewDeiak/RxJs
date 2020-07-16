import {AsyncSubject} from "rxjs";
import {ObserverA, ObserverB} from "../utils/utils";

const asyncSubject = new AsyncSubject();

asyncSubject.subscribe(ObserverA);

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.complete();

asyncSubject.subscribe(ObserverB);
