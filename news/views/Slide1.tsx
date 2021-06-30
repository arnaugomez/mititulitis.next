import Image from "next/image";
import sphereImg from "../../public/assets/imgs/3d-sphere.png";
import helixImg from "../../public/assets/imgs/3d-helix.png";
import { Slide } from "pure-react-carousel";

const Slide1 = (): JSX.Element => (
  <article className="h-52 rounded-xl border border-wine-red bg-wine-red-100 py-4 px-5 flex">
    <div className="flex-1">
      <h2 className="text-wine-red-800 mt-0">Que nada te pare</h2>
      <p className="">
        Sacarse un título, aprender un idioma, tocar un instrumento... aquí
        encontrarás los recursos que necesitas para conseguirlo, y la comunidad
        para seguir motivado cada día.
      </p>
    </div>
    <div className="flex-none w-48 relative">
      <div className="absolute left-0 w-20 animation-float--delay right-0 top-2">
        <Image src={sphereImg} alt="" />
      </div>
      <div className="absolute right-0 w-36 animation-float right-0 top-6">
        <Image src={helixImg} alt="" />
      </div>
    </div>
  </article>
);

export default Slide1;
