import "./App.css";
import { Component } from 'react';
import { SearchBar } from "../SearchBar/SearchBar";
import { Playlist } from "../Playlist/Playlist";
import { SearchResults } from "../SearchResults/SearchResults";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Lamentation for a lost life",
          artist: "Max Richter",
          album: "Voyager: Essential Max Richter",
          id: 1
        },
        {
          name: "Comptine d'un autre ete, l'apres midi",
          artist: "Yann Tierson",
          album: "L'histoire fabuloux d'Amelie Poulin",
          id: 2
        },
        {
          name: "Moonlight sonata",
          artist: "Ludwig van Beethoven",
          album: "Beethoven Symphonies",
          id: 3
        }
      ],
      exampleData: "hey there"
    }
  }


  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              data={this.state.exampleData}
            />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
