import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import ProfileDesa from "./pages/ProfileDesa/ProfileDesa"
import SaranaPrasarana from "./pages/SaranaDanPrasarana/SaranaPrasarana";
import DataKependudukan from "./pages/DataKependudukan/DataKependudukan";
import StrukterDesa from "./pages/Perangkat Desa/StrukterDesa";
import DewanDesa from "./pages/Perangkat Desa/DewanDesa";
import KetuaRt from "./pages/Perangkat Desa/KetuaRt";
import SektorPertanian from "./pages/PotensiDesa/SektorPertanian";
import SektorPeternakan from "./pages/PotensiDesa/SektorPeternakan";
import SektorPerikanan from "./pages/PotensiDesa/SektorPerikanan";
import SumberDayaAlam from "./pages/PotensiDesa/SumberDayaAlam";
import SumberDayaAir from "./pages/PotensiDesa/SumberDayaAir";
import KelembagaanMasyarakat from "./pages/PotensiDesa/KelembagaanMasyarakat";
import Artikel1 from "./pages/Artikel/Artikel1"
import Artikel2 from "./pages/Artikel/Artikel2";
import Artikel3 from "./pages/Artikel/Artikel3";
import Artikel4 from "./pages/Artikel/Artikel4";
import Artikel5 from "./pages/Artikel/Artikel5";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProfileDesa" element={<ProfileDesa />} /> 
        <Route path="/SaranaPrasarana" element={<SaranaPrasarana />} />
        <Route path="/DataKependudukan" element={<DataKependudukan />} />
        <Route path="/StrukturDesa" element={<StrukterDesa />} />
        <Route path= "/DewanDesa" element={<DewanDesa />} />
        <Route path= "/KetuaRt" element={<KetuaRt />} />
        <Route path= "/SektorPertanian" element={<SektorPertanian />} />
        <Route path= "/SektorPeternakan" element={<SektorPeternakan />} />
        <Route path= "/SektorPerikanan" element={<SektorPerikanan />} />
        <Route path= "/SumberDayaAlam" element={<SumberDayaAlam />} />
        <Route path= "/SumberDayaAir" element={<SumberDayaAir />} />
        <Route path= "/KelembagaanMasyarakat" element={<KelembagaanMasyarakat />} />
        <Route path= "/Artikel-1" element={<Artikel1 />} />
        <Route path= "/Artikel-2" element={<Artikel2 />} />
        <Route path= "/Artikel-3" element={<Artikel3 />} />
        <Route path= "/Artikel-4" element={<Artikel4 />} />
        <Route path= "/Artikel-5" element={<Artikel5 />} />
      </Routes>
    </div>
  );
}

export default App;
