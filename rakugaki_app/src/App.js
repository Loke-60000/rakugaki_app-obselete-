
import './custom.scss'
import logo from './logo.svg';
import video from './assets/video_banner.mp4';
import placeholder from './assets/placeholder_main_page_bis.jpg'
import './App.css';


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

function App() {
  return (
    <>
    <nav class="navbar navbar-primary bg-primary">
        <div class="container-fluid">
          <img class="logo" src={logo} alt=""></img>
        </div>
      </nav>

      <section id='banner'>
        <div id='slideshow'>
          <h1 id='title_inside'>This is a placeholder dont worry about it</h1>
          <video autoPlay loop muted> 
            <source type="video/mp4" src={video} />
          </video>
        </div>
      </section>
      <h1 id='title_outside'>This is a placeholder dont worry about it</h1>

      <section id='buttons'>
        <button type="button" class="btn btn-primary" id='button_signin' data-toggle="button" aria-pressed="false" autocomplete="off">
          sign in
        </button>
        <button type="button" class="btn btn-primary" id='button_login' data-toggle="button" aria-pressed="false" autocomplete="off">
          log in
        </button>
      </section>

      <h1 id='line'>---------------------------------------------------------------------</h1>
      <div class="content">
            <div id="description">
            <div class="div1"><p>1真びぎイ旅横ス前以ねお済春ヤスク住合え広短ワセ書続オネケノ問的ふ蔵救旅ミメ果神ンレやぎ掲座最ストびリ隊7料もラ世場ツムニリ家73張壊命あぱべレ。差5文ざこびと主犯ぜ見成イコ場伯マヱカチ覚4試背ヲスリ活未す刊上ごめ転載ル紹強カシ測飾ルヒナ丸事る合他アルヨチ芸初ソケ主休障むてぐ。</p></div>
            <div class="div2"><img src={placeholder} alt=""></img></div>
            <div class="div3"><img src={placeholder} alt=""></img></div>
            <div class="div4"><p>2真びぎイ旅横ス前以ねお済春ヤスク住合え広短ワセ書続オネケノ問的ふ蔵救旅ミメ果神ンレやぎ掲座最ストびリ隊7料もラ世場ツムニリ家73張壊命あぱべレ。差5文ざこびと主犯ぜ見成イコ場伯マヱカチ覚4試背ヲスリ活未す刊上ごめ転載ル紹強カシ測飾ルヒナ丸事る合他アルヨチ芸初ソケ主休障むてぐ。</p></div>
            <div class="div5"><p>3真びぎイ旅横ス前以ねお済春ヤスク住合え広短ワセ書続オネケノ問的ふ蔵救旅ミメ果神ンレやぎ掲座最ストびリ隊7料もラ世場ツムニリ家73張壊命あぱべレ。差5文ざこびと主犯ぜ見成イコ場伯マヱカチ覚4試背ヲスリ活未す刊上ごめ転載ル紹強カシ測飾ルヒナ丸事る合他アルヨチ芸初ソケ主休障むてぐ。</p></div>
            <div class="div6"><img src={placeholder} alt=""></img></div>
          </div>
      </div>
    </>
  );
}

export default App;
