import React from 'react'



const Studies = () => {

    return (
        <section className='studies__section container section' id='studies'>
            <h2 className="section__title section__title-center">Estudios bíblicos</h2>
            <h3 className="section__subtitle section__title-center">Consulta nuestras últimas publicaciones</h3>

            <div className="study__posts grid">
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/xhgpmBPhscc?si=WfCY9twb9B7_vYxf" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/_DGSHWlc7_g?si=Yks84ymTAiwehXA7" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/loyG6A6R9gY?si=wUauoV5Fq9avQylP" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/_sfl8L2zI18?si=cUNmiGKWg-f8IL68" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/pmB-VwKwNXU?si=Abai0I5FeLihi4hM" allowfullscreen></iframe>
                </div>
                <div className="study__post">
                    <iframe src="https://www.youtube.com/embed/6DxsZWTuJ_w?si=anXuMv5LCrxNhxQK" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Studies