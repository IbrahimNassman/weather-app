import React, {useState} from 'react';
// import {API_KEY, API_BASE_URL} from '../apis/config';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
        <>
            <Row>
                <Col>
                <h1>Search your city</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={4}>
                    <FormControl
                        placeholder="Enter city"
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                {/* don't forget to edit our function  */}
                    <Button onClick={() => onSearch(city)}>Check Weather</Button>
                </Col>
            </Row>
        </>
    );
    };


// const CitySelector = () => {
//     const [city, setCity] = useState('');
//     const [results, setResults] = useState(null);

//     const onSearch = () => {
//         fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f87189f1aac3532836f8ddb60ca2990&units=metric`)
//             .then((response) => response.json())
//             .then((results) => console.log(results));
//         };
//         // const onKeyDown = (event) => {
//         //     if (event.keyCode === 13) {
//         //         onSearch();
//         //     }
//         // };

//     return (
//     <>
//     <Row>
//         <Col>
//             <h1>Search your city</h1>
//         </Col>
//     </Row>
//     <Row>
//         {/* xs={4} takes the one third  of the page*/}
//         <Col xs={4} className="text-center">
//             <FormControl
//                 placeholder="Enter city"
//                 // update city value with the user's input
//                 onChange={(event) => setCity(event.target.value)}
//                 // value will be the currently selected city
//                 value={city}
                
//             />
//         </Col>
//     </Row>
//     <Row>
//         <Col>
//             {/* event handler for button click */}
//             <Button onClick={onSearch}>Check Weather</Button>
//         </Col>
//     </Row>
//     </>
// );
// };

export default CitySelector;