import './employees-list-item.css';
import { Employee, EmployeesListItemProps } from '../../types';
import { Component } from 'react';

// type A = Pick<Employee, 'increase' | 'rise'>;

class EmployeesListItem extends Component<EmployeesListItemProps> {


  constructor (props: EmployeesListItemProps) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
    };
  }

  onIncrease = () => { 
    this.setState(({increase}: Employee) => ({
      increase: !increase
    }))
  }

  // onDelete = (id: number) => console.log(id)

  onRise = () => { 
    this.setState(({ rise }: Employee) => {
      return {
        rise: !rise,
      }
    })
    
  }

  render() { 
    const { fullname, salary, onDelete } = this.props as Employee;
    const { increase, rise } = this.state as Employee;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
      classNames += ' increase';
    }
    if (rise) {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onRise}>{fullname}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
              className="btn-cookie btn-sm "
              onClick={this.onIncrease}>
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
              className="btn-trash btn-sm "
              onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
    )
  }
}

export default EmployeesListItem;
