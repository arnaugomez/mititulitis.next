import Image from "next/image";
import thorusImg from "../../public/assets/imgs/3d-thorus.png";
import coinImg from "../../public/assets/imgs/3d-coin.png";

const Slide2 = (): JSX.Element => (
  <article className="h-52 rounded-xl border border-straw-700 bg-straw-100 py-4 px-5 flex">
    <div className="flex-1">
      <h2 className="text-straw-900 mt-0">Premium de por vida</h2>
      <p>
        Los primeros 10.000 usuarios en registrarse tendrán una cuenta Premium
        para toda la vida. ¡Disfruta de la promoción e invita a tus amigos!
      </p>
    </div>
    <div className="flex-none w-48 relative">
      <div className="absolute right-0 w-36 animation-float right-0 top-6">
        <Image src={thorusImg} alt="" />
      </div>
      <div className="absolute left-0 w-20 animation-float--delay right-2 top-2">
        <Image src={coinImg} alt="" />
      </div>
    </div>
  </article>
);

export default Slide2;
