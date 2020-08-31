// types/foo/index.d.ts

export declare const name: string;
export declare function getName(): string;
export declare class Animal {
    constructor(name: string);
    sayHi(): string;
}
export declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
export interface Options {
    data: any;
}