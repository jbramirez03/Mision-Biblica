import React from 'react'



const Studies = () => {

    return (
        <section className='studies__section container section' id='studies'>
            <h2 className="section__title section__title-center">Estudios bíblicos</h2>
            <h3 className="section__subtitle section__title-center">Consulta nuestras últimas publicaciones</h3>

            <div className="study__posts grid">
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/ZR-jqQi0dO8" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/tnhK5GjWir4" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/BFzqvxx9mag" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/8ZCHMQBTP0Y" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/_w3NxoAvW2Q" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/F1TVQtcr5AE" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Studies