import Header from '../Header'
import Post_event from './post_event'

export default function EventPage(){
    return(
        <div className="flex flex-col min-h-screen">
            <div className="mx-auto">
                <Header
                    heading="Add event to your database"
                    paragraph="Post an event to the database"
                    />
                <Post_event />
            </div>
            
        </div>
    )
}