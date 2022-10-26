export interface PageProps {
    test: number;
}

export interface PageProps_Home {
    data: number;
}

export interface PageProps_Ect {
    ect: string;
}

export declare type ConnectPageProps =
    PageProps &
    PageProps_Home &
    PageProps_Ect;
