import "./MonthlySubscription.css"
import React from "react"
const MonthlySubscription = () =>{
return(
    <React.Fragment>
        <h2 id="Subscription-Header">Subscription Models</h2>
    <div className="Subscription-Wrapper">
        <div>
            <h1>Regular</h1>
            <p>1 book a month</p>
            <p>$15</p>
            <button> Order Now</button>
        </div>
        <div>
            <h1>Premium</h1>
            <p>2-3 books a month</p>
            <p>$27</p>
            <button>Order Now</button>
        </div>
        <div>
            <h1>Premium and Snap+</h1>
            <p>2-3 books a month with Snap+</p>
            <p>$30</p>
            <button>Order Now</button>
        </div>
    </div>
    </React.Fragment>
)
}
export default MonthlySubscription