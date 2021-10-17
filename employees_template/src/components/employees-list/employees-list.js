import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employerslist}) => {
    return (
        <ul className="app-list list-group">
            {
                employerslist.map((item, i) => {
                    return <EmployeesListItem key={i} {...item}/>
                })
            }
        </ul>
    )
}

export default EmployeesList;