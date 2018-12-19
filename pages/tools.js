import Head from "next/head"

import Layout from '../components/Layout'
import BCHButton from '../components/BCHButton'

export default () => (
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
                        <BCHButton />
                    </header>
                </div>
            </section>
        </div>
    </Layout>
)
