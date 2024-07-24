import React, { useState } from 'react';
import { Card, CardContent, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

const Language = () => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" gutterBottom>Select Language:</Typography>
                <FormControl component="fieldset">
                    <RadioGroup
                        row
                        aria-label="language"
                        name="language"
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <FormControlLabel value="en" control={<Radio />} label="English" />
                        <FormControlLabel value="sw" control={<Radio />} label="Kiswahili" />
                    </RadioGroup>
                </FormControl>
                <hr />
                {language === 'en' ? (
                    <Typography>This is an example text in English.</Typography>
                ) : (
                    <Typography>Hii ni mfano wa maandishi kwa Kiswahili.</Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default Language;
