export type SankeyNodeMinimal = Record<string, unknown>;
export type SankeyLinkMinimal = {
    source: number;
    target: number;
    value: number;
};
export type SankeyStatusMinimal = {
    status: string | number | number[];
};

export type SankeyNode = SankeyNodeMinimal & {
    name?: string;
    type?: string | number;
    origin?: string;
    subtype?: string | number;
    description?: string;
    color?: string;
};

export type SankeyLink = SankeyLinkMinimal & {
    source: number;
    target: number;
    value: number;
};

export type SankeyNodeExtended = SankeyNode & {
    index: number;
    input: number;
    output: number;
    value: number;
    x: number;
    y: number;
    width: number;
    height: number;
    hover?: undefined;
};

export type SankeyLinkExtended = SankeyLink & {
    sourceNode: SankeyNodeExtended;
    targetNode: SankeyNodeExtended;
    breadth: number;

    path: string;
};

export type SankeyStatus = {
    status: string | number | number[];
};

export type SankeyWord = {
    status: string | string[];
};

export interface SankeyData {
    nodes: SankeyNode[];
    links: SankeyLink[];
    status: SankeyStatus[];
    // word: SankeyWord[] | null;
}
