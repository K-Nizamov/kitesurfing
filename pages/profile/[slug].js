
import Navbar from '../../components/NavBar';
import { getAllPostsSlug, getInstructor } from '../../fetchAPI/fetchAPI';
import styles from '../../styles/Profile.module.scss'
import OneProfile from "./OneProfile"

function Profile(instructor) {

    return (
        <>
            <Navbar pageInfo="Profile" />
            <div className={styles.singleProfileWrapper}>
                <OneProfile instructor={instructor} />
            </div>
        </>
    );
}

export default Profile;



export async function getStaticPaths() {
const slugs = await getAllPostsSlug()
    return {
        paths:
            slugs.map((obj) => `/profile/${obj.slug}`) || [],
        fallback: false

    }
}

export async function getStaticProps({ params }) {
    const paramSlug = params.slug
    const instructor = await getInstructor(paramSlug)

    return {
        props:{
            instructor
        }
    }
}