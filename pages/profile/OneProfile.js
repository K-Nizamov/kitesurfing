import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle'


import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/ProfileCard.module.scss"

function OneProfile({ instructor }) {

    const instructorImages =
        instructor !== undefined &&
            instructor.instructor !== undefined &&
            instructor.instructor.postTypeInstructor !== undefined &&
            instructor.instructor.postTypeInstructor.gallery !== undefined
            ? instructor.instructor.postTypeInstructor.gallery
            : []

    const flags =
        instructor !== undefined &&
            instructor.instructor !== undefined &&
            instructor.instructor.languages !== undefined &&
            instructor.instructor.languages.nodes !== undefined
            ? instructor.instructor.languages.nodes
            : []
    const icons =
        instructor !== undefined &&
            instructor.instructor !== undefined &&
            instructor.instructor.atributes !== undefined &&
            instructor.instructor.atributes.nodes !== undefined
            ? instructor.instructor.atributes.nodes
            : []
    const instructorName =
        instructor !== undefined &&
            instructor.instructor !== undefined &&
            instructor.instructor.title !== undefined
            ? instructor.instructor.title
            : ''

    const slug =
        instructor !== undefined &&
            instructor.instructor !== undefined &&
            instructor.instructor.slug !== undefined
            ? instructor.instructor.slug
            : ''
    const description =
        instructor !== undefined &&
            instructor.instructor !== undefined &&
            instructor.instructor.content !== undefined
            ? instructor.instructor.content
            : ''

    const instructorLicense =
        instructor !== undefined &&
            instructor.instructor !== undefined &&
            instructor.instructor.postTypeInstructor !== undefined &&
            instructor.instructor.postTypeInstructor.license !== undefined
            ? instructor.instructor.postTypeInstructor.license
            : ''
    const instructorLocation =
        instructor !== undefined &&
            instructor.instructor !== undefined &&
            instructor.instructor.postTypeInstructor !== undefined &&
            instructor.instructor.postTypeInstructor.location !== undefined
            ? instructor.instructor.postTypeInstructor.location
            : ''
    const schedule =
        instructor !== undefined &&
            instructor.instructor !== undefined &&
            instructor.instructor.postTypeInstructor !== undefined &&
            instructor.instructor.postTypeInstructor.schedule !== undefined
            ? instructor.instructor.postTypeInstructor.schedule
            : []


    SwiperCore.use([Navigation, Pagination, Autoplay])

    const [isExpanded, setIsExpanded] = useState('none')

    function expandHandler(e) {
        e.preventDefault()
        if (isExpanded === 'none') {
            setIsExpanded('block')
        } else {
            setIsExpanded('none')
        }
    }
    const slides =
        instructorImages.map(img => (
            <SwiperSlide key={Math.random() * 1000}>
                <img
                    className={styles.mainImg}
                    src={img.image.mediaItemUrl}
                    width='100%'
                    height='465'
                    style={{ position: 'relative', top: '96px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                    alt={instructorName}
                />
            </SwiperSlide>
        ))


    return (

        <Swiper
            id='main'
            navigation
            pagination
            tag='div'
            className={styles.swiper}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
        >

            <div className={styles.jobAndLocation}>
                <div>{instructorLicense}</div>
                <div className={styles.location}>
                    <img src="/location.png" alt="'location" />
                    {instructorLocation}
                </div>
            </div>
            <div className={styles.name}>{instructorName}</div>

            {slides}

            <div className={styles.expandedDescription} style={{ display: `${isExpanded}` }}>
                <div className={styles.iconsFlagWrapper}>
                    <div>
                        {
                            icons.map(icon => (
                                <img key={Math.random() * 1000} src={`${icon.description}`} width='40' alt='asetewd' />
                            ))

                        }
                    </div>
                    <div className={styles.flags}>
                        {
                            flags.map(flag => (
                                <img key={Math.random() * 1000} src={`${flag.description}`} width='40' alt='asqtyqd' />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.days}>
                    {
                        schedule.map(day => (
                            <p key={Math.random() * 1000} className={styles.day} >{day}</p>
                        ))
                    }
                </div>
                <div dangerouslySetInnerHTML={{ __html: description }}>
                </div>
            </div>

            <div className={styles.description}>
                <button onClick={expandHandler}><img src="/downArrow.png" width='20' height='20' alt="downArrow" /></button>
                <div className={styles.contactWrapper}>
                    <img src="/message.png" width='30' alt="aswgsfd" />
                    <Link href={`/profile/${slug}`} passHref>
                        <button className={styles.contactBtn}>CONTACT</button>
                    </Link>
                </div>
            </div>

        </Swiper>
    );
}

export default OneProfile;