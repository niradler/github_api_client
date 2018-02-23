import axios from 'axios'
import config from './config'

class Events {

    update(etag = "none") {
        return axios({
            method: config.github.actions.events.method,
            url: config.github.base_url + config.github.actions.events.path,
            params: {
                etag: etag
            }
        })
    }
}

const events = new Events();
export default events;