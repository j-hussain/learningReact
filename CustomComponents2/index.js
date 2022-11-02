/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

Render your list to the page

*/

import React from "react";
import ReactDOM from "react-dom";

function Page() {
    return (
        <div>
            <h1>Custom Components test 1</h1>
        </div>
    );
}

ReactDOM.render(<Page/>, document.getElementById("root"));