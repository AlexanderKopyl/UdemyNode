<<<<<<< HEAD
setTimeout(()=>{
    console.log('Two seconds passed');
},2000);

const names = ['Andrew','Jes','Jess'];
const shortNames = names.filter((name)=>{
    return name.length <= 4;
});

const geocode = (address,callback) =>{
    setTimeout(()=>{
        const data = {
            latitude:0,
            longtitude: 0
        }

        callback(data)
    },2000)
};

geocode('Philadelphia',(data) =>{
   console.log(data);
});


const add = (a,b,callback) => {

    setTimeout(()=>{
        const sum = a + b;

        callback(sum);
    },2000)

};

add(1,4,(sum)=>{
    console.log(sum);
});
=======
setTimeout(()=>{
    console.log('Two seconds passed');
},2000);

const names = ['Andrew','Jes','Jess'];
const shortNames = names.filter((name)=>{
    return name.length <= 4;
});

const geocode = (address,callback) =>{
    setTimeout(()=>{
        const data = {
            latitude:0,
            longtitude: 0
        }

        callback(data)
    },2000)
};

geocode('Philadelphia',(data) =>{
   console.log(data);
});


const add = (a,b,callback) => {

    setTimeout(()=>{
        const sum = a + b;

        callback(sum);
    },2000)

};

add(1,4,(sum)=>{
    console.log(sum);
});
>>>>>>> d28b830475293a7e34f7a0e4bc56c0b0b106cf33
