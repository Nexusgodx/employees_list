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
        {name: 'Nikita', salary: 800, rise: true,  increase: false, id: 1},
        {name: 'Ivan', salary: 900, rise: false,  increase: false, id: 2},
        {name: 'Alex', salary: 11000, rise: false,  increase: true, id: 3}
      ],
      term: '',
      filter: ''
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const newData = data.filter(item => item.id !== id);
      console.log(newData)
      return {
        data: newData
      }
    })
  }

  onAddItem = (e, newData) => {
    e.preventDefault();
    const {name, salary} = newData;
    if (name.length >= 2 && salary.length >= 1) {
      this.setState(({data}) => {
        const newArr = [...data, {...newData, rise: false,  increase: false, id: this.maxId++}];

        return {
          data: newArr
        }
      })
    }
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => {
      const index = data.findIndex((item) => item.id === id);

      const old = data[index];
      const newItem = {...old, [prop]: !old[prop]};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSeacrh = (term) => {
    this.setState({term});
  }

  

  filterEmp = (prop, data) => {
      switch(prop) {
        case 'rise':
          return data.filter(item => item.rise);
        case 'more':
          return data.filter(item => item.salary > 1000);
        default:
         return data;
      }
  }

 onUpdateFilter = (filter) => {
  this.setState(({filter}))
  console.log(filter)
 }

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const {term, data, filter} = this.state; 
    const visibleData =  this.filterEmp(filter, this.searchEmp(data, term));

    return (
      <div className="app">
          <AppInfo employees={employees} increased={increased}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSeacrh={this.onUpdateSeacrh}/>
              <AppFilter onUpdateFilter={this.onUpdateFilter}/>
          </div>
          
          <EmployeesList 
            maxId = {this.maxId}
            employerslist={visibleData}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm 
            onAdd={this.onAddItem}/>
      </div>
    );
  }
}

export default App;
