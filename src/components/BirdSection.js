import React from 'react';
import { Checkbox, FormControlLabel, Typography, Card, CardMedia, CardContent } from '@mui/material';

function BirdSection({ bird }) {
    const { name, image, description } = bird;

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <FormControlLabel
                    control={<Checkbox />}
                    label="I already know it!"
                />
            </CardContent>
        </Card>
    );
}

export default BirdSection;
