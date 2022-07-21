import React from "react";
import Herocss from "../Home/Home.css";
import Ramka from "../../assets/img/ramka.png";
import Usrimg from "../../assets/img/userimg.jpg";
import Mosque from "../../assets/img/mosque.svg";
import MosqueImg from "../../assets/img/mosqueimg.jpg";
import Userimgpray from "../../assets/img/prayuserimg.png";
function Home(props) {
  return (
    <div>
      <div className="hero_site_box">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1 className="hero_title">
            God Always Is In Your Heart Get Involved In Everything
          </h1>
          <p className="hero_title_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
            ad minim veniam incididunt ut labore dolore.
          </p>
          <div className="d-flex align-center">
            <button className="get_started">Get</button>
            <a className="" href="  ">
              Play
            </a>
          </div>
        </div>
        <div className="d-flex col-sm-6 col-md-6 col-lg-6">
          <img className="ramka_img d-flex mx-auto w-100" src={Ramka} alt="" />
        </div>
      </div>
      <div className="main_site">
        <div className="text-center">
          <p className="text-success fs-5">islom ustunlari</p>
          <h3 className="fs-1 my-4">Islomning 5 farzi</h3>
          <p className="w-50 mx-auto d-flex mb-4">
            Mana shu beshta amallar Islom dinining asoslari ekan. Albatta
            bularsiz bo‘lmaydi. Bu ibodatlarni bajargan insonlarning o‘zlari
            ulardan kelayotgan manfaatni ko‘radi.
          </p>
        </div>
        <ul className="wrapper_item_islamic">
          <li className="item_islamic">
            <div className="">
              <div className="elementor-animation-float">
                <img
                  className="icon"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-10@4x.png"
                  alt=""
                />
              </div>
              <h4>Shahodat</h4>
              <p>(Imon)</p>
            </div>
          </li>
          <li className="item_islamic">
            <div className="">
              <div className="elementor-animation-float">
                <img
                  className="icon"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-17@4x.png"
                  alt=""
                />
              </div>
              <h4>Salat</h4>
              <p>(Namoz)</p>
            </div>
          </li>
          <li className="item_islamic">
            <div className="">
              <div className="elementor-animation-float">
                <img
                  className="icon"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-19@4x.png"
                  alt=""
                />
              </div>
              <h4>Zakot</h4>
              <p>(Zakot)</p>
            </div>
          </li>
          <li className="item_islamic">
            <div className="">
              <div className="elementor-animation-float">
                <img
                  className="icon"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-16@4x.png"
                  alt=""
                />
              </div>
              <h4>Ro'za</h4>
              <p>(Ro'za)</p>
            </div>
          </li>
          <li className="item_islamic">
            <div>
              <div className="elementor-animation-float">
                <img
                  className="icon"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-6@4x.png"
                  alt=""
                />
              </div>
              <h4>Haj</h4>
              <p>(Ziyorat)</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="wrapper_info_islam">
        <div className="wrapper_info_islam_left">
          <div className="d-flex me-5 mb-4 align-items-center">
            <i className="bx bxs-quote-left"></i>
            <h2 className="info_islam_title">
              Take Good Advice From People Who Pronounce It Though He Does Not
              Practice
            </h2>
          </div>
          <p className="fs-5">
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod diti tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minimsa veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip exea commodo consequat.{" "}
            </i>
          </p>
          <div className="d-flex justify-content-between w-75 ">
            <ul className="ps-0">
              <li className="d-flex align-items-center mb-2">
                <img className="mosque" src={Mosque} alt="" />
                <p className="ms-2 mb-0">Join The Islamic Community</p>{" "}
              </li>
              <li className="d-flex align-items-center mb-2">
                <img className="mosque" src={Mosque} alt="" />
                <p className="ms-2 mb-0">Beneficent The Merciful</p>{" "}
              </li>
              <li className="d-flex align-items-center mb-2">
                <img className="mosque" src={Mosque} alt="" />
                <p className="ms-2 mb-0">Quran Recitation Class</p>{" "}
              </li>
            </ul>
            <ul className="ps-0">
              <li className="d-flex align-items-center mb-2">
                <img className="mosque" src={Mosque} alt="" />
                <p className="ms-2 mb-0">Charity & Donations</p>
              </li>
              <li className="d-flex align-items-center mb-2">
                <img className="mosque" src={Mosque} alt="" />
                <p className="ms-2 mb-0">Funeral Services</p>
              </li>
              <li className="d-flex align-items-center mb-2">
                <img className="mosque" src={Mosque} alt="" />
                <p className="ms-2 mb-0">Tafseer Quran</p>
              </li>
            </ul>
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi Duis
            aute irure.
          </p>
          <button className="w-25 me-5 px-3 py-3 rounded border border-0 fs-6 read_more">
            Read More
          </button>
        </div>
        <div className="wrapper_info_islam_right">
          <img className="mosque_img" src={MosqueImg} alt="" />
        </div>
      </div>
      <div className="praying_time_box my-5 py-5">
        <div className="w-50 mx-auto text-center">
          <p>Today’s Prayer Times</p>
          <h3 className="my-4">Prayer Times In Indonesia </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="wrapper_user_pray_img d-flex justify-content-between align-items-center px-5">
          <div className="d-flex justify-content-between">
            <ul className="me-5">
              <p>Salat</p>
              <li>
                <p>Fajar</p>
                <p>Sunrise</p>
                <p>Zuhr</p>
                <p>Asr</p>
                <p>Maghrib</p>
                <p>Isha'a</p>
              </li>
            </ul>
            <ul className="me-5">
              <p>Salat</p>
              <li>
                <p>Fajar</p>
                <p>Sunrise</p>
                <p>Zuhr</p>
                <p>Asr</p>
                <p>Maghrib</p>
                <p>Isha'a</p>
              </li>
            </ul>
            <ul className="me-5">
              <p>Salat</p>
              <li>
                <p>Fajar</p>
                <p>Sunrise</p>
                <p>Zuhr</p>
                <p>Asr</p>
                <p>Maghrib</p>
                <p>Isha'a</p>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <img className="w-100" src={Userimgpray} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="w-50 mx-auto text-center">
          <p>What We Offer</p>
          <h3 className="">Our Popular Services</h3>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <ul className="wrapper_list_item_islamic">
          <li className="item_islamic quran_card ">
            <div>
              <div className="elementor-animation-float">
                <img
                  className="icon mb-2"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-14@4x.png"
                  alt=""
                />
              </div>
              <h4>Quran Learning</h4>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunta.
              </p>
            </div>
          </li>
          <li className="item_islamic quran_card ">
            <div>
              <div className="elementor-animation-float">
                <img
                  className="icon mb-2"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-12@4x.png"
                  alt=""
                />
              </div>
              <h4>Quran Learning</h4>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunta.
              </p>
            </div>
          </li>
          <li className="item_islamic quran_card ">
            <div>
              <div className="elementor-animation-float">
                <img
                  className="icon mb-2"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-KVXVRLR.png"
                  alt=""
                />
              </div>
              <h4>Quran Learning</h4>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunta.
              </p>
            </div>
          </li>
          <li className="item_islamic quran_card ">
            <div>
              <div className="elementor-animation-float">
                <img
                  className="icon mb-2"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-KVXVRLR.png"
                  alt=""
                />
              </div>
              <h4>Quran Learning</h4>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunta.
              </p>
            </div>
          </li>
          <li className="item_islamic quran_card ">
            <div>
              <div className="elementor-animation-float">
                <img
                  className="icon mb-2"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-9@4x.png"
                  alt=""
                />
              </div>
              <h4>Quran Learning</h4>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunta.
              </p>
            </div>
          </li>
          <li className="item_islamic quran_card ">
            <div>
              <div className="elementor-animation-float">
                <img
                  className="icon mb-2"
                  src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/Asset-3@4x.png"
                  alt=""
                />
              </div>
              <h4>Quran Learning</h4>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunta.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className="text-center">
          <p className="text-success fs-5">Our Blog</p>
          <h3 className="fs-1 my-4">Latest Blog & Articles</h3>
          <p className="w-50 mx-auto d-flex mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <ul className="quran_info_list d-flex list-unstyled">
          <li className="quran_info_item">
            <div>
              <img
                className="quran_img"
                src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/islamic-holy-book-on-wooden-table-creative-photo-e1634177136290.jpg"
                alt=""
              />
              <h4>Tafseer Of Quran By Mustafa Al Qazi</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel dignissim lectus. Pellentesque et scelerisque nunc...{" "}
              </p>
              <a className="text-success fw-bold" href="#">
                Read more
              </a>
            </div>
          </li>
          <li className="quran_info_item">
            <div>
              <img
                className="quran_img"
                src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/muslims-reading-from-the-quran-e1634177128924.jpg"
                alt=""
              />
              <h4>Uses Of The Quran Hadith Of Daily Life</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel dignissim lectus. Pellentesque et scelerisque nunc...{" "}
              </p>
              <a className="text-success fw-bold" href="#">
                Read more
              </a>
            </div>
          </li>
          <li className="quran_info_item">
            <div>
              <img
                className="quran_img"
                src="https://templatekit.jegtheme.com/qudrat/wp-content/uploads/sites/178/2021/10/asian-muslim-man-doing-salat-with-prostration-pose-e1634177121304.jpg"
                alt=""
              />
              <h4>
                Salat Is The Best Exercise For <br /> Body
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel dignissim lectus. Pellentesque et scelerisque nunc...{" "}
              </p>
              <a className="text-success fw-bold" href="#">
                Read more
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="help_box">
          <div className="text-center w-100 mx-auto">
            <p className="fs-5">Subscribe Us</p>
            <h3 className="fs-1 my-4">Subscribe Our Newsletter</h3>
            <p className="w-50 mx-auto d-flex mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <input type="" className="w-50 input_email" />
              <button className="subscribe_btn ms-1 px-5 py-3 rounded border border-0 fs-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
