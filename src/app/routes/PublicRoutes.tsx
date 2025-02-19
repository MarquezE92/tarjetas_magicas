import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../../App"
import WelcomeForm from "../pages/create/WelcomeFormPage"
import OptionsPages from "../pages/create/OptionsPage"
import RecordingPage from "../pages/create/RecordingPage"
import WriteMesagePage from "../pages/create/WriteMensagePage"
import ConfirmationPage from "../pages/create/ConfirmationPage"
import WelcomeSantaMess from "../pages/greeting/WelcomeSantaMess"
import MessageReception from "../pages/greeting/MessageReception"
import SuccessConfirmationPage from "../pages/create/SuccessConfirmationPage"
import ErrorPage from "../pages/create/ErrorPage"
import ErrorPage404 from "../pages/create/ErrorPage404"

export const PublicRoutes = () => {


    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<App />} >

                    <Route path='' element={<WelcomeSantaMess />} />
                </Route>
                <Route path="/aww" element={<ErrorPage />} />

                <Route path="/create" element={< App />}>
                    <Route path="new" element={<WelcomeForm />} />
                    <Route path="choose" element={<OptionsPages />} />
                    <Route path="record" element={<RecordingPage />} />
                    <Route path="write" element={<WriteMesagePage />} />
                    <Route path="confirm" element={<ConfirmationPage />} />
                    <Route path="yay" element={<SuccessConfirmationPage />} />
                   
                </Route>

                <Route path="/greeting" element={ <App />} >
                    <Route path='' element={<WelcomeSantaMess />} />
                    <Route path=':code' element={<MessageReception />} />

                </Route>

                {/* <Route path="admin" element={<Admin />} />   */}
                
                <Route path="*" element={<ErrorPage404/>} />

            </Routes>
        </BrowserRouter>
    )
}