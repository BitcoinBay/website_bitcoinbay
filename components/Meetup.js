import React, { Component } from 'react';
// import Route from 'react-router';

class Meetup extends Component {


    API_KEY = '66e5bc34752a927786d6954126938'

    state = {
        events: []
    }

    componentDidMount() {
        this.getBitcoinBayEvents();
    }

    getBitcoinBayEvents = async () => {
        const bitcoinBay = 'The-Bitcoin-Bay'
        const req = await fetch(`https://api.meetup.com/${bitcoinBay}/events?&sign=true&photo-host=public&page=5`)
        const data = await req.json();
        console.log(data);
        this.setState({
            events: data
        })
    }



    mapEvents = () => {
        return this.state.events.map((event) => {
            console.log(event)
            return (
                <a href={`https://www.meetup.com/The-Bitcoin-Bay/events/${event.id}`} className="meetup-container" key={event.id}>
                    <h4>Next Meetup:</h4>
                    <div className="time">
                        {event.local_date}
                        <br />
                        {event.local_time}
                    </div>
                    {event.name}
                    {event.venue.address_1}
                    {event.venue.name}
                    <div>
                        <p>{event.yes_rsvp_count} people are coming!</p>
                    </div>
                </a>
            )
        })
    }

    render() {
        return (
            <div className="background">
                {this.mapEvents()}
                {this.props.children}
            </div>
        )
    }
}

export default Meetup
