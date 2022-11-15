import AuthorizedUser from "../components/authorizeduser";
import Guest from "../components/Guest";
import { getSession, useSession, signOut } from "next-auth/react";
import { prisma } from '../../prisma/prismaInstance';

const History = ({equs}) => {
    
    const {data : session} = useSession()

    function handleSignOut() {   

        signOut({callbackUrl : 'http://localhost:3000/login'})

    }

    return ( 
        <>
            {session? <AuthorizedUser 
            session = {session}
            handleSignOut = {handleSignOut}
            equs = {equs}/> : <Guest/>}
        </>
     );
}
 
export default History;

export async function getServerSideProps({req}) {
    
    const session = await getSession({req})
        
    if(!session) {
           
        return {
                redirect : {
                    destination : '/login',
                    permanent : false
                }
            }   
        }
    const userObj = await prisma.user.findUnique({
        where: {
            email : session.user.email
            },
        select : {
            id : true,
        }
    })
    const equs = await prisma.equation.findMany({
        where: {
            userId : userObj.id 
        },
        select: {
            id : true,
            userId : true,
            iterations : true,
            solution : true,
            type : true,
            equation : true
          },
        })
        return{ 

            props: {session,
                    equs,
                    userObj
            }
        } 
}
