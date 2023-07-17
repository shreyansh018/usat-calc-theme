import React from "react";

function Newtheme() {
  return (
    <div className="theme-usat flex justify-center flex-col">
      <div className="theme-usat text-skin-base font-cusweight text-mysize">
        Template Type 1
      </div>

      <div className="font-cusweight2 text-mysize2 font-cusfamily not-italic text-skin-base">
        Curious how much you might pay in federal and state taxes this year? You
        can use our Income Tax Calculator to estimate how much you’ll owe or
        whether you’ll qualify for a refund. Simply enter your taxable income,
        filing status and the state you reside in to find out how much you can
        expect to pay.
      </div>

      <div className="font-cusweight text-mysize3 font-cusfamily2 text-skin-base">
        Section Header
      </div>

      <div className="font-cusweight2 text-mysize4 text-skin-base">
        Supporting text for Section Header
      </div>

      <div className="text-skin-base2 text-mysize5 font-cusweight2">
        Text Field, Drop Down, Prefix dollar sign, Text with Units and drop
        down, With Supporting text
      </div>

      <div className="text-mysize5 font-cusweight text-skin-base">
        Input fields
      </div>

      <div className="text-skin-base3 font-cusweight text-mysize2">
        More Options
      </div>

      <div className="flex align-bottom justify-center">
        <button className="flex justify-center font-cusweight text-mysize2 bg-skin-fill text-skin-base4 w-40 h-12 pt-3 pl-4 pr-4 rounded-md">
          CALCULATE
        </button>
      </div>
    </div>
  );
}

export default Newtheme;
