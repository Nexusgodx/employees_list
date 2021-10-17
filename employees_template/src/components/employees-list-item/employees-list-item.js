import {Component} from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

   render() {
    const {name, salary, onDelete} = this.props;
    const {increase, like} = this.state;
    let styles = 'list-group-item d-flex justify-content-between ';

    if (like) {
        styles += "like"
    }

    
    return (
        <li className={increase ? styles + ' increase' : styles}>
            <span onClick={this.onLike} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={this.onIncrease} type="button"
                    className="btn-sm btn-cookie">
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
}

export default EmployeesListItem;