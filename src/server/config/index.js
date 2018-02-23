export default {
    github : {
        base_url: "https://github-api-gateway.herokuapp.com",
        actions: {
            search: {
                path: '/github/search',
                method: "GET"
            },
            events: {
                path: '/github/events',
                method: "GET"
            }
        }
    }
}