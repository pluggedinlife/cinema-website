import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";

function Home() {
  const imgList = [
    {
      imgURL:
        "https://www.megacine.it/wp-content/uploads/2024/09/SLIDE-ANTE-TRANSF-1.jpg",
      imgAlt: "img-1",
    },
    {
      imgURL:
        "https://www.megacine.it/wp-content/uploads/2024/03/SLIDE-CHIUSURA.jpg",
      imgAlt: "img-2",
    },
    {
      imgURL:
        "https://www.megacine.it/wp-content/uploads/2024/09/SLIDE-EVIL.jpg",
      imgAlt: "img-3",
    },
    {
      imgURL:
        "https://www.megacine.it/wp-content/uploads/2024/09/SLIDE-MAMMA.jpg",
      imgAlt: "img-4",
    },
    {
      imgURL:
        "https://www.megacine.it/wp-content/uploads/2024/09/SLIDE-OZI.jpg",
      imgAlt: "img-5",
    },
  ];
  const moviesList = [
    {
      title: "Anteprima - Transformers One",
      length: "01:44",
      director: "Josh Cooley",
      genre: "ANIMAZIONE, AVVENTURA, AZIONE",
      cast: "Brian Tyree Henry, Chris Hemsworth, Keegan-Michael Key, Scarlett Johansson, Steve Buscemi",
      plot: "La storia inedita delle origini di Optimus Prime e Megatron, meglio conosciuti come nemici giurati, ma un tempo amici legati come fratelli che hanno cambiato per sempre il destino di Cybertron.",
      thumbnail:
        "https://www.webtic.it/proxySecure/HandlerLocandinaEx.ashx?idcinema=5083&idevento=5532&i=jpg-m&t=160920241020",
    },
    {
      title: "Beetlejuice Beetlejuice",
      length: "01:44",
      director: "Tim Burton",
      genre: "COMMEDIA, FANTASY, HORROR",
      cast: "Catherine O'Hara, Jenna Ortega, Justin Theroux, Michael Keaton, Winona Ryder",
      plot: "Beetlejuice è tornato! Dopo un'inaspettata tragedia familiare, tre generazioni della famiglia Deetz tornano a casa a Winter River. Ancora perseguitata da Beetlejuice, la vita di Lydia viene sconvolta quando la figlia adolescente e ribelle, Astrid, scopre il misterioso modellino della città in soffitta e il portale per l'Aldilà viene accidentalmente aperto. Con i problemi che stanno nascendo in entrambi i regni, è solo questione di tempo prima che qualcuno pronunci tre volte il nome di Beetlejuice e il demone dispettoso torni nuovamente per scatenare il suo caos.",
      thumbnail:
        "https://www.webtic.it/proxySecure/HandlerLocandinaEx.ashx?idcinema=5083&idevento=5525&i=jpg-m&t=020920241532",
    },
    {
      title: "Anteprima - Transformers One",
      length: "01:44",
      director: "Josh Cooley",
      genre: "ANIMAZIONE, AVVENTURA, AZIONE",
      cast: "Brian Tyree Henry, Chris Hemsworth, Keegan-Michael Key, Scarlett Johansson, Steve Buscemi",
      plot: "La storia inedita delle origini di Optimus Prime e Megatron, meglio conosciuti come nemici giurati, ma un tempo amici legati come fratelli che hanno cambiato per sempre il destino di Cybertron.",
      thumbnail:
        "https://www.webtic.it/proxySecure/HandlerLocandinaEx.ashx?idcinema=5083&idevento=5532&i=jpg-m&t=160920241020",
    },
    {
      title: "Beetlejuice Beetlejuice",
      length: "01:44",
      director: "Tim Burton",
      genre: "COMMEDIA, FANTASY, HORROR",
      cast: "Catherine O'Hara, Jenna Ortega, Justin Theroux, Michael Keaton, Winona Ryder",
      plot: "Beetlejuice è tornato! Dopo un'inaspettata tragedia familiare, tre generazioni della famiglia Deetz tornano a casa a Winter River. Ancora perseguitata da Beetlejuice, la vita di Lydia viene sconvolta quando la figlia adolescente e ribelle, Astrid, scopre il misterioso modellino della città in soffitta e il portale per l'Aldilà viene accidentalmente aperto. Con i problemi che stanno nascendo in entrambi i regni, è solo questione di tempo prima che qualcuno pronunci tre volte il nome di Beetlejuice e il demone dispettoso torni nuovamente per scatenare il suo caos.",
      thumbnail:
        "https://www.webtic.it/proxySecure/HandlerLocandinaEx.ashx?idcinema=5083&idevento=5525&i=jpg-m&t=020920241532",
    },
    {
      title: "Anteprima - Transformers One",
      length: "01:44",
      director: "Josh Cooley",
      genre: "ANIMAZIONE, AVVENTURA, AZIONE",
      cast: "Brian Tyree Henry, Chris Hemsworth, Keegan-Michael Key, Scarlett Johansson, Steve Buscemi",
      plot: "La storia inedita delle origini di Optimus Prime e Megatron, meglio conosciuti come nemici giurati, ma un tempo amici legati come fratelli che hanno cambiato per sempre il destino di Cybertron.",
      thumbnail:
        "https://www.webtic.it/proxySecure/HandlerLocandinaEx.ashx?idcinema=5083&idevento=5532&i=jpg-m&t=160920241020",
    },
    {
      title: "Beetlejuice Beetlejuice",
      length: "01:44",
      director: "Tim Burton",
      genre: "COMMEDIA, FANTASY, HORROR",
      cast: "Catherine O'Hara, Jenna Ortega, Justin Theroux, Michael Keaton, Winona Ryder",
      plot: "Beetlejuice è tornato! Dopo un'inaspettata tragedia familiare, tre generazioni della famiglia Deetz tornano a casa a Winter River. Ancora perseguitata da Beetlejuice, la vita di Lydia viene sconvolta quando la figlia adolescente e ribelle, Astrid, scopre il misterioso modellino della città in soffitta e il portale per l'Aldilà viene accidentalmente aperto. Con i problemi che stanno nascendo in entrambi i regni, è solo questione di tempo prima che qualcuno pronunci tre volte il nome di Beetlejuice e il demone dispettoso torni nuovamente per scatenare il suo caos.",
      thumbnail:
        "https://www.webtic.it/proxySecure/HandlerLocandinaEx.ashx?idcinema=5083&idevento=5525&i=jpg-m&t=020920241532",
    },
    {
      title: "Anteprima - Transformers One",
      length: "01:44",
      director: "Josh Cooley",
      genre: "ANIMAZIONE, AVVENTURA, AZIONE",
      cast: "Brian Tyree Henry, Chris Hemsworth, Keegan-Michael Key, Scarlett Johansson, Steve Buscemi",
      plot: "La storia inedita delle origini di Optimus Prime e Megatron, meglio conosciuti come nemici giurati, ma un tempo amici legati come fratelli che hanno cambiato per sempre il destino di Cybertron.",
      thumbnail:
        "https://www.webtic.it/proxySecure/HandlerLocandinaEx.ashx?idcinema=5083&idevento=5532&i=jpg-m&t=160920241020",
    },
    {
      title: "Beetlejuice Beetlejuice",
      length: "01:44",
      director: "Tim Burton",
      genre: "COMMEDIA, FANTASY, HORROR",
      cast: "Catherine O'Hara, Jenna Ortega, Justin Theroux, Michael Keaton, Winona Ryder",
      plot: "Beetlejuice è tornato! Dopo un'inaspettata tragedia familiare, tre generazioni della famiglia Deetz tornano a casa a Winter River. Ancora perseguitata da Beetlejuice, la vita di Lydia viene sconvolta quando la figlia adolescente e ribelle, Astrid, scopre il misterioso modellino della città in soffitta e il portale per l'Aldilà viene accidentalmente aperto. Con i problemi che stanno nascendo in entrambi i regni, è solo questione di tempo prima che qualcuno pronunci tre volte il nome di Beetlejuice e il demone dispettoso torni nuovamente per scatenare il suo caos.",
      thumbnail:
        "https://www.webtic.it/proxySecure/HandlerLocandinaEx.ashx?idcinema=5083&idevento=5525&i=jpg-m&t=020920241532",
    },
  ];
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
    <div className="flex flex-col ">
      <Carousel>
        {imgList.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </Carousel>

      <div className="p-5 flex gap-5">
        <div className="flex flex-wrap gap-5">
          {moviesList.map((item) => (
            <MovieCard data={item} />
          ))}
        </div>

        <div className="flex flex-col space-y-5">
          {advList.map((item) => (
            <div className="border border-gray-300">
              <img className="min-w-60" src={item.url} alt={item.altText} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
