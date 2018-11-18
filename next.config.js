const SiteClient = require('datocms-client').SiteClient;
const client = new SiteClient('bf8202fda53e8401c21c51f513ce82');


module.exports = {
    async exportPathMap() {
        // we fetch our list of posts, this allow us to dynamically generate the exported pages
        const res = await client.items.all({'filter[type]': 'articolo'});

        // tranform the list of posts into a map of pages with the pathname `/post/:id`
        const pages = res.reduce(
            (pages, post) =>
                Object.assign({}, pages, {
                    [`/articolo/${post.id}`]: {
                        page: '/articolo',
                        query: {id: post.id}
                    }
                }),
            {}
        );

        // combine the map of post pages with the home
        return Object.assign({}, pages, {
            '/': {page: '/'}
        })
    }

}
;
