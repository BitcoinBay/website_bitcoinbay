import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="BitcoinBay" className="tiles">
                    <article style={{ backgroundImage: `url('/static/images/pic01.jpg')` }}>
                        <header className="major">
                            <h3>Bitcoin Bay</h3>
                            <p>Welcome Page</p>
                        </header>
                        <Link href="/welcome"><a className="link primary"></a></Link>
                    </article>
                    <article style={{ backgroundImage: `url('/static/images/pic02.jpg')` }}>
                        <header className="major">
                            <h3>Team Story</h3>
                            <p>Bitcoin Bay Background</p>
                        </header>
                        <Link href="/team"><a className="link primary"></a></Link>
                    </article>
                    <article style={{ backgroundImage: `url('/static/images/pic03.jpg')` }}>
                        <header className="major">
                            <h3>Meetups & Events</h3>
                            <p>Upcoming Schedule</p>
                        </header>
                        <Link href="/#meetup"><a className="link primary"></a></Link>
                    </article>
                    <article style={{ backgroundImage: `url('/static/images/pic04.jpg')` }}>
                        <header className="major">
                            <h3>Blockhack</h3>
                            <p>Blockchain Hackathon</p>
                        </header>
                        <Link href="/blockhack"><a className="link primary"></a></Link>
                    </article>
                    <article style={{ backgroundImage: `url('/static/images/pic05.jpg')` }}>
                        <header className="major">
                            <h3>Bitcoin Bay Workshops</h3>
                            <p>Blockchain Technology, Business, Infrastructure</p>
                        </header>
                        <Link href="/welcome"><a className="link primary"></a></Link>
                    </article>
                    <article style={{ backgroundImage: `url('/static/images/pic06.jpg')` }}>
                        <header className="major">
                            <h3>Blockchain Development</h3>
                            <p>Our Blockchain Technical Team</p>
                        </header>
                        <Link href="/welcome"><a className="link primary"></a></Link>
                    </article>
       







                </section>
                        <Link href="/meetup"><a className="link primary"></a></Link>
                <section id="meetup">
                    <div className="inner">
                        <header className="major">
                            <h2>Bitcoin Bay on Meetup.com</h2>
                        </header>
                        <p>Our group is informal and includes a diverse crowd so whether you are new to Bitcoin or are savvy and looking for interesting conversation, our group has the full range of knowledge and experience. This is the "Meetup + Network" where we talk casually about Blockchain share recent news and have an overall great time.
                        </p>
                        <ul className="actions">
                            <li><Link href="https://www.meetup.com/The-Bitcoin-Bay/"><a className="button next">Come RSVP</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
