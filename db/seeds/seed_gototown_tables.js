exports.seed = function(knex, Promise) {
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert({id: 1, restaurant_id: 1, name: 'Root Beer', category: 'drink', price: '5.00', images: {'image1': 'image1'}, size: 'medium', description: 'A sweet North American soft drink typically made using the sassafras tree or the sarsaparilla vine for primary flavor'}),
        // knex('items')
        // knex('users').insert({id: 1, name: 'Alice'}),
        // knex('users').insert({id: 2, name: 'Bob'}),
        // knex('users').insert({id: 3, name: 'Charlie'})
      ]);
    });
};

// CORTADO
