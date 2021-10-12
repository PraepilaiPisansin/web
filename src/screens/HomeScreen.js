import React from 'react';
import Card from '../components/card'
import ChartHome from './chart_home';
export default class HomeScreen extends React.Component {
    
    render() {
       

        return (
            <main class="main">
                <Card></Card>
                <br />

                <ChartHome></ChartHome>
            </main>
        )
    };
}
