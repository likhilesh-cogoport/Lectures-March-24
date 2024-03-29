

const GridCard = ( { data: {title, child=[]} } ) => {
    // const { data } = props;
    return (
        <div className='grid-card'>
            <p>{title}</p>
            <div className='card-internal-grid'>
                {
                    child.map(({img, title})=>{
                        return(
                            <div key={title}>
                                <img src={img}></img>
                                <p>{title}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default GridCard;