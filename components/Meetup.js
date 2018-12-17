import React, { Component } from 'react';

class Meetup extends Component {


    API_KEY = '66e5bc34752a927786d6954126938'

    state = {
        events: []
    }


    componentDidMount() {

        var express = require('express')
        var cors = require('cors')
        var app = express()
         
        app.use(cors())
         
        app.get('/products/:id', function (req, res, next) {
          res.json({msg: 'This is CORS-enabled for all origins!'})
        })
         
        app.listen(80, function () {
          console.log('CORS-enabled web server listening on port 80')
        })

        this.getBitcoinBayEvents();
    }

    getBitcoinBayEvents = async () => {
        const bitcoinBay = 'The-Bitcoin-Bay'
        const req = await fetch (`https://api.meetup.com/${bitcoinBay}/events?&sign=true&photo-host=public&page=5`)
        const data = await req.json();
        this.setState({
            events: data
        })
        console.log(data);
    }


    render() {
        return (
            <div>
                <p>{this.state.events}</p>
                {this.props.children}
            </div>
        )
    }
}

export default Meetup