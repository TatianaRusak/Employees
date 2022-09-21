import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'; 
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { Employee } from '../../types';


class App extends Component<Employee[], {data: Employee[]}> { 
  constructor(props: Employee[]) { 
    super(props);
    this.state = {
      data: [
        {fullname: 'John Smith', salary: 800, increase: false, rise: false, key: 1},
        {fullname: 'Alex Mirroy', salary: 1000, increase: true, rise: false, key: 2},
        {fullname: 'Carl Berg', salary: 5000, increase: false, rise: false, key: 3},
      ]
    }
  }

  deleteItem = (id: number) => { 
    this.setState(({data}) => {
      return {
        data: data.filter((item) => item.key !== id)
      }
    })
  }

  render = () => { 
    return (
      <div className="app">
        <AppInfo />
        
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
          
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm/>
      </div>
    )
  }
}

export default App;
