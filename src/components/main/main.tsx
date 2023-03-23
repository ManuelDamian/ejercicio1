import Communityparth from '../community/Community'
import Monthpart from '../monthly/Monthly'
import Whyparth from '../whyus/Whyus'
import './main.css'

const main = () => {
    return (
        <div className='body'>
            <Communityparth/>
            <div className='section-container'>
                <Monthpart/>
                <Whyparth/>
            </div>
        </div>
    )
} 

export default main