import axios from 'axios'
import config from './config'

class Search {

    query(q){
        return axios({
            method: config.github.actions.search.method,
            url: config.github.base_url + config.github.actions.search.path,
            params: {
                q:q
            }
        })
    }
}

const search = new Search();
export default search;