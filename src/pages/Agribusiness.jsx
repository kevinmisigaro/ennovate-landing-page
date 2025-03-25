import NavBar2 from "./../components/NavBar2";
import Img5 from "../assets/blogs/ESEA Norad_All ESOs.png";
import Farm1 from "../assets/agri/shot-of-an-attractive-young-female-farmer-working.jpg";

function Agribusiness() {
  return (
    <div className="bg-black w-full h-full">
      <NavBar2 />
      <div className="relative">
        <div className="absolute bg-gradient-to-b from-transparent to-[#000000] h-full w-full"></div>
        <img src={Img5} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="bg-white">
        <div className="px-5 md:px-10">
          <h3 className="font-bold text-2xl">Why should you take part?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p>
                The Innovate for Food Security Program is a year-long intense
                practical program guiding finalists and recent graduates to
                start and build agri-businesses aimed at improving food security
                in Uganda.
              </p>
              <p>
                42 participants from different disciplines (Agriculture,
                Technology, Engineering, Food science etc.) at your university
                will be guided through design thinking practices to deeply
                understand challenges and opportunities that lie along the
                agricultural value chain
              </p>
            </div>
            <div>
              <p>Through the program, you will:</p>
              <ul className="list-disc list-inside">
                <li>
                  Develop a deeper understanding of Uganda&apos;s food systems.
                </li>
                <li>
                  Design, prototype, and test new approaches to food production,
                  distribution, and access.
                </li>
                <li>Learn how to start and grow your own agri-business.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-10">
          <h3 className="font-bold text-2xl">Program Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <h5 className="font-bold text-xl">Ideathons</h5>
              <p>Brainstorm and design solutions in interdisciplinary teams.</p>
            </div>
            <div>
              <h5 className="font-bold text-xl">Build-It Bootcamps</h5>
              <p>Develop your Minimum Viable Product with expert guidance.</p>
            </div>
            <div>
              <h5 className="font-bold text-xl">Mentorship</h5>
              <p>
                Receive one-on-one support from a seasoned mentor to grow your
                business.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: `url('${Farm1}')`,
          }}
          className="bg-cover bg-no-repeat h-[30vh]"
        />

        <div className="px-5 md:px-10">
          <h3 className="font-bold text-2xl">Why should you take part?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h4 className="font-bold">Who can participate in the program?</h4>
              <p>
                This program is open to finalists and recent graduates from Gulu
                University, Makerere University, and Mbarara University of
                Science and Technology. You must be passionate about food
                systems and have a strong desire to start and grow a business
                that tackles challenges along the agricultural value chain.
              </p>
            </div>
            <div>
              <h4 className="font-bold">
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
                <h4 className="font-bold">Do I need a business Idea before joining?</h4>
                <p>
                Not necessarily! While having a specific idea can be helpful, it&apos;s not a requirement. Your passion for food systems and entrepreneurial drive are more important. The program will equip you with the tools and guidance to develop and refine your business concept.
                </p>
            </div>
            <div>
                <h4 className="font-bold">Do I need to pay to be part of the program? Will I be paid to participate??</h4>
                <p>
                No, participation in the program is free! You won’t receive any financial compensation, but the rewards in terms of learning, growth, and potential impact are priceless.
                </p>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Agribusiness;
