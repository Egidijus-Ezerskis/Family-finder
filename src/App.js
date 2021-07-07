
import React  from'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



 export default class App extends React.Component {
  constructor() {
    super();
  
    this.state = {
       family:[],
       searchField:''
    };
    }  
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
      .then(users=>this.setState({family:users}))
        
    }
  
  render() {
    const {family,searchField} = this.state;
    const filtereFamily = family.filter(family=>
      family.name.toLocaleLowerCase().includes(searchField.toLowerCase())
      );
      return (
    
        <div className="App">
        <h1>Family Card</h1>
        <SearchBox
          placeholder='search family'
          handleChange={e=>this.setState({searchField:e.target.value})}/>
         <CardList family ={filtereFamily} />
      </div>
   );
  } }
    
    
     
   
       
       

 