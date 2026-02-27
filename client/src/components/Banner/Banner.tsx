import './Banner.css'

export const Banner = () => {

  const bannerName =" FASHION FWD STICKER - WEAR THE FUTURE FORWARD "

  return (
    <div className="cont-ban">
      <div className="tract">
       <em> <span className="b-text text-em">{bannerName}</span></em>
        <span className="b-text">{bannerName}</span>
      <em> <span className="b-text text-em">{bannerName}</span></em>
        <span className="b-text">{bannerName}</span>
        <em> <span className="b-text text-em">{bannerName}</span></em>
        <span className="b-text">{bannerName}</span>
      </div>

    </div>
  )
}
