import React from "react";
import depts from "./Institut.json"
import courses from "./Course.json"
// import { JbCard } from "./JbCard.tsx";


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
    return <div className="institut-card">
            {props.name}: <i> {props.dept} </i>
        </div>
}
export const InstitutList = (props, child)  => {
    return <div className="classe_list">
        {
            depts.map((dept, key) =>
                <Classe name={dept.name} key={dept.id} 
                dept={dept.departement} url="#">
                </Classe>)
        }
    </div>
}
