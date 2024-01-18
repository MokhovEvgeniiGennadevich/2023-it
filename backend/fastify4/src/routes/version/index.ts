import { FastifyPluginAsync } from "fastify";

const version: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const versions = [
      {
        number: "0.1.4",
        text: "<p>Перенесли версионирование программного обеспечения в BackEnd</p>",
        date: "2024-01-18",
      },
      {
        number: "0.1.3",
        text: "<p>Отделили BackEnd от Frontend</p><p>Изменили архитектуру FrontEnd с FullStack на Separated</p>",
        date: "2024-01-17",
      },
      {
        number: "0.1.2",
        text: "Изменили архитектуру с Frontend на Fullstack",
        date: "2023-12-20",
      },
      {
        number: "0.1.1",
        text: "Начали разработку Frontend на Next JS 14",
        date: "2023-12-19",
      },
    ];

    return versions;
  });
};

export default version;
