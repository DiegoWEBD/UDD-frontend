import { Component } from 'react'
const axios = require('axios')

const api_endpoint = 'http://localhost:4000/api/search'

class SearchBar extends Component{
    
    state = {
        value: ''
    }
    
    render() {
    
        const { handleSearchBar } = this.props

        const handleChange = (e) => {
            this.state.value = e.target.value
        }
    
        const handleClick = (e) => {
            axios
                .get(`${api_endpoint}?query=${this.state.value}`)
                .then(response => {
                    handleSearchBar(response.data)
                })
        }
    
        return (
            <div className='py-3 px-4'>
                <input
                    type='text'
                    name='searchbar'
                    value={this.value}
                    onChange={handleChange}
                    className='w-1/2 mr-5 border border-gray-500 rounded px-2 py-1 text-sm'
                    placeholder='Buscar un producto...'
                />
                <button
                    className='border border-gray-700 px-1 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold'
                    onClick={handleClick}
                >
                    Buscar
                </button>
            </div>
        )
    }
}

export default SearchBar