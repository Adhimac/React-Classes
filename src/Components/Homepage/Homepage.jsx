import React from "react";
import Notification from "../Notification/Notification";
import Fruits from "../Fruits/Fruits";
import InputHandling from "../InputHandling/InputHandling";

function Home(props) {

    return(
        <>
        
        <h1>This is {props.name} </h1>

        <div>
            <Notification Notfy={true} />
            <Fruits/>
            <InputHandling/>
        </div>
        </>
    )
    
}

export default Home