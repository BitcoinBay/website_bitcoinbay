import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Landing Page</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <BannerLanding />

            <div id="main">
                <section id="CoreMission">
                    <div className="inner">
                        <header className="major">
                            <h2>Core Mission</h2>
                        </header>
                        <p>Our goal is for people to succeed in the Blockchain space. We want to bring the world a positive wave of possibilities blockchain can make. We can do this by solving adoptability and scalability, we believe if you do it right it can have a real impact. Our team engages in community events and develop valuable Blockchain solutions.</p>
                    </div>
                </section>
                <section id="OutWork">
                    <div className="inner">
                        <header className="major">
                            <h2>Our Work</h2>
                        </header>
                        <div className="row">
                            <div className="6u 12u$(small)">
                                <h3>Product Development</h3>
                                <p>Empowering our peers to make blockchain products </p>
                            </div>
                            <div className="6u 12u$(small)">
                                <h3>Business Advisory</h3>
                                <p>Access business requirements for blockchain adoption</p>
                            </div>
                            <div className="4u 12u$(medium)">
                                <h3>Community Engagement</h3>
                                <p>Meetups, Workshops, Discussions, Hackathons, Conferences</p>
                            </div>
                            <div className="4u 12u$(medium)">
                                <h3>Blockchain Applications</h3>
                                <p>Wallets, Node Networks, Developer Tools, R&D Work</p>
                            </div>
                            <div className="4u 12u$(medium)">
                                <h3>Education</h3>
                                <p>Enlighten people to blockchain technological capabilities and user applications</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="three" className="spotlights">
                    <section>
                        <Link href="/blockhack">
                            <a className="image"><img src="/static/images/pic08.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Our Team</h3>
                                </header>
                                <p>We are a community of expert leaders who want to drive the change that Blockchain brings. Bitcoin Bay has become one of the leading Blockchain communities in Toronto. We educate the community about Blockchain and provide technical expertise for clients who want to build businesses on blockchain.
                                 </p>
                                <ul className="actions">
                                    <li><Link href="/team"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/blockhack">
                            <a className="image"><img src="/static/images/pic09.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Our Story</h3>
                                </header>
                                <p>IT ALL STARTED IN . . . 2013 taking place in a small café shop to figure out the perception of blockchain. The cryptocurrency Bitcoin was thought of as a joke by many people. However, the core believed this technology could change the world as we know it. The team quickly noticed there was no real place or group that represented the blockchain community. Their idea was to build a strong blockchain community that was well connected. This eventually lead to lots of ideas that were being explored amongst many blockchain enthusiasts.</p>
                                <ul className="actions">
                                    <li><Link href="/team"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/blockhack">
                            <a className="image"><img src="/static/images/pic10.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Community Events</h3>
                                </header>
                                <p>We host and help organize great Bitcoin related events in the Greater Toronto Area. This includes Meetups, Discussions, Workshops, Conferences and Hackathons<br />
                                <br />
                                We discuss all things Bitcoin (blockchains, cryptocurrencies, smart contracts).<br />
                                Beginners and experts all welcome.
                                </p>
                                <ul className="actions">
                                    <li><Link href="/blockhack"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </Layout>
)
