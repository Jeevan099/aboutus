import "./styles.css";

export default function App() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <div classNameName="App">
      {/* { <nav>
        <div>
          <a href="mailto: karan.kumar@ecerasystem.com">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/email-letter-envelope-message-38065.png"
              alt="G-mail"
            />
            <span
              style={{
                color: "white",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              karan.kumar@ecerasystem.com
            </span>
          </a>
          <a href="tel: +91 123456789">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/telephone-41-117249.png"
              alt=""
            />
            <span
              style={{
                color: "white",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              +91 123456789
            </span>
          </a>
        </div>
        <div>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/instagram-1868978-1583142.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-3771014-3147631.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
              alt=""
            />
          </a>
        </div>
      </nav> } */}
      { <header id="head">
        <a href={{}}>
          <span>
            <img
              src=""
              alt="Logo"
            />
          </span>
          <span id="c_name">Good Green Care Center</span>
        </a>
        <ul>
          <li>
            <a href={{}}>Home</a>
          </li>
          <li>
            <a href={{}} onMouseOver={gok} onMouseLeave={kog}>
              Register/Sign In
            </a>
            <div id="brr"></div>
          </li>
          <li>
            <a href={{}} onMouseOver={fok} onMouseLeave={kof}>
              Services
            </a>
            <div id="arr"></div>
          </li>
          <li>
            <a href={{}}>Contact Us</a>
          </li>
        </ul>
      </header> }
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Jimmy's Rehabilitation Center</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p>
            " Welcome to [Rehabilitation Center Name], a leading facility dedicated to helping individuals achieve lasting recovery and regain control of their lives. Our center is committed to providing compassionate, evidence-based care to those facing challenges related to addiction, mental health, and physical rehabilitation. "
          </p>
        </div>

        <div id="first" className="reveal">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt=""
          />
          <div>
            <h1>We Offer Innovative Solution for the problems</h1>
            <p>
            At [Rehabilitation Center Name], we believe that every person deserves
             a chance to rebuild their life in a safe and supportive environment.
              Our team of experienced professionals, including medical experts,
               therapists, and counselors, works together to create personalized
                treatment plans tailored to the unique needs of each individual.
            </p>
            <h2>Our Key Services</h2>
                    <ul>
                      <li>Evidence-Based Therapies</li>
                      <li>Personalized Treatment Plans</li>
                      <li>Comprehensive Care Approach</li>
                      <li>Family Involvement and Support</li>
                      <li>Aftercare and Continuous Support</li>
                    </ul>
          </div>
        </div>

        <div id="fourth" className="reveal">
          <h2 style={{ color: "white" }}>HOLISTIC APPROACH</h2>
          <h1 style={{ color: "white" }}>
          Comprehensive Care Tailored to Your Recovery Journey
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt=" "
              />
              <p>THERAPEUTIC INTERVENTIONS</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt=" "
              />
              <p>INDIVIDUALIZED TREATMENT PLANS</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt=" "
              />
              <p>SUPPORTIVE ENVIRONMENT</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt=" "
              />
              <p>FAMILY COUNSELING AND INVOLVEMENT</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt=" "
              />
              <p>ONGOING AFTERCARE</p>
            </div>
          </div>
        </div>

        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>OUR SERVICES</h1>
              <h2>Comprehensive Care Team</h2>
              <p>
              We offer a dedicated team of skilled professionals across various domains 
              to support every aspect of your recovery. From experienced therapists
               to compassionate counselors, we ensure you receive personalized 
               and continuous care throughout your journey to wellness.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR REACH </h1>
              <h2>Global Expertise</h2>
              <p>
              With partnerships and connections across 12 countries, our 
              reach and expertise continue to expand. Our commitment to 
              excellence has earned us the trust of numerous clients 
              worldwide, many of whom return to us for continued support 
              and recommend our services to others. We are proud to serve
               a diverse range of individuals and organizations in need of 
               comprehensive rehabilitation solutions.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR MISSION</h1>
              <h2>High-Quality Care at Accessible Costs</h2>
              <p>
              Our guiding principle is simple: deliver the highest quality
               of care at a cost that is accessible to everyone. We aim to
                fill the gap in rehabilitation services, especially for 
                those who have found traditional options either too 
                expensive or inadequate. Our professionals are highly 
                skilled and experienced, providing care that matches 
                global standards while remaining affordable.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR ADVANTAGES</h1>
              <h2>Innovative Use of Technology and Expertise</h2>
              <p>
              We bring the best of both worlds—cutting-edge technology and 
              human touch—to your recovery process. Whether you are in our
               facility or at home, we ensure seamless communication and 
               care delivery through advanced infrastructure, up-to-date
                technology, and a strong support system. Our approach makes 
                the recovery experience as effective and comforting as 
                possible, no matter where you are.

              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3>
          <h1 style={{ textAlign: "center" }}>
            Driving Client Results Utilizing New Innovation Points of view
          </h1>
          <div id="third_cards">
            <div>
              <h2>Tailored Treatment Plans with Innovative Approaches</h2>
              <p>
              We deliver personalized care by utilizing the latest therapeutic 
              techniques and evidence-based practices. Our holistic approach 
              ensures that each client receives end-to-end support, from initial
               assessment through to long-term recovery.
              </p>
            </div>
            <div>
              <h2>Staying Ahead with Cutting-Edge Care</h2>
              <p>
              We constantly update our methods to incorporate the most effective
               treatments available. By staying at the forefront of rehabilitation
                science, we future-proof your recovery journey, ensuring that you
                 benefit from the most advanced care.
              </p>
            </div>
            <div>
              <h2>Commitment to Success in Every Recovery</h2>
              <p>
              Our experienced team is dedicated to achieving successful outcomes
               for every client. We meticulously plan and execute each treatment
                program, providing the certainty that your recovery is in expert 
                hands.
              </p>
            </div>
          </div>
        </div>

        <div id="fifth" className="reveal">
          <h1>GOOD GREEN CARE CENTER</h1>
          <div>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                alt=" "
              />
              <span>
                <h3>Address</h3>
                <p>4813 Woodland Ave Royal Oak, Michigan - 48073, USA</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt=" "
              />
              <span>
                <h3>Phone</h3>
                <p>+1 248 672 1972</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt=" "
              />
              <span>
                <h3>E-mail</h3>
                <p>Sales@Ecerasystem.com</p>
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* <footer
        style={{ display: "flex", "justify-content": "space-around" }}
        id="foote"
      >
        <ul>
          <li>
            <a href={{}}>About Us</a>
          </li>
          <li>
            <a href={{}}>Carrers</a>
          </li>
          <li>
            <a href={{}}>Blogs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={{}}>Training</a>
          </li>
          <li>
            <a href={{}}>FAQs</a>
          </li>
        </ul>
        <div>
          <h2>Conatact Us</h2>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
                alt=" "
              />
            </a>
          </span>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
                alt=" "
              />
            </a>
          </span>
          <a
            href="tel: 123456789"
            style={{
              color: "white",
              fontSize: "1.3em",
              letterSpacing: "2px",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bolder",
              marginTop: "20px"
            }}
          >
            Telephone No: +91 232345553
          </a>
        </div>
      </footer> */}
      <p
        style={{
          color: "white",
          textAlign: "center",
          background: "rgb(27, 27, 27)",
          padding: "10px 0px"
        }}
      >
        &copy;Copyright <b>Sharon revival foundation</b>. All Rights Reserved
      </p>
    </div>
  );
}
