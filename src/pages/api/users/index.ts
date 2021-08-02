import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {
      id: 1,
      name: 'Gustavo',
      lastName: 'Saboya',
      age: 29,
      role: 'Full Stack Developer',
    },
  ];

  return response.json(users);
};
