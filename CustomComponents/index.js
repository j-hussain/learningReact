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
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        <footer>
                <small>© 2022 CC development. All rights reserved.</small>
            </footer>
        </div>
    );
}

ReactDOM.render(<Page/>, document.getElementById("root"));