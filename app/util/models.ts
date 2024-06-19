export class MenuItem {
    constructor(
        public _id: string,
        public name: string,
        public price: number,
        public category: string,
        public description: string,
        public image: string,
        public ingredients: string[] = [],
        public containsEgg: boolean = false,
        public isBestSeller: boolean = false,
    ) {}
}

export class Poster {
    constructor(
        public name: string,
        public image: string,
        public route: string,
    ) {}
}


