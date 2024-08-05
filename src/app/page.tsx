"use client";

import { Montserrat, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}

function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScreenHeight(window.innerHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="dnav">
        <div className="nlogo">
          <Image
            src={"/logo.png"}
            className="logo"
            width={0}
            height={0}
            alt={"logo azka"}
            unoptimized
          />
        </div>
        <div className="nmenu">
          {/* <Nav1 active={ scrollY + screenHeight >= screenHeight * 1 && scrollY < screenHeight * 1? true : false }
            click={() => {window.scrollTo(0, 0);}} />

          <Nav2 active={ scrollY + screenHeight >= screenHeight * 2 && scrollY < screenHeight * 2? true : false }
            click={() => {window.scrollTo(0, screenHeight * 1);}} />

          <Nav3 active={ scrollY + screenHeight >= screenHeight * 3 && scrollY < screenHeight * 3? true : false }
            click={() => {window.scrollTo(0, screenHeight * 2);}} />

          <Nav4 active={ scrollY + screenHeight >= screenHeight * 4 && scrollY < screenHeight * 4? true : false }
            click={() => {window.scrollTo(0, screenHeight * 3);}} />

          <Nav5 active={ scrollY + screenHeight >= screenHeight * 5 && scrollY < screenHeight * 5? true : false }
            click={() => {window.scrollTo(0, screenHeight * 4);}} /> */}
            <Nav1 active={scrollY < screenHeight} click={() => {window.scrollTo(0, 0);}} />
<Nav2 active={scrollY >= screenHeight && scrollY < screenHeight * 2} click={() => {window.scrollTo(0, screenHeight);}} />
<Nav3 active={scrollY >= screenHeight * 2 && scrollY < screenHeight * 3} click={() => {window.scrollTo(0, screenHeight * 2);}} />
<Nav4 active={scrollY >= screenHeight * 3 && scrollY < screenHeight * 4} click={() => {window.scrollTo(0, screenHeight * 3);}} />
<Nav5 active={scrollY >= screenHeight * 4} click={() => {window.scrollTo(0, screenHeight * 4);}} />

        </div>
      </div>
    </nav>
  );
}

function Nav1(props: { active: boolean; click?: () => void }) {
  return (
    <div
      className={`Snav ${
        props.active
          ? "nav_active"
          : "nav_no_active"
      }`}
      onClick={props.click}
    ><span className={`${poppins.className}`}>Home</span></div>
  );
}
function Nav2(props: { active: boolean; click?: () => void }) {
  return (
    <div
      className={`Snav ${
        props.active
          ? "nav_active"
          : "nav_no_active"
      }`}
      onClick={props.click}
    ><span className={`${poppins.className}`}>About</span></div>
  );
}
function Nav3(props: { active: boolean; click?: () => void }) {
  return (
    <div
      className={`Snav ${
        props.active
          ? "nav_active"
          : "nav_no_active"
      }`}
      onClick={props.click}
    ><span className={`${poppins.className}`}>Portofolio</span></div>
  );
}
function Nav4(props: { active: boolean; click?: () => void }) {
  return (
    <div
      className={`Snav ${
        props.active
          ? "nav_active"
          : "nav_no_active"
      }`}
      onClick={props.click}
    ><span className={`${poppins.className}`}>Skills</span></div>
  );
}
function Nav5(props: { active: boolean; click?: () => void }) {
  return (
    <div
      className={`Snav ${
        props.active
          ? "nav_active"
          : "nav_no_active"
      }`}
      onClick={props.click}
    ><span className={`${poppins.className}`}>Contact</span></div>
  );
}

function Home() {
  return (
    <div className="home">
      <Image
        src={"/bg1.jpg"}
        className="bg1"
        width={0}
        height={0}
        alt={"bg1"}
        unoptimized
      />
      <div className="hkiri">
        <div className="hd_nama">
          <div className={`hd_hi ${poppins.className}`}>
            <span>hi everyone! I'm</span>
          </div>
          <div className="hd_muh">
            <div className={`muhammad ${poppins.className}`}>
              <span>MUHAMMAD</span>
            </div>
            <div className={`azka ${poppins.className}`}>
              <span>AZKA</span>
            </div>
          </div>
          <div className={`hd_web ${montserrat.className}`}>
            WEB DEVELOPMENT
          </div>
        </div>
        <div className="btn_about">
          <Link href="#about" className="a">
            <button className="animated-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">ABOUT ME</span>
              <span className="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className="akunn">
          <ul className="example-2">
            <li className="icon-content">
              <a
                href="https://wa.me/qr/VL7DBJ7FLPIVJ1 "
                aria-label="Whatsapp"
                data-social="Whatsapp"
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                </svg>
              </a>
              <div className="tooltip">Phone</div>
            </li>
            <li className="icon-content">
              <a
                href="https://wa.me/qr/VL7DBJ7FLPIVJ1 "
                aria-label="LinkedIn"
                data-social="LinkedIn"
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </a>
              <div className="tooltip">LinkedIn</div>
            </li>
            <li className="icon-content">
              <a
                href="https://github.com/zkkaa"
                aria-label="GitHub"
                data-social="GitHub"
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div className="tooltip">GitHub</div>
            </li>
            <li className="icon-content">
              <a
                href="https://www.instagram.com/me.azkaaa/?hl=en"
                aria-label="Instagram"
                data-social="Instagram"
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div className="tooltip">Instagram</div>
            </li>
            <li className="icon-content">
              <a
                href="https://mail.google.com/mail/u/0/?hl=en#inbox"
                aria-label="Telegram"
                data-social="telegram"
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                </svg>
              </a>
              <div className="tooltip">Gmail</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="hkanan">
        <Image
          src={"/gambar1.png"}
          className="gambar1"
          width={0}
          height={0}
          alt={"gambar1"}
          unoptimized
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about" id="about">
      <div className="akiri">
        <div className="container noselect">
          <div className="canvas">
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div className="tracker tr-10"></div>
            <div className="tracker tr-11"></div>
            <div className="tracker tr-12"></div>
            <div className="tracker tr-13"></div>
            <div className="tracker tr-14"></div>
            <div className="tracker tr-15"></div>
            <div className="tracker tr-16"></div>
            <div className="tracker tr-17"></div>
            <div className="tracker tr-18"></div>
            <div className="tracker tr-19"></div>
            <div className="tracker tr-20"></div>
            <div className="tracker tr-21"></div>
            <div className="tracker tr-22"></div>
            <div className="tracker tr-23"></div>
            <div className="tracker tr-24"></div>
            <div className="tracker tr-25"></div>
            <div id="card">
              <Image
                src={"/gambar2.jpg"}
                className="gambar2"
                width={0}
                height={0}
                alt={"gambar2"}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
      <div className="akanan">
        <div className="ad">
          <div className="ad_atask">
            <div className={`aak_about ${montserrat.className}`}>
              <span>ABOUT ME</span>
            </div>
            <div className="aak_about1">
              <div className={`aak_muh ${poppins.className}`}>
                MUHAMMAD AZKA
              </div>
              <div className={`aak_web ${montserrat.className}`}>
                WEB DEVELOPMENT
              </div>
            </div>
          </div>
          <div className="ad_bawahk">
            <div className={`adb_ket ${poppins.className}`}>
              <span>
                Able to create and develop websites. I am interested in the
                world of games and websites. <br />I attended SMKN 2 Tasikmalaya
                majoring in software and game development (PPLG) which helped me
                deepen my programming knowledge.
              </span>
            </div>
            <Link href="https://drive.google.com/file/d/1veMcfVRjffP-8Odr2RpPuBDHgc1uqs08/view?usp=drive_link" className="a">
              <button className="button" type="button">
                <span className="button__text">Download CV</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    id="bdd05811-e15d-428c-bb53-8661459f9307"
                    data-name="Layer 2"
                    className="svg"
                  >
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portofolio" id="portofolio">
      <div className="pkiri">
        <div className="picture1">
        <Image
            src={"/ckj1.jpg"}
            className="ckj1"
            width={0}
            height={0}
            alt={"ckj1"}
            unoptimized
          />
        </div>
        <div className="picture2">
        <Image
            src={"/ckj2.jpg"}
            className="ckj2"
            width={0}
            height={0}
            alt={"ckj2"}
            unoptimized
          />
        </div>
      </div>
      <div className="pkanan">
        <div className="jporto">
          <div className={`sporto ${poppins.className}`}>
            <span>PORTOPOLIO</span>
          </div>
          <div className="smy">
            <span>MY LAST PROJECT</span>
          </div>
        </div>
        <div className="pk_ket">
          <div className="pkk_atas">
            <button className="kiri_porto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="panahkiri"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div>
              <span className="sckj">C-KJ</span>
            </div>
            <button className="kanan_porto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="panahkanan"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className={`pkk_bawah ${poppins.className}`}>
            <span>
              CK-J is a website used by the treasurer of the IT department at
              SMKN 2 Tasikmalaya. <br />
              This application was created with the aim of making it easier for
              the department treasurer to manage finances.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skiri">
        <div className="box_skills">
          <div className="bs_atas">
            <div className={`amyskil ${montserrat.className}`}>
              <span>MY SKILLS</span>
            </div>
            <div className={`bmyskil ${poppins.className}`}>
              <span>My Skills</span>
            </div>
          </div>
          <div className={`bs_bawah ${poppins.className}`}>
            <span>
              I can create and develop web applications using several frameworks
              such as next js, react js, node js, tailwind. I am also familiar
              with desktop applications using c# programming language. In
              addition, I can also use figma.
            </span>
          </div>
        </div>
      </div>
      <div className="skanan">
        <div className="boxskil">
          <div className="bskiri">
            <div className="dhtmlcss">
              <div className="hovicon">
                <span className="button__icon1">
                  <Image
                    src={"/html.png"}
                    className="ukuran_logo"
                    width={0}
                    height={0}
                    alt={"html azka"}
                    unoptimized
                  />
                </span>
                <span className="button__icon2">
                  <Image
                    src={"/css.png"}
                    className="ukuran_logo"
                    width={0}
                    height={0}
                    alt={"css azka"}
                    unoptimized
                  />
                </span>
              </div>
              <div className={`ket_skill ${montserrat.className}`}>
                <span>Html & Css</span>
              </div>
            </div>
            <div className="djava">
              <div className="dlogo_skill">
                <Image
                  src={"/js.png"}
                  className="ukuran_logo"
                  width={0}
                  height={0}
                  alt={"css azka"}
                  unoptimized
                />
              </div>
              <div className={`ket_skill ${montserrat.className}`}>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="dnode">
              <div className="dlogo_skill">
                <Image
                  src={"/nodejs.png"}
                  className="ukuran_logo"
                  width={0}
                  height={0}
                  alt={"css azka"}
                  unoptimized
                />
              </div>
              <div className={`ket_skill ${montserrat.className}`}>
                <span>Node Js</span>
              </div>
            </div>
          </div>
          <div className="bskanan">
            <div className="dreact">
              <div className="dlogo_skill">
                <Image
                  src={"/react.png"}
                  className="ukuran_logo"
                  width={0}
                  height={0}
                  alt={"css azka"}
                  unoptimized
                />
              </div>
              <div className={`ket_skill ${montserrat.className}`}>
                <span>React Js</span>
              </div>
            </div>
            <div className="dnext">
              <div className="dlogo_skill">
                <Image
                  src={"/nextjs.png"}
                  className="ukuran_logo"
                  width={0}
                  height={0}
                  alt={"css azka"}
                  unoptimized
                />
              </div>
              <div className={`ket_skill ${montserrat.className}`}>
                <span>Next Js</span>
              </div>
            </div>
            <div className="dphp">
              <div className="dlogo_skill">
                <Image
                  src={"/php.png"}
                  className="ukuran_logo"
                  width={0}
                  height={0}
                  alt={"css azka"}
                  unoptimized
                />
              </div>
              <div className={`ket_skill ${montserrat.className}`}>
                <span>Php</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="catas">
        <div className="cbox">
          <div className="ccbox">
            <div className={`csay ${montserrat.className}`}>
              <span>SAY SOMETHING</span>
            </div>
            <div className="cgaris"></div>
          </div>
          <div className="cinput">
            <input
              type="text"
              className={`name ${poppins.className}`}
              placeholder="name"
            />
            <input
              type="text"
              className={`email ${poppins.className}`}
              placeholder="e-mail"
            />
            <input
              type="text"
              className={`phone ${poppins.className}`}
              placeholder="number phone"
            />
            <textarea
              name=""
              id=""
              className={`descrip ${poppins.className}`}
              placeholder="description"
            ></textarea>
          </div>
          <button className={`btn_message ${montserrat.className}`}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send Message</span>
          </button>
        </div>
      </div>
      <div className="cbawah">
        <div className="medsos">
          <div className="dnumber">
            <div className="icon_medsos">
              <div className="im">
                <Image
                  src={"/tel.png"}
                  className="logo_tel"
                  width={0}
                  height={0}
                  alt={"logo tel"}
                  unoptimized
                />
              </div>
            </div>
            <div className="ket_number">
              <div className={`number ${montserrat.className}`}>
                <span>Phone</span>
              </div>
              <Link href="https://wa.me/qr/VL7DBJ7FLPIVJ1" className="a">
                <div className={`snum ${poppins.className}`}>
                  <span>087873291759</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="dlinked">
            <div className="icon_medsos">
              <div className="im">
                <Image
                  src={"/linked.png"}
                  className="logo_linked"
                  width={0}
                  height={0}
                  alt={"logo linked"}
                  unoptimized
                />
              </div>
            </div>
            <div className="ket_linked">
              <div className={`linked ${montserrat.className}`}>
                <span>LinkedIn</span>
              </div>
              <Link href="" className="a">
                <div className={`slinked ${poppins.className}`}>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          <div className="dgithub">
            <div className="icon_medsos">
              <div className="im">
                <Image
                  src={"/git.png"}
                  className="logo_git"
                  width={0}
                  height={0}
                  alt={"logo github"}
                  unoptimized
                />
              </div>
            </div>
            <div className="ket_github">
              <div className={`number ${montserrat.className}`}>
                <span>GitHub</span>
              </div>
              <Link href="https://github.com/zkkaa" className="a">
                <div className={`sgithub ${poppins.className}`}>
                  <span>@zkkaa</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="dig">
            <div className="icon_medsos">
              <div className="im">
                <Image
                  src={"/ig.png"}
                  className="logo_ig"
                  width={0}
                  height={0}
                  alt={"logo ig"}
                  unoptimized
                />
              </div>
            </div>
            <div className="ket_ig">
              <div className={`ig ${montserrat.className}`}>
                <span>Instagram</span>
              </div>
              <Link
                href="https://www.instagram.com/me.azkaaa/?hl=en"
                className="a"
              >
                <div className={`sig ${poppins.className}`}>
                  <span>me.azkaaa</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="demail">
            <div className="icon_medsos">
              <div className="im">
                <Image
                  src={"/mail.png"}
                  className="logo_mail"
                  width={0}
                  height={0}
                  alt={"logo mail"}
                  unoptimized
                />
              </div>
            </div>
            <div className="ket_email">
              <div className={`emaill ${montserrat.className}`}>
                <span>Gmail</span>
              </div>
              <Link
                href="https://mail.google.com/mail/u/0/?hl=en#inbox"
                className="a"
              >
                <div className={`semail ${poppins.className}`}>
                  <span>muhammadazkafakhri0@gmail.com</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="span_contact">
          <div className={`scontact ${montserrat.className}`}>
            <span>CONTACT</span>
          </div>
          <div className={`scme ${poppins.className}`}>
            <span>CONTACT ME</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Sidenav(){
//     const [scrollY, setScrollY] = useState(0);
//     const [screenHeight, setScreenHeight] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//             setScreenHeight(window.innerHeight);
//         };

//         handleScroll();

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return <div className="h-screen w-16 bg-white fixed md:flex items-center justify-center hidden">
//         <div className="flex gap-1 flex-col">
//             <Dot active={scrollY + screenHeight >= screenHeight * 1 && scrollY < screenHeight * 1 ? true : false} click={() => {window.scrollTo(0, 0)}}/>
//             <Dot active={scrollY + screenHeight >= screenHeight * 2 && scrollY < screenHeight * 2 ? true : false} click={() => {window.scrollTo(0, screenHeight * 1)}}/>
//             <Dot active={scrollY + screenHeight >= screenHeight * 3 && scrollY < screenHeight * 3 ? true : false} click={() => {window.scrollTo(0, screenHeight * 2)}}/>
//             <Dot active={scrollY + screenHeight >= screenHeight * 4 && scrollY < screenHeight * 4 ? true : false} click={() => {window.scrollTo(0, screenHeight * 3)}}/>
//         </div>
//     </div>
// }

// function Dot(props: {active: boolean; click?: () => void}){
//   return <div className={`w-4 h-4 rounded-full 
//     ${props.active ? "bg-orange-500 border-none" : "bg-white border-2 border-black"}`} onClick={props.click}></div>
// }
