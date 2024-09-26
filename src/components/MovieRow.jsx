function MovieRow(props) {
  return (
    <div className="flex flex-col border border-gray-500 text-gray-700 rounded-lg p-4">
      <span className="text-left font-semibold mb-2">{props.data.title}</span>

      <div className="flex space-x-4">
        <div className="space-x-4">
          <img
            className="h-32 w-auto flex-1"
            src={props.data.thumbnail}
            alt={props.data.title}
          />
        </div>

        <div className="text-left text-xs space-y-2 overflow-hidden">
          <div className="flex flex-col">
            <span>Regista: {props.data.director}</span>
            <span>Genere: {props.data.genre}</span>
            <span className="truncate">Attori: {props.data.cast}</span>
          </div>

          <div className="text-white font-semibold cursor-pointer">
            <span className="bg-red-600 p-1">Acquista biglietto</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
