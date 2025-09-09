"use client"

import Popup from 'reactjs-popup';
import React from 'react';
import 'reactjs-popup/dist/index.css';

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-block rounded-full border px-2 py-1 text-xs leading-none">
    {label}
  </span>
);

export default function ProjectsPage() {
  return (
    <div className="px-40 py-4 text-center">
      <main>
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="grid grid-cols-2 gap-10 items-start text-center">

          <div className='space-y-4'>
            <h1 className="text-2xl font-bold">Academic</h1>

            <Popup trigger={
              <button className="trigger-button">How Do Data Visualisation Students Learn? Analysing Behaviour in a Self-Paced Online Module
                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag key={"Python"} label={"Python"} />
                  <Tag key={"Pandas"} label={"Pandas"} />
                  <Tag key={"Jupyter"} label={"Jupyter"} />
                  <Tag key={"NetworkX"} label={"NetworkX"} />
                </div>
              </button>
            } position="right center" modal nested>
              <div className="modal">
                <div className="header font-bold">BSc Honours Computer Science Dissertation | First Class | University of St Andrews</div>
                <div className="content">
                  <p>Designed and executed an independent research project to understand how students engage with a self-paced Data & Information Visualisation module.</p>
                  <p className='font-bold'>Tech Stack:</p>
                  <p className='pl-6'>Python, Pandas, Jupyter</p>
                </div>
              </div>
            </Popup>

            <Popup trigger={<button className="trigger-button">Does Core Social Class Stereotype Content Differ by Group Membership? A False Memory Approach
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag key={"Python"} label={"Python"} />
                <Tag key={"SPSS"} label={"SPSS"} />
              </div>
            </button>} position="right center" modal nested>
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
            <h1 className="text-2xl font-bold">Internships</h1>

            <Popup trigger={<button className="trigger-button">GoldenTree Asset Management - Technology Intern
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag key={"Python"} label={"Python"} />
                <Tag key={"GitLab"} label={"GitLab"} />
                <Tag key={"SQL"} label={"SQL"} />
                <Tag key={"C#"} label={"C#"} />
              </div>
            </button>} position="right center" modal nested>
              <div className="modal">
                <div className="header font-bold">Technology Intern | June-August 2024</div>
                <div className="header italic">Projects:</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div>Pricing Web Application</div>
                  <Tag key={"C#"} label={"C#"} />
                  <Tag key={"Dapper"} label={"Dapper"} />
                  <Tag key={"GitLab"} label={"GitLab"} />
                  <Tag key={"Axios"} label={"Axios"} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div>Automated New Client Activation</div>
                  <Tag key={"Python"} label={"Python"} />
                  <Tag key={"Selenium"} label={"Selenium"} />
                  <Tag key={"GitLab"} label={"GitLab"} />
                  <Tag key={"Axios#"} label={"Axios#"} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div>Data Scraping from Various Sources</div>
                  <Tag key={"Python"} label={"Python"} />
                  <Tag key={"Selenium"} label={"Selenium"} />
                  <Tag key={"GitLab"} label={"GitLab"} />
                  <Tag key={"HTTP Requests"} label={"HTTP Requests"} />
                  <Tag key={"Powershell"} label={"Powershell"} />
                  <Tag key={"SQL Server"} label={"SQL Server"} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div>Text-to-SQL LLM Optimisation</div>
                  {/* <Tag key={"Python"} label={"Python"} /> */}
                  <Tag key={"Vanna.AI"} label={"Vanna.AI"} />
                  <Tag key={"SQL"} label={"SQL"} />
                </div>
                <div className="content">
            
                </div>
              </div>
            </Popup>

            <Popup trigger={<button className="trigger-button">Local Knowledge - Full Stack Developer
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag key={"Flutter"} label={"Flutter"} />
                <Tag key={"Dart"} label={"Dart"} />
                <Tag key={"Firebase"} label={"Firebase"} />
                <Tag key={"Git"} label={"Git"} />
              </div>
            </button>} position="right center" modal nested>
              <div className="modal">
                {/* <div className="header">Tech Stack</div> */}
                <div className="content">
                  <p className='font-bold'>Tech Stack:</p>
                  <p className='pl-6'>Flutter, Firebase, Vue.js</p>
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
