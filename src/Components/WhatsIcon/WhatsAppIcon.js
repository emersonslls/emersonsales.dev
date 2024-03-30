import React from 'react';

import styles from './WhatsIcon.module.css'; // Importe os estilos principais
import responsivoStyles from './WhatsIconResponsivo.module.css'; // Importe os estilos responsivos


const WhatsAppIcon = ({ phoneNumber, message, iconSrc }) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={iconSrc} alt="WhatsApp"  className={`${styles.WhatsAppIcon} ${responsivoStyles.WhatsAppIcon}`}/>
    </a>
  );
};

export default WhatsAppIcon;