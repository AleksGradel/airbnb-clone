export default {
    name: 'place',
    title: 'Place',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'state',
            title: 'State',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required(),
        },
        {
            name: 'host',
            type: 'object',
            validation: Rule => Rule.required(),
            fields: [
              {
                title: 'Host',
                name: 'host',
                type: 'reference',
                to: [{type: 'host'}]
              }
            ]
        },
        {
            title: 'Type of place',
            name: 'type',
            type: 'string',
            options: {
              list: [
                {title: 'Entire place', value: 'Entire place'},
                {title: 'Private room', value: 'Private room'},
                {title: 'Hotel room', value: 'Hotel room'},
                {title: 'Shared room', value: 'Shared room'}
              ],
              layout: 'radio'
            }
        },
        {
            name: 'pricePerNight',
            title: 'Price per night',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'geolocation',
            title: 'Geo Location',
            type: 'geopoint',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'images',
            type: 'array',
            options: {
              layout: 'grid'
            },
            of: [{
              type: 'image'
            }]
        },
        {
            title: 'Number of guests',
            name: 'guestNumber',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            title: 'Number of bedrooms',
            name: 'bedroomNumber',
            type: 'number'
        },
        {
            title: 'Number of beds',
            name: 'bedNumber',
            type: 'number'
        },
        {
            title: 'Number of bathrooms',
            name: 'bathroomNumber',
            type: 'number'
        },
        {
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [
                {type: 'review'}
            ]
        },
    ],
}