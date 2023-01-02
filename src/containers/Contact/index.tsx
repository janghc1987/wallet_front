import  { useEffect } from 'react';
import axios from 'axios';

const ContactContainer = () => {
  
  const onLogin = (email: String, password: String) => {
    const data = {
      email,
      password,
    };
    axios.post('/login', data).then(response => {
      const { accessToken } = response.data;
  
      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  
      // accessToken을 localStorage, cookie 등에 저장하지 않는다!
  
    }).catch(error => {
      // ... 에러 처리
    });
  }

  
  useEffect(() => {
  
  }, []);

  return (

    <div className="contactusPage">
      <div className="contactusBG"></div>
      <div className="content">
        <p className="tit">Need any help?</p>

        <div className="inputbox step1">
          <p>Full name*</p>
          <div className="inputArea">
            <input type="text" id="inputName" placeholder="Enter your name"/>
          </div>
          <span className="err">Please enter your name</span>
        </div>
        
        <div className="inputbox step2">
          <p>Email*</p>
          <div className="inputArea">
            <input type="text" id="inputEmail" placeholder="Enter your email"/>
          </div>
          <span className="err">Please enter your email</span>
        </div>
        
        <div className="inputbox step3">
          <p>Message*</p>
          <div className="txtArea">
            <textarea name="" id="contactTxt" placeholder="Let us know how we can help you!"></textarea>
            <span id="txtCount">0/500</span>
          </div>
          <span className="err">Please enter within 500 characters.</span>
        </div>
        
        <div className="btnArea">
          <a href="#" className="">SEND MESSAGE</a>
        </div>
      </div>
    </div>

  );
};

export default ContactContainer;