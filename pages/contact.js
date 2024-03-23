// import "../styles/contact.module.css"
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div style={{'margin':'50px auto','width':'500px','direction':'rtl'}} className="container">
        <div style={{textAlign:'center'}}>
          <h2 className="mt-2">تماس با ما</h2>
        </div>
        <div className="row">
          {/* <div className="column">
            <img className="img-map" style={{marginRight:'25%',width:"360px",height:'360px'}} src="https://www.w3schools.com/w3images/map.jpg" alt="نقشه" />
          </div> */}
          <div className="column">
            <form action="#">
             <Input type="text" placeholder="نام..." />
             <Input type="text" placeholder="نام خانوادگی..." />
              <textarea
                placeholder="پیام..."
                style={{height:'170px',width:'95%',resize:'vertical',border:'1px solid #ccc',borderRadius:'4px',padding:'12px',margin:'10px 0'}}
                required
              ></textarea>
             <button onClick={() => {
                alert("پیام شما فرستاده شد")
             }} style={{width:'100%',backgroundColor:'#03a35b',border:'0',borderRadius:'4px',cursor:'pointer',padding:'12px',fontSize:'18px'}}>فرستادن</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}