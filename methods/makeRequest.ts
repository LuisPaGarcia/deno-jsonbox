export const makeRequest = (url: string, method: string, body?: any) => {
  const options = {
    method: method,
    headers: new Headers({ 'content-type': 'application/json' }),
    body: body || null,
  }
  options.body = JSON.stringify(body)
  return fetch(url, options).then((data) => data.json())
}
