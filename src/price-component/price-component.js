import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './price-component.css';
const PriceComponent = () => {
    return (
        <>


<div className = "tab">

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Оплата">
    <div>
            <p className="text">
Ви можете сплатити за послуги готівковим або безготівковим способом при оформленні та отриманні вашого приладу. 
Просто скажіть про це  під час оформлення замовлення. 
Ми вам зателефонуємо коли ремонт буде завершено.</p>
        </div>
  </Tab>
  <Tab eventKey="profile" title="Повернення">
    <div>
            <p className="text">Заперечення щодо наданих послуг та повернення коштів можна обговорити за контактним телефоном на сторінці "Про нас".</p>
        </div>
  </Tab>

</Tabs>
</div>
<div>

  <table border="1" width="60%" cellpadding="0">
  <h1>Ціни*</h1>
   <tr>
    <th>Ноутбук</th>
    <th>650грн.</th>
   </tr>
   <tr>
    <th>Комп'ютер</th>
    <th>500грн.</th>
   </tr>
   <tr>
    <th>Принтер</th>
    <th>350грн.</th>
   </tr>
   <tr>
    <th>Заправка картриджа</th>
    <th>130грн.</th>
   </tr>
   <br/>
<p>*вказані ціни дорівнюють приблизній вартості послуги з ремонту не враховуючи додаткові витрати</p>

   
 </table>
<br/>
<br/>
</div>
        </>
    );
};

export default PriceComponent;