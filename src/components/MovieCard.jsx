function MovieCard(props) {
  return (
    <div className="flex flex-col border border-gray-500 text-gray-700 rounded-lg p-4 max-w-72">
      <span className="text-left font-semibold mb-2">{props.data.title}</span>

      <div className="flex space-x-4">
        <img
          className="max-w-32 flex-1"
          src={props.data.thumbnail}
          alt={props.data.title}
        />

        <div className="flex flex-col text-left text-xs space-y-2 overflow-hidden">
          <span>Regista: {props.data.director}</span>
          <span>Genere: {props.data.genre}</span>
          <span className="truncate">Attori: {props.data.cast}</span>

          <div className="bg-red-600 text-white p-1 font-semibold cursor-pointer">
            Acquista biglietto
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
