import axios from 'axios';

export default class BCHButton extends React.Component {
    constructor() {
        super();
        this.state = {
            address: "0x00",
            legacyAddress: "0x00",
            balance: 0,
            totalReceived: 0,
            totalSent: 0,
            txAppearances: 0,
            searchValue: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    handleClick = async() => {
        let response = await axios(`/api/v1/bch/${this.state.searchValue}`)
            .then(result => {
                response = result.data;
                return response;
            })
            .catch(err => {
                console.log(err);
                return;
            })
        await console.log(response.data);
        await this.setState({
            address: response.data.cashAddress,
            legacyAddress: response.data.legacyAddress,
            balance: response.data.balance,
            totalReceived: response.data.totalReceived,
            totalSent: response.data.totalSent,
            txAppearances: response.data.txAppearances

        });
    }

    handleChange(event) {
        this.setState({
            searchValue: event.target.value
        });
    }

    clearState() {
        this.setState({
            address: "0x00",
            legacyAddress: "0x00",
            balance: 0,
            totalReceived: 0,
            totalSent: 0,
            txAppearances: 0,
            searchValue: ""
        })
    }

    render() {
        return (
            <ul className="actions small">
                <div className="6u 12u(xsmall)">
                    <input type="text" value={this.state.searchValue} placeholder="Address" onChange={this.handleChange} />
                </div>
                <li><a href="#" className="button special small" onClick={this.handleClick}>Search Address</a></li>
                <li><a href="#" className="button small" onClick={this.clearState}>Clear</a></li>
                <br />
                <div className="12u">
                    Cash Address        {this.state.address} <br />
                    Legacy Address      {this.state.legacyAddress} <br />
                    Balance             {this.state.balance} <br />
                    Total Received      {this.state.totalReceived} <br />
                    Total Sent          {this.state.totalSent} <br />
                    Tx Appearances      {this.state.txAppearances}
                </div>
            </ul>
        );
    }
}
