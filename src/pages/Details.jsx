import AdvSection from "../components/AdvSection";

function Details() {
  const advList = [
    {
      url: "https://www.megacine.it/wp-content/uploads/2023/04/banner-megacine-errezeta-informatica-300x250-1.gif",
      altText: "adv-box-1",
    },
    {
      url: "https://www.megacine.it/wp-content/uploads/2024/06/fb-promo-300-250.jpg",
      altText: "adv-box-2",
    },
    {
      url: "https://www.megacine.it/wp-content/uploads/2024/08/beetle-300x250-1-300x250.jpg",
      altText: "adv-box-3",
    },
    {
      url: "https://www.megacine.it/wp-content/uploads/2024/08/joker.jpg",
      altText: "adv-box-4",
    },
  ];

  return (
    <div className="flex gap-5">
      <div className="text-2xl flex items-start">
        <span className="text-red-500 font-semibold px-2">/</span>
        <span className="font-semibold">Prezzi e Promo</span>
      </div>
      <div className="flex flex-col space-y-5">
        <AdvSection items={advList} />
      </div>
    </div>
  );
}

export default Details;
