"use client"

import Popup from 'reactjs-popup';
import React from 'react';
import 'reactjs-popup/dist/index.css';

export default function ProjectsPage() {
  return (
    <div className="space-y-6 max-w-6xl  px-10 py-4">
      <main>
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="grid grid-cols-2 gap-10 items-start">

          <div className='space-y-4'>
            <h1 className="text-2xl font-bold">Academic</h1>

            <Popup trigger={<button className="trigger-button">How Do Data Visualisation Students Learn? Analysing Behaviour in a Self-Paced Online Module</button>} position="right center" modal nested>
              <div className="modal">
                <div className="header font-bold">BSc Honours Computer Science Dissertation | First Class | University of St Andrews</div>
                <div className="content">
                  <p>Designed and executed an independent research project to understand how students engage with a self-paced Data & Information Visualisation module.</p>
                  <p className='font-bold'>Tech Stack:</p>
                  <p className='pl-6'>Python, Pandas, Jupyter</p>
                </div>
              </div>
            </Popup>

            <Popup trigger={<button className="trigger-button">Does Core Social Class Stereotype Content Differ by Group Membership? A False Memory Approach</button>} position="right center" modal nested>
              <div className="modal">
                <div className="header font-bold">BSc Honours Psychology Dissertation | First Class | University of St Andrews</div>
                <div className="content">
                  <p>Designed and conducted an independent research project exploring whether members of different UK social classes differ in the centrality of economic, social, and cultural capital within their stereotypes of others.</p>
                  <p className='font-bold'>Tech Stack:</p>
                  <p className='pl-6'>Python, SPSS</p>
                </div>
              </div>
            </Popup>

          </div>

          <div className='space-y-6'>
            <h1 className="text-2xl font-bold">Professional</h1>

            <Popup trigger={<button className="trigger-button">GoldenTree Asset Management - Technology Intern</button>} position="right center" modal nested>
              <div className="modal">
                <div className="header">Tech Stack</div>
                <div className="content">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Python</li>
                    <li>C#</li>
                    <li>Powershell</li>
                  </ul>
                </div>
              </div>
            </Popup>

            <Popup trigger={<button className="trigger-button">Local Knowledge - Full Stack Developer</button>} position="right center" modal nested>
              <div className="modal">
                <div className="header">Tech Stack</div>
                <div className="content">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Flutter</li>
                    <li>Firebase</li>
                    <li>Vue.js</li>
                  </ul>
                </div>
              </div>
            </Popup>
          </div>
        </div>

        {/* <h3 className="italic">Year-Long Software Engineering Team Project</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Worked in an Agile team.</li>
        </ul> */}

      </main>
    </div>
  );
}
