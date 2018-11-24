import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import TeamBanner from '../components/TeamBanner'

export default () => (
    <Layout>
        <Head>
            <title>Nodes of Bitcoin Bay</title>
            <meta name="description" content="Team Page" />
        </Head>

        <div>
            <TeamBanner />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Meet The Bitcoin Bay Team</h2>
                        </header>
                        <p>We are a community of leading blockchain experts, with a diverse background, looking to lead the changes that blockchain brings. Bitcoin Bay has become one of the leading Bitcoin communities in Toronto. We enlighten people about blockchain technology, cryptocurrencies and the user network behind everything.</p>
                    </div>
                </section>
                <section id="three" className="spotlights">
                    <section>
                        <Link href="https://www.linkedin.com/in/jerry-qian-4ba2a79a/">
                            <a className="image"><img src="/static/images/jerry_profile.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Founder</h3>
                                </header>
                                <p>Jerry has been involved with the Bitcoin & Blockchain technology space since October 2013. As a specialist with Blockchain technology and a community coordinator, he assists decision makers prepare and align for the velocity of changes that are transforming their respective industry.<br/>
                                <br/>
                                Jerry coordinates The Bitcoin Bay, the largest and longest running Bitcoin meetup group in Toronto exchanging the flow of ideas in the Bitcoin space. Focus revolves around addressing and exploring real-world applications of Bitcoin and Blockchain technology.
                                </p>
                                <ul className="actions">
                                    <li><Link href="https://www.linkedin.com/in/jerry-qian-4ba2a79a/"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </Layout>
);
