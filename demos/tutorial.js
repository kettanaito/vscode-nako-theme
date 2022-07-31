import { graphql } from 'msw'

export const config = {
  runtime: 'experimental-edge',
  template: `footer`,
}

export const handlers = [
  // Some comments here.
  graphql.query('GetUser', (req, res, ctx) => {
    return res(
      ctx.data({
        prop: 'value',
        isAdmin: true,
      }),
    )
  }),
]

export default function headers(req) {
  return Response.json({})
}
