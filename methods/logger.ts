const logger1 = async (ctx: any, next: Function) => {
  await next()
  const rt = ctx.response.headers.get('X-Response-Time')
  const method = ctx.request.method.toString()
  console.log(`${method} ${ctx.request.url} - ${rt}`)
}

const logger2 = async (ctx: any, next: Function) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.response.headers.set('X-Response-Time', `${ms}ms`)
}

export { logger1, logger2 }
