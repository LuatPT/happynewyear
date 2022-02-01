import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';

const Home: NextPage = () => {
  useEffect(function onFirstMount(){
   window?.addEventListener('click', function() { document?.getElementById('player').play() }, { once: true });
  },[])
  function getGift(){
   alert("AHhh!");
  }

  var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "103999694475699");
      chatbox.setAttribute("attribution", "biz_inbox");
       window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };
  (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

  return (
    <div className={styles.container}> 
    {/* Styles.container là Home.module.css .container{ */}
      <Head>
        <title>Happy new year 2022</title>
        <meta name="description" content="Create by Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div>
            <Button onClick={getGift} variant="contained"  color="primary">Nhận quà</Button>
          </div>
          <div>
          {/* <iframe src="/silence.mp3" type="audio/mp3" allow="autoplay" style={{display: "none"}}/> */}
          <audio controls autoPlay id="player" hidden={true}>
            <source src="/Tieng-Phao-No.mp3" type="audio/mp3"/>
          </audio>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat">
      </div>

    <script>
     
    </script>

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'DevTeam'}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
