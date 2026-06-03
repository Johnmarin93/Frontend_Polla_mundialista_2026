import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
  <Sidebar />

  <div className="content-wrapper">
    <main className="main-content">
      {children}
    </main>

    <Footer />
  </div>
</div>
  );
};

export default MainLayout;
