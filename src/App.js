import { Component } from 'react'
import Catalogo from './components/Catalogo'
import SearchBar from './components/SearchBar'
import AppHeader from './components/AppHeader'

class App extends Component {

  state = {
    products: []
  }

  handleSearchBar = (value) => {
    this.setState({
      products: value
    })
  }

  render(){
    
    return (
      <div>
        <AppHeader >FreeMarket CL</AppHeader>
        <SearchBar handleSearchBar={this.handleSearchBar} />
        <Catalogo products={this.state.products} />
        
      </div>   
    )
  }
  
}

export default App
