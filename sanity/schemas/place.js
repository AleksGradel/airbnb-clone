export default {
    name: 'place',
    title: 'Place',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'host',
            type: 'object',
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
            name: 'location',
            title: 'Location',
            type: 'geopoint',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
              hotspot: true,
            },
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
            type: 'number'
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
    ]
}