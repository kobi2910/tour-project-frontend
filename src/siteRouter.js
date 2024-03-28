import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'

// layouts:
import MainLayout from "./layouts/MainLayout";

 
// pages:
import About from "./pages/About";
import Contact, {contactAction} from "./pages/Contact";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import Blog from "./pages/blogPost/Blog";
import Guides from "./pages/guides/Guides";


//  components:
import TripDetail, {tripDetailsLoader} from './components/tripComponents/TripDetail';
import Login from './pages/logIn/Login';
import RegisterComponent from './components/loginComponents/RegisterComponent';
import LogoutComponent from './components/loginComponents/LogoutComponent';
import PostDetail, { postDetailsLoader } from './components/blogComponents/PostDetails';
import CreatePost from './components/blogComponents/PostCreate';
import GuideDetail from './components/guidesComponents/GuideDetail';
import ResetPass from './components/loginComponents/ResetPass';
import ForgetPass from './components/loginComponents/ForgetPass';
 


export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='login' element= {<Login/>}/>
        <Route path='logout' element= {<LogoutComponent/>}/>
        <Route path='register' element= {<RegisterComponent/>}/>
        <Route path='reset' element= {<ForgetPass/>}/>
  
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact'
               element={<Contact />} 
               action={contactAction} />
  
        <Route path='trips' element={<Trips />} />
        <Route path='trips/:id'
               loader={tripDetailsLoader}
               element={<TripDetail />} />
       <Route path='editTrip/:id' element={<TripDetail />} />
        
        <Route path='guides' element={<Guides />} />
        <Route path='guides/guides/:id' element={<GuideDetail />} />
  
        <Route path='blog' element={<Blog />} />
        <Route path='blog/create' element={<CreatePost />} />
        <Route path='blog/:id'
               loader={postDetailsLoader}
               element={<PostDetail />}/>
       
  
      </Route>
    )
  )