"use client";
import GlobalBtn from "@/components/global-button/GlobalBtn";

const Promote = () => {
  return (
    <div className="bg-[#f3f3f3] px-[45px]">
      <div data-aos="fade-up-right" className="mx-auto my-0 max-w-[1222px]">
        <main className="flex laptop:flex-row-reverse flex-col justify-center laptop:justify-between items-center desktop:items-center laptop:items-center mobile:items-center tablet:items-center gap-0 laptop:gap-[80px] mt-20 mb-12 text-right">
          <section className="w-full laptop:w-1/2 text-black">
            <div className="pt-10 pr-5 pb-5 text-center">
              <span className="text-[32px] text-secondary">
                اینجا هر گلی که بخوایی پیدا میشه
              </span>
              <p className="mt-[15px] mb-20 text-[15px] text-secondary">
                گلخونت رو با کامل کن
              </p>
            </div>
          </section>
          <section className="relative mt-[10px] rounded-lg club">
            {" "}
            <div className="invisible mobile:invisible desktop:visible laptop:visible tablet:visible bottom-0 left-0 z-10 absolute flex flex-col justify-center items-center gap-[10px] bg-white p-[30px] py-[50px] rounded-tr-lg rounded-bl-lg w-[411px] text-center">
              <span className="text-textBrown"> مشتریان عاشقان گل</span>
              <p className="text-[15px] text-secondary">
                فقط کافیه گلخونت رو به ما بسپاری
              </p>
            </div>
            <img
              className="rounded-lg w-[500px] h-[450px] object-cover"
              data-aos="fade-right"
              src="/image/book1.jpg"
              alt="cover"
              onError={(e) => {
                e.target.src = "/image/not-found.png";
              }}
            />
          </section>
        </main>
        <main className="flex laptop:flex-row-reverse flex-col-reverse justify-center desktop:justify-between laptop:justify-between mobile:justify-center tablet:justify-center items-center desktop:items-center laptop:items-center mobile:items-center tablet:items-center gap-[80px] mt-20 mb-12 text-right">
          <img
            src="/image/book2.jpg"
            alt="cover"
            className="rounded-lg w-full laptop:w-1/2 h-[530px] object-cover"
            onError={(e) => {
              e.target.src = "/image/not-found.png";
            }}
          />
          <section
            data-aos="fade-up"
            className="flex flex-col justify-start items-start gap-[14px] w-full desktop:w-full laptop:w-full mobile:w-full tablet:[70%]"
          >
            <p className="text-[44px] text-secondary">چرا عاشقان گل</p>
            <p className="text-secondary leading-6">
              برخورداری از تجربه و قدمت کافی و آگاهی از سلیقه باغداران و و
              مشتریان عاشق گل راهنمای ما در برآورده ساختن نیاز مشتریان عاشقان گل
              تخصصی است.تجربه ای به قدمت چهار نسل و ارتباط مستمر با حریداران
              عاشقان گل ضامن این ویژگیها است.
            </p>
            <div className="flex justify-start items-start gap-[10px]">
              <GlobalBtn
                title={"فروشگاه"}
                link={"/category"}
                model={2}
                iconName={"PiBasketBold"}
              />
              <GlobalBtn
                title={"بیشتر بخوانید"}
                link={"/about-us"}
                iconName={"PiMagnifyingGlassBold"}
                model={1}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Promote;
