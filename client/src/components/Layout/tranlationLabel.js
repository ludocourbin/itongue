import React from "react";
import { Card, Image } from "semantic-ui-react";
// import './TranslationLabel.scss';

const TranslationLabel = ({ translation }) => (
    <Card.Content className="recording-widget__text-selected">
        <Image
            src={`https://www.countryflags.io/${translation.language.code}/flat/32.png`}
            className="flag_image"
        />
        {translation.text}
    </Card.Content>
);

export default TranslationLabel;
