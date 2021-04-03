import {Route, Switch} from "react-router-dom"
import App from "./App";
import BookDetail from "./BookDetail/BookDetail";

function Router() {
    return(
        <>
            <Switch>
                <Route exact path="/bookId" component={BookDetail}/>
                <Route exact path="/bookId" component={BookDetail}/>
            </Switch>
        </>
    )
}

export default Router;