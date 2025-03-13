import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { withMask } from "use-mask-input";
// import { sendMessageToTelegram } from "../../utils/telegramUtils.js";
function PhoneCall({ setShowPhoneCall }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  // async function sendToBot(e) {
  //   e.preventDefault();
  //   let message = `
  //   Qo'ng'iroq so'rayotgan foydalanuvchining ismi: ${userName} raqami: +${phoneNumber}
  //   `;
  //   if (phoneNumber.length == 12) {
  //     await sendMessageToTelegram(
  //       import.meta.env.VITE_CHAT_IDS.split(","),
  //       message,
  //       import.meta.env.VITE_TELEGRAM_URL
  //     );
  //     setShowPhoneCall(false);
  //   } else {
  //     alert("Telefon raqami to'liq emas");
  //   }
  // }
  return (
    <div className="fixed inset-0 bg-opacity-50 z-20 grid place-content-center">
      <div
        onClick={(e) => {
          console.log(e.target.id);
          if (e.target.id == "close-popup") {
            setShowPhoneCall(false);
          }
        }}
        id="close-popup"
        className="absolute inset-0 cursor-zoom-out bg-[#F7D22D66] opacity-60%"
      ></div>

      <div className="relative flex min-w-[320px] flex-col p-[20px_30px] bg-[#FFF] rounded-[12px]">
        <IoCloseOutline
          className="absolute top-1.5 right-1.5 cursor-pointer text-yellow text-[20px] font-bold"
          onClick={() => setShowPhoneCall(false)}
        />

        <h1 className="text-yellow text-[25px] font-bold">
          Biz siz bilan bog‘lanamiz
        </h1>

        <p className="text-[#231F20] text-[15px] font-bold">
          10 daqiqa ichida qo'ng'iroq qilamiz
        </p>

        <form onSubmit={sendToBot} className="flex flex-col">
          <input
            className="border-[#c3c3c3] border mt-6 h-10 w-full bg-[#f8f8f8] pl-3 placeholder:text-[#1c1c1c] text-[#1c1c1c] text-base leading-normal outline-none font-normal rounded-[8px]"
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Ismingiz"
            required
          />
          <input
            ref={withMask("+\\9\\98 (99) 999-99-99")}
            required
            id="phoneLabel"
            onChange={(e) => {
              const strippedValue = e.target.value.replace(/\D/g, "");
              strippedValue.startsWith("998")
                ? strippedValue.substring(3)
                : strippedValue;
              setPhoneNumber(strippedValue);
            }}
            className="mt-6 h-10 w-full bg-[#f8f8f8] pl-3 font-normal placeholder:text-[#1c1c1c] text-base text-[#1c1c1c] leading-normal font-[Inter] border-[#c3c3c3] border outline-none rounded-[8px]"
            inputMode="text"
            placeholder="+998 (__) ___-__-__"
          />
          <button
            type="submit"
            className="whitespace-nowrap mt-[15px] text-[#231F20] md:bg-white text-[16px] font-bold px-[25px] py-[7px] bg-[#F7D22D] rounded-[8px]"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}

export default PhoneCall;
