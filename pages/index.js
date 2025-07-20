import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner'; // 👈 Import the banner

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner /> {/* 👈 Add banner at top */}

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
