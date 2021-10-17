import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Nikita', salary: 800, increase: false, id:1},
        {name: 'Ivan', salary: 900, increase: false, id:2},
        {name: 'Alex', salary: 11000, increase: true, id:3}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data.slice(0, index), ...data.slice(index + 1)]
      console.log(newData)

      return {
        data: newData
      }
    })
  }

  render() {
    const {data} = this.state;

    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          employerslist={data}
          onDelete={this.deleteItem}/>
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
