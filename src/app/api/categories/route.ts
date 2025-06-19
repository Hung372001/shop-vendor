import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  // @ts-ignore
  const data = await payload.find({
    collection: 'categories',
  })
  return Response.json(data)
}
