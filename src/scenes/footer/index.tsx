import { SelectedPage } from "@/shared/types";

import facebook from "@/assets/5305154_fb_facebook_facebook logo_icon.png";
import instagram from "@/assets/5335781_camera_instagram_social media_instagram logo_icon.png";
import twitter from "@/assets/5279123_tweet_twitter_twitter logo_icon.png";
import tikotk from "@/assets/7693325_tiktok_social media_logo_apps_icon.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({}: Props) => {
  return (
    <section id="contactus" className="h-[25vh] bg-gray-600  ">
      <div className="relative mx-auto flex h-full w-4/5  max-w-screen-xl flex-col items-center justify-center">
        <div className="items-center">
          <div className=" py-4 text-center ">
            <p className="py-2 text-xl font-bold text-stone-300">
              © vintagebikes
            </p>
            <p className=" font-light text-stone-300 xxs:text-[8px]">
              Copyright Notice All text, visual content, logos, and other
              materials are owned by "vintagebikes" (hereinafter referred to as
              the "Company") and are protected under the Law No. 5846 on
              Intellectual and Artistic Works. These materials may not be
              copied, reproduced, distributed, modified, or otherwise used
              without the written permission of the Company. The Company
              reserves all rights provided by the Law on Intellectual and
              Artistic Works, and these rights will be protected in accordance
              with the law.
            </p>
          </div>
        </div>
        <div className=" flex gap-3">
          <img src={facebook} alt="" className=" w-[3vh] " />
          <img src={instagram} alt="" className=" w-[3vh] " />
          <img src={twitter} alt="" className=" w-[3vh] " />
          <img src={tikotk} alt="" className=" w-[3vh] " />
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </section>
  );
};

export default Footer;
