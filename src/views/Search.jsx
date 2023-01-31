import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-node";
import { SongList } from "../cmps/SongList";
import { UseAuth } from "../cmps/UseAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "d2728cb796ee4008a78a1a1893ce7e5c",
});
export const Search = ({ code }) => {
  const accessToken = localStorage.getItem("accessToken");
  const history = useNavigate();

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!code) history("/login");
  }, [code]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if(cancel) return
     setSearchResults (res.body.tracks.items.map(track => {
        const image = track.album.images.filter(img => {
          return img.height == 64
        })
        return{
          id: track.album.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl : image[0].url,
            duration: track.duration_ms
        }
      }))
    });
    console.log(searchResults);
    return () => cancel = true
  }, [search, accessToken]);

  return (
    <section className="search-section">
      <section className="header flex">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          type="text"
          placeholder="What would you like to listen to?"
        />
        <section className="user-section">
          <div className="user">User</div>
        </section>
      </section>
      <section className="main-content">
        <h1>Top results:</h1>
        {!searchResults ? <div>Loading...</div> : 
        <SongList songs={searchResults.slice(0,5)}></SongList>
        }
      </section>
    </section>
  );
};
