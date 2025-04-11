import React from 'react';
import './EducatingM1B1.css';

const EducatingM1B1 = () => {
const handleRegisterClick = () => {
 window.location.href = 'https://payg.in/customer/#/pay-profile/MTc0NDI0MjkyMjM2MDg2';
};

  return (
 <div className="educating-container">
 <img onClick={handleRegisterClick}
 src="/images/WelcomeScreen.jpg"
alt="Educating Module"
className="educating-image"
 />

<h1 className="educating-heading">Luqman (AS) ki Hakeemana Naseehat se Seekhiye Zindagi ke Usool</h1>

 <p className="educating-paragraph">
 Nimal Maula Foundation laa raha hai ek khaas 11 din ka online course sirf Naujawan boys (15–22 age group) ke liye. Yeh program Qur’an ki roshni mein Luqman-e-Hakeem ki naseehaton par mabni hai, jo aapke akhlaaq, soch aur zindagi ke faislon ko behtar banane mein madad karega.</p>

<p className="educating-paragraph">
 Maahir ulema ki rehnumai mein aap seekhenge shukr guzari, taharat, namaz, sabr, walidain ki izzat aur social life ke adaab — sab Qur’ani taleemat par mabni. Seats limited hain – abhi register karein aur apne liye ek nayi soch aur behtareen mustaqbil ki taraf pehla qadam uthaiye.</p>

  <button className="educating-button" onClick={handleRegisterClick}>
  Register now
 </button>
</div>

);
};

export default EducatingM1B1;
