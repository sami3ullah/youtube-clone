import React, {useState, useEffect} from "react";
import { Container } from "./styled/Home.styledcomponent";
import Card from "../../components/Card/Card";
import axios from 'axios'
import {getVideos} from "../../api/videos.js";

function Home({type}) {
    const [videos, setVideos] = useState([]);

  //  get the videos for the page
    useEffect(() => {
            (async () => {
                const response = await getVideos(type);
                setVideos(response);
            })()
    }, [type])
  return (
    <Container>
        {videos && videos.length && videos.map((video) => (
            <Card key={video._id} video={video}/>
        ))}
    </Container>
  );
}

export default Home;
