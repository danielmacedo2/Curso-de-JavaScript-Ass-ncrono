
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



loginUser('danielms12@gmail.com', '287691')
    .then((user) => getUserVideos(user.email))
    .then((videos) => getUserVideosDetails(videos[0]))
    .then((videoDetails) => console.log({ videoDetails }))
    .catch((error) => console.log({ error }));

// Promise.all

const yt = new Promise(resolve => {
    setTimeout(() => {
        resolve('videos from Youtube')
    }, 2000);
})

const facebook = new Promise(resolve => {
    setTimeout(() => {
        resolve('Some Videos from Facebook')
    }, 5000);
})

Promise.all([yt, facebook]).then(result => {
    console.log({ result })
})
// Lista de promise que queremos executar
// Só vai ser executado dps de 5 segundos(vai esperar até que a ultima promise seja resolvida pra ele executar)