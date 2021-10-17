import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employerslist, onDelete}) => {
    return (
        <ul className="app-list list-group">
            {
                employerslist.map((item) => {
                    const {id} = item;
                    return <EmployeesListItem 
                    key={id} 
                    {...item}
                    onDelete={() => onDelete(id)}/>
                })
            }
        </ul>
    )
}

export default EmployeesList;