import Image from "next/image";
import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";
import Spinner from "../components/Spinner";
import UserProvider from "../providers/dataProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const HomePage = () => {
  return (
    <UserProvider
      render={({
        userInfo,
        handleUserDetails,
        validate,
        onSubmitInformation,
        loading,
      }) => {
        return (
          <>
            <div id="home" className={roboto.className}>
              <Navbar />
              <section className="lg:py-[2rem] lg:mt-20 md:mt-[88px] h-[100vh] flex justify-center items-center text-center bg-grey md:h-[42vh] md:text-left md:justify-start lg:h-[75vh] xl:h-[75vh] lg:bg-white relative">
                <div className="absolute w-[50vw] h-full top-0 left-0 rounded-br-[12rem] md:bg-grey hidden lg:block"></div>
                <div className="w-[90%] mx-auto flex gap-5 items-center justify-between md:w-[85%] lg:w-[80%] md:h-full z-[2]  2xl:w-[70%]">
                  <div className="flex flex-col gap-[2rem] lg:gap-[3.8rem] md:w-[55%] lg:w-[45%] md:h-full justify-center">
                    <div className="space-y-1 xl:w-[90%]">
                      <h1 className="font-bold text-[2rem] lg:pb-2 lg:-mt-10 lg:text-[2.625rem] leading-[1.1] text-black">
                        Imperfectech gives the best experience!
                      </h1>
                      <p className="text-lg md:text-lg lg:pr-[2.4rem]">
                        The experience will blow your mind if only you are open
                        minded.
                      </p>
                    </div>
                    {/* <a
                className="font-medium px-5 py-[0.75rem] w-[fit-content] shadow-md mx-auto bg-slate-100 rounded-md border-transparent border lg:hover:bg-transparent lg:hover:border-black/10 md:ml-0 transition duration-300 ease-in-out"
                href="/#join"
              >
                Join the waiting list
              </a> */}
                  </div>
                  <div className="w-[42%] lg:w-[45%] xl:w-[40%] 2xl:w-[50%] hidden md:block">
                    <Image
                      src="/Hero Image.svg"
                      alt=""
                      width={574}
                      height={763}
                      className="w-auto lg:translate-x-[2.5rem] xl:translate-x-0 2xl:translate-x-[6.5rem]"
                      priority
                    />
                  </div>
                </div>
              </section>
              {/* section2 */}
              <div className=" items-center hidden lg:flex justify-center w-auto lg:ml-0 md:ml-0 lg:h-72 md:h-72">
                <picture>
                  <img
                    src="GrayGrids.svg"
                    alt="logos"
                    className="lg:mr-8 md:mr-6 mr-20 md:ml-6"
                  />
                </picture>
                <picture>
                  <img
                    src="Frame 67.svg"
                    alt="logos"
                    className="lg:mr-8 md:mr-6"
                  />
                </picture>
                <picture>
                  <img
                    src="Uideck.svg"
                    alt="logo"
                    className="lg:mr-8 md:mr-6"
                  />
                </picture>
                <picture>
                  <img
                    src="Ayro UI.svg"
                    alt="logo"
                    className="lg:mr-8 md:mr-8"
                  />
                </picture>
              </div>
              {/* About section */}
              <section id="about" className="py-[3rem] w-full md:ml-0 lg:ml-0">
                <div className="w-[90%] mx-auto md:flex justify-between gap-[3rem] lg:w-[80%] 2xl:w-[70%]">
                  <div className="text-center md:text-left lg:w-[60%] md:flex flex-col justify-center">
                    <h1 className="text-[2rem] font-bold leading-[1.1] mb-[3rem] lg:w-[80%] xl:w[50%]">
                      All you need to know about the app
                    </h1>
                    <div className="md:grid grid-cols-2 grid-rows-2 gap-y-[2rem] gap-x-4 lg:gap-x-8">
                      <div className="p-4 py-5 md:p-0 xl:pr-[52px]">
                        <Image
                          src="/icon4.svg"
                          alt="icon"
                          width={75}
                          height={75}
                          className="w-[50px] mx-auto mb-5 md:ml-0"
                        />
                        <h2 className="text-lg font-semibold mb-1">
                          Security Maintenance
                        </h2>
                        <p>
                          The little rotter bevvy I gormless mush golly gosh
                          cras.
                        </p>
                      </div>
                      <div className="p-4 py-5 md:p-0 xl:pr-[52px]">
                        <Image
                          src="/icon1.svg"
                          alt="icon"
                          width={75}
                          height={75}
                          className="w-[50px] mx-auto mb-5 md:ml-0"
                        />
                        <h2 className="text-lg font-semibold mb-1">
                          Backup Database
                        </h2>
                        <p>
                          The little rotter bevvy I gormless mush golly gosh
                          cras.
                        </p>
                      </div>
                      <div className="p-4 py-5 md:p-0 xl:pr-[52px]">
                        <Image
                          src="/icon3.svg"
                          alt="icon"
                          width={75}
                          height={75}
                          className="w-[50px] mx-auto mb-5 md:ml-0"
                        />
                        <h2 className="text-lg font-semibold mb-1">
                          Server Maintenance
                        </h2>
                        <p>
                          The little rotter bevvy I gormless mush golly gosh
                          cras.
                        </p>
                      </div>
                      <div className="p-4 py-5 md:p-0 xl:pr-[52px]">
                        <Image
                          src="/icon2.svg"
                          alt="icon"
                          width={75}
                          height={75}
                          className="w-[50px] mx-auto mb-5 md:ml-0"
                        />
                        <h2 className="text-lg font-semibold mb-1">
                          No Risk protectable
                        </h2>
                        <p>
                          The little rotter bevvy I gormless mush golly gosh
                          cras.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block lg:w-[25%]">
                    <Image
                      src="/iphone.svg"
                      alt="phone"
                      width={332}
                      height={679}
                      className="w-[100%]"
                    />
                  </div>
                </div>
              </section>
              {/* pricing */}
              <section id="pricing" className="md:py-[4rem]  md:ml-0 lg:ml-0">
                <div className="w-[90%] mx-auto lg:w-[80%]">
                  <div className="text-center space-y-4">
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-[1.1]">
                      Awesome Pricing Plan
                    </h2>
                    <p className="md:w-[60%] xl:w-[40%] mx-auto">
                      There are many variations of passages of Imperfectech
                      available but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                  <div className="drop-shadow-3xl flex flex-col-1 py-6">
                    <div className="flex flex-col gap-5 md:flex-wrap md:flex-row md:justify-center xl:flex-nowrap md:gap-7">
                      <div className="p-5 py-7 border border-cardColor rounded-lg md:w-[46%] lg:w-[42%] xl:w-[36%]">
                        <h2 className="text-lg font-medium mb-3">Starter</h2>
                        <p className="font-medium mb-[5px]">
                          <span className="font-bold text-[1.8rem]">$59</span>{" "}
                          Per Month
                        </p>
                        <p className="text-[0.95rem]">
                          Best suited for freelancers who works individually.
                        </p>
                        <div className="flex mt-5">
                          <a
                            href="#"
                            className="font-semibold text-white bg-primary py-3 px-[2.5rem] rounded-md "
                          >
                            Purchase Now
                          </a>
                        </div>
                        <div className="flex justify-between gap-4 mt-8">
                          <div className="space-y-3 font-semibold">
                            <p>Seats </p>
                            <p>Domains/Products</p>
                            <p>Email Support</p>
                            <p>All Pro Components</p>
                            <p>Design Source Files</p>
                          </div>
                          <div className="space-y-3">
                            <p>1 Developer </p>
                            <p> 5 Products</p>
                            <p>6 Months</p>
                            <div className="flex flex-col justify-center gap-4 pt-1 items-center">
                              <Image
                                src="/Group.svg"
                                alt=""
                                width={25}
                                height={25}
                                className="w-[20px]"
                              />
                              <Image
                                src="/Groupx.svg"
                                alt=""
                                width={25}
                                height={25}
                                className="w-[20px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 py-7 border border-cardColor rounded-lg md:w-[46%] lg:w-[42%] xl:w-[36%]">
                        <h2 className="text-lg font-medium mb-3">Agency</h2>
                        <p className="font-medium mb-[5px]">
                          <span className="font-bold text-[1.8rem]">$99</span>{" "}
                          Per Month
                        </p>
                        <p className="text-[0.95rem]">
                          Best suited for agencies and small business.
                        </p>
                        <div className="flex mt-5">
                          <a
                            href="#"
                            className="font-semibold text-white bg-green py-3 px-[2.5rem] rounded-md "
                          >
                            Purchase Now
                          </a>
                        </div>
                        <div className="flex justify-between gap-4 mt-8">
                          <div className="space-y-3 font-semibold">
                            <p>Seats </p>
                            <p>Domains/Products</p>
                            <p>Email Support</p>
                            <p>All Pro Components</p>
                            <p>Design Source Files</p>
                          </div>
                          <div className="space-y-3">
                            <p>5 Developers </p>
                            <p> 5 Products</p>
                            <p>6 Months</p>
                            <div className="flex flex-col justify-center gap-4 pt-1 items-center">
                              <Image
                                src="/Group.svg"
                                alt=""
                                width={25}
                                height={25}
                                className="w-[20px]"
                              />
                              <Image
                                src="/Group.svg"
                                alt=""
                                width={25}
                                height={25}
                                className="w-[20px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 py-7 border border-cardColor rounded-lg md:w-[46%] lg:w-[42%] xl:w-[36%]">
                        <h2 className="text-lg font-medium mb-3">Extended</h2>
                        <p className="font-medium mb-[5px]">
                          <span className="font-bold text-[1.8rem]">$149</span>{" "}
                          Per Month
                        </p>
                        <p className="text-[0.95rem]">
                          Best suited for agencies and large business.
                        </p>
                        <div className="flex mt-5">
                          <a
                            href="#"
                            className="font-semibold text-white bg-primary py-3 px-[2.5rem] rounded-md "
                          >
                            Purchase Now
                          </a>
                        </div>
                        <div className="flex justify-between gap-4 mt-8">
                          <div className="space-y-3 font-semibold">
                            <p>Seats </p>
                            <p>Domains/Products</p>
                            <p>Email Support</p>
                            <p>All Pro Components</p>
                            <p>Design Source Files</p>
                          </div>
                          <div className="space-y-3">
                            <p>20 Developers </p>
                            <p> 5 Products</p>
                            <p>6 Months</p>
                            <div className="flex flex-col justify-center gap-4 pt-1 items-center">
                              <Image
                                src="/Group.svg"
                                alt=""
                                width={25}
                                height={25}
                                className="w-[20px]"
                              />
                              <Image
                                src="/Groupx.svg"
                                alt=""
                                width={25}
                                height={25}
                                className="w-[20px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden"></div>
                  </div>
                </div>
              </section>
              {/* Team */}
              <section id="team" className="pb-[4rem]">
                <div className="w-[90%] mx-auto">
                  <div className="text-center space-y-4">
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-[1.1]">
                      Meet Our Team
                    </h2>
                    <p className="md:w-[60%] xl:w-[40%] mx-auto">
                      There are many variations of passages of Lorem Ipsum
                      available but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 flex-wrap mx-auto md:flex-row md:w-[90%] md:justify-center lg:justify-between lg:w-full xl:w-[80%] mt-4">
                    {/* first div */}
                    <div className="p-[1.9rem] border border-teamColor rounded-xl bg-no-repeat md:w-[45%] lg:w-[31%]">
                      <Image
                        src="/jackie.svg"
                        alt="jackie"
                        width={80}
                        height={80}
                      />
                      <div className="mt-6">
                        <h2 className="text-lg font-medium">Jackie Sanders</h2>
                        <p className="text-xs">CONTENT WRITER</p>
                      </div>
                      <p className="text-sm mt-2">
                        Fermentum massa justo sit amet risus morbi leo.
                      </p>
                      <div className="flex gap-6 items-center mt-8 ">
                        <Image
                          src="/fb.svg"
                          alt="facebook"
                          width={8}
                          height={14}
                          className="w-[18px]"
                        />
                        <Image
                          src="/tweet.svg"
                          alt="twitter"
                          width={14}
                          height={11}
                          className="w-[18px]"
                        />
                        <Image
                          src="/insta.svg"
                          alt="instagram"
                          width={15}
                          height={14}
                          className="w-[18px]"
                        />
                      </div>
                    </div>
                    {/* second div */}
                    <div className="teamBg bg-teamBackg p-[1.9rem] border border-teamColor rounded-xl bg-no-repeat md:w-[45%] lg:w-[31%]">
                      <Image
                        src="/Glorie.svg"
                        alt="glorie"
                        width={80}
                        height={80}
                      />
                      <div className="mt-6">
                        <h2 className="text-lg font-medium">Andrieo Gloree</h2>
                        <p className="text-xs">CONTENT WRITER</p>
                      </div>
                      <p className="text-sm mt-2">
                        Fermentum massa justo sit amet risus morbi leo.
                      </p>
                      <div className="flex gap-6 items-center mt-8 ">
                        <Image
                          src="/fb.svg"
                          alt="facebook"
                          width={8}
                          height={14}
                          className="w-[18px]"
                        />
                        <Image
                          src="/tweet.svg"
                          alt="twitter"
                          width={14}
                          height={11}
                          className="w-[18px]"
                        />
                        <Image
                          src="/insta.svg"
                          alt="instagram"
                          width={15}
                          height={14}
                          className="w-[18px]"
                        />
                      </div>
                    </div>
                    {/* third div */}
                    <div className="p-[1.9rem] border border-teamColor rounded-xl bg-no-repeat md:w-[45%] lg:w-[31%]">
                      <Image
                        src="/Adven.svg"
                        alt="jackie"
                        width={80}
                        height={80}
                      />
                      <div className="mt-6">
                        <h2 className="text-lg font-medium">Adveen Desuzas</h2>
                        <p className="text-xs">CONTENT WRITER</p>
                      </div>
                      <p className="text-sm mt-2">
                        Fermentum massa justo sit amet risus morbi leo.
                      </p>
                      <div className="flex gap-6 items-center mt-8 ">
                        <Image
                          src="/fb.svg"
                          alt="facebook"
                          width={8}
                          height={14}
                          className="w-[18px]"
                        />
                        <Image
                          src="/tweet.svg"
                          alt="twitter"
                          width={14}
                          height={11}
                          className="w-[18px]"
                        />
                        <Image
                          src="/insta.svg"
                          alt="instagram"
                          width={15}
                          height={14}
                          className="w-[18px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* contact */}
              <section
                id="contact"
                className="bg-formColorBg py-8 h-full md:p-[4rem]"
              >
                <div className="w-[90%] mx-auto md:w-[92%] lg:w-[100%] xl:w-[70%] 2xl:w-[50%] bg-white md:p-8 rounded-md lg:flex lg:justify-between">
                  {/* <div className="bg-gradient-to-r from-softCyan via-lightViolet to-softBlue w-[250px] xl:w-[300px] hidden lg:block"></div> */}
                  <div className="hidden md:block lg:w-[25%]">
                    <Image
                      src="/iphone.svg"
                      alt="phone"
                      width={332}
                      height={679}
                      className="w-[100%]"
                    />
                  </div>
                  <div className="lg:w-[65%] xl:w-[55%]">
                    <div className="space-y-3 p-4">
                      <h2 className="text-[1.3rem] md:text-[1.9rem] font-bold leading-[1.1]">
                        Register to be an early bird
                      </h2>
                      <p className="md:w-[90%]">
                        There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in
                        some form.
                      </p>
                    </div>
                    <form
                      action=""
                      className="mx-auto p-4 md:py-7 md:p-0 w-full"
                    >
                      <div className="flex flex-col gap-3 mb-3 md:flex-row md:gap-5 md:justify-between w-full">
                        <div className="flex flex-col gap-2 lg:w-[45%]">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstname"
                            className="p-3 rounded-md outline-none border-gray-300 shadow-md focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            value={userInfo.firstName}
                            onChange={handleUserDetails}
                          />
                        </div>
                        <div className="flex flex-col gap-2 lg:w-[45%]">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            id="lastname"
                            className="p-3 rounded-md outline-none border-gray-300 shadow-md focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            value={userInfo.lastName}
                            onChange={handleUserDetails}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3  md:flex-row md:gap-5 md:justify-between">
                        <div className="flex flex-col gap-2 lg:w-[45%]">
                          <label htmlFor="number">Phone Number</label>
                          <input
                            type="tel"
                            name="number"
                            id="number"
                            className="p-3 rounded-md outline-none border-gray-300 shadow-md focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            value={userInfo.number}
                            onChange={handleUserDetails}
                          />
                        </div>
                        <div className="flex flex-col gap-2 lg:w-[45%]">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="p-3 rounded-md outline-none border-gray-300 shadow-md focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                            value={userInfo.email}
                            onChange={handleUserDetails}
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button
                          type="button"
                          className="disabled:bg-purple-300 py-3 px-9 enabled:bg-purple-700 rounded-md text-white font-medium"
                          disabled={!validate()}
                          onClick={onSubmitInformation}
                        >
                          {loading ? <Spinner /> : "submit"}
                        </button>
                      </div>
                      <ToastContainer />
                    </form>
                  </div>
                </div>
              </section>
              {/* footer */}
              <footer className="py-[2rem] bg-purple-700 text-white">
                <div className="w-[90%] mx-auto flex items-center justify-center flex-col gap-3">
                  <p className="font-medium">
                    Developed by Imperfect masterpiece
                  </p>
                  <nav>
                    <ul className="flex justify-end font-medium uppercase h-full gap-4">
                      <li className="border-b-2 border-b-limeGreen">
                        <a href="https://linkedin.com/in/aladidebrah">
                          Linkedin
                        </a>
                      </li>
                      <li className="border-b-2 border-b-limeGreen">
                        <a href="https://github.com/debbydora">Github</a>
                      </li>

                      <li className="border-b-2 border-b-limeGreen">
                        <a href="https://twitter.com/big_boss_baybee">
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </footer>
            </div>
          </>
        );
      }}
    />
  );
};
export default HomePage;
