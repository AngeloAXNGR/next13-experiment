import Image from "next/image"

export const generateStaticParams = async() => {
	const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();

	return res.results.map((movie:any) => ({
		movie: toString(movie.id)
	}))
}

const MovieDetail = async ({ params }:any) => {
	const imagePath = `https://image.tmdb.org/t/p/original`
	const {movie} = params;
	const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
	const res = await data.json();

	return (
		<div>
			<div>
				<h2 className="text-2xl">{res.title}</h2>			
				<h2 className="text-lg">{res.release_date}</h2>
				<h2>{res.runtime} minutes</h2>
				<h2 className="bg-green-600 inline-block my-2 p-2 rounded">
					{res.status}
				</h2>
				<Image 
					className="my-12 w-full" 
					src={imagePath + res.backdrop_path} 
					width={1000} 
					height={1000} 
					alt="Movie Poster"
					priority // this will load image quicker
				/>
			</div>
		</div>
	)
}

export default MovieDetail