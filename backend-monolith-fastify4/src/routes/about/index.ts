import { FastifyPluginAsync } from "fastify";

const about: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    return "this is an about page";
  });
};

export default about;
