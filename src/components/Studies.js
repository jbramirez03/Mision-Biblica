import React from 'react'



const Studies = () => {

    return (
        <section className='studies__section container section' id='studies'>
            <h2 className="section__title section__title-center">Estudios bíblicos</h2>
            <h3 className="section__subtitle section__title-center">Consulta nuestras últimas publicaciones</h3>

            <div className="study__posts grid">
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/fmOez9alqzo" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/zwjwT6iwe2M" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/fAscy-1Z-Q0" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/Ky-s94IbaHM" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/gLOfhw7l_vw" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/LQN4qi1RB6w" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Studies