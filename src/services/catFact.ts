class CatFactService {
    private catFactUrl = 'https://catfact.ninja/';

    public getFact = async () => {
        const response = await fetch(this.catFactUrl + 'fact');
        return response;
    };
}

export default CatFactService