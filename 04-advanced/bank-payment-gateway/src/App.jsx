import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import splitEveryThree from "./utils/splitEveryThree";
import { FaCheck, FaCreditCard } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { MdDateRange, MdOutlinePassword } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { CgPassword } from "react-icons/cg";

function App() {
  const [form, setForm] = useState({
    card: {
      card1: "",
      card2: "",
      card3: "",
      card4: "",
    },
    cvv2: "",
    expire: "",
    otp: "",
  });

  const changeHandler = (e) => {
    const { id, name, value } = e.target;

    // format expire date
    if (name === "expire") {
      // remove everything except digits
      let cleaned = value.replace(/\D/g, "");

      // limit to 4 digits: MMYY
      if (cleaned.length > 4) cleaned = cleaned.slice(0, 4);

      let formatted = cleaned;

      // add slash after 2 digits
      if (cleaned.length >= 3) {
        formatted = cleaned.slice(0, 2) + "/" + cleaned.slice(2);
      }

      setForm((prev) => ({ ...prev, expire: formatted }));
      return;
    }

    if (id === "card") {
      setForm({ ...form, card: { ...form.card, [name]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div>
      <div className="background ">
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="w-full min-h-screen flex justify-center items-center p-5">
          <div className="w-full flex gap-y-4 flex-col justify-center items-center relative max-w-lg rounded-4xl bg-zinc-900/40 backdrop-blur-xl text-white border border-zinc-700/50 p-5 xs:p-6 shadow-2xl">
            <Card
              cardNumber={form.card}
              price={480000}
              expiryDate={form.expire}
              cardOwner="آروین جعفری"
              cvv2={form.cvv2}
            />

            <div className="w-full backdark select-none cursor-default">
              <p className="flex justify-center items-center gap-x-2">
                <FaCheck className="size-5 text-lime-400" />
                <span className="text-sm ">مبلغ قابل پرداخت</span>
              </p>
              <p className="flex justify-center items-center">
                <span className="xs:text-2xl lg:text-3xl font-bold">
                  {splitEveryThree(480000)}
                </span>
                <span className="text-sm">﷼</span>
              </p>
            </div>

            <div className="w-full flex justify-between items-center">
              <div className="w-1/3 h-px bg-linear-to-l from-transparent to-zinc-500"></div>
              <p className="text-xs xs:text-lg select-none cursor-default">
                اطلاعات کارت
              </p>
              <div className="w-1/3 h-px bg-linear-to-r from-transparent to-zinc-500"></div>
            </div>

            <div className="">
              <form action="">
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-1">
                    <div className="flex items-center gap-x-2">
                      <FaCreditCard className="size-4" />
                      <label
                        htmlFor="card"
                        className="text-sm select-none cursor-default"
                      >
                        شماره کارت
                      </label>
                    </div>
                    <div
                      dir="ltr"
                      className="w-full flex gap-x-2 xs:gap-x-4 justify-between items-center"
                    >
                      <input
                        autoComplete="off"
                        onChange={changeHandler}
                        value={form.card.part1}
                        placeholder="• • • •"
                        className="backdark cardnumbers-input"
                        type="text"
                        name="card1"
                        id="card"
                        minLength={4}
                        maxLength={4}
                      />
                      <input
                        autoComplete="off"
                        onChange={changeHandler}
                        value={form.card.part2}
                        placeholder="• • • •"
                        className="backdark cardnumbers-input"
                        type="text"
                        name="card2"
                        id="card"
                        minLength={4}
                        maxLength={4}
                      />
                      <input
                        autoComplete="off"
                        onChange={changeHandler}
                        value={form.card.part3}
                        placeholder="• • • •"
                        className="backdark cardnumbers-input"
                        type="text"
                        name="card3"
                        id="card"
                        minLength={4}
                        maxLength={4}
                      />
                      <input
                        autoComplete="off"
                        onChange={changeHandler}
                        value={form.card.part4}
                        placeholder="• • • •"
                        className="backdark cardnumbers-input"
                        type="text"
                        name="card4"
                        id="card"
                        minLength={4}
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center gap-4">
                    <div className="flex flex-col gap-x-2 gap-y-1 xs:gap-x-4 justify-between ">
                      <div className="flex items-center gap-x-2">
                        <IoMdLock className="size-4" />
                        <label
                          htmlFor="cvv2"
                          className="text-sm select-none cursor-default"
                        >
                          CVV2
                        </label>
                      </div>
                      <input
                        autoComplete="off"
                        onChange={changeHandler}
                        value={form.cvv2}
                        placeholder="• • • •"
                        className="backdark cardnumbers-input w-2/2!"
                        type="text"
                        name="cvv2"
                        id="cvv2"
                        minLength={3}
                        maxLength={4}
                      />
                    </div>

                    <div className="flex flex-col gap-x-2 gap-y-1 xs:gap-x-4 justify-between">
                      <div className="flex items-center gap-x-2">
                        <MdDateRange className="size-4" />
                        <label
                          htmlFor="expire"
                          className="text-sm select-none cursor-default"
                        >
                          انقضا
                        </label>
                      </div>
                      <input
                        autoComplete="off"
                        dir="rtl"
                        onChange={changeHandler}
                        value={form.expire}
                        placeholder="ماه/سال"
                        className="backdark cardnumbers-input w-2/2!"
                        type="text"
                        name="expire"
                        id="expire"
                        maxLength={5}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-x-2 gap-y-1 xs:gap-x-4 justify-between">
                    <div className="flex items-center gap-x-2">
                      <CgPassword className="size-4" />
                      <label
                        htmlFor="otp"
                        className="text-sm select-none cursor-default"
                      >
                        رمزپویا
                      </label>
                    </div>
                    <input
                      autoComplete="off"
                      onChange={changeHandler}
                      value={form.otp}
                      placeholder="• • • • • • •"
                      className="backdark cardnumbers-input w-2/2! tracking-widest!"
                      type="text"
                      name="otp"
                      id="otp"
                      maxLength={7}
                    />
                  </div>

                  <div className="flex w-full gap-x-4 font-bold text-md xs:text-xl justify-between items-center">
                    <button className="flex justify-center items-center gap-x-2 rounded-xl cursor-pointer flex-2/3 py-4 bg-linear-60 border border-zinc-400 from-zinc-300/35 to-zinc-600/35 shadow-lg shadow-white/20 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 hover:bg-linear-to-r hover:from-lime-400 hover:to-green-700">
                      <FaCircleCheck className="size-4" />
                      <span>تایید و پرداخت</span>
                    </button>
                    <button className="rounded-xl cursor-pointer flex-1/3 py-4 border border-zinc-400 bg-linear-60 from-zinc-300/35 to-zinc-600/35 hover:-translate-y-0.5 hover:text-orange-600 hover:border-orange-600 transition-all duration-300">
                      انصراف
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
