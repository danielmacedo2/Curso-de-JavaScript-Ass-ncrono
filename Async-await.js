const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true;
        if (error) {
        return reject(new Error ('error in login!'));
        }
        console.log('user logged!');
        resolve ({ email });
    });
};

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUserVideos')
            resolve(['vídeo1', 'vídeo2', 'vídeo3']);
        }, 2000);
    });
};
const getUserVideosDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUserVideosDetails')
            resolve({ title : 'Vídeo title' });
        }, 2500)
    });
}



// loginUser('danielms12@gmail.com', '287691')
//     .then((user) => getUserVideos(user.email))
//     .then((videos) => getUserVideosDetails(videos[0]))
//     .then((videoDetails) => console.log({ videoDetails }))
//     .catch((error) => console.log({ error }));

const displayUser = async () => {
    try {
        const user = await loginUser('danielms12@gmail.com', '287691');
        console.log({ user });
        const videos = await getUserVideos(user.email);
        const videoDetails = await getUserVideosDetails(videos[0]);
        console.log({ videos })
    } catch (error) {
        console.log({ error });
    }
};

displayUser();