import { useState } from "react";
import { Stack } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating';
import RatingMui from '@mui/material/Rating';

//import mapboxgl from 'mapbox-gl';

import "./styles.css";

//mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlbmJyb2R0IiwiYSI6ImNsYmYyNmxvdjAyM2Uzbm9ncDB2aGoxMDAifQ.jGEFxW1NuoYc1SXv7uA6_g';

function Home (){
    
    //const mapContainer = useRef(null);
    //const map = useRef<null>(null);
    //const [lng, setLng] = useState(-70.9);
    //const [lat, setLat] = useState(42.35);
    //const [zoom, setZoom] = useState(9);

    //useEffect(() => {
    //    if (map.current) return; // initialize map only once
    //        map.current = new mapboxgl.Map({
    //        container: mapContainer.current,
    //        style: 'mapbox://styles/mapbox/streets-v12',
    //        center: [lng, lat],
    //        zoom: zoom
    //    });
    //    });

    const [rating, setRating] = useState(0)
    const [value, setValue] = useState<number | null>(2);
    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        console.log(`o rating é:${rating}`)

    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)
    return (
        <div className="App">
            <Rating
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            fillColor="pink"
            /* Available Props */
            />
            <RatingMui
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <Stack  gap={4} className="col-md-5 mx-auto">
                <h1>Home</h1>
                <p>/pacientes para cadastrar pacientes</p>
                <p>/pacienteslista para ver a lista de pacientes</p>
            </Stack>
            {
            //<div>
             //   <div ref={mapContainer} className="map-container" />
            //</div>
            }
            
        </div>

    )
}
export default Home;