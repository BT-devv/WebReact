
import "./ListProduct.scss"
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin"
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin"
import DatatableProduct from "../../../components/Datatable/DatatableProduct";

const ListProduct = () => {
  return (
    <div className="listProduct">
        <SidebarAdmin/>
        <div className="listContainer">
          <NavbarAdmin/>
          <DatatableProduct/>
        </div>
    </div>
  );
};

export default ListProduct;