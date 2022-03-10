import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle'


import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/ProfileCard.module.scss"



function ProfileCard({ instructor}) {

//    const instructorImages = instructor.node.postTypeInstructor.gallery
//    const instructorName = instructor.node.title
//    const instructorLicense = instructor.node.postTypeInstructor.license
//    const instructorLocation = instructor.node.postTypeInstructor.location
//    const flags = instructor.node.postTypeInstructor.flags
//    const icons = instructor.node.postTypeInstructor.icons
//    const schedule = instructor.node.postTypeInstructor.schedule
//    const description = instructor.node.content
//    const slug = instructor.node.slug
const instructorImages =
instructor !== undefined &&
    instructor.node !== undefined &&
    instructor.node.postTypeInstructor !== undefined &&
    instructor.node.postTypeInstructor.gallery !== undefined
    ? instructor.node.postTypeInstructor.gallery
    : []

const flags =
instructor !== undefined &&
    instructor.node !== undefined &&
    instructor.node.postTypeInstructor !== undefined &&
    instructor.node.postTypeInstructor.flags !== undefined
    ? instructor.node.postTypeInstructor.flags
    : []
const icons =
instructor !== undefined &&
    instructor.node !== undefined &&
    instructor.node.postTypeInstructor !== undefined &&
    instructor.node.postTypeInstructor.icons !== undefined
    ? instructor.node.postTypeInstructor.icons
    : []
const instructorName =
instructor !== undefined &&
    instructor.node !== undefined &&
    instructor.node.title !== undefined
    ? instructor.node.title
    : ''

const slug =
instructor !== undefined &&
    instructor.node !== undefined &&
    instructor.node.slug !== undefined
    ? instructor.node.slug
    : ''
const description =
instructor !== undefined &&
    instructor.node !== undefined &&
    instructor.node.content !== undefined
    ? instructor.node.content
    : ''

const instructorLicense =
instructor !== undefined &&
    instructor.node !== undefined &&
    instructor.node.postTypeInstructor !== undefined &&
    instructor.node.postTypeInstructor.license !== undefined
    ? instructor.node.postTypeInstructor.license
    : ''
const instructorLocation =
instructor !== undefined &&
    instructor.node !== undefined &&
    instructor.node.postTypeInstructor !== undefined &&
    instructor.node.postTypeInstructor.location !== undefined
    ? instructor.node.postTypeInstructor.location
    : ''
const schedule =
instructor !== undefined &&
    instructor.node !== undefined &&
    instructor.node.postTypeInstructor !== undefined &&
    instructor.node.postTypeInstructor.schedule !== undefined
    ? instructor.node.postTypeInstructor.schedule
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
                    <img src="/location.png" alt="'location"  />
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
                                <img key={Math.random() * 1000} src={`${icon.icon.mediaItemUrl}`} width='40' alt='asetewd' />
                            ))

                        }
                    </div>
                    <div className={styles.flags}>
                        {
                            flags.map(flag => (
                                <img key={Math.random() * 1000} src={`${flag.flag.mediaItemUrl}`} width='40'  alt='asqtyqd'/>
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

export default ProfileCard;
