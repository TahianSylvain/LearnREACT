import './App.css';
import './basee.css';
import './homeee.css';
import './scrollbarrr.css';
import './carousel2.css';
import './tea_home.css';
import './Responsive.css'

import axios from 'axios';
// import { Schedule } from './Components/Schedule.jsx';
import { InteractiveSearch, Clock } from './Components/RepairedInJet';
import {DeptUL, CourseList, InstitutList} from './Components/UserInterface';
import { useState, useEffect, useRef } from 'react';


function App() {
  useEffect(
    () => {
      // Make a GET request
      axios.get('http://localhost:8000/api/for-a-prof')
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('An error occurred:', error);
      });
    }, []
  )
    const [state, setState] = useState({
        enter: ""
    })
    const fileInputRef = useRef(null);

    const handleFileInputClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };    
    const Nouveau = () => {
        const date = new Date();
        // const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
        // const formattedDate = date.toLocaleDateString('en-GB', options);

        if (state.enter === "")
            return(<></>)
        else // AZA ATAO ANATY ./NewFile.css ireo style={{}} ireo fa potika
            return(
            <div className="new--course" style={{
                            width: "100%",
                            height: "100%"
                        }}>
                <a classe="new--row" href="/url/" style={{
                            textDecoration: "None",
                            fontSize: "0.9rem", 
                            fontFamily: "primary_font",             
                            display: "flex",
                            padding: "5px 30px",
                        }}>
                    <span style={{ width: "60%",  }}> {state.enter} </span>
                    <span style={{ width: "20%", textAlign:"center" }}> 
                        {date.getDay()<10 ? "0"+date.getDay().toString():date.getDay().toString()}-
                        {date.getMonth()<10 ? "0"+date.getMonth().toString(): date.getMonth().toString()}-
                        {date.getFullYear().toString().slice(2, )}
                     </span>
                    <span style={{ width: "20%", textAlign:"center" }}> now </span>
                </a>
            </div>)
    }
    function handleText(e){
        setState({enter: e.target.value})
    }
    // State variable to hold the selected file name
    const [selectedFileName, setSelectedFileName] = useState("No video selected");

    // Event handler for file input change
    const handleFileInputChange = (e) => {
        const fileName = e.target.files[0]?.name || "No video selected";
        setSelectedFileName(fileName);
    };

  return (
    <div className="App">
        <div className="base_container">
            <div className="sidebar">
                <div className="logo">
                    <div className="logo_img">
                        <img src="./lvlind9.webp" width="40px" height="40px" alt="project" />
                        <img src="./logoISPM.webp" width="40px" height="40px" alt="ispm" />
                    </div>
                </div>
                <nav>
                    <div className="link">
                        <div className="collage">
                        <svg width="20" height="20" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="5" ry="5" fill="#e53eff" strokeWidth="0"/>
                            <g transform="scale(1.33)" fill="#fff" strokeWidth=".998">
                            <path d="m21 3h-7.5v6h7.5zm-10.5 0h-7.5v9h7.5zm10.5 9h-7.5v9h7.5zm-10.5 3h-7.5v6h7.5z" fill="#fff" strokeWidth=".748"/>
                            </g>
                        </svg>

                        </div>
                        <div className="home">
                            <svg width="20" height="20" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m5.33 12.1v7.72c0 0.673 0.498 1.22 1.11 1.22h3.15c0.307 0 0.556-0.273 0.556-0.61v-5.28c0-0.111 0.0829-0.203 0.185-0.203h3.33c0.101 0 0.185 0.0918 0.185 0.203v5.28c0 0.337 0.249 0.61 0.556 0.61h3.15c0.613 0 1.11-0.546 1.11-1.22v-7.72zm16.3-1.66-9.25-8.23c-0.242-0.215-0.623-0.215-0.865 0l-9.26 8.24c-0.196 0.182-0.308 0.433-0.308 0.689 0 0.533 0.468 0.967 1.04 0.967h17.9c0.574 0 1.04-0.434 1.04-0.967 0-0.256-0.112-0.507-0.318-0.697z" fill="#fff" strokeWidth=".0326"/>
                            </svg>
                        </div>
                        <div className="group">
                            <svg width="18" height="18" version="1.1" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="#fff" strokeWidth="2">
                                    <path d="m1 10v-7c0-1.66 0.34-2 2-2h7c1.56 0 2.83 1.18 2.98 2.69 0.0103 0.101 0.0156 1.2 0.0156 1.31" strokeDashoffset="12.8" strokeLinecap="round" strokeLinejoin="round"  className='painter' />
                                    <path d="m13 5h4v9c0 2.22-0.78 3-3 3h-10c-2.22 0-3-0.78-3-3v-9" strokeLinecap="round" strokeLinejoin="round" className='painter' />
                                    <path d="m1 6h16"/>
                                </g>
                            </svg>
                        </div>
                        <div className="_user_">
                            <svg width="18" height="18" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10 12c-2.67 0-8 1.15-8 3.43v2.57h16v-2.57c0-2.28-5.33-3.43-8-3.43z" fill="#fff"/><path d="m10 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="#fff"/></svg>
                        </div>
                        <div className="settings">
                            <a href="{% url 'home' %}" title="Settings">
<svg width="20" height="20" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g transform="matrix(1.73e-6 1.73e-6 -1.73e-6 1.73e-6 -7.37 22.3)" clipRule="evenodd" fill="#ffffff" fillRule="evenodd" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif" fontSize="5px" fontWeight="bold" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" strokeWidth="427290" textRendering="geometricPrecision">
</g>
  <path d="m13.5 6c-3.31-0.837-6.68 1.17-7.52 4.48-0.837 3.31 1.17 6.68 4.48 7.52 3.31 0.837 6.68-1.17 7.52-4.48 0.837-3.31-1.17-6.68-4.48-7.52z" fill="#fff"/>
  <g transform="matrix(.0469 .0119 -.0119 .0469 3.03 -3.04)" fill="#fff" strokeWidth="20.7">
    <g fill="#fff" strokeWidth="20.7">
	<g fill="#fff" strokeWidth="20.7">
		<g fill="#fff" strokeWidth="20.7">
			<path d="m465 303 46.5-46.5-46.5-46.7c-4.66-4.63-6.48-11.4-4.75-17.7l17-63.5-63.6-17.2c-6.34-1.68-11.3-6.64-13-13l-17-63.5-63.7 16.9c-6.34 1.75-13.1-0.072-17.7-4.75l-46.5-46.5-46.7 46.5c-4.62 4.67-11.4 6.49-17.7 4.75l-63.5-17-17.2 63.6c-1.68 6.34-6.64 11.3-13 13l-63.5 17 16.9 63.7c1.72 6.34-0.094 13.1-4.75 17.7l-46.5 46.5 46.5 46.7c4.66 4.63 6.48 11.4 4.75 17.7l-17 63.5 63.6 17.2c6.34 1.68 11.3 6.64 13 13l17 63.5 63.7-16.9c1.52-0.437 3.09-0.652 4.66-0.64 4.9 1e-3 9.6 1.94 13.1 5.39l46.5 46.5 46.7-46.5c4.61-4.68 11.4-6.5 17.7-4.75l63.5 17 17.2-63.6c1.68-6.34 6.64-11.3 13-13l63.5-17-16.9-63.7c-1.72-6.34 0.092-13.1 4.75-17.7zm-209 124c-101 0-171-69.7-171-171s69.7-171 171-171 171 69.7 171 171c-0.101 101-69.7 171-171 171z" fill="#fff" strokeWidth="20.7"/>
		</g>
	</g>
  </g>
  </g>
</svg>
                            </a>
                        </div>
                        <div className="Languages" onClick={()=> prompt('en, fr')}>
                            <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.9856 0C17.842 0 21.3384 1.56473 23.8725 4.09875C26.3996 6.62585 27.9643 10.1223 27.9643 13.9856C27.9643 17.842 26.3996 21.3384 23.8725 23.8725C21.3384 26.3996 17.842 27.9643 13.9856 27.9643C10.1223 27.9643 6.62585 26.3996 4.09875 23.8725C1.56473 21.3384 0 17.842 0 13.9856C0 10.1223 1.56473 6.62585 4.09875 4.09875C6.62585 1.56473 10.1223 0 13.9856 0ZM22.3285 5.64271C21.4977 4.80496 20.5422 4.09875 19.4968 3.54487C19.6629 3.80104 19.8222 4.06413 19.9745 4.34108C21.2138 6.58431 22.0239 9.57529 22.1693 12.8917H25.7349C25.4787 10.0669 24.2256 7.53284 22.3285 5.64271ZM22.3285 22.3285C24.2256 20.4314 25.4787 17.8974 25.7349 15.0726H22.1693C22.0239 18.389 21.2138 21.38 19.9745 23.6232C19.8222 23.9002 19.6629 24.1702 19.4968 24.4194C20.5422 23.8655 21.4977 23.1593 22.3285 22.3285ZM5.64271 22.3285C6.47353 23.1593 7.42206 23.8655 8.47445 24.4194C8.30828 24.1702 8.14904 23.9002 7.99672 23.6232C6.7574 21.38 5.94734 18.389 5.79503 15.0726H2.23631C2.49248 17.8974 3.74565 20.4314 5.64271 22.3285ZM5.64271 5.64271C3.74565 7.53284 2.49248 10.0669 2.23631 12.8917H5.79503C5.94734 9.57529 6.7574 6.58431 7.99672 4.34108C8.14904 4.06413 8.30828 3.80104 8.47445 3.54487C7.42206 4.09875 6.47353 4.80496 5.64271 5.64271ZM15.0726 2.38863V12.8917H19.9883C19.8429 9.95609 19.1367 7.33206 18.0636 5.39346C17.2328 3.88412 16.2011 2.81789 15.0726 2.38863ZM15.0726 15.0726V25.5757C16.2011 25.1464 17.2328 24.0802 18.0636 22.5778C19.1367 20.6322 19.8429 18.0082 19.9883 15.0726H15.0726ZM12.8917 25.5757V15.0726H7.98287C8.12134 18.0082 8.83447 20.6322 9.90762 22.5778C10.7385 24.0802 11.7701 25.1464 12.8917 25.5757ZM12.8917 12.8917V2.38863C11.7701 2.81789 10.7385 3.88412 9.90762 5.39346C8.83447 7.33206 8.12134 9.95609 7.98287 12.8917H12.8917Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="logout">
                        <a href="/logout/">
<svg width="16" height="16" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(.0283 0 0 .0273 -.296 -1.85e-6)" strokeWidth="35.9">
        <g strokeWidth="35.9">
	        <g strokeWidth="35.9">
		<path className="active-path" d="m293 36.6c-94.4 0-171 76.8-171 171v61.2c0 1.11-1.37 2.98-2.45 3.34-9.26 3.09-16.8 5.76-23.7 8.42-8.21 3.16-14.4 12.3-14.4 21.2v188c0 8.84 6.15 17.9 14.3 21.2 63.1 25 130 37.7 197 37.7s134-12.7 197-37.7c8.15-3.23 14.3-12.3 14.3-21.2v-188c0-8.9-6.19-18-14.4-21.2-6.88-2.65-14.4-5.33-23.7-8.42-1.07-0.358-2.44-2.23-2.44-3.34v-61.2c-5e-3 -94.4-76.8-171-171-171zm-46.6 334c0-25.8 20.9-46.6 46.6-46.6 25.7 0 46.6 20.9 46.6 46.6 0 17.1-9.63 31.4-23.3 39.5v40.5c0 12.9-10.4 23.3-23.3 23.3-12.9 0-23.3-10.4-23.3-23.3v-40.5c-13.7-8.1-23.3-22.4-23.3-39.5zm159-162v47.8c-36.8-7.93-74.6-11.9-112-11.9-37.7 0-75.4 4.02-112 11.9v-47.7c0-61.9 50.4-112 112-112 61.9-1e-3 112 50.4 112 112z" fill="#fff" strokeWidth="35.9" data-old_color="#ffffff" data-original="#000000"/>
        	</g>
        </g>
    </g> 
</svg>
                        </a>
                    </div>
                </nav>
                
            </div>

            <div className="main_container">
                <div className="topbar">
                    
                    <div className="stu_header">
                        <div className="topbar_container">
                            <strong id="strong">LevelMind</strong>
                                <Clock/> 
                            <InteractiveSearch/>
<svg width="20" height="20" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
 <g transform="matrix(5.04 0 0 4.87 -.667 -1.6)" fill="#fff" fillRule="evenodd" strokeWidth=".0712">
  <path d="m3.63 3.03-0.362-0.369v-1.06c0-0.587-0.511-1.07-1.16-1.07-0.648 0-1.16 0.472-1.16 1.07v1.06l-0.362 0.369c-0.0622 0.0692-0.0872 0.161-0.0373 0.242 0.0373 0.0806 0.125 0.138 0.225 0.138h2.66c0.0997 0 0.187-0.0577 0.225-0.138 0.0622-0.0806 0.0497-0.172-0.025-0.242z"/>
  <path d="m2.55 3.61h-0.866c-0.0866 0-0.162 0.0962-0.162 0.206s0.0757 0.205 0.162 0.205h0.866c0.0866 0 0.162-0.0955 0.162-0.205 0-0.109-0.0757-0.206-0.162-0.206z"/>
 </g>
</svg>
                        </div>
                        <div className="topbar_profile">
                            <div className="profile_btn">
                                <svg width="18" height="18" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10 12c-2.67 0-8 1.15-8 3.43v2.57h16v-2.57c0-2.28-5.33-3.43-8-3.43z" fill="#fff"/><path d="m10 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="#fff"/></svg>
                                <p>
                                    {" user "}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="main_content">
    <div className="tea_block">

        <main className="courses_container">
            <div className="course_list_container">
                <div className="_section_">
                    <header className="course_header">
                        <h4>
                            <span>Your Classes</span>
                        </h4>
                    </header>
                    <InstitutList></InstitutList>
                </div>
                <div className="_section_">
                    <header className="course_header">
                        <h4>
                            <span>All Courses</span>
                        </h4>
                    </header>
                    <div className="course_header_table row">
                        <span className="col col1">Title</span>
                        <span className="col col2">Date</span>
                        <span className="col col3">Hour</span>
                    </div>
                    <CourseList/>   
                    <Nouveau/> 
                </div>
                
        <div className="create_course_container">
            <header className="create_course_header">
                <h3>Add course</h3>
            </header>
            <form method="post" encType="multipart/form-data">
                <div className="input_group course_title">
                    <label htmlFor="course_title">Title</label>
                    <input type="text" id="course_title" name="title" value={state.enter} onChange={handleText}/>
                </div>
                <div className="input_group course_desc">
                    <label htmlFor="course_desc">Description</label>
                    <textarea type="text" id="course_desc" name="description"></textarea>
                </div>
                <div className="input_group course_video">
                    <label htmlFor="course_video" className="course_video_input">
                        <div className="label">Video</div>
                        <div className="input_file" onClick={handleFileInputClick}>
                        <p className="result_file">{selectedFileName}</p>                            <span className="input_file_btn">
                                <i className="ri-upload-line"></i>
                                Browse
                            </span>
                        </div>
                    </label>
                   <input type="file" hidden onChange={handleFileInputChange} id="course_video" ref={fileInputRef} name="video"/>
                </div>
                <input type="submit" value="SAVE"/>
            </form>
        </div>
            </div>
        </main>
<aside className="aside_container">
    <div className="aside_content">
        <div className="emploie-temps">
            {  true || <div src="" alt="schedule" height="300px" width="500px" ></div> } {/*<Schedule/> */}
        </div>
        <header className="aside_header">
            <h4>
                Todo list
<svg width="18" height="18" version="1.1" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<path transform="rotate(-90)" d="m-12.4 8h6.75c0.346 0 0.625 0.446 0.625 1s-0.279 1-0.625 1h-6.75c-0.346 0-0.625-0.446-0.625-1s0.279-1 0.625-1z" fill="#fff"/>
<path d="m5.75 8h6.5c0.416 0 0.75 0.446 0.75 1s-0.334 1-0.75 1h-6.5c-0.416 0-0.75-0.446-0.75-1s0.334-1 0.75-1z" fill="#fff"/>
<path d="m5 1h8c2.22 0 4 1.78 4 4v8c0 2.22-1.78 4-4 4h-8c-2.22 0-4-1.78-4-4v-8c0-2.22 1.78-4 4-4z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id='_paint_'/></svg>
            </h4>
        </header>
        <main className="dept_container">
            <div className="dept_content">
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
