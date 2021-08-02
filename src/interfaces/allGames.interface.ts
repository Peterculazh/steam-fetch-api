export interface IGamesListSingle {
    appid: number;
    name: string;
}

export interface IAllGamesApps {
    apps: IGamesListSingle[];
}

export interface IAllGames {
    applist: IAllGamesApps
}
