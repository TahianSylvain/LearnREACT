import './App.css';
import './basee.css';
import './homeee.css';
import './scrollbarrr.css';
import './carousel2.css';
import './tea_home.css';
import { InteractiveSearch, Clock } from './Components/RepairedInJet'


function App() {
  return (
    <div className="App"> 
        <div class="base_container">
            <div class="sidebar">
                <div class="logo">
                    <div class="logo_img">
                        <img src="{% static 'base/img/logo-ISPM.jpeg' %}" width="40px" height="40px" alt="" />
                    </div>
                </div>
                <nav>
                    <div class="link">
                        <div class="home">
                            <a href="{% url 'home' %}" title="Home">
                                <i class="ri-home-4-line"></i>
                            </a>
                        </div>
                        <div class="settings">
                            <a href="{% url 'home' %}" title="Settings">
                                <i class="ri-settings-line"></i>
                            </a>
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
                            <Clock/>
                            <InteractiveSearch/>
                            <p>{" student.dept "}</p>
                        </div>
                        <div class="topbar_profile">
                            <div class="profile_btn">
                                    <img src="{% static 'base/img/default/profile-male.jpg' %}" alt="" width="34px" />
                                <p>
                                    {" user "}
                                </p>
                            </div>
                            <div class="card_profile">
                                <a href="{% url 'logout' %}">Logout</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="main_content"><div class="tea_block">

        <main class="courses_container">
            <div class="course_list_container">
                <header class="course_header">
                    <h4>Courses:&nbsp;
                        <span>All</span>
                    </h4>
                </header>
                <div class="course_header_table row">
                    <span class="col col1">Title</span>
                    <span class="col col2">Date</span>
                    <span class="col col3">Hour</span>
                </div>
                <div class="course_list">
                    {" for course in courses "}
                        <a href="{{ course.url }}" class="row" style={{textDecoration: null}}>
                            <span class="col col1"> course.title </span>
                            <span class="col col2"> course.date </span>
                            <span class="col col3"> course.hour </span>
                        </a>
                    {" endfor "}
                </div>
            </div>
        </main>
<aside class="aside_container">
    <div class="aside_content">
        <header class="aside_header">
            <h4>taught sector</h4>
        </header>
        <main class="dept_container">
            <div class="dept_content">
                <ul>
                    {" for dept in depts "}
                        <li>
                            <div class="dept" id="{{ dept.slug }}">
                                <div class="img" 
                                    style={{backgroundImage: "%PUBLIC_URL%/favicon.ico"}} id="{{ dept.slug }}">
                                </div>
                                <div class="dept_desc" id="{{ dept.slug }}">
                                    <label id="{{ dept.slug }}">{" dept.name "}</label>
                                    <p id="{{ dept.slug }}">{" dept.nbr_stu "}&nbsp;Students
                                        <h6>New 8 courses</h6>
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
            </div>
        </main>
    </div>
</aside>
</div>
                </div>
            </div>
        </div>
 
      <footer className="App-header">
        <div class="row copyright">
            <p><i class="ri-copyright-line"></i>2022&nbsp;&nbsp;levelmind.org</p>
            <p>
                <a href="https://wikipedia.com/MIT-licence/">Privacy Policy</a>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <a href="https://">Terms&nbsp;&nbsp;&&nbsp;&nbsp;Condition</a>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <a href="https://">FAQ</a>
            </p>
        </div>

      </footer>
    </div>
  );
}
export default App;
