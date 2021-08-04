export interface INewsItem {
    gid: string;
    title: string;
    url: string;
    is_external_url: boolean;
    author: string;
    contents: string;
    feedlabel: string;
    date: number;
    feedname: string;
    feed_type: number;
    appid: number;
}

export interface IAppNews {
    appid: number;
    newsitems: INewsItem[];
}


export interface IGetAppNews {
    appnews?: IAppNews;
}
