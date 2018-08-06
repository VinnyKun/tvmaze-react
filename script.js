//my step 2:
// what ultimateley the viewer would see be the show names and its image
class Show extends React.Component {
    render() {
        return (
          <div>
            <img src={this.props.img} />
            <p>{this.props.name}</p>
            <p>Rating: {this.props.rating}</p>
          </div>
        )
    }
    
}

//my step 3:
// mapping the show name, image and rating
class Results extends React.Component {
    render() {
        let shows = results.map( (show, index) => (
          <Show key={index} name={show.show.name} img={show.show.image.medium} rating={show.show.rating.average}   />
        ));
    
        return (
          <div>
            {shows}
          </div>
        )
    }
    
}

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchingFor : "",
            searching : false
        };
    
        this.searchInput = this.searchInput.bind(this);
        this.searchButton = this.searchButton.bind(this);
    }

    // state = {
    //     searchingFor : "",
    //     searching : false
    // }

    searchInput(event) {
        let search = event.target.value;
        this.setState({searchingFor: search})
    }
    
    searchButton () {
        this.setState({searchingFor : "", searching: true})
    }

    render() {

    let results;
    if (this.state.searching) {
        results = <Results />
    } else {
        results = <div><p>Search for something!</p></div>
    }

    return(
        <div id="search">
        <input onChange={this.searchInput} value={this.state.searchingFor} />
        <button type="button" onClick={this.searchButton}>Search</button>
        {results}
        </div>
    )
    }     
}

//Begin here: Step 1 build all the empty necessary components
//Home // search// Result //Show
class Home extends React.Component {
    render() {
      return(
        <div>
          <h1>TV Maze</h1>
          <br />
          <Search />
        </div>
      )
    }
  }
  
  ReactDOM.render(<Home />, document.getElementById('root'));