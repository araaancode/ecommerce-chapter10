import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { userService } from "../services/index";

export default Login;

function Login() {
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/");
    }
  }, []);

  // form validation rules
  // const validationSchema = Yup.object().shape({
  //   username: Yup.string().required("نام کاربری باید وارد شود!"),
  //   password: Yup.string().required("گذرواژه باید وارد شود!"),
  // });
  // const formOptions = { resolver: yupResolver(validationSchema) };

  // // get functions to build form with useForm() hook
  // const { register, handleSubmit, setError, formState } = useForm(formOptions);
  // const { errors } = formState;



  function onSubmitFuc({ username, password }) {
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = "/";
        router.push(returnUrl);
        console.log("user login");
      })
      .catch((error) => {
        console.log("we have error",error);
      });
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "1200px",
        marginBlock: "2rem",
        fontFamily: "sans-serif",
        gap: "2rem",
        margin: "100px auto",
      }}
    >
      <div style={{margin:'20px auto'}}>
      <div style={{textAlign:'right'}}>
        نام کاربری: test
        <br />
        گذرواژه: test
      </div>
        <div style={{margin:'40px 0'}}>
          <form dir="rtl" action="javascript:void(0);" method="POST" style={{backgroundColor:'#f4f4f4',width:'400px',height:'200px',padding:' 50px',borderRadius:'8px'}}>
            <div>
              <label>نام کاربری</label>
              <input
                name="username"
                type="text"
                // {...register("username").toString()}
                style={{padding:'12px',borderRadius:'8px',width:'100%',margin:"10px -10px",border:'1px solid #ccc'}}
              />
            </div>
            <div>
              <label>گذرواژه</label>
              <input
                name="password"
                type="password"
                // {...register("password").toString()}
                
                style={{padding:'12px',borderRadius:'8px',width:'100%',margin:"10px -10px",border:'1px solid #ccc'}}
              />
            </div>
            <button onClick={onSubmitFuc} style={{backgroundColor:'#03a35b',color:'#fff',cursor:'pointer',padding:'8px 12px',border:'0',width:'100%',fontSize:'18px',borderRadius:'8px',fontWeight:'bold',margin:'25px auto'}}>
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
