import React, {Component} from 'react';
import moment from 'moment'
class Search extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="Search ">
        <div className="">
          <nav className="panel ">
            <p className="panel-heading">
              Search
            </p>
            <div className="panel-block">
    <div className="control has-icons-left">
      <form onSubmit={this.props.search}>
        <input className="input is-small" type="text" placeholder="search" />
        </form>
     
      <span className="icon is-small is-left">
        <i className="fas fa-search"></i>
      </span>
    </div>
  </div>
            {this
              .props
              .result.users.items
              .map((i,index) => (
                <div key={index+'u'} className="">

                  <div className="card">
                    <div className="card-content">
                    <nav className="level">
                    <div className="level-left flex-horizontal">
                    <p><strong>{i.login}</strong></p>
                      <p className="help"><span>user</span></p>
                    </div>
                    <div className="level-right ">
                    <figure className="image is-128x128">
                          <img src={i.avatar_url} alt="Avatar"/>
                        </figure>
                    </div>
                    </nav>
                     
                      
                    </div>
                  </div>
                </div>
              ))}
              {this
              .props
              .result.repositories.items
              .map((i,index) => (
                <div key={index+'r'} className="">

                  <div className="card">
                    <div className="card-content">
                    <p><strong>{i.name}</strong></p>
                      <p className="help"> <span>repository</span></p>
                  <p>
                    {i.description}
                  </p>
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

export default Search;