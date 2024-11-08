import { useState } from "react";
import axios from "axios";
const Create = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

   // configure Express to handle POST requests
   //and log the data received from the React frontend
    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
    
        const movie = {
        title: title,
        year: year,
        poster: poster
        };
        
        //axios sitting and handle the request from website
        axios.post('http://localhost:4000/api/movies', movie)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.data));
    };

    return (
        //the form to fill in 
        <div>
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;