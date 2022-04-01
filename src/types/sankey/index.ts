import { NumberLike } from '@visx/scale';

export type SankeyNodeMinimal = Record<string, unknown>;
export type SankeyLinkMinimal = {
    source?: number;
    target?: number;
    value: number;
    valueid?: string | null;
    overlapid?: string | null;
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
    source?: number;
    target?: number;
    value: number;
    type?: string;
    subtype?: string;
    valueid?: string | null;
    overlapid?: string | null;
    color?: string;
    path?: string;
    sourceNodeLink?: number;
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
    overlapid?: string | null;
    breadth: number;
    path: string;
    sourceNodeLink: number;
    targetNodeLink: number;
    sourceOrderIndex: number;
    targetOrderIndex: number;
    sourceNodeOrderIndex: number;
    targetNodeOrderIndex: number;
    color?: string;
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
