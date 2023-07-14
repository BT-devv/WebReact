import React from "react";
import "./New.scss"
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin"
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = () => {
  return (
    <div className="new">
      <SidebarAdmin/>
      <div className="newContainer">
        <NavbarAdmin/>
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
              alt="" />
          </div>
          <div className="right">
            <form >
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file" id="file" style={{display: "none"}}/>
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="phamvan" />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" placeholder="Van" />
              </div>
              <div className="formInput">
                <label>Lastname</label>
                <input type="text" placeholder="Pham" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="phamvan2003vl@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="0794259155" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password"/>
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Binh Thanh" />
              </div>
              <div className="formInput">
                <label>Gender</label>
                <input type="text" placeholder="Women" />
              </div>
              <div className="formInput">
                <label>Birthday</label>
                <input type="date" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default New;