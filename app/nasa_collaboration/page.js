"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = 'C9SCzDrlx2hk83CCdouc9TmuGTcrlyn6NUpi8s21';

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverPhoto}>
      <img src={src} alt={`${date} ${roverName}`} />
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
    </div>
  );
}

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(response => response.json());
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();
    // TASK - React 1 week 3 DONE
    // fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable
    const fetchDailyImage = async () => {
      const dailyImg = await fetch(NASA_URLs.astronomyPicOfTheDay).then(response => response.json());
      setDailyImg(dailyImg);
    };

    fetchDailyImage();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          {/* TASK - React 1 week 3 DONE*/}
          {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here */}
          {/* You should display the title, explanation, and the image using the url from the response */}
          {/* <img src={dailyImg.url}> */}
          {dailyImg.url && (
            <>
              <img src={dailyImg.url} alt={dailyImg.title} />
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
            </>
          )}
          
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {/* TASK - React 1 week 3 *DONE/}
          {/* Iteratate over the roverPhoto?.photos array and display all the pictures! */}
          {
            roverPhoto?.photos?.length ? (
              <>
                {roverPhoto.photos.map((photo, index) => (
                  <RoverPhoto
                    key={index}
                    src={photo.img_src}
                    date={photo.earth_date}
                    roverName={photo.rover.name}
                  />
                ))}
                {/* 1. src: source of the img (img_src in the data from the API) */}
                {/* 2. date: earth_date data coming from the API */}
                {/* 3. roverName: will be in the rover object - rover.name */}

                {/* TIPS: */}
                {/* If you don't know how the data looks like you can: */}
                {/* 1. use console.log() to write the data to the console */}
                {/* 2. use the network tab in the developer tab - https://developer.chrome.com/docs/devtools/network */}
                <p>Date {roverPhoto.photos[0]?.earth_date}</p>
                <img className={styles.nasaPicOfTheDayImg} src={roverPhoto.photos[0]?.img_src} alt={dailyImg.title} />
              </>
              ) : (
                <p>Loading rover photos...</p>
              )
            }
        </section>
      </main>
    </div>
  );
}

export default NasaCollaboration;
