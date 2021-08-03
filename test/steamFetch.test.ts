import SteamFetchAPI from "../src";
import { IGameData } from '../src/interfaces/gameDetails.interfaces';

describe('Testing fetching to steam', () => {
    let steamFetch: SteamFetchAPI;
    beforeAll(() => {
        steamFetch = new SteamFetchAPI;
    });

    it(`should get Death Stranding in whole list of games`, async () => {
        const result = await steamFetch.getStrictByName('DEATH STRANDING');

        expect(result?.appid).toBe(1190460);
    });

    it(`should get Death Stranding and it's DLC/etc`, async () => {
        const result = await steamFetch.getListByName('death stranding');
        expect(result.length).toBeGreaterThanOrEqual(4);
    });

    it(`should get Death Stranding with detail info, but not checking content`, async () => {
        const result = await steamFetch.getGameDetails(1190460);
        expect(result).not.toBeNull();
        expect(result?.success).toBeTruthy();
    });
});
