import CatFactService from "./catFact";

globalThis.fetch = vi.fn().mockImplementationOnce(() => ({
    ok: false,
    json: async () => ({
        fact: 'I am a cat fact'
    })
})).mockImplementation(() => ({
    ok: true,
    json: async () => ({
        fact: 'I am a cat fact'
    })
}));

describe("CatFactService", () => {
    it('should handle when API endpoint returns unexpected status codes', async () => {
        const catFactService = new CatFactService();
        catFactService.catFactUrl = 'https://catfact.ninja/invalid';
        const response = await catFactService.getFact();
        expect(response.ok).toBe(false);
    });

    it('should fetch a cat fact from the API successfully', async () => {
        const catFactService = new CatFactService();
        const response = await catFactService.getFact();
        expect(response.ok).toBe(true);
    });

    it('should return a response object with a cat fact', async () => {
        const catFactService = new CatFactService();
        const response = await catFactService.getFact();
        const data = await response.json();
        expect(data.fact).toBeDefined();
    });
});
