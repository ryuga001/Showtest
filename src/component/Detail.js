import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Form from './Form'
function Detail() {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [showForm, setshowForm] = useState(false);
    const [img_url, setimg_url] = useState("")
    const url = `https://api.tvmaze.com/shows/${id}`
    const fetchData = async () => {
        const res = await fetch(url)
        const data = await res.json();
        setItem(data);
        if (data.image)
            setimg_url(data.image.original)
        else {
            setimg_url("https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg");
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    let navigate = useNavigate();
    return (


        <div className="  card mb-3" style={{ margin: "2rem" }}>
            {!showForm && <div className="row g-0">
                <div className="col-md-4">
                    <img src={img_url} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div dangerouslySetInnerHTML={{ __html: item.summary }} />
                        <p><button className='btn btn-dark'  ><a target="_black" href={item.officialSite}>More</a></button></p>
                        <button style={{
                            position: "absolute", right: "525px"
                            , bottom: "5px"

                        }} type='button' className='btn btn-primary position-absolute end-50 mx-2 my-2' onClick={() => {
                            setshowForm(!showForm);
                        }} >Book Now!</button>
                        <button type='button' className='btn btn-primary position-absolute bottom-0 end-0 mx-2 my-2' onClick={() => navigate("/")} >Back</button>
                        {/* <p>Official Site : {item.officialSite}</p> */}
                    </div>
                </div>
            </div>
            }
            {showForm && <Form name={item.name} imageUrl={img_url} />}
        </div >


    )
}

export default Detail