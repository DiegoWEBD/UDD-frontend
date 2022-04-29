import { Component } from 'react'

class AppHeader extends Component {

    render(){

        return (
            <div 
                {...this.props} 
                className='text-xl text-slate-200 font-bold italic mb-3 mx-1 mt-1 rounded py-2 px-5 bg-blue-600'
            />
        )
    }
}

export default AppHeader