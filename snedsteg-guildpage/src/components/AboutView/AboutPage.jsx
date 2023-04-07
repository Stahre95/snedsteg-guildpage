import React from 'react';
import '../AboutView/AboutPage.css'

function AboutPage() {
  return (
      <div className="about-grid-wrapper">
        <div className="left">
          <div className="progress-container">
            <div className="col-title">PROGRESS</div>
            <h2 className="raid-title">Aberrus, the Shadowed Crucible</h2>
            <p className="progress">0/9M</p>
            <iframe className="raider-progress" src="https://raider.io/widgets/boss-progress?raid=latest&name_style=logo&difficulty=latest&region=eu&realm=kazzak&guild=Snedsteg&boss=latest&period=all&orientation=rect&hide=&chromargb=transparent&theme=dragonflight" frameborder="0"></iframe>
          </div>
          <div className="prev-tier-container">
            <h2 className="raid-title">Vault of the Incarnates</h2>
            <p className="progress">8/8M, World 593</p>
            <iframe className="raider-progress" src="https://raider.io/widgets/boss-progress?raid=latest&name_style=logo&difficulty=latest&region=eu&realm=kazzak&guild=Snedsteg&boss=latest&period=all&orientation=rect&hide=&chromargb=transparent&theme=dragonflight" frameborder="0"></iframe>
          </div>
        <div className="seperator-line"></div>
        </div>
        <div className="right">
          <div className="col-title">OM GUILDEN</div>
          <div className="about-text-container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias sed odio earum, molestias veritatis dignissimos nulla corrupti quas unde tenetur quisquam dicta, repellat deleniti dolorum sapiente eius, natus ex?</div>
        </div>
      </div>
  );
}

export default AboutPage;
