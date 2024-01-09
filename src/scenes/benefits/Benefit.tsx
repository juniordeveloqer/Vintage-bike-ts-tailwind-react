import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  image: string;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
  customClasses?: string;
};

const Benefit = ({
  image,
  title,
  description,
  setSelectedPage,
  customClasses,
}: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className={`mt-5 rounded-md border-2 border-gray-800  text-center ${customClasses}`}
    >
      <img src={image} alt={title} className="mx-auto mb-3 w-3/4 " />

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
