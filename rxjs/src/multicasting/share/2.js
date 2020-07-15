import {ajax} from "rxjs/ajax";
import {share} from "rxjs/operators";
import {ObserverD, ObserverE} from "../../utils/utils";

const request$ = ajax("https://jsonplaceholder.typicode.com/todos/1").pipe(share());

request$.subscribe(ObserverD);
request$.subscribe(ObserverE);

/** new api call will executed */
setTimeout(() => request$.subscribe(ObserverE), 3000);
