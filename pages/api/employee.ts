import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  res.json(data);
}

function generateEmpolyee() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    role: faker.name.jobTitle(),
    avatar: faker.internet.avatar(),
    id: faker.datatype.uuid(),
  };
}

const data = {
  ...generateEmpolyee(),
  children: [
    {
      ...generateEmpolyee(),
      children: [
        {
          ...generateEmpolyee(),
        },
        {
          ...generateEmpolyee(),
        },
        {
          ...generateEmpolyee(),
        },
        {
          ...generateEmpolyee(),
        },
      ],
    },
    {
      ...generateEmpolyee(),
      children: [
        {
          ...generateEmpolyee(),
          children: [
            {
              ...generateEmpolyee(),
            },
            {
              ...generateEmpolyee(),
            },
            {
              ...generateEmpolyee(),
            },
          ],
        },
      ],
    },
    {
      ...generateEmpolyee(),
      children: [
        {
          ...generateEmpolyee(),
        },
        {
          ...generateEmpolyee(),
        },
      ],
    },
  ],
};
