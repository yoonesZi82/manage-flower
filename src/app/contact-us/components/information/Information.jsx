import {
  PiFactory,
  PiLink,
  PiMapPin,
  PiPhoneIncoming,
  PiTelegramLogo,
} from "react-icons/pi";
const Information = () => {
  return (
    <section>
      <span className="text-sidebarTheme text-sm">تماس با ما</span>
      <p className="mt-4 mb-8 text-[22px] text-sidebarTheme">اطلاعات تماس</p>
      <div className="flex flex-row-reverse justify-end items-center gap-[14px] text-sidebarTheme">
        <p className="my-5 text-sidebarTheme text-base">
          شرکت فنجان داغ خوارزمی (کارخانه قهوه ست )
        </p>
        <PiFactory size={30} />
      </div>
      <div className="flex flex-row-reverse justify-end items-center gap-[14px] text-sidebarTheme">
        <p className="my-5 text-sidebarTheme text-base">set-coffee.com</p>
        <PiLink size={30} />
      </div>
      <div className="flex flex-row-reverse justify-end items-center gap-[14px] text-sidebarTheme">
        <p className="my-5 text-sidebarTheme text-base">
          تهران. پاکدشت . شهرک صنعتی خوارزمی. فاز 2 . بلوار بهارستان. خیابان
          ماگنولیا بلوک آ117{" "}
        </p>
        <PiMapPin size={30} />
      </div>
      <div className="flex flex-row-reverse justify-end items-center gap-[14px] text-sidebarTheme">
        <p className="my-5 text-sidebarTheme text-base">021-36479228</p>
        <PiPhoneIncoming size={30} />
      </div>
      <div className="flex flex-row-reverse justify-end items-center gap-[14px] text-sidebarTheme">
        <p className="my-5 text-sidebarTheme text-base">
          تماس با مدیریت از طریق واتساپ و یا تلگرام : 09912209730
        </p>
        <PiTelegramLogo size={30} />
      </div>
    </section>
  );
};

export default Information;
