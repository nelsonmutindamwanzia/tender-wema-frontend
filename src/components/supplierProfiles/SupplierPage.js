import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Suppliers from './Suppliers';
import Footer from '../Footer';


function SupplierPage(){
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/suppliers' element={<Suppliers /> } />
            </Routes>
            
        </>
    )
}

export default SupplierPage;