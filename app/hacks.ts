
// Disable the CSSStyleSheet constructor
const unsafeWindow = <any>window;
if (typeof unsafeWindow.CSSStyleSheet === "function") {
    unsafeWindow.CSSStyleSheet = function() {
        throw new Error(`CSSStyleSheet cannot be called`);
    };
}