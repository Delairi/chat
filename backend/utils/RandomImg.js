

function RandomImg() {

    const imgs = [
        "https://firebasestorage.googleapis.com/v0/b/extras-ec8cf.appspot.com/o/delairischat%2Fcaballo.png?alt=media&token=e99c745e-5a77-4eee-833e-d3364fd5a9d9",
        "https://firebasestorage.googleapis.com/v0/b/extras-ec8cf.appspot.com/o/delairischat%2Fcastor.png?alt=media&token=16ee3cca-c4c9-4807-a972-341b3f7a2e61",
        "https://firebasestorage.googleapis.com/v0/b/extras-ec8cf.appspot.com/o/delairischat%2Fgorila.png?alt=media&token=6f9b2ba0-1a52-48f1-ad34-4d7644f718d8",
        "https://firebasestorage.googleapis.com/v0/b/extras-ec8cf.appspot.com/o/delairischat%2Fhipopotamo.png?alt=media&token=765d885a-9a13-423b-9223-6913a9e89a7b",
        "https://firebasestorage.googleapis.com/v0/b/extras-ec8cf.appspot.com/o/delairischat%2Fmapache.png?alt=media&token=f24a5f6a-dff7-4808-abe5-70fdbc9e69a4",
        "https://firebasestorage.googleapis.com/v0/b/extras-ec8cf.appspot.com/o/delairischat%2Fpanda.png?alt=media&token=a2eefec3-c1d2-4742-a1f8-0f7994e7711a",
        "https://firebasestorage.googleapis.com/v0/b/extras-ec8cf.appspot.com/o/delairischat%2Frana.png?alt=media&token=912bde48-affd-41ce-be07-1d284b7e9e35",
        "https://firebasestorage.googleapis.com/v0/b/extras-ec8cf.appspot.com/o/delairischat%2Ftigre.png?alt=media&token=f79c38a6-c21f-47a2-9b4f-f61c38904d5b",
        "https://firebasestorage.googleapis.com/v0/b/extras-ec8cf.appspot.com/o/delairischat%2Fzorro.png?alt=media&token=149db390-b633-4d5b-9f06-a3eff88b000a",

    ]

    return imgs[Math.floor(Math.random() * imgs.length)]

}

export default RandomImg