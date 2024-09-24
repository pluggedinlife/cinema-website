import { useEffect, useState } from "react";
import LocationPinLogo from "../icons/location-pin.svg";
import PhoneLogo from "../icons/phone.svg";
import InstagramLogo from "../icons/instagram.svg";

function Footer() {
  const [mailValue, setMailValue] = useState("");
  let urlList = [];

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      if (urlList.length < 6) {
        urlList.push("https://picsum.photos/200");
      }
    }
  });

  return (
    <div className="bg-black py-10 text-white px-24">
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col items-start space-y-5">
          <div>
            <span className="text-red-500 font-semibold px-2">/</span>
            <span className="font-semibold">Contatti</span>
          </div>
          <div className="flex space-x-2 text-sm">
            <img
              className="w-3"
              src={LocationPinLogo}
              alt="location-pin-logo"
            />
            <span>Via del Canaletto, 140 19125 La Spezia (SP)</span>
          </div>
          <div className="flex space-x-2 text-sm">
            <img className="w-3" src={PhoneLogo} alt="phone-logo" />
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
          <div className="text-xs text-left">
            <span>
              In qualità di Interessato, dichiaro di aver preso visione
              dell‘informativa privacy redatta ai sensi dell’art. 13 del
              Regolamento (UE) 2016/679 (GDPR).
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <input id="consent" type="checkbox" value={false} />
            <label className="text-xs font-semibold" htmlFor="consent">
              Acconsento
            </label>
          </div>
          <div className="flex w-full justify-end">
            <div className="bg-red-600 text-white p-1 font-semibold cursor-pointer">
              Invia
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start text-xs space-y-5">
          <div>
            <span className="text-red-500 font-semibold px-2">/</span>
            <span className="font-semibold">Instagram</span>
          </div>
          <div className="grid grid-rows-2 grid-cols-3 gap-2">
            <img
              className="h-14 w-14 cursor-pointer"
              src="https://picsum.photos/200"
              alt="img"
            />

            <img
              className="h-14 w-14 cursor-pointer"
              src="https://picsum.photos/200"
              alt="img"
            />

            <img
              className="h-14 w-14 cursor-pointer"
              src="https://picsum.photos/200"
              alt="img"
            />

            <img
              className="h-14 w-14 cursor-pointer"
              src="https://picsum.photos/200"
              alt="img"
            />

            <img
              className="h-14 w-14 cursor-pointer"
              src="https://picsum.photos/200"
              alt="img"
            />

            <img
              className="h-14 w-14 cursor-pointer"
              src="https://picsum.photos/200"
              alt="img"
            />
          </div>
          <div className="bg-red-600 text-white p-1 font-semibold cursor-pointer flex">
            <img className="w-4" src={InstagramLogo} alt="phone-logo" />
            <span>Seguici su Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
