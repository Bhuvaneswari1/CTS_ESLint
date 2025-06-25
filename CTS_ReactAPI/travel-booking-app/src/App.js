import {Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import PackageList from './components/PackageList';
import PackageForm from './components/PackageForm';
import EditPackage from './components/EditPackage';
import PackageDetail from './components/PackageDetail';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<PackageList />} />
        <Route path='/add' element={<PackageForm />} />
        <Route path='/edit/:id' element={<EditPackage />} />
        <Route path='/view/:id' element={<PackageDetail />} />
      </Routes>
    </div>
  );
}

export default App;
