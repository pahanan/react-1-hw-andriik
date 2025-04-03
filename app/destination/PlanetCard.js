import React from 'react';
import styles from '@/components/destination/destination.module.css';

const PlanetCard = ({ name, description, thumbnail, isSelected, onAddOrRemovePlanet }) => {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
      <div className={styles.planetDescription}>
        <h2>{name.toUpperCase()} {isSelected ? "- SELECTED" : ""}</h2>
        <p>{description}</p>
      </div>
      <button
        style={{
          backgroundColor: isSelected ? 'white' : 'rgba(0, 0, 0, 0.3)',
          color: isSelected ? '#000' : '#fff',
          border: isSelected ? '2px solid black' : '2px solid white',
          transition: '0.3s ease',
        }}
        className="roundButton"
        onClick={() => onAddOrRemovePlanet(name)}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};

export default PlanetCard;