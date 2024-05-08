// import Button from '@mui/material/Button';
// import React from "react";
// function WarmUp({ dispatch }) {
//     return (
//         <div className="warm-up">
//             <h2>Warm-Up: Learn About Birds</h2>
//             <p>Here's some information and images to get you ready for the quiz.</p>
//             <img src="/ai.jpg" alt="Bird"/>
//             <Button
//                 variant="contained"
//                 color="secondary"
//                 sx={{
//                     borderRadius: 16,
//                     padding: '10px 20px',
//                     fontSize: '2rem',
//                     minWidth: 140,
//                     height: 50
//                 }}
//                 onClick={() => dispatch({type: "start"})}
//             >
//                 Start with AI
//             </Button>
//             <Button
//                 variant="contained"
//                 color="error"
//                 sx={{
//                     borderRadius: 16,
//                     padding: '10px 20px',
//                     fontSize: '2rem',
//                     minWidth: 140,
//                     height: 50
//                 }}
//                 onClick={() => dispatch({type: "start"})}
//             >
//                 Start
//             </Button>
//         </div>
//     );
// }
//
// export default WarmUp;


import React from 'react';
import { Button, Grid } from '@mui/material';
import BirdSection from './BirdSection';

const birds = [
    { id: 1, name: "Brown Pelican", image: "./images/Brown_Pelican.jpg", description: "A large water bird famous for its distinctive bill and large throat pouch. Found along coastlines in the Americas, it is known for its spectacular plunge-diving behavior." },
    { id: 2, name: "Eared Grebe", image: "./images/Eared_Grebe.jpg", description: "A small water bird with striking red eyes and a sharp-pointed bill, known for its elaborate mating dances and ability to swim underwater." },
    { id: 3, name: "Fish Crow", image: "./images/Fish_Crow.jpg", description: "Similar in appearance to the American crow but slightly smaller and with a different call, found primarily in coastal areas in the southeastern United States." },
    { id: 4, name: "Glaucous-Winged Gull", image: "./images/Glaucous_Winged_Gull.jpg", description: "A medium to large-sized gull with pale gray wings and pink legs, commonly found along the coasts of the northern Pacific." },
    { id: 5, name: "Green Kingfisher", image: "./images/Green_Kingfisher.jpg", description: "A small, brightly colored kingfisher with green upperparts and white underparts, found from southern Texas to Argentina." },
    { id: 6, name: "Green Violetear", image: "./images/Green_Violetea.jpg", description: "A vibrant, medium-sized hummingbird with metallic green feathers, found in forested areas from Mexico to South America." },
    { id: 7, name: "Olive-Sided Flycatcher", image: "./images/Olive_Sided_Flycatcher.jpg", description: "A stocky songbird with a dark 'vest' that looks like it’s wearing a waistcoat, found in North American forests, particularly in coniferous regions." },
    { id: 8, name: "Red-Breasted Merganser", image: "./images/Red_Breasted_Merganser.jpg", description: "A diving duck with a thin, serrated bill and a shaggy crest, found in freshwater and coastal areas across the Northern Hemisphere." },
    { id: 9, name: "Red-Winged Blackbird", image: "./images/Red_Winged_Blackbird.jpg", description: "Recognizable by the bright red shoulder patches of males, this bird is a common sight in wetlands and agricultural areas across North America." },
    { id: 10, name: "Yellow-Breasted Chat", image: "./images/Yellow_Breasted_Chat.jpg", description: "A large, secretive songbird with a bright yellow chest and a white belly, found in thickets and wooded areas across North America." }
];
function WarmUp({ dispatch }) {
    return (
        <div>
            <h2>Warm-Up: Learn About Birds</h2>
            {/*<p>Here's some information and images to get you ready for the quiz.</p>*/}
            <Grid container spacing={2} style={{ width: '100%' }}>
                {birds.map(bird => (
                    <Grid item xs={12} key={bird.id} style={{ display: 'flex', justifyContent: 'center' }}>
                        <BirdSection bird={bird} style={{ width: '100%' }} />
                    </Grid>
                ))}
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ borderRadius: 16, padding: '10px 20px', fontSize: '2rem', minWidth: 140, height: 50 }}
                    onClick={() => {
                        dispatch({ type: "base" });
                        // Optionally pass the name to your dispatch or context if needed elsewhere
                    }}
                >
                    Start
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: 16, padding: '10px 20px', fontSize: '2rem', minWidth: 140, height: 50 }}
                    onClick={() => dispatch({ type: "start" })}
                >
                    Start with AI
                </Button>
            </div>
        </div>
    );
}
export default WarmUp;
