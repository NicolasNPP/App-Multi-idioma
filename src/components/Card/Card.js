import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { useTranslation } from 'react-i18next'

const Tarjeta = ({ tipo, titulo, description, textbutton }) => {
    const [t, i18n] = useTranslation("global");
    return (
        <div>
            <Card body inverse color={tipo}>
                <CardTitle tag="h5">{titulo}</CardTitle>
                <CardText>{description}</CardText>
                <Button>{t('cards.ver')} </Button>
            </Card>

        </div>
    );
};

export default Tarjeta;
