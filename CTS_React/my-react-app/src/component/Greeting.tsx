type Greetingprops = {
    username: string
}

const Greeting = ({username}:Greetingprops) =>{
    return <h1>Hello, Props - {username}</h1>

}

export default Greeting;

//{name}:Greetingprops - props - from parent to child