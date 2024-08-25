
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './component/singup';
import Login from './component/login';
import Extarct from './component/extract';
import UserDashboard from './dashboard/UserDashboard';
import AdminDashboard from './dashboard/AdminDashboard';
import CompanyDashboard from './dashboard/CompanyDashboard';
import AddMedicineForm from './companyPages/addMedicen';
import UserMedicineForm from './userPages/medicenForm';
import Notification from './adminPages/notification';
import Header from './component/Header';
import Footer from './component/Footer';
// import UserDashboard from './dashboard/UserDashboard';
import Contact from './component/Contact';
import CompanyOrders from './adminPages/companyorder';
import ManageCompanies from './adminPages/managecompany';
import PharmaContract from './companyPages/contarct';




function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/scan" element={<Extarct/>} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/company-dashboard" element={<CompanyDashboard/>} />

        <Route path="/contact" element={<Contact/>} />
        <Route path="/company-order" element={<CompanyOrders/>} />
        <Route path = "/manage-company" element={<ManageCompanies/>} />

        <Route path="/company-contract" element={<PharmaContract/>} />


        <Route path="/add-medicen" element={<AddMedicineForm/>} />
        <Route path="/user-medicine-form" element={<UserMedicineForm/>} />
        <Route path="/admin/notification" element={<Notification/>} />

      </Routes>
        <Footer/>
      
    </div>
  );
}

export default App;

