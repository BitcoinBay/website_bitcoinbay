import { Component } from 'react'
import 'isomorphic-unfetch'
import ccxt from 'ccxt'

// create instantance of exchanges
const binanace   = new ccxt.binance( { enableRateLimit: true, })
const gdax       = new ccxt.gdax( { enableRateLimit: true, })

// proxy url
const proxy = 'https://crossorigin.me/'

//proxy assignments
binanace.proxy        = proxy;
gdax.proxy            = proxy;

//import MD_Layout from '/home/leo/projects/react-based/website_bitcoinbay/components/MarketData/MD_Layout'
import MD_Layout from '../MarketData/MD_Layout'

class MD_Index extends Component {

    // 
/*     static async getInitialProps () {
        const res = await fetch()
        const data = await res.json()
        return {data}
    } */
    // constructor to handle state for MD and passing it to the logic
    constructor(props) {
        super(props)
        this.state = {
            isPriceTableVisible: true
           /*  CURNY: 'USD',
            loading: is_loading */
        }
        this.handleTogglePriceTable = this.handleTogglePriceTable.bind(this);
    }

    handleTogglePriceTable() {
        this.setState({
            isPriceTableVisible: !this.state.isPriceTableVisible
        })
    }

    render() {

        return (
            <MD_Layout />            

        )

    }


}
export default MD_Index