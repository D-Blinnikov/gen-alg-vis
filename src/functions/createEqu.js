export default async function createEqu(body) {
    
    try {
        const params = {
            method : "POST",
            headers : {'Content-Type' : 'application/json',
                        },
            body : JSON.stringify(body)
          } 

      rs = await fetch('http://localhost:3000/api/createequ', params)
      .then(res => res.json())
      .catch(console.log('Ошибка в функции'))

      return rs.status
      
    } catch (error) {

      console.log('data')

    }
}
