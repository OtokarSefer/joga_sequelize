'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        published: '2020-01-08',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Morning vinyasa flow routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        published: '2020-04-14',
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        published: '2020-05-28',
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  },
};
