export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
    ]
}