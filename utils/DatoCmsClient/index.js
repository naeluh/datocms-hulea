import { SiteClient } from 'datocms-client'

const DATOCMS_CLIENT = '3fa374086968562ff29989424595b3';

class DatoCmsClient {
    constructor () {
        this.client = new SiteClient(DATOCMS_CLIENT)
    }

    getArticoli = () =>
        this.client.items.all({ 'filter[type]': 'articolo' });

    getArticolo = (articoloId) =>
        this.client.items.find(articoloId)
}

export default new DatoCmsClient()