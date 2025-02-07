import React, { useEffect, useRef } from 'react'
import {portText} from "../contants"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Port = () => {

    const horizontalRef = useRef(null);
    // 변수를 선언, 초기화 선언

    const sectionsRef = useRef([]);
    // 변수를 선언하는데 배열로 선언하는 명령어
    
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        // gsap.registerPlugin 초기화
        const horizontal = horizontalRef.current;
        // 지금 선택된 값을 변수 horizontal에 대입
        const sections = sectionsRef.current;
        // 지금 선택된 값을 변수 section에 대입

        let scrollTween = gsap.to(sections,{
            xPercent : -120 * (sections.length -1),
            // x축으로 이동(음수:왼쪽으로, 양수:오른쪽으로 이동)하는 명령어
            ease:"none",
            // 애니메이션의 속도가 처음부터 끝까지 일정하게(ease:linear)
            // "power1.in" 천천히 시작, 빠르게 종료
            // "power1.out" 빠르게 시작, 천천히 종료
            // "power1.inOut" 천천히 시작 -> 빠름 -> 천천히 종료

            scrollTrigger:{
                trigger: horizontal,
                start:"top 100px",
                end: () => "+=" + 5000,
                pin:true,
                // 특정요소를 스크롤 중에 고정
                scrub:1,
                //스크롤을 내리는 동안 부드럽게 애니메이션을 실행
                //true: 스크롤 속도에 맞춰 애니메이션 실행
            }
        });
        return()=>{
            scrollTween.kill();
            // 애니메이션을 중단하고 모든 gsap 관련 데이터 제거
            // clearProps: "all" : 애니메이션이 적용된 요소의 css속성 값을 초기화
        }
    },[])
// },[]) 안에 대괄호는 한번만 실행하고 끝내라는 명령어입니다.


    return (
        <section id='port' ref={horizontalRef}>
            <div className="port_inner">
                <div className="port_title">
                    protfolio <em>작업물</em>
                </div>
                <div className="port_wrap">

                    {portText.map((port, key) => (
                        <article 
                        className={`port_item p${key + 1}`} 
                        key={key}
                        ref={(el)=>(sectionsRef.current[key] = el)}
                        >
                            <span className='num'>{port.num}</span>
                            <a href="/" className='img' target='_blank' rel='noreferrer'>
                                <img src={port.img} alt={port.title} />
                            </a>
                            <h3 className='title'>{port.title}</h3>
                            <p className='desc'>
                                {port.desc}
                            </p>
                            <a href={port.url} target='_blank' className='site' rel='noreferrer'>사이트보기</a>
                        </article>
                    ))};
                </div>
            </div>
        </section>
    )
}

export default Port

// Hook이란:
    // 클래스 컴퍼넌트(매우 복잡하고, 이해가 매우 어려워요)를 함수형 컴퍼넌트로 사용할 수 있도록 해주는 명령어.
    // - 컴포넌트 간의 계층을 바꾸지 않고 상태 로직을 재사용할 수 있게 해주는 명령어
    // - 하나의 컴포넌트를 생명주기가 아닌 기능을 기반으로 하여 작은 함수 단위로 나눠서 사용할 수 있도록 해주는 명령어
    // - class문법 없이도 react 기능을 사용할 수 있도록 도와주는 명령어

    // useEffect: - 컴포넌트가 랜더링 될때마다 특정 작업을 실행해주는 Hook명령
               // - 컴포넌트가 랜더링 된 후에 실행되는 부수 효과를 정의하는 코드블럭임.
               // useEffect 내부에서는 gsap라이브러리의 ScrollTrigger을 등록하고 가로 스크롤 애니메이션을 사용할 수 있도록 한다.
               