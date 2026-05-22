import React from "react";
import splitEveryFour from "../utils/splitEveryFour";
import { getBankByCardNumber } from "iran-bank-detector";

function Card({ cardNumber, price, expiryDate, cardOwner, cvv2 }) {
  const card = `${cardNumber.card1}${cardNumber.card2}${cardNumber.card3}${cardNumber.card4}`;

  const bank = getBankByCardNumber(card.slice(0, 6));

  return (
    <div className="w-full select-none cursor-default card flex flex-col justify-center items-center p-7 bg-zinc-900 border border-zinc-800 rounded-3xl">
      <div className="flex mb-6 w-full justify-between items-start">
        <div className="">
          <div className="chip relative flex justify-center items-center overflow-hidden w-12 h-10 rounded-xl p-2 -bg-linear-240 from-yellow-400 via-yellow-500 to-yellow-700 shadow-xl shadow-black/25">
            <div className="w-full h-full border rounded-lg border-zinc-800/50"></div>
            <div className="w-full h-px absolute rounded-lg bg-zinc-800/30"></div>
          </div>
        </div>

        <div className="flex flex-col gap-y-1 justify-center size-12 items-center">
          {bank && <img className="size-10" src={bank.logo} alt="" />}
          {bank && <span className="text-xs">{bank.bankName}</span>}
        </div>
      </div>
      <div
        dir="ltr"
        className="flex justify-center items-center gap-x-4 text-lg xs:text-3xl"
      >
        <p className="tracking-wider w-full font-cascadia">
          {cardNumber.card1 ? cardNumber.card1 : "••••"}
        </p>
        <p className="tracking-wider w-full font-cascadia">
          {cardNumber.card2 ? cardNumber.card2 : "••••"}
        </p>
        <p className="tracking-wider w-full font-cascadia">
          {cardNumber.card3 ? cardNumber.card3 : "••••"}
        </p>
        <p className="tracking-wider w-full font-cascadia">
          {cardNumber.card4 ? cardNumber.card4 : "••••"}
        </p>
      </div>

      <div className="flex w-full justify-between items-center gap-x-2 mt-6">
        <div className="flex flex-col justify-center gap-y-1">
          <span className="text-xs text-zinc-400">دارنده کارت</span>
          <span className="text-xs xs:text-lg font-bold text-center">
            {cardOwner}
          </span>
        </div>
        <div className="flex gap-x-3 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-y-0.5 bg-zinc-800 p-2 rounded-xl">
            <span className="text-xs text-zinc-400">EXPIRE</span>
            <span className="text-xs xs:text-sm font-bold">{expiryDate}</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-0.5 bg-zinc-800 p-2 rounded-xl">
            <span className="text-xs text-zinc-400">CVV2</span>
            <span className="text-xs xs:text-sm font-bold">{cvv2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
