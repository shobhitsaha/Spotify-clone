const Songs = [
    {
        id: 1,
        favourite: false,
        songName: "Bella Ciao",
        artist: "El Profesor",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbellaciao.mp3?alt=media&token=e1dd8233-3521-4574-8957-d51af9a5db5c",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-62d04.appspot.com/o/images%2Fmoneyheist.jpg?alt=media&token=f908f2c4-d286-483a-b90f-2bdd6e46b5d1",
    },
    {
        id: 2,
        favourite: false,
        songName: "Beast",
        artist: "Anirudh Ravichander",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbeast.mp3?alt=media&token=ebf29a01-079b-44eb-969a-57ee66a15ee8",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fbeast.jpg?alt=media&token=7cc7c33e-8eac-4f7a-858d-75e75d4b609c",
    },
    {
        id: 3,
        favourite: false,
        songName: "Joker - Rock and Roll",
        artist: "Hildur Guðnadóttir",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fjoker.mp3?alt=media&token=9e79751a-726d-4359-8a26-116db925f6ff",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-62d04.appspot.com/o/images%2Fjoker.jpg?alt=media&token=ff9db870-3487-4750-b918-568b3576f15f",
    },
    {
        id: 4,
        favourite: false,
        songName: "I Am A Peaky Blinder",
        artist: "Otnicka",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fpeaky-blinder.mp3?alt=media&token=2ddb5cfb-f4e0-4604-b77c-a7f63894d3ec",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fpeakyblinder.jpg?alt=media&token=b83fbf86-37ef-47c2-948e-3447a22a2d07",
    },
    {
        id: 5,
        favourite: false,
        songName: "Naanga Vera Maari",
        artist: "Yuvan Shankar Raja",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fvalimai.mp3?alt=media&token=97c769ab-e2fb-4562-90aa-18c73b320bde",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-62d04.appspot.com/o/images%2Fvalimai.jpg?alt=media&token=5062a85b-95a6-4f5c-82be-4803c43f92f1",
    },
    {
        id: 6,
        favourite: false,
        songName: "Your Woman",
        artist: "White Town",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FWhite-Town-Your-Women.mp3?alt=media&token=91817445-98ba-4a99-a4b4-6218f2742eb3",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-62d04.appspot.com/o/images%2Fwhitetown.jpg?alt=media&token=fe7dcc3f-7708-4af3-ac90-ee8deacc4535",
    },
    {
        id: 7,
        favourite: false,
        songName: "Charlie",
        artist: "Gopi Sundar",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-62d04.appspot.com/o/images%2Fcharlie.jpg?alt=media&token=583c8a60-809f-4282-9a67-a6889a12f46b",
    },
    {
        id: 8,
        favourite: false,
        songName: "Mask Off",
        artist: "Future",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-62d04.appspot.com/o/images%2Fmask.jpg?alt=media&token=d70928fa-25f6-4506-bb4c-7d046ddc30a2",
    },
    {
        id: 9,
        favourite: false,
        songName: "Hey Mama",
        artist: "David Guetta",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-62d04.appspot.com/o/images%2Fheymama.jpg?alt=media&token=95dbdc58-ca9c-4fee-83cf-ffb485dded2a",
    },
    {
        id: 10,
        favourite: false,
        songName: "Turkish Folk Battle Song",
        artist: "CVR Toon ",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
        imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/spotify-clone-62d04.appspot.com/o/images%2Fturkish.jpg?alt=media&token=a799e67e-ebce-4d7b-bc82-182e59365ce2",
    },
];

export { Songs };