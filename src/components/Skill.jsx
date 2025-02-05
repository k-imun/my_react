import React from 'react'
import{skillText} from "../contants"


const Skill = () => {
    return (
        <section id='skill'>
            <div className="skill_inner">
                <h2 className='skill_title'>
                    Challenge <em>나의 도전</em>
                </h2>
                <div className="skill_desc">
                    {skillText.map((skill,key)=>( /* skillText이란 이름을 skill로 사용한다./ map은 반복해주는 메서드*/
                        <div key={key}> {/* key는 index 값 */}
                            <span>{key+1}.</span>
                            <h3>{skill.title}</h3>
                            <p>
                                {skill.desc}<br/><br/>
                                {skill.desc2}<br/><br/>
                            </p>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default Skill