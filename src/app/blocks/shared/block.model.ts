export interface Block {
    id: number;
    name: string;
    repo: string;
    category: string;
    status: string;
    character: string;
    quote: string;

    // version is optional for now
    version?: string;

    // show is used to toggle a block
    show?: boolean;

    // get these through github api
    description?: string;
    username?: string;
    avatar?: string;
    watchers?: number;
    homepage?: string;
    lastUpdate?: string;
    repoUrl?: string;
}
