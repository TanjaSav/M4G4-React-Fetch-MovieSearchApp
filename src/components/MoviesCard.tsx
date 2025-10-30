
import MoviesList from './MoviesList';
import type {Movie} from '../types'


// Props type
type Props = {
  data: Movie[];
  img: string;
};

// MoviesCard component
const MoviesCard = ({ data, img }: Props) => {
  return (
    <div>
      <h2 className="bg-zinc-200 p-4 text-2xl font-bold mt-20 shadow-lg rounded mb-10">
        Popular Movies
      </h2>
      <MoviesList data={data} img={img} />
    </div>
  );
};

export default MoviesCard;