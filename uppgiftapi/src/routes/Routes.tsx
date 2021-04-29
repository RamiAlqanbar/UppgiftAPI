import { BrowserRouter, Switch, Route }  from 'react-router-dom'
import { HomePage } from '../views/HomePage'


export const Routes = (props: { children?: React.ReactChild}) => {
    return (
        <BrowserRouter>
        {props.children}
        <Switch>

        </Switch>      
        </BrowserRouter>
    )
}