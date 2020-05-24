import { makeRequest } from '../makeRequest.ts'
import { JSON_BOX_URL, JSON_BOX_ID } from '../../cosntants.ts'
export const post = async (context: any) => {
  try {
    const body = await context.request.body()
    const value = body.value
    const url = `${JSON_BOX_URL}${JSON_BOX_ID}`
    const result = await makeRequest(url, 'POST', value)
    context.response.body = JSON.stringify({ data: result })
  } catch (error) {
    context.response.body = JSON.stringify({ error: error })
  }
}
