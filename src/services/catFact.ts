class CatFactService {
    private catFactUrl = 'https://catfact.ninja/';

    public getFact = async () => {
        try {
            const response = await fetch(this.catFactUrl + 'fact');
            return response;
        } catch (error) {
            throw new Error(error);
        }
    };
}

export default CatFactService