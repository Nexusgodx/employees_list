import "./app-filter.css";

const AppFilter = ({filterEmp}) => {
    return (
        <div className="btn-group">
            <button data-filter='all'
                    type="button"
                    className="btn btn-light"
                    onClick={(e) => filterEmp(e.currentTarget.getAttribute('data-filter'))}>
                    Все сотрудники
            </button>
            <button data-filter='rise'
                    type="button"
                    className="btn btn-outline-light"
                    onClick={(e) => filterEmp(e.currentTarget.getAttribute('data-filter'))}>
                    На повышение
            </button>
            <button data-filter='more'
                    type="button"
                    className="btn btn-outline-light"
                    onClick={(e) => filterEmp(e.currentTarget.getAttribute('data-filter'))}>
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;