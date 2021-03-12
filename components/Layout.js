import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Crypto Tracker' }) => {
    return (
        <div className='layout'>
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className='header'>
                <Link href='/' passHref>
                    <a>
                        <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="353.5" height="353.5" viewBox="0 0 353.5 353.5">
                            <g id="Rectangle_1" data-name="Rectangle 1" transform="matrix(-0.695, 0.719, -0.719, -0.695, 353.5, 173.665)" fill="none" stroke="#2fffe5" stroke-width="16">
                                <rect width="250" height="250" stroke="none" />
                                <rect x="8" y="8" width="234" height="234" fill="none" />
                            </g>
                            <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="87.5" cy="89.5" rx="87.5" ry="89.5" transform="translate(86.418 86.788)" fill="#f90a0a" />
                            <path id="Path_1" data-name="Path 1" d="M664.839,511.008c34.547-11.071,80.42-82.244,138.187-44.285,41.909,23.2,104.841,44.312,155.177-11.6" transform="translate(-634.962 -307.364)" fill="none" stroke="#2fffe5" stroke-linecap="round" stroke-width="10" stroke-dasharray="15" />
                        </svg>


                    </a>
                </Link>
            </header>
            <main>{children}</main>
        </div>
    )
}
export default Layout;