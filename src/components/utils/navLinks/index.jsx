const getNavigations = (userid) => {
    const links = [
        {
            title: 'Publications',
            path: '/'
        },
        {
            title: 'Profile',
            path: `/profile${userid ?`/${userid}`:''}`
            // path: userid && `/profile/${userid}` || '/profile'
        },
        {
            title: 'Login',
            path: '/login'
        },
        {
            title: 'Register',
            path: '/register'
        },
        // {
        //     title: 'Error',
        //     path: '/error'
        // },
        {
            title: 'Create Post',
            path: '/create'
        },
    ]
    return links
}
export default getNavigations