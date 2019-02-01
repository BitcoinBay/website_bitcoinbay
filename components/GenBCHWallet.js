import axios from 'axios';

const BITBOXSDK = require("bitbox-sdk/lib/bitbox-sdk").default;
const BITBOX = new BITBOXSDK();

export default class GenBCHWallet extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
            mnemonic: "",
            address: "0x00",
            change: "0x00",
            data: "0x00"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = async() => {
        const purpose = "44'";
        const coin = "1'";
        let mnemonic;
        if (!this.state.searchValue) {
            const lang = "english";
            // 128 bits = 12 words
            // 256 bits = 24 words
            mnemonic = BITBOX.Mnemonic.generate(
                128,
                BITBOX.Mnemonic.wordLists()[lang]
            );
        } else {
            mnemonic = this.state.searchValue
        }
        const rootSeed = BITBOX.Mnemonic.toSeed(mnemonic);
        const masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, "testnet");

        let account1 = BITBOX.HDNode.derivePath(masterHDNode, `m/${purpose}/${coin}/0'`);
        let addressStruct = BITBOX.HDNode.derivePath(account1, "0/0");
        let changeStruct = BITBOX.HDNode.derivePath(account1, "1/0");
        let dataStruct = BITBOX.HDNode.derivePath(account1, "2/0");

        let address1 = BITBOX.HDNode.toCashAddress(addressStruct);
        let change1 = BITBOX.HDNode.toCashAddress(changeStruct);
        let data1 = BITBOX.HDNode.toCashAddress(dataStruct);

        this.setState({
            mnemonic: mnemonic,
            address: address1,
            change: change1,
            data: data1,
        });

    }

    handleChange(event) {
        this.setState({
            searchValue: event.target.value
        });
    }

    render() {
        return (
            <ul className="actions small">
                <div className="6u 12u(xsmall)">
                    <input type="text" value={this.state.searchValue} placeholder="Enter Mnemonic" onChange={this.handleChange} />
                </div>
                <a href="#" className="button special small" onClick={this.handleClick}>Generate Addresses</a><br />
                Mnemonic          {this.state.mnemonic} <br />
                "m/44'/1'/0'/0/0" {this.state.address} <br />
                "m/44'/1'/0'/1/0" {this.state.change} <br />
                "m/44'/1'/0'/2/0" {this.state.data} <br />
            </ul>
        );
    }
}
