import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        }
    }

    onUpdateFilter = async (e) => {
       await this.setState(({
            filter: e.currentTarget.getAttribute('data-filter')
        }))
        this.props.onUpdateFilter(this.state.filter)
    }

    render() {
        return (
            <div className="btn-group">
                <button data-filter='all'
                        type="button"
                        className={this.state.filter === 'all' ? 'btn btn-light' : 'btn btn-outline-light'}
                        onClick={this.onUpdateFilter}>
                        Все сотрудники
                </button>
                <button data-filter='rise'
                        type="button"
                        className={this.state.filter === 'rise' ? 'btn btn-light' : 'btn btn-outline-light'}
                        onClick={this.onUpdateFilter}>
                        На повышение
                </button>
                <button data-filter='more'
                        type="button"
                        className={this.state.filter === 'more' ? 'btn btn-light' : 'btn btn-outline-light'}
                        onClick={this.onUpdateFilter}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;