//Type definition
import type {Movie} from '../types'

// Props type
type Props = {
  data: Movie[];
  img: string;
};

// MoviesList component
const MoviesList = ({ data, img }: Props) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-12">
      {data.map((movie) => ( //- Iterates over each movie in data
        <div
          className="card bg-white border border-gray-200 rounded-lg shadow shadow-white hover:scale-105 overflow-hidden cursor-pointer transition ease-in-out delay-50"
          key={movie.id}
        >
          <img
            src={`${img}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto"
          />

          <div className="flex justify-between p-4 items-center">
            <h3 className="font-semibold">{movie.title}</h3>
              <p className="bg-orange-500 text-white px-2 py-1 rounded">
                {movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;