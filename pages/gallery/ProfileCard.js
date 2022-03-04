import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle'


import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/ProfileCard.module.scss"



function ProfileCard({ card }) {
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
        card.imgUrl.map(img => (
            <SwiperSlide key={Math.random() * 1000}>
                <img
                    className={styles.mainImg}
                    src={img}
                    width='100%'
                    height='100%'
                    style={{ position: 'relative', top: '96px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                    alt={card.name}
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
                <div>{card.job}</div>
                <div className={styles.location}>
                    <img src="/location.png" alt="'location"  />
                    {card.location}
                </div>
            </div>
            <div className={styles.name}>{card.name}</div>

            {slides}

            <div className={styles.expandedDescription} style={{ display: `${isExpanded}` }}>
                <div className={styles.iconsFlagWrapper}>
                    <div>
                        {
                            card.icons.map(icon => (
                                <img key={Math.random() * 1000} src={`${icon}`} width='40' alt='asetewd' />
                            ))

                        }
                    </div>
                    <div className={styles.flags}>
                        {
                            card.langugageImgs.map(flag => (
                                <img key={Math.random() * 1000} src={`${flag}`} width='40'  alt='asqtyqd'/>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.days}>
                    {
                        card.days.map(day => (
                            <p key={Math.random() * 1000} className={styles.day} >{day}</p>
                        ))
                    }
                </div>
                <div>
                    {card.description}
                </div>
            </div>

            <div className={styles.description}>
                <button onClick={expandHandler}><img src="/downArrow.png" width='20' height='20' alt="downArrow" /></button>
                <div className={styles.contactWrapper}>
                    <img src="/message.png" width='30' alt="aswgsfd" />
                    <Link href={`/profile/${card.slug}`} passHref>
                        <button className={styles.contactBtn}>CONTACT</button>
                    </Link>
                </div>
            </div>

        </Swiper>
    );
}

export default ProfileCard;
