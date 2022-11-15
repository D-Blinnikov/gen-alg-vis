import Link from "next/link";

const Guest = () => {
    return ( 
        <>
        <main className="container mx-auto text-center py-20">
            <h3 className="text 4xl font-bold">Войдите, чтобы увидеть историю вычислений</h3>
            <div className="flex justify-center">
                <Link href={'/login'} className ="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-white">Войти</Link>
            </div>
        </main>
        </>
     );
}
 
export default Guest;