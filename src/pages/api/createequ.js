import { prisma } from '../../../prisma/prismaInstance'

export default async function handler (req, res) {

    if(req.method === 'POST') {

      if(!req.body) return res.status(404).json({error : 'No form data'})

        const { equation, 
                solution, 
                iterations,
                type,
                email} = req.body

        let user
        
        try {

          user = await prisma.user.findUnique({
          where : {
            email : email
          }})

        } catch (error) {

          return res.status(404).json({error : 'Cannot find user'})

        }
         
         await prisma.equation.create({
         data : {
           equation : equation,
           solution : solution,
           iterations : iterations,
           type : type,
           userId : user.id
         }
     })
        return res.status(201).json({status : true})
        }
        else {
         return  res.status(503).json({message : 'Only POST method accepted'})
        }
      
  }