import { FastifyPluginAsync } from "fastify";

const characters: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const characters = [
      {
        id: "4fa5d73e-05fb-422b-887c-9e957e4b1890",
        name: "Link",
        description: "The Link description",
        image: "link.PNG",
      },
      {
        id: "eb510c16-73d4-4204-99bc-b96377a1d514",
        name: "Zelda",
        description: "The Zelda description",
        image: "zelda.PNG",
      },
      {
        id: "ee5da13e-62ac-4950-9f68-0d700c05e576",
        name: "Ganon",
        description: "The Ganon description",
        image: "ganon.PNG",
      },
    ];

    return characters;
  });
};

export default characters;
