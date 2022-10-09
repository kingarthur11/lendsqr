/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: 'rowValue1'},
    {id: 2, task: 'rowValue2'},
    {id: 3, task: 'rowValue3'}
  ]);
};
