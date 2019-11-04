let db = {
    users: [
        {
            userId: 'G7QzqogWGCZxWJnwE31TwxWrbsN2',
            email: 'peterpaulvillarino',
            handle: 'Peter Paul Villarino',
            createdAt: '2019-10-24T23:52:54.810Z',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-dev-28191.appspot.com/o/906254844.png?alt=media',
            bio: 'Hello I am Peter',
            website: 'https://peteraskme.com',
            location: 'Philippines'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-03-15T11:45:01.018Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'new',
            screamId: '2kI3s640CgVJPusCWdWV',
            body: 'Newest Scream',
            createdAt: '2019-10-10T07:37:43.305Z'
        }
    ],
    notifications: [
        {
            recipeint: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'asdasdat1231wedasg',
            type: 'like | comment',
            createdAt: '2019-10-10T07:37:43.305Z'
        }
    ]
};
const userDetails = {
    credentials: {
        userId: '',
        email: '',
        handle: '',
        createdAt: '',
        imageUrl: '',
        bio: '',
        website: '',
        location: ''
    },
    likes: [
        {
            userHandle: '',
            screamId: ''
        },
        {
            userHandle: '',
            screamId: ''
        },
    ]
}