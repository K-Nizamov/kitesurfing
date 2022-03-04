
import Navbar from '../../components/NavBar';
import styles from '../../styles/Profile.module.scss'
import ProfileCard from "../gallery/ProfileCard"

const data = [
    {
        imgUrl: ["/lenni.png",'/annie.png',"/lasse.jpeg","/jesse.png"],
        name: "Lenni",
        slug: 'lenni',
        job: "IKO-INSTRUCTOR",
        icons: ['/kitesurfing.png', '/person.jpg', '/car.png'],
        location: "FEHMARN",
        days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        description: "I like to kite and teach.Best would be to do both.",
        langugageImgs: ['/germany1.jpg', '/britain1.jpeg', '/spain1.png']

    },
    {
        imgUrl: ["/annie.png","/lenni.png","/lasse.jpeg","/jesse.png"],
        name: "Anni",
        slug: 'anni',
        job: "VDWS-INSTRUCTOR",
        icons: ['/kitesurfing.png', '/person.jpg', '/car.png'],
        location: "HEILIGENHAFEN",
        days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        description: "I like to kite and teach.Best would be to do both.",
        langugageImgs: ['/germany1.jpg', '/spain1.png']

    },
    {
        imgUrl: ["/lasse.jpeg",'/annie.png',"/lenni.png","/jesse.png"],
        name: "Lasse",
        slug: 'lasse',
        job: "VDS-INSTRUCTOR",
        icons: ['/kitesurfing.png', '/person.jpg', '/car.png'],
        location: "HEILIGENHAFEN",
        days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        description: "I like to kite and teach.Best would be to do both.",
        langugageImgs: ['/germany1.jpg', '/britain1.jpeg']

    },
    {
        imgUrl: ["/jesse.png",'/annie.png',"/lenni.png","/lasse.jpeg"],
        name: "Jesse",
        slug: 'jesse',
        job: "VDS-INSTRUCTOR",
        icons: ['/kitesurfing.png', '/person.jpg', '/car.png'],
        location: "PELZERHAKEN",
        days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        description: "I like to kite and teach.Best would be to do both.",
        langugageImgs: ['/germany1.jpg', '/spain1.png']

    },
]



function Profile(card) {

    return (
        <>
            <Navbar pageInfo="Profile" />
            <div className={styles.singleProfileWrapper}>
                <ProfileCard card={card} />
            </div>
        </>
    );
}

export default Profile;



export async function getStaticPaths() {

    return {
        paths:
            data.map((obj) => `/profile/${obj.slug}`) || [],
        fallback: false

    }
}

export async function getStaticProps({ params }) {
    const paramSlug = params.slug
    const card = data.find(el => el.slug === paramSlug)

    return {
        props:
            card
    }
}