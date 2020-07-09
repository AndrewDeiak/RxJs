export const ObserverA = {
    next: (v) => console.log("[A] next", v),
    error: (err) => console.log("[A] error", err),
    complete: () => console.log("[A] Complete"),
};

export const ObserverB = {
    next: (v) => console.log("[B] next", v),
    error: (err) => console.log("[B] error", err),
    complete: () => console.log("[B] Complete"),
};

export const ObserverC = {
    next: (v) => console.log("[C] next", v),
    error: (err) => console.log("[C] error", err),
    complete: () => console.log("[C] Complete"),
};

export const ObserverD = {
    next: (v) => console.log("[D] next", v),
    error: (err) => console.log("[D] error", err),
    complete: () => console.log("[D] Complete"),
};

export const ObserverE = {
    next: (v) => console.log("[E] next", v),
    error: (err) => console.log("[E] error", err),
    complete: () => console.log("[E] Complete"),
};
