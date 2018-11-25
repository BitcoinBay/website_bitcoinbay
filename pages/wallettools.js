import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Layout from '../components/Layout'

const BITBOXSDK = require("bitbox-sdk/lib/bitbox-sdk").default;
const BITBOX = new BITBOXSDK({ restURL: "https://rest.bitcoin.com/v1/" });

export default class WalletTools extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      mnemonic: "",
      lang: "",
      masterHDNode: ""
    };
  }

  componentDidMount() {
    let langs = [
      "english",
      "chinese_simplified",
      "chinese_traditional",
      "korean",
      "japanese",
      "french",
      "italian",
      "spanish"
    ];

    let lang = langs[Math.floor(Math.random() * langs.length)];

    // create 256 bit BIP39 mnemonic
    let mnemonic = BITBOX.Mnemonic.generate(
      256,
      BITBOX.Mnemonic.wordLists()[lang]
    );

    // root seed buffer
    let rootSeed = BITBOX.Mnemonic.toSeed(mnemonic);

    // master HDNode
    let masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, "bitcoincash");

    // HDNode of BIP44 account
    let account = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'");

    this.setState({
      mnemonic: mnemonic,
      lang: lang,
      masterHDNode: masterHDNode
    });
  }

  render() {
    let addresses = [];
    for (let i = 0; i < 10; i++) {
      if (this.state.masterHDNode) {
        let account = this.state.masterHDNode.derivePath(
          `m/44'/145'/0'/0/${i}`
        );
        addresses.push(
          <li key={i}>
            m/44&rsquo;/145&rsquo;/0&rsquo;/0/
            {i}: {BITBOX.HDNode.toCashAddress(account)}
          </li>
        );
      }
    }

    return (
        <Layout>
            <Head>
                <title>Bitbox Address Generator</title>
                <meta name="description" content="Welcome Page" />
            </Head>

            <div id="main">
                <div className="inner">
                    <header className="major">
                        <h1>Hello BITBOX</h1>
                    </header>
                    <p>This is a sample Bitcoin Cash (BCH) wallet being generated</p>
                </div>
                <section>
                    <div className="inner">
                        <h2>BIP44 $BCH Wallet</h2>
                        <h3>256 bit {this.state.lang} BIP39 Mnemonic:</h3>{" "}
                        <p>{this.state.mnemonic}</p>
                        <h3>BIP44 Account</h3>
                        <p>
                            <code>"m/44'/145'/0'"</code>
                        </p>
                        <h3>BIP44 external change addresses</h3>
                        <ul>{addresses}</ul>
                    </div>
                </section>
            </div>
        </Layout>
    );
  }
}
