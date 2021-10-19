import './employees-list-item.css';

const EmployeesListItem = (props) =>  {


    const {name, salary, onDelete, onToggleProp, rise, increase} = props;
    let styles = 'list-group-item d-flex justify-content-between';

    if (rise) {
        styles += " like"
    }

    if (increase) {
        styles += " increase"
    }

    
    return (
        <li className={styles}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle='rise'>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onToggleProp} type="button"
                    className="btn-sm btn-cookie"
                    data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
   }


export default EmployeesListItem;