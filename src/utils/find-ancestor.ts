export function findAncestor(element:HTMLElement, selector:string) {
    return element?.matches(selector) ? element : element?.closest(selector);
}