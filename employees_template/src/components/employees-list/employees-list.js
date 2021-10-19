import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employerslist, onDelete, onToggleProp}) => {
    return (
        <ul className="app-list list-group">
            {
                employerslist.map((item) => {
                    return <EmployeesListItem 
                    key={item.id} 
                    {...item}
                    onDelete={() => onDelete(item.id)}
                    onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}/>
                })
            }
        </ul>
    )
}

export default EmployeesList;