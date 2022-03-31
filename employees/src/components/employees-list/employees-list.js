import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

   const elements = data.map(item => {
      const {id, ...itemPros} = item
      return (
         <EmployeesListItem key={id}{...itemPros}/>
      )
   })
   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployeesList;