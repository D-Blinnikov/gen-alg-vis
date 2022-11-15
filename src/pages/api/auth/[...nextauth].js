import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from'next-auth/providers/credentials'
import { prisma } from '../../../../prisma/prismaInstance'
import { compare } from 'bcryptjs'


    


export default nextAuth({
    providers: [
        GoogleProvider({
            clientId :  process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId :  process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name : 'credentials',
            async authorize(credentials, req) {
                const user = await prisma.user.findUnique({
                    where : {
                        email : credentials.email
                    }
                    })
                    
                    if(!user) throw new Error('No user found with this email')
                    
                    const passMatch = await compare(credentials.password, user.password)
                      
                    if(!passMatch) {
                    throw new Error('Password does not match')
                    }
                    
                    return user
            }
        })
    ],
    secret : 'qhB0/laHBzPjl9QbUKAH1GJcPaPZfdgeAUXtgp64GyU='    
})