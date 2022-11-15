import { prisma } from '../../../prisma/prismaInstance'
import { hash } from 'bcryptjs' 

export default async function handler (req, res) {

  if(req.method === 'POST') {
    
    if(!req.body) return res.status(404).json({error : 'No form data'})

      const { username : formUsername, 
              email : formEmail, 
              password : formPassword,
              cpassword :  formCpassword} = req.body
      let exists
      try {
          exists = await prisma.user.findUnique({
          where : {
            email : formEmail
          }
        })
      } catch (error) {

      }
      
      if(exists) return res.status(200).json({message : 'User already exists'})

      try {
          const user = await prisma.user.create({
          data : {
            email : formEmail,
            password : await hash(formPassword, 12)
          }
        })
        return res.status(201).json({status : true, user : user})
      } catch (error) {
        return res.error
      }

      }
      else {
        res.status(500).json({message : 'Only POST method accepted'})
      }
    
}