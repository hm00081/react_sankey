export interface ZoomCirclePacking {
    name: string;
    color: string;
    children: ChildrenStatus;
}

export type ChildrenStatus = {
    name: string;
    color: string;
    children: GrandChildren;
};

export type GrandChildren = {
    name: string;
    color: string;
    children: GrandTwoChildren;
};

export type GrandTwoChildren = {
    name: string;
    color: string;
    loc: number;
    children: GrandGrandChildren | undefined;
};

export type GrandGrandChildren = {
    name: string;
    color: string;
    children: LastChild | undefined;
    loc: number;
};

export type LastChild = {
    name: string;
    color: string;
    children: TheLastChild | undefined;
    loc: number;
};

export type TheLastChild = {
    name: string;
    color: string;
    loc: number;
};
