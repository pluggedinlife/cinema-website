import { useState } from "react";
import LocationPin from "../icons/location-pin.svg";
import Phone from "../icons/phone.svg";

function Footer() {
  const [mailValue, setMailValue] = useState("");
  return (
    <div className="bg-black py-10 text-white flex px-24 justify-between">
      <div className="flex flex-col items-start space-y-5">
        <div>
          <span className="text-red-500 font-semibold px-2">/</span>
          <span className="font-semibold">Contatti</span>
        </div>
        <div className="flex space-x-2 text-sm">
          <img className="w-3" src={LocationPin} alt="location-pin-logo" />
          <span>Via del Canaletto, 140 19125 La Spezia (SP)</span>
        </div>
        <div className="flex space-x-2 text-sm">
          <img className="w-3" src={Phone} alt="phone-logo" />
          <span>0187 167 6324</span>
        </div>
        <div className="text-sm text-left">
          <div>Multicomplesso La Spezia S.r.l - P.I. 01133410116</div>
          <div>All Right Reserved</div>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-5">
        <div>
          <span className="text-red-500 font-semibold px-2">/</span>
          <span className="font-semibold">Newsletter</span>
        </div>
        <div className="flex space-x-2 text-sm">
          <div className="bg-white p-2 w-full">
            <input
              className="w-full focus:outline-none text-black"
              type="mail"
              value={mailValue}
              placeholder="test@test.test"
              onChange={(e) => setMailValue(e.target.value)}
            />
          </div>
        </div>
        <div className="text-xs break-words">
          In qualità di Interessato, dichiaro di aver preso visione
          dell‘informativa privacy redatta ai sensi dell’art. 13 del Regolamento
          (UE) 2016/679 (GDPR).
        </div>
        <div className="flex items-center space-x-3">
          <input id="consent" type="checkbox" value={false} />
          <label htmlFor="consent">Acconsento</label>
        </div>
        <div className="bg-red-600 text-white p-1 font-semibold cursor-pointer">
          Invia
        </div>
      </div>

      <div className="flex flex-col items-start text-xs space-y-5">
        <div>
          <span className="text-red-500 font-semibold px-2">/</span>
          <span className="font-semibold">Instagram</span>
        </div>
        <div>instagram</div>
      </div>
    </div>
  );
}

export default Footer;
