setTimeout(() => {
    console.log("i am the  main parent")
    setTimeout(() => {
        console.log("  i am second main parent. i am  depending on main parent ")
        setTimeout(() => {
            console.log("   i am third parent. i am depending on second main parent.")
            setTimeout(() => {
                console.log("     i am fourth parent. i am depending on third parent")
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)