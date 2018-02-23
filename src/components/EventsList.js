import React, {Component} from 'react';
import moment from 'moment'
class EventsList extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="EventsList ">
      <div className="">
      <nav className="panel ">
  <div className="panel-heading">
    <div className="level">
      <div className="level-left">Events</div>
      <div className="level-right"><p className="help">{moment(this.props.updated_at).format('HH:mm:ss')}</p></div>
    </div>
  </div>

        {this
          .props
          .list
          .map((i,index) => (
            <div key={index + 'event'} className="">

              <div className="card">
                <div className="card-content">
                  <nav className="level">
                    <div className="level-left">
                      <div className="">
                        <p className="is-bold" style={{    width: '85%'}}>
                          {i.repo.name}
                        </p>
                        <p className="help">
                          {moment(i.created_at).format('DD-MM-YYYY')}
                        </p>
                      </div>
                    </div>

                    <div className="level-right flex-horizontal">
                      <div className="">
                        <figure className="image is-128x128">
                          <img src={i.actor.avatar_url} alt="Avatar"/>
                        </figure>
                      </div>
                      <div className="subtitle">
                          {i.actor.display_login}
                        </div>
                    </div>
                  </nav>

                </div>
              </div>
            </div>
          ))}
          </nav>
      </div>
      </div>
    );
  }
}

export default EventsList;