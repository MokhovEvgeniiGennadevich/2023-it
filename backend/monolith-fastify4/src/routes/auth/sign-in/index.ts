import { FastifyPluginAsync } from "fastify"

const signIn: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/', async function (request, reply) {
    return {
      
    }
  })
}

export default signIn;
