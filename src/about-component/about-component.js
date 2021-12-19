import React from 'react';
import img from './img.jpg' 
import './about.css';
const AboutComponent = () => {
    return (
        <>
       <img
      className="AboutImg"
      src={img}
      width="100%"
    />*/
 <h1 class = "T" >Про нас</h1>
 <div>
<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.847735551001!2d24.69736961543974!3d48.918293179293414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c13e0fdaffc9%3A0xb9d6b892bad4f810!2z0LLRg9C70LjRhtGPINCT0YPRgNC40LrQsCwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQuiwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1suk!2sua!4v1639858042089!5m2!1suk!2sua" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
<div className="about" >
<h1 >Майстерня "Електрон"</h1><br/>
<p className="text1" >Ремонт електроніки, та заправка картриджів<br/>
м.Івано-Франківськ<br/>
Вул.Романа Гурика 8<br/>

</p>

<p>
Пн-Сб 09:00-18:30 <br/>
Нд - Вихідний
</p>


<p>Тел. 0668467209
</p>
<br/>
<p><a className="socialMedia" href="https://www.instagram.com/">Наш instagram</a></p>

<p><a className="socialMedia"  href="https://www.facebook.com/">Наш facebook</a></p>
<br/><br/><br/><br/>


</div>
</div>
 </>
    );
};

export default AboutComponent;
