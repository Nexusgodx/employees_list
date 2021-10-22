import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        };
        this.buttonsData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'rise', label: 'На повышение'},
            {name: 'more', label: 'З/П больше 1000$'}
        ]
    }

    onUpdateFilter = async (e) => {
       await this.setState(({
            filter: e.currentTarget.getAttribute('data-filter')
        }))
        this.props.onUpdateFilter(this.state.filter)
    }

    render() {

        const buttons = this.buttonsData.map(({name, label}) => {
        const active = this.state.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
            return (
                <button 
                    data-filter={name}
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                    onClick={this.onUpdateFilter}>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default AppFilter;