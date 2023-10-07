import React from "react";
import logo from './logo.svg'
import depts from "./Institut.json"
import courses from "./Course.json"


export const DeptUL = (props, child) => {
    // TODOS
     return <ul>
        <li>
            <div className="dept" id="{{ dept.slug }}">
                <div className="Calendar--Days" id="{{ dept.slug }}">
                     <h3>
                         28
                     </h3>
                     <h5>
                         Wed
                     </h5>
                </div>
                <div className="dept_desc" id="{{ dept.slug }}">
                    <label id="{{ dept.slug }}">
                        Review Chapter 4 in the fisc book 
                    </label>
                    <p id="{{ dept.slug }}">
                        13H00 - 14H15
                    </p>
                </div>
                <div className="Calendar--Days" onClick={()=>{prompt('Planning to remove it? (yes/no)')}}>
                <svg width="18" height="18" version="1.1" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="#fff">
                    <rect x="1" y="2" width="16" height="2" rx="0" ry="0" className="fillStroke"/>
                    <rect x="5" width="8" height="2" rx="0" ry="0" className="fillStroke"/>
                    <rect transform="rotate(-90)" x="-15" y="7" width="10" height="1" rx="0" ry="0" className="fillStroke"/>
                    <rect transform="rotate(-90)" x="-15" y="10" width="10" height="1" rx="0" ry="0" className="fillStroke"/>
                    </g><path d="m14 3v12c0 1.11-0.892 2-2 2h-6c-1.11 0-2-0.892-2-2v-12z" fill="none" stroke="#fff" 
                    strokeDashoffset="12.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="fillStroke"/>
                </svg>
                </div>
            </div>
        </li>
        <li>
         </li>
        <li>
            <div className="dept" id="{{ dept.slug }}">
                <div className="Calendar--Days" id="{{ dept.slug }}">
                     <h3>
                         26
                     </h3>
                     <h5>
                         Mon
                     </h5>
                </div>
                <div className="dept_desc" id="{{ dept.slug }}">
                    <label id="{{ dept.slug }}">
                        Practise and Review the last Cash Managment  
                    </label>
                    <p id="{{ dept.slug }}">
                        13H00 - 14H15
                    </p>
                </div>
                <div className="Calendar--Days" onClick={()=>{prompt('Planning to remove it? (yes/no)')}}>
                <svg width="18" height="18" version="1.1" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="#fff">
                    <rect x="1" y="2" width="16" height="2" rx="0" ry="0" className="fillStroke"/>
                    <rect x="5" width="8" height="2" rx="0" ry="0" className="fillStroke"/>
                    <rect transform="rotate(-90)" x="-15" y="7" width="10" height="1" rx="0" ry="0" className="fillStroke"/>
                    <rect transform="rotate(-90)" x="-15" y="10" width="10" height="1" rx="0" ry="0" className="fillStroke"/>
                    </g><path d="m14 3v12c0 1.11-0.892 2-2 2h-6c-1.11 0-2-0.892-2-2v-12z" fill="none" stroke="#fff" 
                    strokeDashoffset="12.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="fillStroke"/>
                </svg>
                </div>
            </div>
        </li>
     </ul>
}
export const CourseList = (props, child)  => {
    return <div className="course_list">
    {  
        courses.map( (course, key) =>
            <a href="/course/url/" className="row" key={course.id}>
                <span className="col col1"> { course.title } </span>
                <span className="col col2"> { course.date  } </span>
                <span className="col col3"> { course.hour  } </span>
            </a>
        )
    }
    </div>
}



const Classe = (props, child) => {
    return  <CardImageTitled title={props.dept}/>
}
export const InstitutList = (props, child)  => {
    return <div className="classe_list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30">
            <g>
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 10.667l9.223-6.149a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L12 13.333v5.733a.5.5 0 0 1-.777.416L.624 12.416a.5.5 0 0 1 0-.832l10.599-7.066a.5.5 0 0 1 .777.416v5.733zm-2 5.596V7.737L3.606 12 10 16.263zm10 0V7.737L13.606 12 20 16.263z"/>
            </g>
        </svg>

        {
            depts.map((dept, key) =>
                <Classe name={dept.name} key={dept.id} 
                dept={dept.departement} url="#">
                </Classe>)
        }
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30">
            <g>
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 13.333l-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416v-5.733zM10.394 12L4 7.737v8.526L10.394 12zM14 7.737v8.526L20.394 12 14 7.737z"/>
            </g>
        </svg>

    </div>
}

export const CardImageTitled = ({ title, imageSrc, design }) => {
    return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px', // Add margin for spacing between cards
        width: '90px',
        justifyContent: "center",
        alignItems: 'center', // Center items horizontally
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <img src={logo} alt={title} style={{
            maxWidth: '40px',
            height: 'auto',
            }} />
        <div style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '10px',
            }}>
            {title}
        </div>
      </div>
    );
  };