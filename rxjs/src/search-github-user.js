import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

const API_URL = "https://api.github.com/search/users?q=";
const searchField = document.getElementById("search");
const resultSearch = document.getElementById("result-search");
const stream$ = fromEvent(searchField, "input")
    .pipe(
        map(e => e.target.value),
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => resultSearch.innerHTML = ""),
        filter(searchValue => searchValue.trim()),
        switchMap(searchValue => ajax.getJSON(API_URL + searchValue)),
        map(response => response.items),
        mergeMap(items => items),
    );

stream$.subscribe(user => {
    const html = `
                <div class="card m-1" style="width: 20rem;">
            <img class="card-img-top" src="${user.avatar_url}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${user.login}</h5>
                <a href="${user.html_url}" class="btn btn-primary">Github profile</a>
            </div>
        </div>`
    resultSearch.insertAdjacentHTML("afterbegin", html)
})
