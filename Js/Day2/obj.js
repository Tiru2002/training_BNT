let data={
    user1:{
        name: "John",
        age: 30,
        occupation: "Software Engineer",
        contact:{
            email: "john@example.com",
            phone: "1234567890",
            address:{
                street: "123 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345",
            }
        }
    },
    user2:{
        name: "John",
        age: 30,
        occupation: "Software Engineer",
        contact:{
            email: "john@example.com",
            phone: "1234567890",
            address:{
                street: "123 Main St",
                city: "Btown",
                state: "CA",
                zip: "12345",
            }
        }
    }
}


Object.keys(data).forEach(key=>{
    
    let user=data[key];
    console.log(user.contact.address.city);
})