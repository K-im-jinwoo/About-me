import './About.css'

function About() {
  return (
    <div className='about fs-base'>
      <div className='about__desc1'>
        Google Student Club에서 주최하는 교외활동, <br />
        Link사업단에서 주최한 교내활동 등과 <br />
        Notion과 Git을 활용한 팀 프로젝트, <br />
        Google Student Club과 창업동아리에서 <br />
        Study 를 진행하면서 협업능력을 상승시켰습니다.
      </div>
      <div className='about__desc2'>
        기초가 튼튼해야한다는 생각에 <br />
        친구들과 스터디를 진행하기도 하고, <br />
        Notion 및 Blog에 공부한 내용을 정리를 하면서 <br />
        다시 복습하기도 했습니다.
      </div>
      <div className='about__desc3'>
        최근에는 동아리 팀원들과 실서비스를 개발하고 <br />
        배포하기 위해 프로젝트 개발 단계에 있습니다.
      </div>
      <button className='about__more_btn light-bg text-bg'>자세한 이야기 들어보기</button>
    </div>
  )
}

export default About;