import axios from "axios";
import html2pdf from "html2pdf.js";
import { useEffect, useState } from "react";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [year, setYear] = useState("all");

    useEffect(() => {
        axios.get('http://localhost:5174/movies')
            .then(response => setMovies(response.data));
    }, []);

    const handleUpdateRating = () => {
        axios.put('http://localhost:5174/movies/1', {
            ...movies[0],
            rating: 10
        });
    }

    const handleFavourite = (movie) => {
        const favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies")) || [];
        if (!favouriteMovies.includes(JSON.stringify(movie))) {
            favouriteMovies.push(JSON.stringify(movie));
        }

        localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
        alert("Movie marked as favourite!");
    }

    const handleDownload = () => {
        const pdfContent = document.getElementById("content");
        html2pdf()
            .from(pdfContent)
            .set({
                margin: 1,
                filename: 'movies.pdf',
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            })
            .save();
    }


    return (
        <div id="content">
            <button onClick={handleDownload}>Download as PDF</button>
            <br /><br />
            {
                movies[0] && (
                    <img src={`/${movies[0].img}`} width={"250px"}></img>
                )
            }

            <button onClick={handleUpdateRating}>Update Rating</button>

            <select onChange={(e) => setYear(e.target.value)} value={year}>
                <option value="all">all</option>
                <option value="2010">2010</option>
                <option value="1994">1994</option>
                <option value="1972">1972</option>
            </select>



            <div>
                {
                    movies
                        .filter(movie => movie.year == year || year === "all")
                        .map(movie => {
                            return (
                                <div key={movie.id}>
                                    <h2>{movie.title}</h2>
                                    <p>Director: {movie.director}</p>
                                    <p>Year: {movie.year}</p>
                                    <p>Genre: {movie.genre}</p>
                                    <p>Rating: {movie.rating}</p>
                                    <button onClick={() => handleFavourite(movie)}>Mark as Favourite</button>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default App;