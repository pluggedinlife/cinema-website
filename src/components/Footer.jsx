function Footer() {
  return (
    <div className="bg-black h-32 text-white flex px-24 justify-between">
      <div className="bg-blue-200">
        <div>
          <span className="text-red-500 font-semibold px-2">/</span>
          <span className="font-semibold">Contatti</span>
        </div>
      </div>

      <div className="bg-blue-200">
        <span className="text-red-500 font-semibold px-2">/</span>
        <span className="font-semibold">Newsletter</span>
      </div>

      <div className="bg-blue-200">
        <span className="text-red-500 font-semibold px-2">/</span>
        <span className="font-semibold">Instagram</span>
      </div>
    </div>
  );
}

export default Footer;
