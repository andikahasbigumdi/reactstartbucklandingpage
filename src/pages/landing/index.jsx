import '../../style/style.css';
import Img from '../../img/logo.svg';
import Img2 from '../../img/marker.svg';
import Img3 from '../../img/box-b.png';
import Img4 from '../../img/box-c.png';
import Img5 from '../../img/box-d.png';
import Img6 from '../../img/box-e.jpg';
import Img7 from '../../img/box-f1.jpg';
import Img8 from '../../img/box-f2.jpg';
import Imgfc from '../../img/social-facebook.svg';
import Imgig from '../../img/social-instagram.svg';

const LandingPages = () => {
  return (
    <div className="App">
      {
        <nav class="navbar">
          <div class="navbar-container">
            <div class="navbar-brand">
              <a href="index.html">
                <img src={Img} alt="Starbucks" />
              </a>
            </div>
            <ul class="navbar-nav-left">
              <li>
                <a href="#navmenu">Menu</a>
              </li>
              <li>
                <a href="#navreward">Rewards</a>
              </li>
              <li>
                <a href="#navgifcards">Gift Cards</a>
              </li>
            </ul>
            <ul class="navbar-nav-right">
              <li>
                <a href="#coba">
                  <img src={Img2} alt="" />
                  <span>Find a store</span>
                </a>
              </li>
              <li>
                <button class="btn btn-dark-outline">Sign in</button>
              </li>
              <li>
                <button class="btn btn-dark">Join now</button>
              </li>
            </ul>
            <button type="button" class="hamburger" id="menu-btn">
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>
        </nav>
      }
      <section class="box box-a bg-primary text-center py-md">
        <div class="box-inner">
          <h2 class="text-xl">Jinggle All the way to free favorites</h2>
          <p class="text-md">
            Join Startbucks Reward For Delicious deals & exclusive offers.
            <a href="#"> Learn more</a>
          </p>
        </div>
      </section>

      <section class="box box-b bg-secondary grid-col-2" id="navmenu">
        <img src={Img3} alt="Image Box B" class="img-wid" />
        <div class="box-text">
          <h2 class="text-xl">New to the nice list</h2>
          <p class="text-md">For a nondairy twist on a holiday cookie classic, try the new Iced Sugar Cookie Almondmilk Latte.</p>
          <a href="#" class="btn btn-light-outline">
            {' '}
            Order Now{' '}
          </a>
        </div>
      </section>

      <section class="box box-c bg-secondary grid-col-2">
        <img src={Img4} alt="Image Box B" class="img-wid" />
        <div class="box-text">
          <h2 class="text-xl">New to the nice list</h2>
          <p class="text-md">Treat yourself to a festive Sugar Plum Cheese Danish with a nicely spiced sugar-plum spread.</p>
          <a href="#" class="btn btn-light-outline">
            {' '}
            Order Now{' '}
          </a>
        </div>
      </section>

      <section class="box box-d bg-primary grid-col-2 grid-reverse" id="navreward">
        <img src={Img5} alt="Image Box B" class="img-wid" />
        <div class="box-text">
          <h2 class="text-xl">Natal and New Year Moment</h2>
          <p class="text-md">This elegant dark roast returns, showcasing flavors from some of the world’s major coffee-growing regions.</p>
          <a href="#" class="btn btn-light-outline">
            {' '}
            Order Now{' '}
          </a>
        </div>
      </section>

      <section class="box box-e bg-secondary grid-col-2">
        <img src={Img6} alt="Image Box B" class="img-wid" />
        <div class="box-text">
          <h2 class="text-md">Fighting hunger this holiday</h2>
          <p class="text-sm">Hunger is affecting millions of people across America this holiday season. Join us in our commitment to hunger relief and help feed neighbors in need.</p>
          <a href="#" class="btn btn-light-outline">
            {' '}
            Order Now{' '}
          </a>
        </div>
      </section>

      <section class="box box-f grid-col-2 bg-primary" id="navgifcards">
        <div class="divf1">
          <img src={Img7} alt="" />
          <div class="bg-extra py-lg">
            <div class="box-text">
              <h2 class="text-md">Let the holiday cheer come to you</h2>
              <p class="text-sm">Make the moment merry. Order Starbucks® holiday favorites on Uber Eats.*</p>
              <a href="#" class="btn btn-dark-outline">
                Order Now
              </a>
            </div>
          </div>
        </div>
        <div class="divf2">
          <img src={Img8} alt="" />
          <div class="bg-extra py-lg">
            <div class="box-text">
              <h2 class="text-md">Let the holiday cheer come to you</h2>
              <p class="text-sm">Make the moment merry. Order Starbucks® holiday favorites on Uber Eats.*</p>
              <a href="#" class="btn btn-dark-outline">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <footer class="footer">
        <div class="footer-container">
          <div class="sosial">
            <a href="https://facebook.com">
              <img src={Imgfc} alt="" />
            </a>
            <a href="https://instagram.com">
              <img src={Imgig} alt="" />
            </a>
          </div>
          <p>2021 Starbuck Coffe Comapany . All Right Reserved</p>
          <div class="penutup">
            <a href="https://www.instagram.com/andika.hasbigumdi/" target="_blank">
              Develope by Andika Hasbigumdi{' '}
            </a>
          </div>
        </div>
      </footer>
      <script src="script.js"></script>
    </div>
  );
};
export default LandingPages;
