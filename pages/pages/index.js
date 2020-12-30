import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PABRA - LOGIN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="login">
        <div className="login-details">
          <div className="login-details--containt">
            <img src="../assets/images/Group 430.svg" alt="" />
            <h1>Welcome to the PABRA Dashboard </h1>
          </div>
        </div>
        <div className="login-form--area">
          <div className="login-form--area-group">
            <img src="../assets/images/logo.png" className="login-form--area-logo" alt="" />
            <h3>Sign in to access <br /> the Dashboard</h3>
            <form>
              <div className="form-group">
                <input type="text" name="" placeholder="Username or Email" className="form-input"/>
              </div>
              <div className="form-group">
                <input type="text" name="" placeholder="Password" className="form-input"/>
              </div>

              <button class="btn mt-10"> <Link href="/home">Login</Link> </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
