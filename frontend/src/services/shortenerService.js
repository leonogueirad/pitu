import baseAPI from './api';
import {apiURL} from '../config';

class ShortenerService {
    constructor() {
        this.api = baseAPI(apiURL);
        console.log(`teste: ${apiURL}`);
    }
    async getLink(code) {
        const result = await this.api.get(`links/${code}`);
        return result.data;
    }
    async getStats(code) {
        const result = await this.api.get(`links/${code}/stats`);
        return result.data;
    }
    async generate(model) {
        console.log(model);

        const result = await this.api.post('links', model);
        return result.data;
    }
}

export default ShortenerService;