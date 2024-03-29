import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onChange = (e) => {
        this.setState(({
            [e.target.name] : e.target.value
        }))
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input name='name'
                        value={name}
                        onChange={this.onChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input name='salary'
                        value={salary}
                        onChange={this.onChange}
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button
                            onClick={(e) => onAddEmployers(e)}
                            type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;