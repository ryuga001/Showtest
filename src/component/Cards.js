import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
function Cards({ fetchUrl }) {
    const [result, setresult] = useState([]);
    const url = fetchUrl;
    useEffect(() => {
        fetchData();
    }, [fetchUrl])
    async function fetchData() {
        const res = await fetch(url);
        const data = await res.json();
        setresult(data);
    }
    let navigate = useNavigate();
    return (

        <div>
            <Navbar />
            <div className="container" style={{ margin: "2rem" }}>
                <div className="row row-cols-3">
                    {
                        result.map((element) => {
                            return (
                                <div className="col">
                                    <div key={element.show.id} onClick={() => navigate(`/${element.show.id}`)}>
                                        <Card name={element.show.name} imageUrl={element.show.image ? element.show.image.original : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} summary={element.show.summary} id={element.show.id} />
                                    </div>
                                </div>

                            );
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Cards