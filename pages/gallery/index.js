import styles from "../../styles/Gallery.module.scss"
import Navbar from "../../components/NavBar";
import ProfileCard from "./ProfileCard";

const data = [
    {
        imgUrl: ["/lenni.png", '/annie.png', "/lasse.jpeg", "/jesse.png"],
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
        imgUrl: ["/annie.png", "/lenni.png", "/lasse.jpeg", "/jesse.png"],
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
        imgUrl: ["/lasse.jpeg", '/annie.png', "/lenni.png", "/jesse.png"],
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
        imgUrl: ["/jesse.png", '/annie.png', "/lenni.png", "/lasse.jpeg"],
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

function Gallery({ cards }) {

    return (
        <>
            <Navbar pageInfo="Gallery" />
            <div className={styles.container}>
                {
                    cards.map(card => (
                        <ProfileCard key={Math.random() * 1000} card={card} />
                    ))
                }

            </div>
        </>
    );
}

export default Gallery;

export async function getStaticProps() {
    const cards = data

    return {
        props: {
            cards
        }
    }
}