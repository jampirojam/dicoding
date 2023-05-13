// NORMAL ITERATE
const countDown = start => {
    do {
        console.log(start);
        start -= 1;
    }
    while (start > 0);
};

countDown(10);

// RECURSIVE
const countDowns = start => {
    console.log(start);
    if (start > 0) countDowns(start - 1);
};

countDowns(10);