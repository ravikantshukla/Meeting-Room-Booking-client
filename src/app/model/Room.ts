export class Room {
    id: number;
    name: string;
    location: string;
    capacities = new Array<LayoutCapacity>();
}

export class LayoutCapacity {
    layout: Layout;
    capacity: number;
}

export enum Layout {
    THEATER = 'Theater',
    USHAPE = 'U-shape',
    BOARD = 'Board Meeting'
}