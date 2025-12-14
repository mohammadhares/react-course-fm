const Image = ({ imgSrc, alternative }) => {
    return ( 
        <img className="img" src={imgSrc} alt={alternative} />
     );
}
 
export default Image;