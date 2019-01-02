import Head from "next/head"

import Layout from '../components/Layout'
import BCHButton from '../components/BCHButton'
import GenBCHWallet from '../components/GenBCHWallet'

export default class Tools extends React.Component {
    constructor() {
        super();
        this.state = {
            network: "mainnet"
        }
    }

    handleChange(event) {
        this.setState({
            network: event.target.value
        });
    }

    render(){
        return(
            <Layout>
                <Head>
                    <title>Bitcoin Bay Tools</title>
                    <meta name="description" content="Generic Page" />
                </Head>

                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h1>Tools</h1>
                                <p>by Bitcoin Bay</p>
                                <div className="row 400%">
                                    <div className="inner">
                                        <select>
                                            <li>{this.state.network}</li>
                                            <option value="mainnet">BCH Mainnet</option>
                                            <option value="testnet">BCH Testnet</option>
                                        </select>
                                        <div className="12u">
                                            <GenBCHWallet />
                                        </div>
                                        <div className="12u">
                                            <BCHButton />
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </section>
                </div>
            </Layout>
        );
    }
}
