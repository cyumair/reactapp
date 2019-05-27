import React , {Component} from 'react' ;
import CardList from './CardList' ;
import { Friends } from './Friends' ;
import Searchbox from './Searchbox' ; 
class App extends Component {
        constructor(){
                        super()
                        this.state = {
                        Friends: Friends ,
                        searchfield : '' 
                                    }
                    }
        Searchchange = (event) => {
                        this.setState({searchfield : event.target.value })
                     }
                     

                    
         render () {
            const filteredfriend = this.state.Friends.filter(friend =>{
                return (
                    friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                    );
                })
             return(
                    <div>
                        <div className='tc courier black '>
                            <h1>My Friends List</h1>
                            <Searchbox searchChange={this.Searchchange} />
                        </div>
                        <CardList Friends={filteredfriend}/>
                        </div>
                 );
        }
}
export default App;