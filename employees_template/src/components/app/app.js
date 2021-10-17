import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Nikita', salary: 800, increase: false},
    {name: 'Ivan', salary: 900, increase: false},
    {name: 'Alex', salary: 11000, increase: true}
  ];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList employerslist={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
