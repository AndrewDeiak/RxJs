import {Subject} from "rxjs";
import {ObserverA, ObserverB} from "../utils/utils";

const subject = new Subject();

subject.next(1);

subject.subscribe(ObserverA);

subject.next(2);

subject.subscribe(ObserverB);

subject.next(3);
