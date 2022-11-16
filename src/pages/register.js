import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Form.module.css'
import { useFormik } from 'formik'
import { useRouter } from "next/router";
import { Canvas } from "@react-three/fiber";

const Register = () => {


  const router = useRouter()

  const formik = useFormik({
    initialValues : {
      username : '',
      email : '',
      password : '',
      cpassword : '',

    },
    validate : (values) => {
      const errors = {}
      if(!values.username) {
        errors.username = 'Required'
      }else if(values.username.includes(' ')) {
        errors.username = 'Must not contain white space'
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length > 20 || values.password.length < 6) {
        errors.password = 'Must be 20 characters or less and 6 characters or more';
      }else if(values.password.includes(' ')) {
          errors.password = 'Must not contain white space'
        }
    
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      
      if(!values.cpassword) {
        errors.cpassword = 'Required';
      } else if (values.cpassword !== values.password) {
        errors.cpassword = 'Password must match';
      }else if(values.cpassword.includes(' ')) {
        errors.cpassword = 'Must not contain white space'
      }

      return errors;
    }, 
    onSubmit : onSubmit1
  })
  //console.log(formik.values)
  const values1 = formik.values
  
  async function onSubmit1(values1) {
    
    const params = {
      method : "POST",
      headers : {'Content-Type' : 'application/json',
                  },
      body : JSON.stringify(values1)
    }
      try {
        await fetch('http://localhost:3000/api/createuser', params)
        .then(res => res.json())
        .then(data => {
          if(data) router.push('http://localhost:3000/registered')
        })
        
      } catch (error) {
        console.log(data)
       
      }
  }
    return ( 
      <div className="flex h-screen w-screen bg-slate-200">
         {/* <div className="flex"> */}
      <div className="m-auto bg-slate-50 w-3/5 h-5/6 grid lg:grid-cols-2">
        
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
        <>
                {/* <Canvas>

                <ambientLight />
              
                <directionalLight position={[5,5,5]} />
                
                <mesh visible userData={{ hello: 'world' }} scale = {1}  rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[1, 64, 64]}  />
                <meshNormalMaterial color="fcd34d" />
                </mesh>

                </Canvas> */}
           </>
        </div>
        
        <div className=" text-center right flex flex-col justify-evenly">
            <section className="w-3/4 mx-auto flex flex-col">
              <div className="flex flex-col">
                <h1 className="text-gray-800 text-4xl font-bold mb-4">
                Регистрация
                </h1>
                <p className="mix auto text-gray-400 mb-4">
                
                </p>
                <form className="flex flex-col justify-evenly gap-4 mb-8 text-sm"
                      onSubmit={formik.handleSubmit}>
                        
                <div className={styles.inputGroup}>
                    <input className={styles.inputText} 
                          type ="text" 
                          name ="username" 
                          placeholder = "Имя"
                          {...formik.getFieldProps('username')}></input>
                  </div>
                  <div className={styles.inputGroup}>
                    <input className={styles.inputText} 
                          type ="email" 
                          name ="email"
                          placeholder = "Почта"
                          {...formik.getFieldProps('email')}></input>
                  </div>
                  <div className={styles.inputGroup}>
                    <input className={styles.inputText} 
                          type ="password" 
                          name ="password" 
                          placeholder = "Пароль"
                          {...formik.getFieldProps('password')}></input>
                  </div>
                  <div className={styles.inputGroup}>
                    <input className={styles.inputText} 
                          type ="password" 
                          name ="сpassword" 
                          placeholder = "Подтвердите пароль"
                          {...formik.getFieldProps('cpassword')}></input>
                  </div>
                  <div className="input-button">
                    <button className={styles.button} type="submit">Зарегестрироваться</button>
                  </div>
                <p className="text-sm pt-2 text-center text-gray-400">
                  Уже зарегестрированы? <Link href={'/login'} className ="text-blue-700">Войти</Link>
                </p>
                </form>
              </div>
            </section>
        </div>
      </div>
    </div>  
     );
}
 
export default Register;