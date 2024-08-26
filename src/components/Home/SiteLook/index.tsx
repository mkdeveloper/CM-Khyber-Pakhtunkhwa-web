import Image from 'next/image';
import GenAi from '../../../../public/kpk/GenAI.jpg';

const SiteLook = () => {
  return (
    <div className="bg-white">
      {/* <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#1eb2a6]/10 "> */}
      <div
        className={`mx-auto max-w-3xl flex h-full w-full justify-center items-center  max-md:max-w-full max-md:flex-wrap px-6 `}
      >
        <Image
          src={GenAi}
          alt=""
          className="w-full object-cover rounded-3xl "
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default SiteLook;
