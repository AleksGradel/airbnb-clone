import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import place from './place'
import host from './host'
import review from './review'
import user from './user'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    place,
    host,
    review,
    user
  ]),
})
