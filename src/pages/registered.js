import { useRouter } from "next/router";

const Registered = () => {

    const router = useRouter()

    function psh() {
        router.push('http://localhost:3000')
    }
    return ( 
        <>
        <title>Login page</title>
        <div className="flex h-screen w-screen bg-slate-200">
        <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
          <>
              {/* <Canvas>

              <ambientLight />
              <gridHelper rotation={[Math.PI / 2, 0, 0]} args = {[20,39]} position = {[2,2,3]}  />
              <directionalLight />

              <mesh visible userData={{ hello: 'world' }} scale = {0.4}  rotation={[Math.PI / 2, 0, 0]}>
              <sphereGeometry args={[1, 64, 64]}  />
              <meshStandardMaterial color="white"  />
              </mesh>

              </Canvas> */}
        </>
        </div>
        <div className="text-center right flex flex-col justify-evenly">
            <section className="w-3/4 mx-auto flex flex-col gap-10">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-8">Регистрация прошла успешно!</h1>
                <button onClick={psh} className=" w-36 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text- px-5 py-2.5 text-center mr-2">На главную</button>
              </div>
            </section>
        </div>
      </div>
    </div>
        </>
     );
}
 
export default Registered;