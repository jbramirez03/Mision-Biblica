import React from 'react'

const Survey = () => {
    return (
        <section className='section container survey__section' id='survey'>
            <h1 className='section__title section__title-center'>Encuesta Bíblica</h1>

            <div className="google__form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe1hTUQwj_uSCH-PiqXVvxav5Qk8BV6QzV5EHAT_5jJn6yI2Q/viewform?embedded=true" width="640" height="1707" frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </div>
        </section>
    )
}

export default Survey