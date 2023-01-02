
import '../custom.scss'
import { useState } from 'react';
import video from '../assets/video_banner.mp4';
import '../css/Welcome.css';
import Modal from '../Components/Modal';
import Footer from '../Components/Footer';
import NavBanner from '../Components/NavBanner';


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("slideshow").style.height = "50vh";
    document.getElementById("slideshow").style.width = "80%";
    document.getElementById("slideshow").style.marginTop = "5%"
    document.getElementById("title_inside").style.display = 'none'
  } else {
    document.getElementById("slideshow").style.height = "100vh";
    document.getElementById("slideshow").style.width = "100%";
    document.getElementById("slideshow").style.marginTop = "0%"
    document.getElementById("title_inside").style.display = 'block'
  }
}

function Welcome() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <NavBanner />
      <section id='banner'>
        <div id='slideshow'>
          {/* <h1 id='title_inside'>This is a placeholder dont worry about it</h1> */}
          <video autoPlay loop muted> 
            <source type="video/mp4" src={video} />
          </video>
        </div>
      </section>
      <div id='title_outside'>
        <p>RAKUGAKI</p>
        <h1>ラクガキ</h1>
      </div>

      <section id='buttons'>
        <button type="button" class="btn btn-primary" id='button_signin' data-toggle="button" aria-pressed="false" autocomplete="off">
          sign in
        </button>
        <button type="button" class="btn btn-primary" id='button_login' data-toggle="button" aria-pressed="false" autocomplete="off" onClick={() => setOpenModal(true)}>
          log in
        </button>
      </section>
      {openModal && <Modal closeModal={setOpenModal}/>}

      <Footer />
    </>

  );
}

export default Welcome;
