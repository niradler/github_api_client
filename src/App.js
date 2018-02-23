import React, {Component} from 'react';
import './App.css';
import server from './server'
import EventsList from './components/EventsList'
import Search from './components/Search'
class App extends Component {
  constructor() {
    super();
    this.state = {
      events: {
        items: [],
        updated_at: new Date()
      },
      search:{
        repositories:{
          items:[]
        },
        users:{
          items:[]
        }
      }
    }
  }

  componentWillMount() {
    this.updateEvents();
    this.eventsTimer();
  }

  render() {
    return (
      <div className="App ">
        <nav className="navbar is-dark ">
          <div className="navbar-brand ">
            <div className="navbar-item">
              Github API
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              Nir Adler
            </div>
          </div>
        </nav>
        <div className=" container">
          <div className=" columns">
            <div className=" column is-6">
            <Search search={this.search} result={this.state.search}></Search>
            </div>
            <div className=" column is-6">
            <EventsList
                list={this.state.events.items}
                updated_at={this.state.events.updated_at}></EventsList>
            </div>
          </div>
        </div>

      </div>
    );
  }

  search = async(e) => {
    e.preventDefault();
    const value = e.target.querySelector('input').value;
    try {
      const res = await server
        .search
        .query(value)
      console.log(res)
      const state = this.state;
      state.search = res.data;
      this.setState(state)
    } catch (error) {
      console.log(error)
    }
  }

  eventsTimer = () => {
    setInterval(this.updateEvents, 5000);
  }

  updateEvents = async() => {
    try {
      const res = await server
        .events
        .update(this.state.events.etag)
      const state = this.state;
      state.events.items = res.data.events || [];
      state.events.etag = res.headers.etag || res.data.etag;
      state.events.updated_at = new Date();
      this.setState(state)
    } catch (error) {
      console.log(error)
    }
  }

}

export default App;
