import Image from "next/image";
import Link from "next/link";

const About = (): React.ReactElement => {
  return (
    <section>
      <div className="mb-10">
        <Image
          src="/images/about/embroidery-digitizing-banner.png"
          alt="embroidery-digitizing-banner"
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <ul className="flex flex-row flex-wrap gap-2 text-[1rem] sm:text-[1.4rem] justify-between items-center w-[80%] m-auto mb-10">
          <li className="text-center  inline-block">
            <Link
              href={""}
              className="text-center "
            >
              <span className="text-center block mx-auto">
                <Image
                  src="/images/artwork-icon.png"
                  alt="artwork-icon"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
              </span>
              Artwork
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-center "
            >
              <span className="block mx-auto">
                <Image
                  src="/images/digitizing-icon.png"
                  alt="digitizing-icon"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
              </span>
              Digitizing
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="text-center whitespace-nowrap"
            >
              <span className="block mx-auto ">
                <Image
                  src="/images/print-media-icon.png"
                  alt="print-media-icon"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
              </span>
              Print Design
            </Link>
          </li>
        </ul>
      </div>
      <div className="about-content-box p-4">
        <h2 className="border-b-2 mb-10 border-b-orange-500 text-center text-4xl sm:text-6xl">
          <span className="bg-white relative top-5 p-2 ">ARTWORK</span>
        </h2>
        <h3 className="bg-orange-500 text-3xl text-white mx-auto text-center w-fit px-4 rounded mb-5">
          Vector Conversions{" "}
        </h3>
        <div className="flex flex-col sm:flex-row  gap-6 ">
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/1 - Gradient Artwork.png"
              alt="Gradient-Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/2 - Gradient Artwork.png"
              alt="Multi-Color-Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  gap-6 ">
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/3 - Gradient Artwork.png"
              alt="Black-White-Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/4 - Gradient Artwork.png"
              alt="Gradient Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="about-content-box p-4">
        <h3 className="bg-orange-500 text-3xl text-white mx-auto text-center w-fit px-4 rounded mb-5">
          Creative Work{" "}
        </h3>
        <div className="flex flex-col sm:flex-row  gap-6 ">
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/creative-artwork/1 - Creative Mesh Artwork.png"
              alt="Gradient-Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/creative-artwork/4 - Logo Creation Artwork.png"
              alt="Gradient-Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="about-content-box p-4">
        <h3 className="bg-orange-500 text-3xl text-white mx-auto text-center w-fit px-4 rounded mb-5">
          Image Edit Work{" "}
        </h3>
        <div className="flex flex-col sm:flex-row  gap-6 ">
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/image-edit-artwork/1 - Background Remove.png"
              alt="Background Remove"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/image-edit-artwork/2 - Background Remove.png"
              alt="Background Remove"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="about-content-box p-4">
        <h3 className="bg-orange-500 text-3xl text-white mx-auto text-center w-fit px-4 rounded mb-5">
          Image Edit Work{" "}
        </h3>
        <div className="flex flex-col sm:flex-row  gap-6 ">
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/mockup-artwork/1 - Mockup Artwork.png"
              alt="Background Remove"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/mockup-artwork/2 - Mockup Artwork.png"
              alt="Background Remove"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="about-content-box p-4">
        <h2 className="border-b-2 mb-10 border-b-orange-500 text-center text-4xl sm:text-6xl">
          <span className="bg-white relative top-5 p-2 ">Digitizing</span>
        </h2>

        <div className="flex flex-col sm:flex-row  gap-6 ">
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/embroidery-digitizing-before-after/REGULAR EMBROIDERY/1 - Regular Embroidery.png"
              alt="REGULAR EMBROIDERY"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/embroidery-digitizing-before-after/REGULAR EMBROIDERY/2 - Regular Embroidery.png"
              alt="REGULAR EMBROIDERY"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  gap-6 ">
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/embroidery-digitizing-before-after/REGULAR EMBROIDERY/3 - Regular Embroidery.png"
              alt="REGULAR EMBROIDERY"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/embroidery-digitizing-before-after/REGULAR EMBROIDERY/4 - Regular Embroidery.png"
              alt="REGULAR EMBROIDERY"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

{
  /* 
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/creative-artwork/5 - Logo Creation Artwork.png"
              alt="Gradient-Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/creative-artwork/6 - Logo Creation Artwork.png"
              alt="Gradient-Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div> */
}

{
  /* <
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/5 - Gradient Artwork.png"
              alt="5 - Gradient Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/6 - Multi Color Artwork.png"
              alt="Multi Color Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/7 - Multi Color Artwork.png"
              alt="Multi Color Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/8 - Multi Color Artwork.png"
              alt="Multi Color Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/9 - Black & White Artwork.png"
              alt="Multi Color Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/10 - Black & White Artwork.png"
              alt="Black & White Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sm:w-1/2 sm:pr-4 flex flex-row gap-4 ">
            <Image
              src="/images/about/vector-conversions/11 - Black & White Artwork.png"
              alt="Black & White Artwork"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div> */
}
