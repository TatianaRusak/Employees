import { MouseEventHandler } from "react";

export type Employee = {
  fullname: string;
  salary: number;
  increase: boolean;
  rise: boolean;
  key: number;
  onDelete?: MouseEventHandler<HTMLButtonElement> | undefined;

}

export type EmployeesListProps = { 
  data: Employee[],
  onDelete: (id: number) => void;
}

export type EmployeesListItemProps = Required<Employee>
