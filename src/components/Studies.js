import React from 'react'



const Studies = () => {

    return (
        <section className='studies__section container section' id='studies'>
            <h2 className="section__title section__title-center">Estudios bíblicos</h2>
            <h3 className="section__subtitle section__title-center">Consulta nuestras últimas publicaciones</h3>

            <div className="study__posts grid">
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/0CpUshWvUHI" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/lUPRXp-j3Os" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/5Lg8wSLbvKg" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/eK6TimKD3PI" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/7RPhPWZvF5U" allowFullScreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/oAcn5G7NkNY" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Studies