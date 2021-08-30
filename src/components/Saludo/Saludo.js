import React from 'react';
import './Saludo.css';
import { useTranslation } from 'react-i18next'


export default function Saludo() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <div className="ils"><h1>{t('header.hello-world')}</h1></div>



    </div>
  )


}
