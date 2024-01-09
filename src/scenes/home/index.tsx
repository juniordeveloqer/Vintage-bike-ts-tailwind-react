import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMedia";
import HomePageText from "@/assets/HomePageText.png";
import SponsorDucati from "@/assets/SponsorDucati.png";
import SponsorHarley from "@/assets/SponsorHarley.png";
import SponsorNissan from "@/assets/SponsorNissan.png";
import sacura from "@/assets/sacura.png";
import Sbmw from "@/assets/sbmw.png";
import chain from "@/assets/chai.png";

import syamaha from "@/assets/syamaha.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md-pb-0  gap-16  bg-slate-200 py-10  md:h-full "
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="relative  mx-auto max-w-screen-xl items-center justify-center md:mx-10 md:flex md:h-5/6 xl:mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 xxs:mt-20  sm:mt-32  md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative md:pl-16 xl:pl-0">
              <div className="relative ">
                <div className="before:-top-30  before:absolute before:-left-20  before:content-evolvetext   xxs:hidden md:block xl:block">
                  <img alt="homepage-text xxs:  " src={HomePageText} />
                </div>
              </div>

              <p className="mt-2 text-sm xxs:mt-0 xs:mt-2 ">
                Since first opening in 2012, Steel Vintage motorbikes has become
                the ultimate destination for rare, classic and Vintage
                motorbikes. Operating from our workshop and showroom in Berlin,
                Germany; quality and craftsmanship of handmade steel motorbikes.
              </p>
            </div>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start md:pl-16 xl:pl-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Buy Now
            </ActionButton>
            <AnchorLink
              className=" text-sm font-bold text-primary-500 hover:text-orange-300"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="z-[2] flex basis-3/5 justify-center 
              md:z-10 md:ml-40 md:mt-24  md:justify-items-end"
        >
          <img alt="HomePageGrapich" src={chain} className="mt-10" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="relative z-10 pt-28">
          <div className="s  z-10 mx-auto w-full  border border-black bg-gray-400  py-5 shadow-sm ">
            <div className="mx-auto max-w-screen-xl ">
              <div className="flex items-center justify-between gap-8  ">
                <img alt="Harley-sponsor" src={Sbmw} className="h-20"></img>
                <img alt="-" src={sacura} className="h-20"></img>
                <img alt="-" src={syamaha} className="h-20"></img>
                <img alt="-" src={SponsorHarley} className="h-20"></img>
                <img
                  alt="Nissan-sponsor"
                  src={SponsorNissan}
                  className="h-20"
                ></img>
                <img
                  alt="ducati-sponsor"
                  src={SponsorDucati}
                  className="h-20"
                ></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
