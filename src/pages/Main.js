import { useNavigate } from 'react-router-dom';
import './Main.css'

function Main() {
  return (
    <main className='main'>
      <div className='main__desc_wrap fs-medium'>
        <h2 className='main__tit fs-h2 mark-bg'>KimJinWoo</h2>
        <strong className='main__subtit fs-h2'>Frontend Developer</strong>
        <p>
          동의대학교 산업ICT기술공학과에 <br />
          재학중인 4학년 김진우입니다.
        </p>
        {/* <div className='main__img'>
          <div className='main__git' onClick={() => {
            window.open("https://github.com/K-im-jinwoo/")
          }}>
          </div>
          <div className='main__blog' onClick={() => {
            window.open("http://")
          }}>
          </div>
        </div> */}
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/profile.jpg'}  className='main__profile_img'/>
      </div>
    </main>
  )
}

export default Main;