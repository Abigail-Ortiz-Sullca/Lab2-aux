const emailList = [
    "javascript@gmail.com",
    "abc.com",
    "mydomain.com",
    "randomUser@hotmail.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mail0fPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
];

const validEmails = emailList.filter(email => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email) && email.endsWith('.com');
});

console.log(validEmails);
