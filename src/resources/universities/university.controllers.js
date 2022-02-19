import { University, db } from './university.model'
import { crudControllers } from '../../utils/crud'
import { list } from './university'

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', async function () {
  console.log('Connection Successful!')

  await University.insertMany(list, function (err, docs) {
    if (err) {
      console.log('Documents already insert')
    } else {
      console.log('Multiple Documents inserted to Collection')
    }
  })
})

export default crudControllers(University)

// overide
// export default {
//     ...crudControllers(University),
//     getOne(){

//     }
// }
