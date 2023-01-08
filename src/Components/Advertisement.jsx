import "./Advertisement.css"
import React from "react"
const Advertisement = () =>{
return(
    <div className="Content-Wrapper">
        <div className="Advertisement-Text-Wrapper">
            <h2>Now Selling Snapbooks</h2>
            <p>Snapbooks are a new and improved way of interacting with childrens books</p>
        </div>
        <div className="Advertisement-Image-Wrapper">
            <img src="https://images.squarespace-cdn.com/content/v1/5fce42829c32423a38e6fdc3/1614980605518-0ZTROYPT6H9NII6VPKVD/WB_Website_Product-Image_Template_E-Book_1300x790px.png?format=1500w" alt="" />
        </div>
    </div>
)
}
export default Advertisement