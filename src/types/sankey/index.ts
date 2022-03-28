export type SankeyNodeMinimal = Record<string, unknown>;
export type SankeyLinkMinimal = {
    source?: number | string;
    target?: number | string;
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
    pattern?: string;
};

export type SankeyLink = SankeyLinkMinimal & {
    source?: number | string;
    target?: number | string;
    value: number;
    type?: string;
    subtype?: string;
    valueid?: string | null | SankeyLink;
    color?: string;
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
    links: SankeyLink | SankeyLinkExtended;
    hover?: undefined;
    sourceNodeType: number;
    targetNodeType: number;
    nodeOrderIndex: number;
};

export type SankeyLinkExtended = SankeyLink & {
    sourceNode: SankeyNodeExtended;
    targetNode: SankeyNodeExtended;
    breadth: number;
    path: string;
    sourceNodeLink: number;
    targetNodeLink: number;
    sourceOrderIndex: number;
    nodeOrderIndex: number;
};

export type SankeyStatus = {
    status: string | number | boolean;
    // status: string | number | number[];
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
