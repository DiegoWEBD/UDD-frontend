import { Component } from 'react'
import Catalogo from './components/Catalogo'
import SearchBar from './components/SearchBar'

class App extends Component {

  state = {
    products: []
  }

  handleSearchBar = (value) => {
    this.setState({
      products: value
    })
    console.log(this.state)
  }

  render(){
    console.log('renderizando app')
    return (
      <div>
        <SearchBar handleSearchBar={this.handleSearchBar} />

        <div className='flex flex-wrap p-5 bg-neutral-200 min-h-screen'>
          <Catalogo 
            products={this.state.products}
          />
        </div>
      </div>   
    )
  }
  
}

export default App
