import axios from 'axios';

const BITBOXSDK = require("bitbox-sdk/lib/bitbox-sdk").default;
const BITBOX = new BITBOXSDK();

export default class GenBCHWallet extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
            mnemonic: "",
            xpubKey: "",
            address: "0x00"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = async() => {
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
        const masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, "bitcoincash");
        const xpubKey = BITBOX.HDNode.toXPub(masterHDNode);

        const purpose = "44'";
        const coin = "145'";
        const path = `m/${purpose}/${coin}/0'`

        let index = 0
        let addressOne = BITBOX.Address.fromXPub(xpubKey, `0/${index}`);

        this.setState({
            mnemonic: mnemonic,
            xpubKey: xpubKey,
            address: addressOne
        })

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
                    <input type="text" value={this.state.searchValue} placeholder="Address" onChange={this.handleChange} />
                </div>
                <li><a href="#" className="button special small" onClick={this.handleClick}>Generate Address</a></li><br />
                Mnemonic            {this.state.mnemonic} <br />
                Extended Public Key {this.state.xpubKey} <br />
                First Address Index {this.state.address} <br />
            </ul>
        );
    }
}
