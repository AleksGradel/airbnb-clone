export default {
    name: 'host',
    title: 'Host',
    type: 'document',
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
        {
            name: 'languages',
            title: 'Languages',
            type: 'string',
        },
    ],
}