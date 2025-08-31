import Image from "next/image";
import Link from "next/link";

export default function Home(): React.ReactElement {
  return (
    <section>
      <div>
        <Image
          src="/images/home-flash-photo.png"
          alt="home-flash-photo"
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="division-container">
        <h2 className="sm:text-[1.5rem] font-semibold text-center my-4 w-[80%] mx-auto">
          Insketch Graphics is a professional provider of Vector Conversion, Artwork Redraws, Embroidery Digitizing,
          Print Design, Web Design
        </h2>
        <div className="flex flex-col sm:flex-row py-3">
          <div className="px-6">
            <ul className="prof-list mb-6 text-[0.85rem] sm:text-[1.5rem]">
              <li>PROFESSIONAL & CREATIVE DESIGN</li>
              <li>FRIENDLY SERVICE</li>
              <li>100% CLIENTS SATISFACTION GUARANTEED</li>
              <li>24/7 SERVICE</li>
            </ul>
            <h3 className="text-[1.2rem] font-bold mb-2 sm:mb-5">More than 15 Years of Experience</h3>
            <div>
              <ul className="exp-list sm:text-[1rem] text-[0.85rem] sm:flex sm:flex-wrap  sm:gap-4">
                <li className="sm:w-[150px]">500 + Projects Completed</li>
                <li className="sm:w-[150px]">50 Satisfied Customers</li>
              </ul>
            </div>
          </div>
          <div className="w-[90%] mx-auto sm:w-[30%]">
            <Image
              src="/images/IG-logo.png"
              alt="IG-logo"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="division-container flex sm:flex-row py-3">
        <div className="basis-1/2 flex justify-center items-center">
          <div className="w-[60%] mx-auto sm:w-[50%]">
            <Image
              src="/images/about-us-icon.png"
              alt="about-us-icon"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="basis-1/2">
          <h2 className="sm:text-[1.5rem] font-semibold">ABOUT US</h2>
          <div className="pr-6 text-[0.85rem] sm:text-[1rem]">
            <p className="mb-4 text-justify">
              insketch Graphics is a professional provider of Vector Conversion, Artwork Redraws, Embroidery Digitizing,
              Print Design, Web Design, etc. We are in this field for 15 years. Our team consists of experienced and
              dedicated designers and digitizers. We deliver the artworks within challenging turnaround time as we are
              available 24 x 7. I assure that you will experience comprehensive range of custom design solutions,
              business-friendly cost, helping to achieve the best possible solutions for their clients.
            </p>
            <p className="text-justify">
              We are pioneers in providing Vector Conversion, Artwork Redraws, Embroidery Digitizing, Print Design, Web
              Design etc. Our creative and excellent artists are capable of delivering quality results within the
              stipulated turnaround time with full satisfaction of our clients.
            </p>
          </div>
        </div>
      </div>
      <div className="division-container  py-3">
        <h2 className="sm:text-[1.5rem] font-semibold text-center my-4 w-[100%] mb-10 mx-auto">SERVICES</h2>
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
        <div>
          <h3 className="bg-orange-500 text-3xl text-white mx-auto text-center w-fit px-4 rounded mb-5">Artwork</h3>
          <p className="text-[0.85rem] sm:text-[1rem] px-6 text-justify">
            Our artist team transforms raw image inputs into camera ready artwork for use by Promotional Products
            Industry, Screen Printing, Apparel, Sports Wear, etc. Our artwork capabilities include Vector Conversion,
            Creative Artworks, Logo Creation, Image Editing, Background Removes & Watermarks Removes, Mockup & Color
            Separation.
          </p>
          <ul className="flex flex-col text-[1rem] sm:text-[1.4rem] items-center px-4 m-auto my-10 w-[80%] sm:flex-row sm:justify-between sm:gap-6">
            <li className=" w-[100%]  p-2 text-center">
              <div className="border-2 border-black">
                <Image
                  src="/images/artwork-service/eagle.png"
                  alt="print-media-icon"
                  width={100}
                  height={150}
                  className="mx-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>value</div>
            </li>
            <li className=" w-[100%]  p-2 text-center">
              <div className="border-2 border-black">
                <Image
                  src="/images/artwork-service/tree.png"
                  alt="print-media-icon"
                  width={100}
                  height={150}
                  className="mx-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>value</div>
            </li>

            <li className=" w-[100%]  p-2 text-center">
              <div className="border-2 border-black">
                <Image
                  src="/images/artwork-service/caps.png"
                  alt="print-media-icon"
                  width={100}
                  height={150}
                  className="mx-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>value</div>
            </li>
            <li className=" w-[100%]  p-2 text-center">
              <div className="border-2 border-black">
                <Image
                  src="/images/artwork-service/creative.png"
                  alt="print-media-icon"
                  width={100}
                  height={150}
                  className="mx-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>value</div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="bg-orange-500 text-3xl text-white mx-auto text-center w-fit px-4 rounded mb-5">
            EMBROIDERY DIGITIZING
          </h3>
          <p className="text-[0.85rem] sm:text-[1rem] px-6 text-justify">
            Extraordinary embroidery designs on various accessories that comprise of high-quality custom embroidery
            digitizing that converts into a digital embroidery file readable by any embroidery machine. Our digitizing
            capabilities range from lettering and logos, to appliqué, sequins, 3D puff, thread colors to match your
            design, using different types of fills including satin stitch, complex fill, run stitch, triple run, motif,
            backstitch and manual stitch. Logos, monograms, emblems and any design can be digitized according to the
            customer&apos;s exact requirements.
          </p>
          <ul className="flex flex-col sm:flex-wrap sm:col-row text-[1rem] sm:text-[1.4rem]   items-center px-4 m-auto my-10  sm:flex-row sm:justify-between">
            <li className="w-[80%] sm:w-[20%] flex flex-col justify-center items-center">
              <div className="sm:text-[0.8rem] w-[100%] flex flex-col items-center justify-center overflow-hidden">
                <Image
                  src="/images/digitizing-service/regular-embroidery.png"
                  alt="print-media-icon"
                  width={100}
                  height={100}
                  className="mx-auto border-1 border-black"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="py-2 px-1 flex justify-between w-[100%] sm:text-[0.8rem]">
                  Regular Embroidery{" "}
                  <Link
                    href="#"
                    className="underline text-blue-600"
                  >
                    More..
                  </Link>
                </div>
              </div>
            </li>
            <li className="w-[80%] sm:w-[20%] flex flex-col justify-center items-center">
              <div className="sm:text-[0.8rem] w-[100%] flex flex-col items-center justify-center overflow-hidden">
                <Image
                  src="/images/digitizing-service/puff-3D-embroidery.png"
                  alt="print-media-icon"
                  width={100}
                  height={100}
                  className="mx-auto border-1 border-black"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="py-2 px-1 flex justify-between w-[100%] sm:text-[0.8rem]">
                  Puff & 3D Embroidery{" "}
                  <Link
                    href="#"
                    className="underline text-blue-600"
                  >
                    More..
                  </Link>
                </div>
              </div>
            </li>
            <li className="w-[80%] sm:w-[20%] flex flex-col justify-center items-center">
              <div className=" sm:text-[0.8rem] w-[100%] flex flex-col items-center justify-center overflow-hidden">
                <Image
                  src="/images/digitizing-service/patche-badge-embroidery.png"
                  alt="print-media-icon"
                  width={100}
                  height={100}
                  className="mx-auto border-1 border-black"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="py-2 px-1 flex justify-between w-[100%] sm:text-[0.8rem]">
                  Patches & Badges{" "}
                  <Link
                    href="#"
                    className="underline text-blue-600"
                  >
                    More..
                  </Link>
                </div>
              </div>
            </li>
            <li className="w-[80%] sm:w-[20%] flex flex-col justify-center items-center">
              <div className="sm:text-[0.8rem] w-[100%] flex flex-col items-center justify-center overflow-hidden">
                <Image
                  src="/images/digitizing-service/applique-embroidery.png"
                  alt="applique-embroidery-icon"
                  width={100}
                  height={100}
                  className="mx-auto border-1 border-black"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="py-2 px-1 flex justify-between w-[100%] sm:text-[0.8rem]">
                  Applique{" "}
                  <Link
                    href="#"
                    className="underline text-blue-600"
                  >
                    More..
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <h3 className="bg-orange-500 text-3xl text-white mx-auto text-center w-fit px-4 rounded mb-5">Print Design</h3>
        <div className="h-[100px] sm:h-[150px] bg-black m-4"></div>
        <ul className="flex flex-col sm:flex-wrap sm:col-row text-[1rem] sm:text-[1.4rem]   items-center px-4 m-auto my-10  sm:flex-row sm:justify-between">
          <li className="w-[80%] sm:w-[20%] flex flex-col justify-center items-center">
            <div className="sm:text-[0.8rem] w-[100%] flex flex-col items-center justify-center overflow-hidden">
              <Image
                src="/images/print-media-service/business-card-LH.png"
                alt="Business Card & LH"
                width={100}
                height={100}
                className="mx-auto border-1 border-black"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="py-2 px-1 flex justify-between w-[100%] sm:text-[0.8rem]">
                Business Card & LH{" "}
                <Link
                  href="#"
                  className="underline text-blue-600"
                >
                  More..
                </Link>
              </div>
            </div>
          </li>
          <li className="w-[80%] sm:w-[20%] flex flex-col justify-center items-center">
            <div className="sm:text-[0.8rem] w-[100%] flex flex-col items-center justify-center overflow-hidden">
              <Image
                src="/images/print-media-service/flyer-pamphlet-design.png"
                alt="Flyer & Pamphlet Design"
                width={100}
                height={100}
                className="mx-auto border-1 border-black"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="py-2 px-1 flex justify-between w-[100%] sm:text-[0.8rem]">
                Flyer Pamphlet Design{" "}
                <Link
                  href="#"
                  className="underline text-blue-600"
                >
                  More..
                </Link>
              </div>
            </div>
          </li>
          <li className="w-[80%] sm:w-[20%] flex flex-col justify-center items-center">
            <div className=" sm:text-[0.8rem] w-[100%] flex flex-col items-center justify-center overflow-hidden">
              <Image
                src="/images/print-media-service/menu-brochure-sticker-label-design.png"
                alt="Menu, Brochure, Sticker, Label Design"
                width={100}
                height={100}
                className="mx-auto border-1 border-black"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="py-2 px-1 flex justify-between w-[100%] sm:text-[0.8rem]">
                Menu & Brochure{" "}
                <Link
                  href="#"
                  className="underline text-blue-600"
                >
                  More..
                </Link>
              </div>
            </div>
          </li>
          <li className="w-[80%] sm:w-[20%] flex flex-col justify-center items-center">
            <div className="sm:text-[0.8rem] w-[100%] flex flex-col items-center justify-center overflow-hidden">
              <Image
                src="/images/print-media-service/forms-invoices-etc-design.png"
                alt="Forms, Invoices, etc.. Design"
                width={100}
                height={100}
                className="mx-auto border-1 border-black"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="py-2 px-1 flex justify-between w-[100%] sm:text-[0.8rem]">
                Forms, Invoices, etc..{" "}
                <Link
                  href="#"
                  className="underline text-blue-600"
                >
                  More..
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="division-container  py-3">
        <h2 className=" p-4 text-2xl sm:text-3xl bg-[url('/images/bg-contactUs.jpg')] bg-no-repeat bg-contain sm:bg-cover bg-center w-full h-[80px] sm:h-[160px]">
          Contact Us
        </h2>
        <div className="flex flex-col sm:flex-row w-[100%]">
          <div className="w-full sm:w-auto sm:flex-1">
            <h3 className="p-4 text-1xl sm:text-2xl">Contact Us</h3>
            <ul className="p-4 ">
              <li>art@V3creativesolutions.com</li>
              <li>info@V3creativesolutions.com</li>
              <li>sales@V3creativesolutions.com</li>
              <li>support@V3creativesolutions.com</li>
              <li>acounts@V3creativesolutions.com</li>
            </ul>
          </div>
          <div className="w-full sm:w-auto sm:flex-2">
            <form className="flex flex-col sm:flex-row p-3 gap-4 justify-between text-[0.75rem] mx-auto my-10 flex-wrap">
              <legend className="w-full sm:w-auto sm:flex-1">
                <label
                  htmlFor="firstName"
                  className="mb-4 block"
                >
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name*"
                    className="w-[100%] p-3 border"
                  />
                </label>
                <label
                  htmlFor="title"
                  className="mb-4 block"
                >
                  <input
                    type="text"
                    id="title"
                    placeholder="title"
                    className="w-[100%] p-3 border"
                  />
                </label>
                <label
                  htmlFor="company"
                  className="mb-4 block"
                >
                  <input
                    type="text"
                    id="company"
                    placeholder="company/position"
                    className="w-[100%] p-3 border"
                  />
                </label>
                <label
                  htmlFor="email"
                  className="mb-4 block"
                >
                  <input
                    type="email"
                    id="email"
                    placeholder="email*"
                    className="w-[100%] p-3 border"
                  />
                </label>
              </legend>
              <legend className="w-full sm:w-auto sm:flex-1">
                <label
                  htmlFor="areaOfInterest"
                  className="mb-4 block"
                >
                  <select
                    name="areaOfInterest"
                    id="areaOfInterest"
                    className="w-[100%] p-3 border"
                  >
                    <option>Select Service</option>
                    <option value={"print-media"}>Print media</option>
                    <option value={"art-work"}>Art work</option>
                  </select>
                </label>
                <label
                  htmlFor="subject"
                  className="mb-4 block"
                >
                  <input
                    type="subject"
                    id="subject"
                    placeholder="subject*"
                    className="w-[100%] p-3 border"
                  />
                </label>
                <label
                  htmlFor="file"
                  className="mb-4 block"
                >
                  <input
                    type="file"
                    id="file"
                    placeholder="No file chosen"
                    className="w-[100%] p-3 border"
                  />
                </label>
                <label
                  htmlFor="message"
                  className="mb-4 block"
                >
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={4}
                    placeholder="message*"
                    className="w-[100%] p-3 border"
                  />
                </label>
              </legend>
              <div className="w-full">
                <button
                  type="submit"
                  className="bg-gray-700 sm:ml-[51%] rounded-[4px] text-white p-3 w-[100px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="division-container  py-3">
        <h2 className=" p-4 text-2xl sm:text-3xl text-center mb-8  ">Payment Method </h2>
        <div className="sm:text-[0.8rem] w-[50%] m-auto flex flex-col relative border-gray-500 border p-4  items-center justify-center ">
          <span className="absolute text-1xl whitespace-nowrap top-[-15px] left-1/2 -translate-x-1/2 z-20 bg-white px-2">
            Pay Via PayPal
          </span>
          <Image
            src="/images/payPal-logo.svg"
            alt="PayPal-logo"
            width={100}
            height={100}
            className="mx-auto"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="m-auto w-[80%] mt-4 pt-4 mb-10">
          <p className="text-center sm:text-2xl">
            <span className="block text-center">PayPal ID:</span>
            accounts@insketchgraphics.com
          </p>
        </div>
        <div className="flex items-center  justify-center pt-10">
          <div className="flex items-center ">
            <Image
              src="/images/facebook.svg"
              alt="facebook-logo"
              width={50}
              height={50}
              className="mx-auto -2"
            />
            Facebook
          </div>
          <div className="flex items-center ">
            <Image
              src="/images/instagram.svg"
              alt="instagram-logo"
              width={50}
              height={50}
              className="mx-auto"
            />
            <span className=" text-center"> Instagram</span>
          </div>
          <div className="flex items-center ">
            <Image
              src="/images/linkedIn.svg"
              alt="linkedIn-logo"
              width={50}
              height={50}
              className="mx-auto"
            />
            <span className=" text-center"> LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  );
}
