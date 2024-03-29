import {girdInfo} from '../../configurations/grid-info';
import GridCard from "../gridCards"

const HomepageBody = () => {
    return(
        <div className='grid-layout'>
            {
                girdInfo.map((info)=>{
                    return (
                        <GridCard key={info.id} data={info} />
                    )
                })
            }
        </div>
    )
}

export default HomepageBody;