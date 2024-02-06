// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(result => {
                setDogImage(result.message);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    },[]);
    return (
        <div>
            {loading ? ( 
                <p>Loading...</p>
            ) : (
                <img src={dogImage} alt="A Random Dog" />
            )}
        </div>
    );
}
export default App;