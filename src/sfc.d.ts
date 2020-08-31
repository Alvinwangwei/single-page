declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
}


// declare var n: number;
// declare let s: string;
// declare const o: object;
// declare function f(s: string): number;
// declare enum dir {
//     top,
//     right,
//     bottom,
//     left
// }

declare enum Directions {
    Up,
    Down,
    Left,
    Right
}