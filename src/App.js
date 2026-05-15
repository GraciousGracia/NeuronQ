import './App.css';
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import Home from './PAGES/Home';
import Nav from './COMPONENTS/Nav';
import Footer from './COMPONENTS/Footer';
import Viewcourses from './COMPONENTS/Viewcourses';
import { Route,Router,Routes } from 'react-router-dom';
import { useState } from 'react'
import Candapply from './PAGES/Candapply';
import Courseinfo from './PAGES/Courseinfo';
import Success from './PAGES/Success';
import Logsetup from './PAGES/Logsetup';
import Passsetup from './PAGES/Passsetup';
import Studimgsetup from './PAGES/Studimgsetup';
import Profilebar from './STUD_DASHBOARD/Profilebar';
import Schedules from './STUD_DASHBOARD/Schedules';
import Stud_sidebar from './STUD_DASHBOARD/Stud_sidebar';
import Assignment from './STUD_DASHBOARD/Assignment';
import Payments from './STUD_DASHBOARD/Payments';
import Projects from './STUD_DASHBOARD/Projects';
import Revisions from './STUD_DASHBOARD/Revisions';
import Upcomingclass from './STUD_DASHBOARD/Upcomingclass';
import Profile from './STUD_DASHBOARD/Profile';
import Activity_bar from './STUD_DASHBOARD/Activity_bar';
import Projectformpage from './STUD_DASHBOARD/Projectformpage';
import Studentlogin from './PAGES/Studentlogin';
import Tutstudents from './TUTORS_DASHBOARD/Tutstudents';
import TutClasses from './TUTORS_DASHBOARD/TutClasses';
import Tutschemes from './TUTORS_DASHBOARD/Tutschemes';
import TutPayments from './TUTORS_DASHBOARD/TutPayments';
import Tutprofile from './TUTORS_DASHBOARD/Tutprofile';
import Tutreports from './TUTORS_DASHBOARD/Tutreports';
import Tutrevisions from './TUTORS_DASHBOARD/Tutrevisions';
import Tutprojects from './TUTORS_DASHBOARD/Tutprojects';
import Tutssignments from './TUTORS_DASHBOARD/Tutssignments';
import Tutshedules from './TUTORS_DASHBOARD/Tutshedules';
import Tutorssidebar from './TUTORS_DASHBOARD/Tutorssidebar';
import Tutnotification from './TUTORS_DASHBOARD/Tutnotification';
import Tutsignout from './TUTORS_DASHBOARD/Tutsignout';
import Performances from './STUD_DASHBOARD/Performances';
import Recordedtut from './STUD_DASHBOARD/Recordedtut';
import Tutorsetlogin from './TUTORS_DASHBOARD/Tutorsetlogin';
import Tutpassetup from './TUTORS_DASHBOARD/Tutpassetup';
import Tutimageset from './TUTORS_DASHBOARD/Tutimageset';
import Studentpay from './STUD_DASHBOARD/Studentpay';
import Tutlogin from './TUTORS_DASHBOARD/Tutlogin';
import Payhistory from './TUTORS_DASHBOARD/Payhistory';
function App() {
    const urls = ['/','/apply','/apply/course_info','/candidate_apply/success','/student_signin','/tutors/auth/login']
    const showcomps = urls.includes(window.location.pathname)

    const studlink = ['/student/dashboard/schedules','/student/dashboard/assignments','/student/dashboard/payments','/student/dashboard/profile','/student/dashboard/projects','/student/dashboard/revisions','/student/dashboard/upcoming_classes','/student/activity/project_submision','/student/dashboard/performances','/student/dashboard/records']
    let showstudlink = studlink.includes(window.location.pathname)

    let dashlinks = ['/tutor/dashboard/students','/tutor/dashboard/classes','/tutor/dashboard/payments','/tutor/dashboard/profile','/tutor/dashboard/schedules','/tutor/dashboard/scheme','/tutor/dashboard/revisions','/tutor/dashboard/assignments','/tutor/dashboard/reports','/tutor/dashboard/projects','/tutor/dashboard/logout','/tutor/dashboard/payments/history']
   
    const showdashlink = dashlinks.includes(window.location.pathname)
  return (
    <div className="App">
      {showstudlink && (
        <div>
          <Profilebar/>
          <Stud_sidebar/>
          <Activity_bar/>
        </div>
      )}
      {showdashlink && (
        <div>
          <Tutorssidebar/>
          <Tutnotification/>
        </div>
      )}
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/apply' element={<Candapply/>}></Route>
          <Route path='/candidate_apply/success' element={<Success/>}></Route>
          <Route path='/student/account/setup' element={<Logsetup/>}></Route>
          <Route path='/student/account/setup/password' element={<Passsetup/>}></Route>
          <Route path='/student/account/setup/photo' element={<Studimgsetup/>}></Route>
          <Route path='/student/dashboard/schedules' element={<Schedules/>}></Route>
          <Route path='/student/dashboard/assignments' element={<Assignment/>}></Route>
          <Route path='/student/dashboard/payments' element={<Payments/>}></Route>
          <Route path='/student/dashboard/profile' element={<Profile/>}></Route>
          <Route path='/student/dashboard/projects' element={<Projects/>}></Route>
          <Route path='/student/dashboard/revisions' element={<Revisions/>}></Route>
          <Route path='/student/dashboard/upcoming_classes' element={<Upcomingclass/>}></Route>
          <Route path='/student/activity/project_submision' element={<Projectformpage/>}></Route>
          <Route path='/student_signin' element={<Studentlogin/>}></Route>
          <Route path='/tutor/dashboard/students' element={<Tutstudents/>}></Route>
          <Route  path='/tutor/dashboard/assignments' element={<Tutssignments/>}></Route>
          <Route  path='/tutor/dashboard/schedules' element={<Tutshedules/>}></Route>
          <Route  path='/tutor/dashboard/scheme' element={<Tutschemes/>}></Route>
          <Route  path='/tutor/dashboard/revisions' element={<Tutrevisions/>}></Route>
          <Route  path='/tutor/dashboard/reports' element={<Tutreports/>}></Route>
          <Route  path='/tutor/dashboard/projects' element={<Tutprojects/>}></Route>
          <Route  path='/tutor/dashboard/profile' element={<Tutprofile/>}></Route>
          <Route  path='/tutor/dashboard/payments' element={<TutPayments/>}></Route>
          <Route  path='/tutor/dashboard/classes' element={<TutClasses/>}></Route>
          <Route  path='/tutor/dashboard/logout' element={<Tutsignout/>}></Route>
          <Route path='/student/dashboard/performances' element={<Performances/>}></Route>
          <Route path='/student/dashboard/records' element={<Recordedtut/>}></Route>
          <Route path='/tutors/account/loginsetup' element={<Tutorsetlogin/>}></Route>
          <Route path='/tutors/account/loginsetup/password' element={<Tutpassetup/>}></Route>
          <Route path='/tutors/account/loginsetup/photo' element={<Tutimageset/>}></Route>
          <Route path='/students/payment/authentication' element={<Studentpay/>}></Route>
          <Route path='/tutors/auth/login' element={<Tutlogin/>}></Route>
          <Route path='/tutor/dashboard/payments/history' element={<Payhistory/>}></Route>
      </Routes>
      {showcomps && (
          <Footer/>
      )}
    </div>
  );
}

export default App;
