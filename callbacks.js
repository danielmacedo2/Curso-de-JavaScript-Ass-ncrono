const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;
        if (error) {
            return onError('error in login!');
        }
        console.log('user logged!');
        onSuccess({ email });
    }, 1500);
};

// Function CallBack: É basicamente uma função que é passada pra ser executada ñ agora más em algum momento mais tarde

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['vídeo1', 'vídeo2','vídeo3']);
    }, 2000);
};

const getUserVideosDetails = (video, callback) => {
    setTimeout(() => {
        callback({ title: "Untitled video" });
    }, 2500);
}

const user = loginUser('danielms12@gmail.com', '287691',
 (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({ videos })
        getUserVideosDetails(videos[0], (videoDetails) => { 
            console.log({ videoDetails });
        })
    })
 },
 (error) => {
    console.log({ error });
 }
);

// console.log({ user })