import NavBar2 from "./../components/NavBar2";
import Farm1 from "../assets/agri/shot-of-an-attractive-young-female-farmer-working.jpg";
import hero from "../assets/agri/agriculture-concept-2023-11-27-05-10-39-utc.jpg";
import Ennovate from "../assets/agri/ennovate-logo.png";
import Norec from "../assets/agri/norec-logo.png";
import Startup from "../assets/agri/startup-logo.png";
import Prog1 from "../assets/agri/ghj.jpg";
import Prog2 from "../assets/agri/portrait-of-a-smiling-man-working-in-a-flower-gree-2023-11-27-05-24-31-utc.jpg";
import Prog3 from "../assets/agri/smiling-african-american-student-with-backpacks-h-2023-11-27-05-26-02-utc.jpg";

function Agribusiness() {
  return (
    <div className="bg-black w-full h-full">
      <NavBar2 />
      <div className="relative h-[85vh] w-full">
        {/* Background Image */}
        <img
          src={hero}
          alt=""
          className="h-full w-full object-cover absolute inset-0"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
          <div className="flex flex-col gap-5 justify-center">
            <h3 className="text-white text-2xl md:text-5xl font-bold max-w-2xl md:text-center">
              Learn How To Start And Grow Your Own Agri-business
            </h3>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSetkxcvjsKbtF2LrfjuqbFnSZMLkmaHd7D86TAha-ql74DO0A/viewform"
              className="text-white bg-[#005d42] border-[#005d42] px-6 py-3 my-4 max-w-fit ml-5"
              target="_blank"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-10">
        <div className="px-5 md:px-10 py-8">
          <h3 className="font-bold text-2xl">Why should you take part?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <div>
              <p>
                The Innovate for Food Security Program is a year-long intense
                practical program guiding finalists and recent graduates to
                start and build agri-businesses aimed at improving food security
                in Tanzania.
              </p>
              <p>
                42 participants from different disciplines (Agriculture,
                Technology, Engineering, Food science etc.) at your university
                will be guided through design thinking practices to deeply
                understand challenges and opportunities that lie along the
                agricultural value chain.
              </p>
            </div>
            <div>
              <p>Through the program, you will:</p>
              <ul className="list-disc list-inside mb-6">
                <li>
                  Develop a deeper understanding of Tanzania&apos;s food systems.
                </li>
                <li>
                  Design, prototype, and test new approaches to food production,
                  distribution, and access.
                </li>
                <li>Learn how to start and grow your own agri-business.</li>
              </ul>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSetkxcvjsKbtF2LrfjuqbFnSZMLkmaHd7D86TAha-ql74DO0A/viewform"
                className="text-white bg-[#005d42] border-[#005d42] px-6 py-3 my-4 max-w-fit"
                target="_blank"
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-10 pt-3 pb-10">
          <h3 className="font-bold text-2xl">Program Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <div>
              <img src={Prog1} alt="" className="w-[20vw]" />
              <h5 className="font-bold text-xl pt-3">Ideathons</h5>
              <p>Brainstorm and design solutions in interdisciplinary teams.</p>
            </div>
            <div>
              <img src={Prog2} alt="" className="w-[20vw]" />
              <h5 className="font-bold text-xl pt-3">Build-It Bootcamps</h5>
              <p>Develop your Minimum Viable Product with expert guidance.</p>
            </div>
            <div>
              <img src={Prog3} alt="" className="w-[20vw]" />
              <h5 className="font-bold text-xl pt-3">Mentorship</h5>
              <p>
                Receive one-on-one support from a seasoned mentor to grow your
                business.
              </p>
            </div>
          </div>
        </div>

        <img src={Farm1} alt="" className="h-[50vh] w-full object-cover" />

        <div className="px-5 md:px-10 py-10">
          <h3 className="font-bold text-3xl pb-8">Why should you take part?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-xl">
                Who can participate in the program?
              </h4>
              <p>
                This program is open to finalists and recent graduates from Muhimbili University, Dar es Salaam Tumaini University, Sokoine University of Agriculture. You must be passionate about food
                systems and have a strong desire to start and grow a business
                that tackles challenges along the agricultural value chain.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl">
                Will there be any start-up capital given to teams that
                participate?
              </h4>
              <p>
                Will there be any start-up capital given to teams that
                participate? While the program doesn&apos;t directly offer
                start-up capital, it equips you with the knowledge and skills
                needed to attract funding and investment in the future.
                Additional resources and funding opportunities might be explored
                during the program.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl">
                Do I need a business Idea before joining?
              </h4>
              <p>
                Not necessarily! While having a specific idea can be helpful,
                it&apos;s not a requirement. Your passion for food systems and
                entrepreneurial drive are more important. The program will equip
                you with the tools and guidance to develop and refine your
                business concept.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl">
                Do I need to pay to be part of the program? Will I be paid to
                participate?
              </h4>
              <p>
                No, participation in the program is free! You won&apos;t receive
                any financial compensation, but the rewards in terms of
                learning, growth, and potential impact are priceless.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl">
                Can I join the program with a team I am working with?
              </h4>
              <p>
                The initial selection process for the Ideathon phase focuses on
                individual potential and working with individuals from other
                disciplines to ideate. However, if you’re selected for the
                Build-It phase (where teams are formed), you may have the
                opportunity to collaborate with fellow participants based on
                shared interests and skills.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl">
                What is the expected time commitment for the program?
              </h4>
              <p>
                While exact dates and formats may differ, you’ll need to be
                physically present at your university during the Ideathon and
                Build-It phases. Expect dedicated time for activities,
                workshops, and team collaboration. Remember, these are just some
                of the most frequently asked questions. If you have any further
                inquiries, don’t hesitate to reach out!
                g.geria@starthubafrica.org
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl">
                If selected for the Build-It phase, can my team attend?
              </h4>
              <p>
                Unfortunately, no. The Build-It phase involves only 10
                participants chosen from the Ideathon phase. This allows for
                focused mentorship and personalized guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-10 py-10">
          <h3 className="font-bold text-2xl pb-3">Implementing Partners</h3>
          <p>
            Innovate for Foood Security is implemented by StartHub Africa in
            partnership with the Ennovate Venture and <a className="hover:underline cursor-pointer" href="https://www.norec.no/en/home/" target="_blank">Norwegian Agency for
            Exchange Cooperation</a>
          </p>

          <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            <img src={Ennovate} className="w-[200px]" />
            <img src={Norec} className="w-[200px]" />
            <img src={Startup} className="w-[90px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agribusiness;