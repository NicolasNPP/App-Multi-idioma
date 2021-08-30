import React from 'react';
import { useTranslation } from 'react-i18next'

function Contact() {
    const [t, i18n] = useTranslation("global");

    return (
        <div><h1>{t('contacto.construccion')}</h1></div>
    )
}

export default Contact;
