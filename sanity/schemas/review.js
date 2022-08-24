export default {
    name: 'review',
    type: 'document',
    title: 'Review',
    fields: [
        {
            name: 'place',
            type: 'reference',
            description: 'Reviewed place',
            to: [
                {type: 'place'}
            ]
        },
        {
            name: 'comment',
            type: 'text',
        },
        {
            title: 'Month of visit',
            name: 'monthOfVisit',
            type: 'string',
            description: 'Provide information about month and year of visit'
        },
        {
            name: 'rating',
            title: 'Overall experience rating',
            type: 'string',
            options: {
                list: [
                    { title: '5', value: '5' },
                    { title: '4', value: '4' },
                    { title: '3', value: '3' },
                    { title: '2', value: '2' },
                    { title: '1', value: '1' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'author',
            type: 'reference',
            to: [
                {type: 'user'}
            ]
        },
    ],
    preview: {
        select: {
            title: 'comment',
            subtitle: 'monthOfVisit'
        }
    }
}