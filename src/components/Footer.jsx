import React from 'react'

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <div className="footer_inner">
                <div className="footer_text">
                    <span>조현호</span>
                    <span>010-8631-0258</span>
                </div>
                <div className="footer_info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sing up</a>
                        </div>
                        <p>로그인을 하시면 나의 작품을 볼수있습니다.</p>
                    </div>
                    <div className="right">
                        <h3>나의 작품 URL</h3>
                        <ul>
                            <li>
                                <a href="/">1차 포트폴리오</a>
                                <em>이 작품은 처음으로 만든 웹페이지로 반응형안됨.</em>
                            </li>
                            <li>
                                <a href="/">팀 프로젝트 포트폴리오</a>
                                <em>팀을 이루어서 작품을 만들었습니다.</em>
                            </li>
                            <li>
                                <a href="/">2차 포트폴리오</a>
                                <em>메인페이지와 서브페이지를 모두 작업해 봤습니다.</em>
                            </li>
                            <li>
                                <a href="/">팀 2차 포트폴리오</a>
                                <em>팀을 이루어서 서브페이지까지 반응형을 넣었습니다.</em>
                            </li>

                            <li>
                                <a href="/">1차 포트폴리오</a>
                                <em>이 작품은 처음으로 만든 웹페이지로 반응형안됨.</em>
                            </li>
                            <li>
                                <a href="/">팀 프로젝트 포트폴리오</a>
                                <em>팀을 이루어서 작품을 만들었습니다.</em>
                            </li>
                            <li>
                                <a href="/">2차 포트폴리오</a>
                                <em>메인페이지와 서브페이지를 모두 작업해 봤습니다.</em>
                            </li>
                            <li>
                                <a href="/">팀 2차 포트폴리오</a>
                                <em>팀을 이루어서 서브페이지까지 반응형을 넣었습니다.</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer