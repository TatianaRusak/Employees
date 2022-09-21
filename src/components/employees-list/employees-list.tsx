import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css';
import { Employee, EmployeesListProps } from "../../types";
import { FC } from "react";

const EmployeesList:FC<EmployeesListProps> = ({data, onDelete}) => {
  
  const elements = data.map((item: Employee) => {
    const { key, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={key}
        {...itemProps}
        onDelete={() => onDelete(key)}/>
      
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;
