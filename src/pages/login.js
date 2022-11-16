  import { Canvas, useThree } from "@react-three/fiber";
  import Image from "next/image";
  import Link from "next/link";
  import { GridHelper } from "three";
  import styles from '../styles/Form.module.css'
  const THREE = require ('three')
  import { signIn, signOut } from "next-auth/react";
  import { useFormik } from 'formik'
  import { MeshReflectorMaterial } from "@react-three/drei";

  const Login = () => {
    
    const formik = useFormik({
      initialValues : {
        email : '',
        password : '',

      },
      validate : (values) => {
        const errors = {}
        if (!values.password) {
          errors.password = 'Required';
        }else if(values.password.includes(' ')) {
            errors.password = 'Must not contain white space'
          }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      }, 
      onSubmit
    })
      //console.log(formik.errors)
      const values1 = formik.values
      async function onSubmit(values1) {
        const status = await signIn('credentials', {
        email : values1.email,
        password : values1.password,
        callbackUrl : 'http://localhost:3000'
      })
      console.log(status)
    }
      async function handleGoogleSignIn() {
          signIn('google', {callbackUrl : 'http://localhost:3000'})
      }

      async function handleGitHubSignIn() {
        signIn('gibhub', {callbackUrl : 'http://localhost:3000'})
    }

      return ( 
    <>
    <title>Login page</title>
    <div className="flex h-screen w-screen bg-slate-200">
      <div className="m-auto  bg-slate-50  w-3/5 h-5/6 grid lg:grid-cols-2">
        <div 
        className=" bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
        >
        </div>
        <div className="text-center flex items-center">
            <section className="w-3/4 mx-auto flex justify-evenly flex-col gap-10">
              <div className="flex flex-col space-y-4">
                <h1 className="text-gray-800  text-4xl font-bold">
                Вход
                </h1>
                <p className=" text-gray-400">
                Войдите одним из трех способов
                </p>
                <form className="flex flex-col space-y-4  text-sm"
                      onSubmit={formik.handleSubmit}>
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
                  <div className="input-button">
                    <button className={styles.button} type="submit">Войти</button>
                  </div>
                  <div>
                    <button className={styles.buttonServices} onClick={handleGoogleSignIn} type="button">Войти через Google<Image alt="google-icon" src={'/google.svg'} width={24} height={24}></Image></button>
                  </div>
                  <div>
                    <button className={styles.buttonServices} onClick={handleGitHubSignIn} type="button">Войти через GitHub<Image alt="github-icon" src={'/github.svg'} width={24} height={24}></Image></button>
                  </div>
                <p className="pt-2 text-sm text-center text-gray-400">
                  Нет аккаунта? <Link href={'/register'} className ="text-blue-700">Регистрация</Link>
                </p>
                </form>
              </div>
            </section>
        </div>
      </div>
    </div>
  </>
      );
  }
  
  export default Login;