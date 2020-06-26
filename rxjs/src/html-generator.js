import {combineLatest, fromEvent} from "rxjs";
import {map, startWith} from "rxjs/operators";

const range = document.getElementById("range");
const color = document.getElementById("color");
const text = document.getElementById("text-input");
const textContainer = document.getElementById("text-container");

function createInputStream(node) {
    return fromEvent(node, "input")
        .pipe(
            map(v => v.target.value),
            startWith(node.value)
        );
}

const colorStream$ = createInputStream(color);
const rangeStream$ = createInputStream(range);
const textStream$ = createInputStream(text);

const stream$ = combineLatest(textStream$, colorStream$, rangeStream$);

stream$.subscribe(([text, color, range]) => {
    textContainer.innerText = text;
    textContainer.style.color = color;
    textContainer.style.fontSize = `${range}px`;
});
