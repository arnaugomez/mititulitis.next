import Image from "next/image";
import helixImg from "../../public/assets/imgs/3d-helix.png";
import sphereImg from "../../public/assets/imgs/3d-sphere.png";
import coinImg from "../../public/assets/imgs/3d-coin.png";
import thorusImg from "../../public/assets/imgs/3d-thorus.png";
import { useEmblaCarousel } from "embla-carousel/react";
import { useEffect, useState } from "react";

const Banner = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    let timeOut;
    if (emblaApi) {
      timeOut = setTimeout(() => {
        emblaApi.scrollNext();
        setPage(emblaApi.selectedScrollSnap());
      }, 6000);
    }
    return () => clearTimeout(timeOut);
  }, [emblaApi, page, setPage]);

  return (
    <div className="max-w-full overflow-hidden" ref={emblaRef}>
      <section className="w-full h-52 flex items-stretch px-4">
        <article className="embla__slide rounded-xl border border-wine-red bg-wine-red-100 relative mr-4">
          <div className="absolute inset-0 py-4 px-5 flex">
            <div className="flex-1">
              <h2 className="text-wine-red-800 mt-0">Que nada te pare</h2>
              <p className="">
                Sacarse un título, aprender un idioma, tocar un instrumento...
                aquí encontrarás los recursos que necesitas para conseguirlo, y
                la comunidad para seguir motivado cada día.
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
          </div>
        </article>
        <article className="embla__slide rounded-xl border border-straw-700 bg-straw-100 py-4 px-5 flex mr-4">
          <div className="flex-1">
            <h2 className="text-straw-900 mt-0">Premium de por vida</h2>
            <p>
              Los primeros 10.000 usuarios en registrarse tendrán una cuenta
              Premium para toda la vida. ¡Disfruta de la promoción e invita a
              tus amigos!
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
      </section>
    </div>
  );
};

export default Banner;
