import { SongPreview } from "./SongPreview";


export const SongList = ({songs}) => {
    console.log(songs);
    return(
        <section className="song-list">
            <section className="songs-section">
          {songs.map(song => {
           return <SongPreview key={song.id} song={song}></SongPreview>
          })}
        </section>
        </section>
    )
}