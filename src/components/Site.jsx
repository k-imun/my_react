import React from 'react'

const siteText = [
    {
        text: ["Make","site compliant with","html"],
        title: "2차 포트폴리오",
        code: "/",
        view: "/",
        info: ["site coding","production period : 2day","use stack : HTML5/CSS3, 자바스크립트, 제이쿼리, 리액트"],
    },
    {
        text: ["Make","site compliant with","CSS"],
        title: "팀 프로젝트",
        code: "/",
        view: "/",
        info: ["site coding","production period : 2day","use stack : HTML5/CSS3, 자바스크립트, 제이쿼리, 리액트"],
    },
    {
        text: ["Make","site compliant with","제이쿼리"],
        title: "1차 포트폴리오",
        code: "/",
        view: "/",
        info: ["site coding","production period : 2day","use stack : HTML5/CSS3, 자바스크립트, 제이쿼리, 리액트"],
    },
    {
        text: ["Make","site compliant with","리디자인"],
        title: "리바트 리디자인",
        code: "/",
        view: "/",
        info: ["site coding","production period : 2day","use stack : HTML5/CSS3, 자바스크립트, 제이쿼리, 리액트"],
    },
]

const Site = () => {
    return (
        <section id='site'>
            <div className="site_inner">
                <h2 className='site_title'>
                    Site coding <em>나의 결과물</em>
                </h2>
                <div className="site_wrap">
                    {siteText.map((site,key)=>(
                        <article className={`site_item s${key+1}`} key={key}>
                        <span className='num'>{key+1}</span>
                        <div className="text">
                            <div>{site.text[0]}</div>
                            <div>{site.text[1]}</div>
                            <div>{site.text[2]}</div>
                        </div>
                        <h3 className='title'>{site.title}</h3>
                        <div className="btn">
                            <a href={site.code}></a>
                            <a href={site.view}></a>
                        </div>
                        <div className="info">
                            <span>{site.info[0]}</span>
                            <span>{site.info[1]}</span>
                            <span>{site.info[2]}</span>
                        </div>
                    </article>
                    ))};
                </div>
            </div>
        </section>
    )
}

export default Site