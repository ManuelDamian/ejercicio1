import './Monthly.css'

const monthly = () => {
    return(
        <div className="monthly-container">
            <h3>Monthly Subscription</h3>
            <div className="price">
                <h1>$29</h1>
                <h4>per Month</h4>
            </div>
            <p>Full access for less than $1 a day</p>
            <button className="singup">Sing up</button>
        </div>
    )
}

export default monthly