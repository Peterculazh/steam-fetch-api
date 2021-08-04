import * as superagent from 'superagent';
import { IAllGames, IGamesListSingle } from './interfaces/allGames.interface';
import { IFetchParams } from './interfaces/fetch.interface';
import { IGameDetails, IGameWrapper } from './interfaces/gameDetails.interfaces';
import { IGetAppNews } from './interfaces/getNewsForApp.interface';

export * from './interfaces';

export default class SteamFetchAPI {

    private baseUrl = "https://api.steampowered.com";
    private storeUrl = "https://store.steampowered.com/api";
    private cc?: string;

    constructor(region?: string) {
        this.cc = region;
    }

    async get(url: string, baseUrl = this.baseUrl): Promise<any> {
        const params: IFetchParams = {};
        if (this.cc) {
            params.cc = this.cc;
        }
        const result = await superagent.get(`${baseUrl}${url}`).query(params);

        return result.body;
    }

    async getAllGames(): Promise<IAllGames> {
        const result: IAllGames = await this.get(`/ISteamApps/GetAppList/v002`);
        return result;
    }

    async getStrictByName(name: string): Promise<IGamesListSingle | undefined> {
        const result = await this.getAllGames();

        return result.applist.apps.find(game => game.name === name);
    }

    async getListByName(name: string): Promise<IGamesListSingle[]> {
        const result = await this.getAllGames();

        return result.applist.apps.filter(game => game.name.toLowerCase().includes(name));
    }

    async getGameDetails(appid: number): Promise<IGameDetails | null> {
        const result: IGameWrapper = await this.get(`/appdetails?appids=${appid}`, this.storeUrl);

        if (!result) {
            return null;
        }

        return result[appid.toString()];
    }

    async getGameNews(appid: number, newsCount?: number, maxLength?: number): Promise<IGetAppNews> {
        let url = `/ISteamNews/GetNewsForApp/v0002?appid=${appid}`;

        if (newsCount) {
            url = url.concat(`&count=${newsCount}`);
        }

        if (maxLength) {
            url = url.concat(`&maxlength=${maxLength}`);
        }

        const result: IGetAppNews = await this.get(url);

        return result;
    }
}
