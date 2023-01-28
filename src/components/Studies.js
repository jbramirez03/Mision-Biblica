import React from 'react'

const Studies = () => {
    return (
        <section className='section studies__section' id='studies'>
            <div className="container">
                <span className='section__subtitle'>Estudios Bíblicos</span>
                <h2 className="section__title">Echa un vistazo a nuestros últimos videos<span>.</span></h2>

                <div className="studies__container swiper">
                    <div className="swiper-wrapper">
                        <article className="study__card swiper-slide">
                            <iframe className='study__data' width="275" height="215" src="https://www.youtube.com/embed/b3PWZ5fDVeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className="study__data">
                                <h3 className="study__title">Video</h3>
                            </div>
                        </article>
                        <article className="study__card swiper-slide">
                            <iframe className='study__data' width="275" height="215" src="https://www.youtube.com/embed/b3PWZ5fDVeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className="study__data">
                                <h3 className="study__title">Video</h3>
                            </div>
                        </article>
                        <article className="study__card swiper-slide">
                            <iframe className='study__data' width="275" height="215" src="https://www.youtube.com/embed/b3PWZ5fDVeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className="study__data">
                                <h3 className="study__title">Video</h3>
                            </div>
                        </article>
                    </div>

                    <div class="swiper-button-next">
                        <i class="bx bx-chevron-right"></i>
                    </div>
                    <div class="swiper-button-prev">
                        <i class="bx bx-chevron-left"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Studies