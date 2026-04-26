import "./VicePrincipal.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function VicePrincipal() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="vp-wrapper">
        <div className="vp-container">
          <div className="section-title">From Vice Principal's Desk</div>

          <div className="vp-card">

            {/* Profile */}
            <div className="vp-profile">
              <div className="vp-photo-placeholder">VP Photo</div>
              <div className="vp-info">
                <h3>Mrs. Vedangi Kulkarni</h3>
                <p>M. Com., B. Ed., M. Phil</p>
              </div>
            </div>

            {/* Message */}
            <div className="vp-message">
              <p>Dear Students, Parents and My colleagues:</p>

              <p>
                I welcome you all to one of the oldest institutes in Mulund. We started the Junior
                college in the year of 2008 and are part of a fifty five year old educational
                institute.
              </p>

              <p>
                Since inception, the institute has strived to become a renowned center of quality
                education. We incessantly try for overall development of each student by providing
                best possible education facilities like well-equipped laboratories, fully qualified
                and experienced faculty members along with a developed gymnasium and a huge ground.
                We have grown from ninety student first year batch to nine hundred and thirty
                students in its fourth year. The growth is not only in numbers but in quality as well.
              </p>

              <p>
                Here are a few of the achievements in various areas in the short span of first
                four years of the college:
              </p>

              <ol>
                <li>
                  Two of our students have received Inspire Scholarship from Central government
                  amounting to Rs. Eighty thousand per year for five years after 12th Standard
                  for further studies in Basic Science.
                </li>
                <li>
                  Mono acting – From second year of the inception we have won state level Mono
                  Acting competition for three consecutive years.
                </li>
                <li>
                  Students participated in the science exhibition and were selected for district
                  level presentation.
                </li>
                <li>
                  One of our students has won Mulund Marathon.
                </li>
                <li>
                  College Kho-Kho team was selected for the district level tournament.
                </li>
              </ol>

              <p>
                We now have two basic streams – Science and Commerce and have various sub streams
                like General Science, Bi-focal Science with Computer science and Electronics,
                Biology with IT, General Commerce and Commerce with IT. From the academic year
                2012-13 we plan to start Bi-focal Science with Electrical maintenance also. As
                mentioned above, the idea is to create a renowned center of quality education
                in Mulund.
              </p>

              <div className="vp-quote">
                We strongly believe - Take up one idea. Make that one idea your life - think of
                it, dream of it, live on that idea. Let the brain, muscles, nerves, every part
                of your body, be full of that idea, and just leave every other idea alone. This
                is the way to success. – Swami Vivekanand
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="news-bar">
        <strong>WMJC News:</strong> WMJC Office, New Telephone Number - 52215-69961 - PrJC 😊
      </div>
      <Footer />
    </>
  );
}

export default VicePrincipal;