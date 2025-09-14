function cancellabel(fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args)
    }, t)

    const cancelFn = () => {
        clearTimeout(timer)
    }

    return cancelFn
}



function great(name) {
    console.log("Hello", name);
}

const cancelFn = cancellabel(great, ["Betech me"], 5000)

setTimeout(cancelFn, 6000)