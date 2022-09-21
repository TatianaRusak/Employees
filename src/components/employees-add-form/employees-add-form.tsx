 import { Component } from "react";
import { Employee } from "../../types";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props: Employee) { 
    super(props);
    this.state = {
      fullname: '',
      salary: '',
    }
  }

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    if (e.target) {
      this.setState({
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
      })
    }
  }

  render() {
    const { fullname, salary } = this.state as Employee;
    return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
        <form
            className="add-form d-flex">
            <input type="text"
                className="form-control new-post-label"
                placeholder="Как его зовут?" 
                name="fullname"
                value={fullname}
                onChange={this.onValueChange}/>
            <input type="number"
                className="form-control new-post-label"
                placeholder="З/П в $?" 
                name="salary"
                value={salary}
                onChange={this.onValueChange}/>

            <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
        </form>
    </div>
  )
  }
}

export default EmployeesAddForm;
