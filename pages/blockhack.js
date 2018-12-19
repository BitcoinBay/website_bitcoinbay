import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Blockhack</title>
            <meta name="description" content="Generic Page" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Blockhack</h1>
                        <p>by Bitcoin Bay</p>
                    </header>
                    <span className="image main"><img src="/static/images/blockhack.jpg" alt="" /></span>
                    <p>The world is ready for the next killer app powered by Blockchain technology, and it will need companies and plans to make it grow</p>
                    <p>We bring together the best minds of every industry to tackle this very problem from diverse communities and skill sets, in business, research, law, coding and design</p>
                    <p>We are looking for problem solvers - to bring us the future, the Next Big Thing</p>
                </div>
            </section>
        </div>
    </Layout>
)
