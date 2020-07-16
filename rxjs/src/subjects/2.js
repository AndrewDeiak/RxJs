import {ReplaySubject} from "rxjs";
import {ObserverA, ObserverB, ObserverC} from "../utils/utils";

const replaySubject = new ReplaySubject(2);

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);

replaySubject.subscribe(ObserverA);

replaySubject.next(4);
replaySubject.next(5);

replaySubject.subscribe(ObserverB);

replaySubject.complete();

replaySubject.next(6);

replaySubject.subscribe(ObserverC);
