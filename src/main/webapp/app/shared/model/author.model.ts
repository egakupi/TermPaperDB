export interface IAuthor {
    id?: number;
    title?: string;
}

export class Author implements IAuthor {
    constructor(public id?: number, public title?: string) {}
}
