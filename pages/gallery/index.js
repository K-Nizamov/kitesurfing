import styles from "../../styles/Gallery.module.scss"
import Navbar from "../../components/NavBar";
import ProfileCard from "./ProfileCard";
import { getAllInstructors } from "../../fetchAPI/fetchAPI";


function Gallery({ instructors }) {

    return (
        <>
            <Navbar pageInfo="Gallery" />
            <div className={styles.container}>
                {
                    instructors.map(instructor => (
                        <ProfileCard key={Math.random() * 1000} instructor={instructor} />
                    ))
                }

            </div>
        </>
    );
}

export default Gallery;


export async function getStaticProps() {

    const instructors = await getAllInstructors()

    return {
        props: {
            instructors
        },
        revalidate: 1
    }
}