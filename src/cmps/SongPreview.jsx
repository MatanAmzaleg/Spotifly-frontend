export const SongPreview = ({ song, chooseSong }) => {

const handlePlay = () => {
    chooseSong(song)
}
    const calcTime = (time) => {
        const minutes = Math.floor(time/1000/60).toString()
        const seconds = Math.floor(time/1000 % 60).toString()
        console.log(`${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`); 
        return `${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`
    }

  return (
    <section className="song-preview flex">
      <div className="info-sec flex">
        <img src={song.albumUrl} alt="" />
        <div className="titles flex column">
          <h1>{song.title}</h1>
          <h3>{song.artist}</h3>
        </div>
      </div>
      <div className="options-sec">
        <p>{calcTime(song.duration)}</p>
      </div>
    </section>
  );
};
