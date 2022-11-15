import Link from "next/link";
import { useRouter } from "next/router";

const AuthorizedUser = ({session, equs}) => {
  const router = useRouter()
  
  function handleJumpToMain(){
    router.push('http://localhost:3000')
  }
    return ( 
        <>
        <div className="bg-cyan-50 w-screen  h-screen">
        <div className="bg-cyan-50 w-auto  h-auto">
      <main>
        <div className="  container mx-auto max-w-screen-lg px-4">
          <section className="flex flex-col rounded-md ">
            <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className=" mt-10 py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <h1>{session.email}</h1>
              <button onClick={handleJumpToMain} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text- px-5 py-2.5 text-center mr-2">На главную</button>
                  <table className="min-w-full divide-y divide-gray-800 mt-5 mb-10">
                    <thead className="bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Уравнение
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Решение
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Итерации
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Тип
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-700 divide-y divide-gray-500">
                      {equs.map((equ, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {equ.equation}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                              [{equ.solution[0]}, {equ.solution[1]}, {equ.solution[2]}]
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white truncate">
                            {equ.iterations}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap capitalize text-white">
                            <span
                              className="flex-shrink-0 inline-block  py-0.5 text-xs font-medium rounded-full" >
                            </span>
                            {equ.type}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
            </div>
          </section>
        </div>
      </main>
      </div>
      </div>
        </>
     );
}
 
export default AuthorizedUser;

   

  