import { makeRequest } from '../makeRequest.ts'
import { JSON_BOX_URL } from '../../cosntants.ts'
export const get = async (context: any) => {
  // url parameters format [ [name,  value], [name, value],... ]
  const id = [...context.request.url.searchParams].find(
    (item) => item[0] == 'id'
  )
  if (!id) {
    context.response.body = JSON.stringify({
      error: 'you must send an valid id',
    })
  } else {
    const body = await makeRequest(`${JSON_BOX_URL}${id[1]}`, 'GET')
    context.response.body = JSON.stringify({ data: body })
  }
}
