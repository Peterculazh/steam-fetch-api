import SteamFetchAPI from "../src";

describe('Testing fetching to steam', () => {
    let steamFetch: SteamFetchAPI;

    beforeAll(() => {
        steamFetch = new SteamFetchAPI('us');
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

    it(`should get 3 news for Team Fortress 2 and short news description`, async () => {
        const result = await steamFetch.getGameNews(440, 3, 50);

        expect(result.appnews).not.toBeUndefined();
        expect(result.appnews?.newsitems.length).toBeGreaterThanOrEqual(3);
    });

    it(`should get list of battlefields`, async () => {
        const result = await steamFetch.getListByStartName('battlefield');

        expect(result.length).toBeGreaterThanOrEqual(1);
    })


});
