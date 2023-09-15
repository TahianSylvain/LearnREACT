import './App.css';
import './basee.css';
import './homeee.css';
import './scrollbarrr.css';
import './carousel2.css';
import './tea_home.css';
import { InteractiveSearch, Clock } from './Components/RepairedInJet'
import { Classe } from './Components/UserInterface'


const DeptUL = (props, child) => {
    return <ul>
    {" for dept in depts "} 
       <li>
           <div class="dept" id="{{ dept.slug }}">
               <div class="img" 
                   style={{backgroundImage: "%PUBLIC_URL%/favicon.ico"}} id="{{ dept.slug }}">
               </div>
               <div class="dept_desc" id="{{ dept.slug }}">
                   <label id="{{ dept.slug }}">
                       Review Chapter 4 in the math textbook 
                   </label>
                   <p id="{{ dept.slug }}">
                       13H00 - 14H15
                   </p>
               </div>
           </div>
           <div class="{{ dept.slug }}_container subjects_container">
               <ul class="{{dept.slug}} subjects">
               </ul>
           </div>
       </li>
    {" endfor "}
    </ul>
}
const CourseList = (props, child)  => {
    return <div class="course_list">
    {" for course in courses "} 
        <a href="{{ course.url }}" class="row" style={{textDecoration: null}}>
            <span class="col col1"> course.title </span>
            <span class="col col2"> course.date </span>
            <span class="col col3"> course.hour </span>
        </a>
     {" endfor "}
    </div>
}
const InstitutList = (props, child)  => {
    return <div class="classe_list">
    {" for course in courses "} 
        <Classe name="ISPM" url=""></Classe>
        <Classe name="UCM" url=""></Classe>
        <Classe name="CNTMAD" url=""></Classe>
    {" endfor "} 
    </div>
}


function App() {
  return (
    <div className="App"> 
        <div class="base_container">
            <div class="sidebar">
                <div class="logo">
                    <div class="logo_img">
                        <img src="./lvlind9.webp" width="40px" height="40px" alt="project" />
                        <img src="./logo-ISPM.jpeg" width="40px" height="40px" alt="" />
                    </div>
                </div>
                <nav>
                    <div class="link">
                        <div className="collage">
                        <svg width="20" height="20" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="5" ry="5" fill="#e53eff" stroke-width="0"/>
                            <g transform="scale(1.33)" fill="#fff" stroke-width=".998">
                            <path d="m21 3h-7.5v6h7.5zm-10.5 0h-7.5v9h7.5zm10.5 9h-7.5v9h7.5zm-10.5 3h-7.5v6h7.5z" fill="#fff" stroke-width=".748"/>
                            </g>
                        </svg>

                        </div>
                        <div class="home">
                            <svg width="20" height="20" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m5.33 12.1v7.72c0 0.673 0.498 1.22 1.11 1.22h3.15c0.307 0 0.556-0.273 0.556-0.61v-5.28c0-0.111 0.0829-0.203 0.185-0.203h3.33c0.101 0 0.185 0.0918 0.185 0.203v5.28c0 0.337 0.249 0.61 0.556 0.61h3.15c0.613 0 1.11-0.546 1.11-1.22v-7.72zm16.3-1.66-9.25-8.23c-0.242-0.215-0.623-0.215-0.865 0l-9.26 8.24c-0.196 0.182-0.308 0.433-0.308 0.689 0 0.533 0.468 0.967 1.04 0.967h17.9c0.574 0 1.04-0.434 1.04-0.967 0-0.256-0.112-0.507-0.318-0.697z" fill="#fff" stroke-width=".0326"/>
                            </svg>
                        </div>
                        <div class="group">
                            <svg width="18" height="18" version="1.1" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="#fff" stroke-width="2">
                                    <path d="m1 10v-7c0-1.66 0.34-2 2-2h7c1.56 0 2.83 1.18 2.98 2.69 0.0103 0.101 0.0156 1.2 0.0156 1.31" stroke-dashoffset="12.8" stroke-linecap="round" stroke-linejoin="round"  className='painter' />
                                    <path d="m13 5h4v9c0 2.22-0.78 3-3 3h-10c-2.22 0-3-0.78-3-3v-9" stroke-linecap="round" stroke-linejoin="round" className='painter' />
                                    <path d="m1 6h16"/>
                                </g>
                            </svg>
                        </div>
                        <div className="_user_">
                            <svg width="18" height="18" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10 12c-2.67 0-8 1.15-8 3.43v2.57h16v-2.57c0-2.28-5.33-3.43-8-3.43z" fill="#fff"/><path d="m10 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="#fff"/></svg>
                        </div>
                        <div class="settings">
                            <a href="{% url 'home' %}" title="Settings">
                                <i class="ri-settings-line"></i>
                            </a>
                        </div>
                        <div class="Languages" onClick={()=> prompt('en, fr')}>
                            <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9856 0C17.842 0 21.3384 1.56473 23.8725 4.09875C26.3996 6.62585 27.9643 10.1223 27.9643 13.9856C27.9643 17.842 26.3996 21.3384 23.8725 23.8725C21.3384 26.3996 17.842 27.9643 13.9856 27.9643C10.1223 27.9643 6.62585 26.3996 4.09875 23.8725C1.56473 21.3384 0 17.842 0 13.9856C0 10.1223 1.56473 6.62585 4.09875 4.09875C6.62585 1.56473 10.1223 0 13.9856 0ZM22.3285 5.64271C21.4977 4.80496 20.5422 4.09875 19.4968 3.54487C19.6629 3.80104 19.8222 4.06413 19.9745 4.34108C21.2138 6.58431 22.0239 9.57529 22.1693 12.8917H25.7349C25.4787 10.0669 24.2256 7.53284 22.3285 5.64271ZM22.3285 22.3285C24.2256 20.4314 25.4787 17.8974 25.7349 15.0726H22.1693C22.0239 18.389 21.2138 21.38 19.9745 23.6232C19.8222 23.9002 19.6629 24.1702 19.4968 24.4194C20.5422 23.8655 21.4977 23.1593 22.3285 22.3285ZM5.64271 22.3285C6.47353 23.1593 7.42206 23.8655 8.47445 24.4194C8.30828 24.1702 8.14904 23.9002 7.99672 23.6232C6.7574 21.38 5.94734 18.389 5.79503 15.0726H2.23631C2.49248 17.8974 3.74565 20.4314 5.64271 22.3285ZM5.64271 5.64271C3.74565 7.53284 2.49248 10.0669 2.23631 12.8917H5.79503C5.94734 9.57529 6.7574 6.58431 7.99672 4.34108C8.14904 4.06413 8.30828 3.80104 8.47445 3.54487C7.42206 4.09875 6.47353 4.80496 5.64271 5.64271ZM15.0726 2.38863V12.8917H19.9883C19.8429 9.95609 19.1367 7.33206 18.0636 5.39346C17.2328 3.88412 16.2011 2.81789 15.0726 2.38863ZM15.0726 15.0726V25.5757C16.2011 25.1464 17.2328 24.0802 18.0636 22.5778C19.1367 20.6322 19.8429 18.0082 19.9883 15.0726H15.0726ZM12.8917 25.5757V15.0726H7.98287C8.12134 18.0082 8.83447 20.6322 9.90762 22.5778C10.7385 24.0802 11.7701 25.1464 12.8917 25.5757ZM12.8917 12.8917V2.38863C11.7701 2.81789 10.7385 3.88412 9.90762 5.39346C8.83447 7.33206 8.12134 9.95609 7.98287 12.8917H12.8917Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div class="logout">
                        <a href="{% url 'logout' %}">
                            <i class="ri-logout-box-line"></i>
                        </a>
                    </div>
                </nav>
                
            </div>

            <div class="main_container">
                <div class="topbar">
                    
                    <div class="stu_header">
                        <div class="topbar_container">
                            <strong>LevelMind</strong>
                            <Clock/>
                            <InteractiveSearch/>
<svg width="20" height="20" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
 <g transform="matrix(5.04 0 0 4.87 -.667 -1.6)" fill="#fff" fill-rule="evenodd" stroke-width=".0712">
  <path d="m3.63 3.03-0.362-0.369v-1.06c0-0.587-0.511-1.07-1.16-1.07-0.648 0-1.16 0.472-1.16 1.07v1.06l-0.362 0.369c-0.0622 0.0692-0.0872 0.161-0.0373 0.242 0.0373 0.0806 0.125 0.138 0.225 0.138h2.66c0.0997 0 0.187-0.0577 0.225-0.138 0.0622-0.0806 0.0497-0.172-0.025-0.242z"/>
  <path d="m2.55 3.61h-0.866c-0.0866 0-0.162 0.0962-0.162 0.206s0.0757 0.205 0.162 0.205h0.866c0.0866 0 0.162-0.0955 0.162-0.205 0-0.109-0.0757-0.206-0.162-0.206z"/>
 </g>
</svg>
                        </div>
                        <div class="topbar_profile">
                            <div class="profile_btn">
                                    <img src="{% static 'base/img/default/profile-male.jpg' %}" alt="" width="34px" />
                                <p>
                                    {" user "}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="main_content"><div class="tea_block">

        <main class="courses_container">
            <div class="course_list_container">
                <div className="_section_">
                    <header class="course_header">
                        <h4>
                            <span>Your Classes</span>
                        </h4>
                    </header>
                    <InstitutList></InstitutList>
                    {/* */}
                </div>
                <div className="_section_">
                    <header class="course_header">
                        <h4>
                            <span>All Courses</span>
                        </h4>
                    </header>
                    <div class="course_header_table row">
                        <span class="col col1">Title</span>
                        <span class="col col2">Date</span>
                        <span class="col col3">Hour</span>
                    </div>
                    <CourseList>  </CourseList>
                </div>
                <div className="_section_">
                    <form action="" method="post">
                        <fieldset>
                            <legend>
                                <header class="course_header">
                                    <h4>
                                        <span>New Course</span>
                                    </h4>
                                </header>
                            </legend>
                            <input type="text" name="name" width="20" placeholder='Cours' id="" />
                            <select name="Dept" id="">
                                <option value="default">every</option>
                                <option value="INFO-Sci"></option>
                            </select>
                            <input type="file" name="" id="" />
                        </fieldset>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </main>
<aside class="aside_container">
    <div class="aside_content">
        <div className="emploie-temps">
            <img src="" width="400" height="300" alt="" id="schedule" />
        </div>
        <header class="aside_header">
            <h4>Todo list</h4>
        </header>
        <main class="dept_container">
            <div class="dept_content">
                <DeptUL> </DeptUL>
            </div>
        </main>
    </div>
</aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default App;
