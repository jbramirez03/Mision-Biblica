import React from 'react'



const Studies = () => {

    return (
        <section className='studies__section container section' id='studies'>
            <h2 className="section__title section__title-center">Estudios bíblicos</h2>
            <h3 className="section__subtitle section__title-center">Consulta nuestras últimas publicaciones</h3>

            <div className="study__posts grid">
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/wl09sWlSLyE?si=HPRg1dwatSdAS_BE" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/OvU8s3RrnA4?si=LT0gSuw3nQ6Kdz7y" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/lIhzIraiXHI?si=Pc4X2s3bvSj1megS" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/WLj1IVy4Zeg?si=WNSFweWBEK_vTgEL" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/FPjziCaFer8?si=Mzy7h6ArphqZgqMM" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/uSF8b3kkq9A?si=uxLWA9FoZ5ZIrIqM" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Studies